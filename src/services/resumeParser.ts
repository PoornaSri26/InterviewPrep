// Resume Parser Service - Extracts key information from resume
// Inspired by Resumizer and other AI interview platforms

export interface ResumeData {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
  technical_skills: string[];
  soft_skills: string[];
  tools_and_frameworks: string[];
  experience: {
    company: string;
    role: string;
    duration: string;
    start_date?: string;
    end_date?: string;
    location?: string;
    description: string[];
    bullet_points: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    graduation_year?: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  certifications?: string[];
  summary?: string;
  rawText: string;
}

export interface InterviewQuestion {
  id: number;
  question_type: 'behavioral' | 'technical' | 'gap_focused' | 'project' | 'intro';
  question: string;
  context_or_reason?: string;
  star_guide?: string;
  sample_answer?: string;
  based_on?: string;
}

export class ResumeParser {
  static parseResume(text: string): ResumeData {
    const normalizedText = text.toLowerCase();
    const originalText = text;
    
    // Extract email
    const emailMatch = originalText.match(/[\w.-]+@[\w.-]+\.\w+/);
    const email = emailMatch ? emailMatch[0] : undefined;
    
    // Extract phone
    const phoneMatch = originalText.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    const phone = phoneMatch ? phoneMatch[0] : undefined;
    
    // Extract LinkedIn
    const linkedinMatch = originalText.match(/linkedin\.com\/in\/[\w-]+/i);
    const linkedin = linkedinMatch ? linkedinMatch[0] : undefined;
    
    // Extract GitHub
    const githubMatch = originalText.match(/github\.com\/[\w-]+/i);
    const github = githubMatch ? githubMatch[0] : undefined;
    
    // Extract name (usually first line or near top)
    const lines = originalText.split('\n').filter(l => l.trim());
    const name = lines[0] && lines[0].length < 50 && !lines[0].includes('@') && !lines[0].match(/\d{3}/) 
      ? lines[0].trim() 
      : undefined;
    
    // Common tech skills to look for
    const skillKeywords = [
      'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'golang', 'rust', 'php', 'ruby', 'scala', 'kotlin',
      'react', 'angular', 'vue', 'nextjs', 'next.js', 'svelte', 'node', 'node.js', 'express', 'django', 'flask', 'spring', 'spring boot',
      'sql', 'mysql', 'postgresql', 'mongodb', 'redis', 'sqlite', 'dynamodb', 'cassandra',
      'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'jenkins', 'git', 'github', 'gitlab',
      'graphql', 'rest', 'api', 'rest api', 'html', 'css', 'sass', 'tailwind', 'bootstrap',
      'machine learning', 'ai', 'tensorflow', 'pytorch', 'scikit-learn', 'pandas', 'numpy',
      'data structures', 'algorithms', 'system design', 'microservices', 'agile', 'scrum', 'jira'
    ];
    
    const foundSkills: string[] = [];
    for (const skill of skillKeywords) {
      if (normalizedText.includes(skill)) {
        const formatted = skill === 'node.js' ? 'Node.js' : 
                          skill === 'next.js' ? 'Next.js' :
                          skill === 'spring boot' ? 'Spring Boot' :
                          skill === 'golang' ? 'Go' :
                          skill === 'rest api' ? 'REST API' :
                          skill.charAt(0).toUpperCase() + skill.slice(1);
        if (!foundSkills.includes(formatted)) {
          foundSkills.push(formatted);
        }
      }
    }
    
    // Extract experience
    const experience: ResumeData['experience'] = [];
    const expRegex = /(experience|work history|employment|professional experience)(.*?)(education|projects|skills|certifications|$)/is;
    const expMatch = originalText.match(expRegex);
    if (expMatch) {
      const expSection = expMatch[2];
      const expLines = expSection.split('\n').filter(l => l.trim().length > 5);
      for (let i = 0; i < expLines.length; i++) {
        const line = expLines[i].trim();
        // Look for company/role patterns (contains common job titles or years)
        if (line.length < 80 && (line.match(/\b(engineer|developer|manager|analyst|consultant|intern)\b/i) || line.match(/\d{4}/))) {
          const nextLine = expLines[i + 1] ? expLines[i + 1].trim() : '';
          const descLines = [];
          for (let j = i + 2; j < expLines.length && expLines[j].trim().startsWith('-') || expLines[j].trim().startsWith('•'); j++) {
            descLines.push(expLines[j].trim().replace(/^[-•]\s*/, ''));
          }
          experience.push({
            company: nextLine.includes('@') || nextLine.length > 60 ? line : (nextLine || line),
            role: nextLine.includes('@') || nextLine.length > 60 ? nextLine : line,
            duration: line.match(/\d{4}/) ? line : (expLines[i + 2] && expLines[i + 2].match(/\d{4}/) ? expLines[i + 2].trim() : 'N/A'),
            description: descLines,
            bullet_points: descLines
          });
        }
      }
    }
    
    // Extract projects
    const projects: ResumeData['projects'] = [];
    const projRegex = /(projects|personal projects|academic projects)(.*?)(experience|education|skills|certifications|$)/is;
    const projMatch = originalText.match(projRegex);
    if (projMatch) {
      const projSection = projMatch[2];
      const projLines = projSection.split('\n').filter(l => l.trim().length > 5);
      for (let i = 0; i < projLines.length; i++) {
        const line = projLines[i].trim();
        if (line.length > 10 && line.length < 100 && !line.startsWith('-') && !line.startsWith('•')) {
          const projectSkills = skillKeywords
            .filter(s => line.toLowerCase().includes(s))
            .map(s => s === 'node.js' ? 'Node.js' : s === 'next.js' ? 'Next.js' : s.charAt(0).toUpperCase() + s.slice(1))
            .filter((v, i, arr) => arr.indexOf(v) === i);
          projects.push({
            name: line.split(/[-–|]/)[0].trim(),
            description: [projLines[i + 1] ? projLines[i + 1].trim().replace(/^[-•]\s*/, '') : line],
            technologies: projectSkills
          });
        }
      }
    }
    
    // Extract education
    const education: ResumeData['education'] = [];
    const eduRegex = /(education|academic|qualification)(.*?)(experience|projects|skills|certifications|$)/is;
    const eduMatch = originalText.match(eduRegex);
    if (eduMatch) {
      const eduSection = eduMatch[2];
      const eduLines = eduSection.split('\n').filter(l => l.trim().length > 3);
      for (let i = 0; i < eduLines.length && education.length < 3; i++) {
        const line = eduLines[i].trim();
        if (line.match(/\b(bachelor|master|phd|b\.?tech|m\.?tech|b\.?e|m\.?e|degree)\b/i) || line.match(/\d{4}/)) {
          education.push({
            degree: line,
            institution: eduLines[i + 1] || '',
            year: eduLines[i + 2] && eduLines[i + 2].match(/\d{4}/) ? eduLines[i + 2].match(/\d{4}/)![0] : 
                  line.match(/\d{4}/) ? line.match(/\d{4}/)![0] : '',
            graduation_year: eduLines[i + 2] && eduLines[i + 2].match(/\d{4}/) ? eduLines[i + 2].match(/\d{4}/)![0] : undefined
          });
        }
      }
    }
    
    // Categorize skills
    const technical_skills = foundSkills.filter(s => 
      !['Communication', 'Team Collaboration', 'Problem Solving', 'Leadership', 'Agile', 'Scrum'].includes(s)
    );
    const soft_skills = ['Communication', 'Team Collaboration', 'Problem Solving', 'Leadership', 'Time Management']
      .filter(s => normalizedText.includes(s.toLowerCase()));
    
    return {
      name,
      email,
      phone,
      linkedin,
      github,
      skills: [...new Set(foundSkills)],
      technical_skills: [...new Set(technical_skills)],
      soft_skills: [...new Set(soft_skills)],
      tools_and_frameworks: foundSkills.filter(s => ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Jenkins', 'VS Code'].includes(s)),
      experience,
      education,
      projects,
      rawText: originalText
    };
  }
  
  static generatePersonalizedQuestions(resume: ResumeData, role: string, count: number = 6): InterviewQuestion[] {
    const questions: InterviewQuestion[] = [];
    let id = 1;
    
    // Intro question
    questions.push({
      id: id++,
      question_type: 'intro',
      question: `Tell me about yourself and walk me through your background, especially as it relates to the ${role} position.`,
      context_or_reason: 'Opens the interview to understand the candidate\'s narrative',
      star_guide: 'Keep it concise (1-2 minutes): present, past relevant experience, why this role'
    });
    
    // Project-based questions
    if (resume.projects.length > 0) {
      const project = resume.projects[0];
      questions.push({
        id: id++,
        question_type: 'project',
        question: `Tell me more about your ${project.name} project. What was the biggest technical challenge and how did you solve it?`,
        context_or_reason: `Based on project: ${project.name}`,
        based_on: project.name,
        star_guide: 'Situation: context, Task: your goal, Action: technical approach, Result: outcome/metrics',
        sample_answer: `I built ${project.name} using ${project.technologies.join(', ')}. The main challenge was... I solved it by implementing... This resulted in...`
      });
    }
    
    // Technical questions based on skills
    if (resume.technical_skills.includes('React') || resume.technical_skills.includes('JavaScript')) {
      questions.push({
        id: id++,
        question_type: 'technical',
        question: 'Explain React\'s reconciliation algorithm and Virtual DOM. When would you use useMemo vs useCallback?',
        context_or_reason: 'Core frontend concepts',
        star_guide: 'Explain concepts clearly with examples from your experience'
      });
    }
    
    if (resume.technical_skills.includes('Node.js') || resume.technical_skills.includes('Python')) {
      questions.push({
        id: id++,
        question_type: 'technical',
        question: 'How would you design a RESTful API? Discuss authentication, rate limiting, and error handling.',
        context_or_reason: 'Backend/API design fundamentals',
        star_guide: 'Cover design principles, security, scalability, and error handling'
      });
    }
    
    if (resume.technical_skills.includes('System Design') || resume.skills.some(s => s.includes('Microservice'))) {
      questions.push({
        id: id++,
        question_type: 'technical',
        question: 'Design a URL shortener service like bit.ly. Consider scalability, availability, and database design.',
        context_or_reason: 'System design assessment',
        star_guide: 'Cover requirements, capacity estimation, API design, data model, architecture diagram, trade-offs'
      });
    }
    
    // Behavioral questions
    questions.push({
      id: id++,
      question_type: 'behavioral',
      question: 'Tell me about a time when you faced a conflict within your team. How did you handle it?',
      context_or_reason: 'Teamwork and conflict resolution',
      star_guide: 'Use STAR method: Situation, Task, Action, Result with specific details'
    });
    
    questions.push({
      id: id++,
      question_type: 'behavioral',
      question: 'Describe a situation where you had to learn a new technology quickly to meet a deadline. How did you approach it?',
      context_or_reason: 'Adaptability and learning agility',
      star_guide: 'Focus on learning strategy, timeline, and successful delivery'
    });
    
    // Gap-focused questions
    if (resume.skills.length < 5) {
      questions.push({
        id: id++,
        question_type: 'gap_focused',
        question: 'Are there any areas in this role\'s requirements where you feel you need to upskill? How would you approach that?',
        context_or_reason: 'Growth mindset and self-awareness',
        star_guide: 'Be honest, show plan for improvement'
      });
    }
    
    // Role-specific question
    questions.push({
      id: id++,
      question_type: 'technical',
      question: `Why are you interested in this ${role} role, and how does your background make you a good fit?`,
      context_or_reason: 'Motivation and fit assessment',
      star_guide: 'Connect your experience to the role requirements'
    });
    
    // Shuffle and return requested count
    const shuffled = questions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}
