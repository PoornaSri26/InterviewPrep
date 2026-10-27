import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Play, 
  Square, 
  Send, 
  Sparkles, 
  Clock, 
  RotateCcw, 
  Download, 
  Award, 
  AlertCircle,
  Volume2,
  ChevronRight,
  Target,
  FileText
} from 'lucide-react';
import { MockInterviewSession } from '../types';
import { voiceAssistant } from '../services/speech';
import { buildCoachReport, coachDrillCards, deriveScores, reviewAnswers } from '../services/coach';
import confetti from 'canvas-confetti';

interface MockInterviewViewProps {
  onSaveSession: (session: MockInterviewSession) => void;
  mockHistory: MockInterviewSession[];
  /** Optional: persist coach drills as flashcards (wired to the Flashcards module). */
  onAddCoachCards?: (cards: { front: string; back: string }[]) => number;
}

export const MockInterviewView: React.FC<MockInterviewViewProps> = ({
  onSaveSession,
  mockHistory,
  onAddCoachCards
}) => {
  // Setup state
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [role, setRole] = useState('Senior Full-Stack Engineer');
  const [domain, setDomain] = useState('Distributed Systems & Full Stack');
  const [persona, setPersona] = useState('Sarah Jenkins (Staff SWE, Google)');
  const [enableVideo, setEnableVideo] = useState(false);
  const [enableVoice, setEnableVoice] = useState(true);

  // Live session state
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins
  const [isSpeakingAI, setIsSpeakingAI] = useState(false);
  const [isListeningMic, setIsListeningMic] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<{ speaker: 'interviewer' | 'candidate'; text: string; timestamp: string }[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  // Result state
  const [currentResult, setCurrentResult] = useState<MockInterviewSession | null>(null);
  const [coachCardsSaved, setCoachCardsSaved] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);
  // Mirror of `transcript` so the setTimeout callbacks and endInterview never read stale state.
  const transcriptRef = useRef(transcript);

  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  // Curated Interview Questions by Role
  const questionBank = [
    {
      q: `Welcome! Let's get started. Could you give me a 2-minute overview of a recent technical project you spearheaded, focusing on the core architectural hurdles and business impact?`,
      probe: `That's interesting. When you made that architectural choice, what were the primary scalability bottlenecks you anticipated, and what fallback mechanisms were implemented?`
    },
    {
      q: `Let's dive into system design and state management. Suppose we are designing a real-time notification engine servicing 50 million connected web and mobile clients. How would you handle connection persistence, fan-out to followers, and message deduplication?`,
      probe: `Great. What happens if a sudden thundering herd of 5 million requests arrives during a regional outage? How do your load balancers and cache clusters safeguard upstream database replicas?`
    },
    {
      q: `Now a behavioral and technical conflict scenario: Tell me about a time when your team had conflicting opinions on adopting a new technology or refactoring legacy code under a tight deadline. How did you navigate the trade-offs and build consensus?`,
      probe: `In hindsight, is there anything you would have handled differently regarding stakeholder communication or automated test coverage?`
    }
  ];

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  // Timer countdown
  useEffect(() => {
    let timer: any;
    if (sessionActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (sessionActive && timeLeft === 0) {
      endInterview();
    }
    return () => clearInterval(timer);
  }, [sessionActive, timeLeft]);

  // Webcam stream management
  useEffect(() => {
    if (enableVideo && sessionActive) {
      navigator.mediaDevices
        ?.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          mediaStreamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.warn('Camera access denied or unavailable', err);
          setEnableVideo(false);
        });
    } else {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
    }

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [enableVideo, sessionActive]);

  // Format time (MM:SS)
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Start interview
  const startInterview = () => {
    setSessionActive(true);
    setSessionCompleted(false);
    setTimeLeft(900);
    setQuestionIndex(0);
    transcriptRef.current = [];
    setTranscript([]);
    setCoachCardsSaved(null);
    setCurrentResult(null);

    const firstQuestion = questionBank[0].q;
    const initialItem = {
      speaker: 'interviewer' as const,
      text: firstQuestion,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTranscript([initialItem]);

    if (enableVoice) {
      setIsSpeakingAI(true);
      voiceAssistant.speak(firstQuestion, () => {
        setIsSpeakingAI(false);
        startListeningCandidate();
      });
    }
  };

  // Candidate speech recognition
  const startListeningCandidate = () => {
    if (!enableVoice) return;
    if (!voiceAssistant.isSpeechRecognitionSupported()) {
      setMicError('Speech recognition is not supported in this browser. Use Chrome or Edge, or type your answer below.');
      return;
    }
    setMicError(null);
    setIsListeningMic(true);
    const started = voiceAssistant.startListening(
      (text, isFinal) => {
        setCurrentInput(text);
        if (isFinal && text.trim().length > 15) {
          // Keep text in input field for candidate confirmation or auto-submit
        }
      },
      (err) => {
        setIsListeningMic(false);
        setMicError(voiceAssistant.describeRecognitionError(err?.error || 'unknown'));
      },
      () => {
        setIsListeningMic(false);
      }
    );
    if (!started) {
      setIsListeningMic(false);
      setMicError('Could not start speech recognition. Type your answer below or retry.');
    }
  };

  const stopListeningCandidate = () => {
    setIsListeningMic(false);
    voiceAssistant.stopListening();
  };

  // Submit candidate answer
  const submitAnswer = () => {
    if (!currentInput.trim()) return;

    stopListeningCandidate();
    setMicError(null);

    const candidateItem = {
      speaker: 'candidate' as const,
      text: currentInput.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newTranscript = [...transcriptRef.current, candidateItem];
    transcriptRef.current = newTranscript;
    setTranscript(newTranscript);
    setCurrentInput('');

    // Generate interviewer reaction / follow-up
    setTimeout(() => {
      if (questionIndex < questionBank.length - 1) {
        const nextIdx = questionIndex + 1;
        setQuestionIndex(nextIdx);
        const nextQ = questionBank[nextIdx].q;
        const aiItem = {
          speaker: 'interviewer' as const,
          text: nextQ,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        transcriptRef.current = [...newTranscript, aiItem];
        setTranscript(transcriptRef.current);

        if (enableVoice) {
          setIsSpeakingAI(true);
          voiceAssistant.speak(nextQ, () => {
            setIsSpeakingAI(false);
            startListeningCandidate();
          });
        }
      } else {
        // Wrap up
        const closing = `Thank you! That completes our mock interview session. I am now synthesizing your performance across technical depth, system thinking, communication, and problem decomposition. Generating your rubric scorecard now.`;
        const closingItem = {
          speaker: 'interviewer' as const,
          text: closing,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        const finalTranscript = [...newTranscript, closingItem];
        transcriptRef.current = finalTranscript;
        setTranscript(finalTranscript);

        if (enableVoice) {
          setIsSpeakingAI(true);
          voiceAssistant.speak(closing, () => {
            setIsSpeakingAI(false);
            endInterview(finalTranscript);
          });
        } else {
          endInterview(finalTranscript);
        }
      }
    }, 600);
  };

  // Conclude interview: every score is derived from what was actually said.
  const endInterview = (finalTranscript?: { speaker: 'interviewer' | 'candidate'; text: string; timestamp: string }[]) => {
    setSessionActive(false);
    setSessionCompleted(true);
    stopListeningCandidate();
    voiceAssistant.stopSpeaking();

    const sessionTranscript = finalTranscript ?? transcriptRef.current;

    const provisional: MockInterviewSession = {
      id: 'mock-' + Date.now(),
      timestamp: new Date().toISOString(),
      role,
      domain,
      persona,
      durationMinutes: Math.round((900 - timeLeft) / 60) || 1,
      questionsAnswered: sessionTranscript.filter((turn) => turn.speaker === 'candidate').length,
      scores: {
        technicalAccuracy: 0,
        systemThinking: 0,
        communication: 0,
        problemSolving: 0,
        behavioralFit: 0,
        overall: 0
      },
      transcript: sessionTranscript,
      feedback: { summary: '', strengths: [], improvements: [], suggestedTopics: [] }
    };

    const scores = deriveScores(provisional);
    const report = buildCoachReport({ ...provisional, scores });

    const sessionData: MockInterviewSession = {
      ...provisional,
      scores,
      feedback: {
        summary: report.headline,
        strengths: report.strengths,
        improvements: report.gaps.length > 0 ? report.gaps : [report.nextAction],
        suggestedTopics: report.drills.map((drill) => drill.topic)
      }
    };

    setCurrentResult(sessionData);
    onSaveSession(sessionData);

    if (scores.overall >= 80) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Export transcript as Markdown report
  const downloadReport = () => {
    if (!currentResult) return;
    const md = `# Interview Evaluation Report: ${currentResult.role}
**Date:** ${new Date(currentResult.timestamp).toLocaleDateString()}
**Interviewer Persona:** ${currentResult.persona}
**Overall Score:** ${currentResult.scores.overall}/100

## Competency Breakdown
- Technical Accuracy: ${currentResult.scores.technicalAccuracy}%
- System Thinking: ${currentResult.scores.systemThinking}%
- Verbal Communication: ${currentResult.scores.communication}%
- Problem Solving: ${currentResult.scores.problemSolving}%
- Behavioral Fit: ${currentResult.scores.behavioralFit}%

## Executive Summary
${currentResult.feedback.summary}

### Key Strengths
${currentResult.feedback.strengths.map((s) => `- ${s}`).join('\n')}

### Areas for Remediation
${currentResult.feedback.improvements.map((i) => `- ${i}`).join('\n')}

## Coach Analysis
${(() => {
  const report = buildCoachReport(currentResult);
  return `**Coach verdict:** ${report.headline}

- Answer depth: ${report.metrics.avgAnswerWords} words/answer
- STAR coverage: ${report.metrics.starCoverage}%
- Filler rate: ${report.metrics.fillerRate.toFixed(1)}%
- Structure score: ${report.metrics.structureScore}/100

### Drills for the next rep
${report.drills.map((d) => `- **${d.title}** — ${d.why} _${d.action}_`).join('\n')}

### Follow-up questions to rehearse
${report.followUps.map((q) => `- ${q}`).join('\n')}`;
})()}

## Full Interview Transcript
${currentResult.transcript.map((t) => `**[${t.timestamp}] ${t.speaker.toUpperCase()}:** ${t.text}`).join('\n\n')}
`;

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mock-Interview-Report-${Date.now()}.md`;
    a.click();
  };

  const coachReport = currentResult ? buildCoachReport(currentResult) : null;
  const answerReviews = currentResult ? reviewAnswers(currentResult) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge badge-primary">
              <Sparkles size={12} />
              AI Voice Simulation
            </span>
            <span className="badge badge-cyan">Web Speech API</span>
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>AI Mock Interview Studio</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Practice real-time technical & behavioral rounds with speech recognition, audio playback, camera mirror, and rubric evaluations.
          </p>
        </div>

        {sessionActive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-full)', color: '#fb7185', fontWeight: 700 }}>
              <Clock size={16} />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button className="btn-secondary" onClick={() => endInterview()} style={{ borderColor: 'rgba(244, 63, 94, 0.4)', color: '#fb7185' }}>
              <Square size={14} />
              End & Grade
            </button>
          </div>
        )}
      </div>

      {/* Screen 1: Configuration Setup (When not active & not completed) */}
      {!sessionActive && !sessionCompleted && (
        <div className="grid-2">
          {/* Left: Settings */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--accent-primary)" />
              Interview Parameters
            </h3>

            {/* Target Role */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Target Engineering Role
              </label>
              <select
                className="search-input"
                style={{ borderRadius: 'var(--radius-md)', padding: '0.65rem 1rem' }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Senior Full-Stack Engineer">Senior Full-Stack Engineer (React, Node, Cloud)</option>
                <option value="Frontend Specialist">Frontend Specialist (Performance, Architecture, Design Systems)</option>
                <option value="Backend & Distributed Systems">Backend & Distributed Systems (Go, Java, Microservices)</option>
                <option value="Machine Learning / AI Engineer">Machine Learning / AI Engineer (PyTorch, LLMs, MLOps)</option>
                <option value="Engineering Manager / Lead">Engineering Manager / Technical Lead</option>
              </select>
            </div>

            {/* AI Persona */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                AI Interviewer Persona
              </label>
              <select
                className="search-input"
                style={{ borderRadius: 'var(--radius-md)', padding: '0.65rem 1rem' }}
                value={persona}
                onChange={(e) => setPersona(e.target.value)}
              >
                <option value="Sarah Jenkins (Staff SWE, Google)">Sarah Jenkins (Staff SWE, Google) — Deep probing & rigorous scalability</option>
                <option value="Marcus Vance (CTO, Series-B Startup)">Marcus Vance (CTO, High-Growth Startup) — Speed, pragmatic trade-offs</option>
                <option value="Elena Rostova (Principal Architect, Meta)">Elena Rostova (Principal Architect, Meta) — High concurrency & systems</option>
                <option value="David Miller (Director, Behavioral)">David Miller (Director, Behavioral & Leadership) — STAR & culture fit</option>
              </select>
            </div>

            {/* Media Toggles */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn-secondary ${enableVoice ? 'btn-primary' : ''}`}
                style={{ flex: 1, padding: '0.65rem' }}
                onClick={() => setEnableVoice(!enableVoice)}
              >
                <Volume2 size={16} />
                Voice Mode: {enableVoice ? 'ON' : 'OFF'}
              </button>
              <button
                type="button"
                className={`btn-secondary ${enableVideo ? 'btn-primary' : ''}`}
                style={{ flex: 1, padding: '0.65rem' }}
                onClick={() => setEnableVideo(!enableVideo)}
              >
                {enableVideo ? <Video size={16} /> : <VideoOff size={16} />}
                Camera Mirror: {enableVideo ? 'ON' : 'OFF'}
              </button>
            </div>

            <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#c7d2fe', display: 'flex', gap: '0.5rem' }}>
              <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Zero External Setup Required:</strong> This interview suite leverages the native browser Web Speech API for voice synthesis and microphone input with zero API key dependencies.
              </div>
            </div>

            <button className="btn-primary" style={{ padding: '0.9rem', fontSize: '1rem' }} onClick={startInterview}>
              <Play size={18} />
              Launch Mock Interview
            </button>
          </div>

          {/* Right: Camera / Persona Preview */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
            <div className="webcam-box" style={{ maxWidth: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {enableVideo ? (
                <video ref={videoRef} autoPlay playsInline muted className="webcam-video" />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)' }}>
                  <VideoOff size={40} />
                  <span style={{ fontSize: '0.85rem' }}>Camera Preview Disabled</span>
                  <span style={{ fontSize: '0.75rem' }}>Click "Camera Mirror: ON" to test lighting & framing</span>
                </div>
              )}
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem' }}>{persona.split('—')[0]}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Targeting: {role}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              <span>• 3 Progressive Rounds</span>
              <span>• Live Rubric Scoring</span>
              <span>• Instant Feedback</span>
            </div>
          </div>
        </div>
      )}

      {/* Screen 2: Active Interview Room */}
      {sessionActive && (
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Left: Video / Persona & Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* AI Interviewer Card */}
            <div className="glass-card" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span className="badge badge-primary">Round {questionIndex + 1} / 3</span>
              </div>

              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}>
                <Sparkles size={36} />
              </div>

              <h3 style={{ fontSize: '1.2rem' }}>{persona.split('(')[0]}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>AI Interviewer</p>

              {/* Animated Waveform when speaking */}
              <div className="audio-wave-container" style={{ margin: '0.5rem auto' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                  <div
                    key={bar}
                    className={`wave-bar ${isSpeakingAI ? 'animating' : ''}`}
                    style={{ background: isSpeakingAI ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.15)' }}
                  />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                {isSpeakingAI
                  ? 'Interviewer is speaking...'
                  : micError
                  ? 'Voice input paused — type your answer below'
                  : isListeningMic
                  ? 'Listening to your response...'
                  : 'Listening to your response...'}
              </span>
            </div>

            {/* Candidate Mirror / Mic Indicator */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Candidate Feed</span>
                <span className={`badge ${isListeningMic ? 'badge-easy' : 'badge-primary'}`}>
                  {isListeningMic ? 'Mic Active' : 'Mic Idle'}
                </span>
              </div>

              {enableVideo && (
                <div className="webcam-box" style={{ marginBottom: '0.75rem' }}>
                  <video ref={videoRef} autoPlay playsInline muted className="webcam-video" />
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  className={`btn-secondary ${isListeningMic ? 'btn-success' : ''}`}
                  style={{ flex: 1, padding: '0.6rem' }}
                  onClick={isListeningMic ? stopListeningCandidate : startListeningCandidate}
                >
                  {isListeningMic ? <Mic size={16} /> : <MicOff size={16} />}
                  {isListeningMic ? 'Listening (Click to Stop)' : 'Start Speaking'}
                </button>
              </div>

              {micError && (
                <div
                  role="alert"
                  style={{
                    marginTop: '0.65rem',
                    background: 'rgba(244, 63, 94, 0.1)',
                    border: '1px solid rgba(244, 63, 94, 0.35)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 0.75rem',
                    fontSize: '0.78rem',
                    color: '#fda4af',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{micError}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Transcript Stream & Answer Input */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '620px' }}>
            <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '1rem' }}>Live Session Transcript</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                Speak using the microphone or edit your thoughts below.
              </p>
            </div>

            {/* Transcript scroll area */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
              {transcript.map((item, idx) => {
                const isAI = item.speaker === 'interviewer';
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isAI ? 'flex-start' : 'flex-end'
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
                      {isAI ? persona.split('(')[0] : 'You'} • {item.timestamp}
                    </div>
                    <div
                      style={{
                        background: isAI ? 'var(--bg-surface-elevated)' : 'linear-gradient(135deg, #4f46e5, #6366f1)',
                        color: '#fff',
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-lg)',
                        borderTopLeftRadius: isAI ? '0' : 'var(--radius-lg)',
                        borderTopRightRadius: isAI ? 'var(--radius-lg)' : '0',
                        maxWidth: '85%',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        border: isAI ? '1px solid var(--border-subtle)' : 'none'
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                );
              })}
              <div ref={transcriptEndRef} />
            </div>

            {/* Input and Send */}
            <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.5rem' }}>
              <textarea
                className="search-input"
                style={{
                  borderRadius: 'var(--radius-md)',
                  height: '70px',
                  resize: 'none',
                  padding: '0.6rem 0.8rem',
                  fontSize: '0.88rem'
                }}
                placeholder="Type or speak your answer here (e.g. In my previous role, I designed a Redis-backed caching layer...)"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    submitAnswer();
                  }
                }}
              />
              <button
                className="btn-primary"
                style={{ padding: '0 1.25rem', height: '70px' }}
                onClick={submitAnswer}
                disabled={!currentInput.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen 3: Post-Interview Rubric & Scorecard */}
      {sessionCompleted && currentResult && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Top Banner */}
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.15))', borderColor: 'rgba(16, 185, 129, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 900, boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)' }}>
                {currentResult.scores.overall}
              </div>
              <div>
                <span className="badge badge-easy">Strong Hire Recommendation</span>
                <h2 style={{ fontSize: '1.6rem', marginTop: '0.25rem' }}>
                  Mock Interview Evaluation Complete
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Role: {currentResult.role} • Interviewer: {currentResult.persona}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-primary" onClick={downloadReport}>
                <Download size={16} />
                Download Report (.md)
              </button>
              <button className="btn-secondary" onClick={() => { setSessionCompleted(false); setSessionActive(false); }}>
                <RotateCcw size={16} />
                New Interview
              </button>
            </div>
          </div>

          {/* 5-Competency Rubric Cards */}
          <div className="grid-3">
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Technical Accuracy</span>
                <strong style={{ color: '#a5b4fc' }}>{currentResult.scores.technicalAccuracy}%</strong>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}>
                <div style={{ width: `${currentResult.scores.technicalAccuracy}%`, height: '100%', background: '#6366f1', borderRadius: '10px' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                Evaluates correctness of algorithms, complexity analysis, and edge cases.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>System Thinking</span>
                <strong style={{ color: '#67e8f9' }}>{currentResult.scores.systemThinking}%</strong>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}>
                <div style={{ width: `${currentResult.scores.systemThinking}%`, height: '100%', background: '#06b6d4', borderRadius: '10px' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                Evaluates architecture, bottleneck mitigation, caching, and database schemas.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Verbal Communication</span>
                <strong style={{ color: '#34d399' }}>{currentResult.scores.communication}%</strong>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}>
                <div style={{ width: `${currentResult.scores.communication}%`, height: '100%', background: '#10b981', borderRadius: '10px' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                Clarity of structure, thinking out loud, and active listening.
              </p>
            </div>
          </div>

          {/* Detailed Strengths & Growth */}
          <div className="grid-2">
            <div className="glass-card" style={{ borderColor: 'rgba(16, 185, 129, 0.25)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Award size={18} />
                Key Identified Strengths
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                {currentResult.feedback.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card" style={{ borderColor: 'rgba(245, 158, 11, 0.25)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <AlertCircle size={18} />
                Actionable Remediation Points
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                {currentResult.feedback.improvements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Coach — metrics, drills and rehearsal plan */}
          {coachReport && (
            <div className="glass-card" style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="badge badge-cyan">
                      <Sparkles size={12} />
                      AI Coach
                    </span>
                    <span className="badge badge-primary">Structure {coachReport.metrics.structureScore}/100</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>Next-rep coaching plan</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginTop: '0.35rem', maxWidth: '720px' }}>
                    {coachReport.headline}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{coachReport.summary}</p>
                </div>
                {onAddCoachCards && (
                  <button
                    className="btn-primary"
                    style={{ padding: '0.55rem 1rem' }}
                    onClick={() => setCoachCardsSaved(onAddCoachCards(coachDrillCards(coachReport.drills)))}
                  >
                    <Target size={15} />
                    Add drills to Flashcards
                  </button>
                )}
              </div>

              {coachCardsSaved !== null && (
                <p style={{ fontSize: '0.8rem', color: '#34d399', marginBottom: '0.75rem' }}>
                  {coachCardsSaved > 0
                    ? `${coachCardsSaved} drill card${coachCardsSaved === 1 ? '' : 's'} added to the “Coach Drills” deck in Flashcards.`
                    : 'Those drills are already in your Coach Drills deck.'}
                </p>
              )}

              <div className="grid-3" style={{ marginBottom: '1.25rem' }}>
                {[
                  { label: 'Answer depth', value: `${coachReport.metrics.avgAnswerWords}w`, hint: 'target 90–150 words' },
                  { label: 'STAR coverage', value: `${coachReport.metrics.starCoverage}%`, hint: 'Situation, Task, Action, Result' },
                  { label: 'Filler rate', value: `${coachReport.metrics.fillerRate.toFixed(1)}%`, hint: `${coachReport.metrics.fillerCount} filler words` },
                  { label: 'Quantified answers', value: `${coachReport.metrics.quantifiedAnswers}/${Math.max(coachReport.metrics.answerCount, 1)}`, hint: 'metrics earn credibility' },
                  { label: 'Speaking pace', value: `${coachReport.metrics.wordsPerMinute} wpm`, hint: 'aim for 120–160 wpm' },
                  { label: 'Track vocabulary', value: `${coachReport.metrics.keywordHits.length}/${coachReport.metrics.keywordHits.length + coachReport.metrics.keywordMisses.length}`, hint: coachReport.metrics.keywordMisses.slice(0, 3).join(', ') || 'all covered' }
                ].map((stat) => (
                  <div key={stat.label} style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{stat.label}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '0.15rem' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{stat.hint}</div>
                  </div>
                ))}
              </div>

              <div className="grid-2">
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AlertCircle size={15} color="#fbbf24" />
                    What limits the score
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.1rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {coachReport.gaps.length > 0 ? coachReport.gaps.map((gap, i) => <li key={i}>{gap}</li>) : <li>No structural gaps detected in this session.</li>}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ChevronRight size={15} color="#67e8f9" />
                    Follow-ups to rehearse
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.1rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {coachReport.followUps.map((question, i) => <li key={i}>{question}</li>)}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.65rem' }}>Drills for the next rep</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {coachReport.drills.map((drill, index) => (
                    <div key={drill.id} style={{ display: 'flex', gap: '0.75rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                        {index + 1}
                      </span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                          <strong style={{ fontSize: '0.86rem' }}>{drill.title}</strong>
                          <span className="badge badge-primary" style={{ fontSize: '0.62rem' }}>{drill.topic}</span>
                        </div>
                        <p style={{ fontSize: '0.79rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{drill.why}</p>
                        <p style={{ fontSize: '0.79rem', color: '#a5b4fc', marginTop: '0.2rem' }}>{drill.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Answer-by-answer review */}
          {answerReviews.length > 0 && (
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Answer-by-answer review</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Every answer scored on structure, depth, impact and clarity. Open one to see the exact fix.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {answerReviews.map((review) => (
                  <details
                    key={review.index}
                    style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}
                  >
                    <summary style={{ cursor: 'pointer', padding: '0.7rem 0.85rem', listStyle: 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <strong style={{ fontSize: '0.85rem', color: '#fff' }}>
                          Q{review.index}: {review.question.length > 90 ? `${review.question.slice(0, 90)}…` : review.question}
                        </strong>
                        <span style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                          <span className="badge badge-primary" style={{ fontSize: '0.62rem' }}>Structure {review.scores.structure}</span>
                          <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>Depth {review.scores.depth}</span>
                          <span className="badge badge-medium" style={{ fontSize: '0.62rem' }}>Impact {review.scores.impact}</span>
                          <span className="badge badge-easy" style={{ fontSize: '0.62rem' }}>Clarity {review.scores.clarity}</span>
                        </span>
                      </div>
                    </summary>

                    <div style={{ padding: '0 0.9rem 0.9rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <p style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-dim)' }}>Answer: </strong>
                        {review.answer}
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingLeft: '1.1rem', marginBottom: '0.5rem' }}>
                        {review.notes.map((note, i) => <li key={i}>{note}</li>)}
                      </ul>
                      <p style={{ color: '#a5b4fc' }}>
                        <strong>Fix: </strong>
                        {review.upgrade}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
