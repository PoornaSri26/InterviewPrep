// Browser Speech Synthesis and Speech Recognition Service

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export class VoiceAssistant {
  private recognition: SpeechRecognitionInstance | null = null;
  private isListening = false;
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  // Retry + watchdog state
  private retryCount = 0;
  private retryTimer: ReturnType<typeof setTimeout> | null = null;
  private keepAliveTimer: ReturnType<typeof setInterval> | null = null;
  private watchdogTimer: ReturnType<typeof setTimeout> | null = null;
  private pendingHandlers: {
    onResult: (transcript: string, isFinal: boolean) => void;
    onError?: (err: any) => void;
    onEnd?: () => void;
  } | null = null;

  private static readonly MAX_RETRIES = 2;
  private static readonly RETRYABLE = ['network', 'audio-capture'];

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRec) {
        this.recognition = new SpeechRec();
        if (this.recognition) {
          this.recognition.continuous = true;
          this.recognition.interimResults = true;
          this.recognition.lang = 'en-US';
        }
      }
      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
      }
    }
  }

  public isSpeechRecognitionSupported(): boolean {
    return !!this.recognition;
  }

  public isSpeechSynthesisSupported(): boolean {
    return !!this.synth;
  }

  public isMicListening(): boolean {
    return this.isListening;
  }

  /** Human-readable message for a Web Speech API error code. */
  public describeRecognitionError(code: string): string {
    switch (code) {
      case 'network':
        return 'Voice input could not reach the speech service (network). Check your internet connection and retry — or type your answer below.';
      case 'not-allowed':
      case 'service-not-allowed':
        return 'Microphone permission was denied. Allow microphone access for this site, then retry — or type your answer below.';
      case 'audio-capture':
        return 'No microphone was found. Connect a mic and retry — or type your answer below.';
      case 'no-speech':
        return 'No speech was detected. Click Start Speaking and try again — or type your answer below.';
      case 'aborted':
        return 'Listening was cancelled. Click Start Speaking to try again.';
      default:
        return `Speech recognition failed (${code}). Type your answer below or retry.`;
    }
  }

  public startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: any) => void,
    onEnd?: () => void
  ): boolean {
    if (!this.recognition) return false;
    // A recognition session (or a pending retry) is already running
    if (this.isListening || this.retryTimer) return true;

    this.pendingHandlers = { onResult, onError, onEnd };
    this.retryCount = 0;
    return this.activateRecognition();
  }

  /** Starts (or restarts) the underlying recognition session using the stored handlers. */
  private activateRecognition(): boolean {
    if (!this.recognition || !this.pendingHandlers) return false;
    const { onResult, onError, onEnd } = this.pendingHandlers;
    try {
      this.recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        this.retryCount = 0; // success — reset the retry budget
        onResult(final || interim, !!final);
      };

      this.recognition.onerror = (event: any) => {
        const code = event?.error || 'unknown';
        // Transient failures (speech service unreachable, mic busy): auto-retry
        // quietly up to MAX_RETRIES before surfacing the error to the caller.
        const retryable = VoiceAssistant.RETRYABLE.includes(code) && this.retryCount < VoiceAssistant.MAX_RETRIES;
        if (retryable) {
          this.retryCount++;
          console.warn(`Speech recognition error: ${code} (retry ${this.retryCount}/${VoiceAssistant.MAX_RETRIES})`);
          this.isListening = false;
          this.retryTimer = setTimeout(() => {
            this.retryTimer = null;
            if (this.pendingHandlers) this.activateRecognition();
          }, 700 * this.retryCount);
          return;
        }
        console.warn('Speech recognition error:', code);
        if (onError) onError(event);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        // If a retry is pending, suppress onEnd — the session is about to restart.
        if (this.retryTimer) return;
        if (onEnd) onEnd();
      };

      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (e) {
      console.error('Failed to start speech recognition', e);
      if (onError) onError({ error: 'start-failed' });
      return false;
    }
  }

  public stopListening(): void {
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    this.pendingHandlers = null;
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  public speak(text: string, onEnd?: () => void): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    try {
      this.synth.cancel(); // Stop any ongoing speech
      this.clearSpeechWatchdogs();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Pick natural sounding voice if available (voices may load async)
      const voices = this.synth.getVoices();
      const preferred = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferred) {
        utterance.voice = preferred;
      }

      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        this.clearSpeechWatchdogs();
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onend = finish;
      utterance.onerror = finish;

      // Chrome keep-alive: long utterances get silently paused (and onend never
      // fires) — nudge resume() every 8s while speaking.
      this.keepAliveTimer = setInterval(() => {
        if (this.synth?.speaking && this.synth.paused) this.synth.resume();
      }, 8000);

      // Safety watchdog: if neither onend nor onerror arrives (a known Chrome
      // failure mode), unblock the interview flow anyway.
      const expectedMs = Math.min(60000, 4000 + text.length * 90);
      this.watchdogTimer = setTimeout(finish, expectedMs);

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis failed', e);
      this.clearSpeechWatchdogs();
      if (onEnd) onEnd();
    }
  }

  private clearSpeechWatchdogs(): void {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  public stopSpeaking(): void {
    this.clearSpeechWatchdogs();
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }
}

export const voiceAssistant = new VoiceAssistant();
