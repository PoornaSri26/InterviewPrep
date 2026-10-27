import { StarStory } from '../types';

export const initialStarStories: StarStory[] = [
  {
    id: 'star-1',
    title: 'P0 Production Database Outage Resolution',
    category: 'Failure',
    situation: 'During a Black Friday traffic surge, our primary PostgreSQL replica experienced 100% CPU lock, causing checkout API latency to spike from 120ms to over 8 seconds.',
    task: 'As the on-call engineer, I had to immediately stabilize checkout traffic, mitigate customer order drop-offs, and diagnose the root cause without data loss.',
    action: '1. Rerouted read-heavy inventory queries to an ephemeral read-replica cluster. 2. Identified an unindexed query introduced in the latest microservice release causing full-table scans. 3. Executed an in-place concurrent index creation (`CREATE INDEX CONCURRENTLY`). 4. Implemented query rate-limiting and circuit breaker fallback in Envoy proxy.',
    result: 'Reduced checkout API latency back to 95ms within 18 minutes. Prevented an estimated $240,000 in lost GMV during peak sales hour.',
    metrics: '18 min recovery, P99 latency dropped 8000ms -> 95ms, 0 transactions lost.',
    tags: ['Incident Response', 'PostgreSQL', 'Architecture', 'Performance'],
    lastUpdated: '2026-03-15',
    score: 95
  },
  {
    id: 'star-2',
    title: 'Migrating Monolith to Event-Driven Microservices',
    category: 'Leadership',
    situation: 'Our monolithic Python application had 45-minute CI/CD build times and frequent cross-team deployment blocks.',
    task: 'I pitched, designed, and spearheaded the transition of our notification and billing pipeline to an asynchronous event-driven architecture using Kafka.',
    action: '1. Conducted technical RFC review with 3 engineering leads. 2. Created reusable TypeScript microservice scaffolding with Docker and OpenTelemetry. 3. Implemented strangler-fig pattern to divert live traffic incrementally with zero downtime. 4. Hosted brown-bag sessions to train 14 engineers on event sourcing.',
    result: 'CI/CD pipeline time decreased from 45 min to 6.5 min. Deployment frequency grew 4x per sprint, and service uptime improved to 99.98%.',
    metrics: '85% faster CI/CD (45m -> 6.5m), 4x deployment cadence, 99.98% SLA.',
    tags: ['Architecture', 'Kafka', 'Mentorship', 'CI/CD'],
    lastUpdated: '2026-03-20',
    score: 98
  },
  {
    id: 'star-3',
    title: 'Reconciling Product & Engineering Deadlines',
    category: 'Conflict',
    situation: 'Product Management wanted to launch an AI summarization feature 3 weeks ahead of schedule, but the backend lacked proper caching and rate-limiting against 3rd-party LLM quota.',
    task: 'Bridge the gap between product launch urgency and technical system stability without burning out the engineering team.',
    action: '1. Prepared a risk matrix demonstrating that launching without caching would cost $18,000/day in API overrun and risk 429 throttling for 40% of users. 2. Proposed a phased rollout: launch a VIP beta with Redis semantic caching in 1 week, followed by full GA 2 weeks later. 3. Paired with PM to present the phased roadmap to executive stakeholders.',
    result: 'Delivered beta on the requested date with zero budget overruns. The caching layer reduced third-party LLM costs by 62%.',
    metrics: '62% API cost savings, 0 user outages, on-time VIP delivery.',
    tags: ['Stakeholder Management', 'Negotiation', 'Cost Optimization'],
    lastUpdated: '2026-04-01',
    score: 92
  }
];

export const behavioralQuestions = [
  {
    category: 'Conflict',
    question: 'Tell me about a time you had a strong technical disagreement with a team member or manager. How did you resolve it?',
    tips: 'Focus on objective data/benchmarks rather than ego. Highlight how you reached alignment and supported the final decision.'
  },
  {
    category: 'Failure',
    question: 'Describe a significant mistake or outage you were responsible for. What happened, and what did you learn?',
    tips: 'Take full ownership without deflecting blame. Detail your remediation steps and how you instituted automated guardrails to prevent recurrence.'
  },
  {
    category: 'Leadership',
    question: 'Give an example of a project where you took initiative outside your formal responsibilities.',
    tips: 'Demonstrate intrinsic drive, identifying a blind spot for the team, rallying others, and delivering measurable business impact.'
  },
  {
    category: 'Ambiguity',
    question: 'Tell me about a time when you were given ambiguous requirements with no clear path forward.',
    tips: 'Explain how you interviewed stakeholders, wrote an RFC with trade-offs, built an MVP prototype, and iterated rapidly.'
  },
  {
    category: 'Impact',
    question: 'What is the most technically complex or impactful feature you have built in your career?',
    tips: 'Structure: High-level purpose -> Technical hurdle (scale, latency, concurrency) -> Your specific contribution -> Measurable business outcome.'
  }
];
