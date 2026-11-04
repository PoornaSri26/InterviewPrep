import { StarStory } from '../types';

/**
 * 25+ Comprehensive STAR Story Exemplars with metrics and engineering details.
 */
export const initialStarStories: StarStory[] = [
  {
    "id": "star-1",
    "title": "P0 Production Database Outage Resolution",
    "category": "Failure",
    "situation": "During a Black Friday traffic surge, our primary PostgreSQL replica experienced 100% CPU lock, causing checkout API latency to spike from 120ms to over 8 seconds.",
    "task": "As the on-call engineer, I had to immediately stabilize checkout traffic, mitigate customer order drop-offs, and diagnose the root cause without data loss.",
    "action": "1. Rerouted read-heavy inventory queries to an ephemeral read-replica cluster. 2. Identified an unindexed query introduced in the latest microservice release causing full-table scans. 3. Executed an in-place concurrent index creation (`CREATE INDEX CONCURRENTLY`). 4. Implemented query rate-limiting and circuit breaker fallback in Envoy proxy.",
    "result": "Reduced checkout API latency back to 95ms within 18 minutes. Prevented an estimated $240,000 in lost GMV during peak sales hour.",
    "metrics": "18 min recovery, P99 latency dropped 8000ms -> 95ms, 0 transactions lost.",
    "tags": [
      "Incident Response",
      "PostgreSQL",
      "Architecture",
      "Performance"
    ],
    "lastUpdated": "2026-03-15",
    "score": 95
  },
  {
    "id": "star-2",
    "title": "Migrating Monolith to Event-Driven Microservices",
    "category": "Leadership",
    "situation": "Our monolithic Python application had 45-minute CI/CD build times and frequent cross-team deployment blocks.",
    "task": "I pitched, designed, and spearheaded the transition of our notification and billing pipeline to an asynchronous event-driven architecture using Kafka.",
    "action": "1. Conducted technical RFC review with 3 engineering leads. 2. Created reusable TypeScript microservice scaffolding with Docker and OpenTelemetry. 3. Implemented strangler-fig pattern to divert live traffic incrementally with zero downtime. 4. Hosted brown-bag sessions to train 14 engineers on event sourcing.",
    "result": "CI/CD pipeline time decreased from 45 min to 6.5 min. Deployment frequency grew 4x per sprint, and service uptime improved to 99.98%.",
    "metrics": "85% faster CI/CD (45m -> 6.5m), 4x deployment cadence, 99.98% SLA.",
    "tags": [
      "Architecture",
      "Kafka",
      "Mentorship",
      "CI/CD"
    ],
    "lastUpdated": "2026-03-20",
    "score": 98
  },
  {
    "id": "star-3",
    "title": "Reconciling Product & Engineering Deadlines",
    "category": "Conflict",
    "situation": "Product Management wanted to launch an AI summarization feature 3 weeks ahead of schedule, but the backend lacked proper caching and rate-limiting against 3rd-party LLM quota.",
    "task": "Bridge the gap between product launch urgency and technical system stability without burning out the engineering team.",
    "action": "1. Prepared a risk matrix demonstrating that launching without caching would cost $18,000/day in API overrun and risk 429 throttling for 40% of users. 2. Proposed a phased rollout: launch a VIP beta with Redis semantic caching in 1 week, followed by full GA 2 weeks later. 3. Paired with PM to present the phased roadmap to executive stakeholders.",
    "result": "Delivered beta on the requested date with zero budget overruns. The caching layer reduced third-party LLM costs by 62%.",
    "metrics": "62% API cost savings, 0 user outages, on-time VIP delivery.",
    "tags": [
      "Stakeholder Management",
      "Negotiation",
      "Cost Optimization"
    ],
    "lastUpdated": "2026-04-01",
    "score": 92
  },
  {
    "id": "star-4",
    "title": "Optimizing P99 Latency for Global WebSocket Fleet",
    "category": "Impact",
    "situation": "Real-time collaborative document platform suffered from intermittent 500ms disconnects for users in APAC connecting to US-East gateways.",
    "task": "Redesign client connection management and regional ingress points to achieve sub-100ms synchronization globally.",
    "action": "1. Deployed regional Envoy ingress proxies at 12 AWS edge POPs. 2. Implemented TLS session resumption and TCP connection pooling over AWS Direct Connect backhaul. 3. Engineered client-side exponential backoff with jitter and binary Protobuf message serialization.",
    "result": "APAC P99 connection establishment dropped from 520ms to 78ms. Reconnect success rate during network transitions jumped to 99.7%.",
    "metrics": "85% latency reduction (520ms -> 78ms), 99.7% reconnect reliability.",
    "tags": [
      "Networking",
      "WebSockets",
      "Protobuf",
      "Latency"
    ],
    "lastUpdated": "2026-04-10",
    "score": 96
  },
  {
    "id": "star-5",
    "title": "Remediating Security Vulnerability in OAuth Token Flow",
    "category": "Leadership",
    "situation": "During a routine penetration test, our identity service was flagged for potential token fixation in cross-domain SSO redirects.",
    "task": "Completely eliminate the vulnerability across 22 downstream microservices without breaking mobile client sessions.",
    "action": "1. Spearheaded PKCE (Proof Key for Code Exchange) implementation for all authentication flows. 2. Migrated token storage from localStorage to secure, SameSite=Strict, httpOnly cookies with short 15-minute access lifetimes. 3. Introduced asynchronous refresh token rotation with single-use reuse detection.",
    "result": "Zero security compliance findings during the subsequent audit. Seamless rollout completed across 1.8M active daily users with zero session interruptions.",
    "metrics": "100% security compliance, 0 customer disruptions, 1.8M users secured.",
    "tags": [
      "Security",
      "OAuth2",
      "Auth",
      "PKCE"
    ],
    "lastUpdated": "2026-04-18",
    "score": 97
  },
  {
    "id": "star-6",
    "title": "Zero-Downtime Multi-Region Database Sharding",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving zero-downtime multi-region database sharding.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-7",
    "title": "Automated Canary Deployment Pipeline with ArgoCD",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving automated canary deployment pipeline with argocd.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-8",
    "title": "Refactoring Legacy Monolith Billing System",
    "category": "Conflict",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving refactoring legacy monolith billing system.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-9",
    "title": "Resolving Cross-Team Architectural Standoff on GraphQL vs gRPC",
    "category": "Failure",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving resolving cross-team architectural standoff on graphql vs grpc.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-10",
    "title": "Driving 70% Cloud Infrastructure Cost Reduction with Spot Instances",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving driving 70% cloud infrastructure cost reduction with spot instances.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-11",
    "title": "Fixing Memory Leak in Node.js V8 Heap Under Heavy Load",
    "category": "Ambiguity",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving fixing memory leak in node.js v8 heap under heavy load.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-12",
    "title": "Mentoring 4 Junior Engineers to Mid-Level Promotions",
    "category": "Teamwork",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving mentoring 4 junior engineers to mid-level promotions.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-13",
    "title": "Handling Scope Creep on Critical Enterprise Compliance Deliverable",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving handling scope creep on critical enterprise compliance deliverable.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-14",
    "title": "Architecting Offline-First Mobile Sync with SQLite & CRDTs",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving architecting offline-first mobile sync with sqlite & crdts.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-15",
    "title": "Eliminating N+1 Queries in High-Traffic E-Commerce Cart",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving eliminating n+1 queries in high-traffic e-commerce cart.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-16",
    "title": "Leading Rapid Response to Log4j Zero-Day Patching Across 800 Services",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving leading rapid response to log4j zero-day patching across 800 services.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-17",
    "title": "Designing Multi-Tenant Rate Limiter with Redis Lua Scripts",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving designing multi-tenant rate limiter with redis lua scripts.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-18",
    "title": "Rescuing Delayed Product Launch by Reprioritizing MVP Scope",
    "category": "Conflict",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving rescuing delayed product launch by reprioritizing mvp scope.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-19",
    "title": "Building Automated Code Quality Gate with SonarQube in CI",
    "category": "Failure",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving building automated code quality gate with sonarqube in ci.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-20",
    "title": "Decoupling Sync HTTP Chains with Kafka Async Messaging",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving decoupling sync http chains with kafka async messaging.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-21",
    "title": "Recovering From Accidental Data Deletion with Point-In-Time Restore",
    "category": "Ambiguity",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving recovering from accidental data deletion with point-in-time restore.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-22",
    "title": "Migrating Frontend from Webpack to Vite Cutting Build Times by 80%",
    "category": "Teamwork",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving migrating frontend from webpack to vite cutting build times by 80%.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-23",
    "title": "Establishing On-Call Runbooks and SLOs Reducing Alert Fatigue by 60%",
    "category": "Impact",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving establishing on-call runbooks and slos reducing alert fatigue by 60%.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-24",
    "title": "Implementing Real-Time Fraud Detection Pipeline with Flink",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving implementing real-time fraud detection pipeline with flink.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  },
  {
    "id": "star-25",
    "title": "Persuading Executive Leadership to Invest in Technical Debt Reduction",
    "category": "Leadership",
    "situation": "At my previous company, our team encountered a critical scalability and reliability bottleneck involving persuading executive leadership to invest in technical debt reduction.",
    "task": "As the lead engineer on the initiative, I was responsible for scoping the architecture, aligning stakeholders, and executing the solution with zero customer downtime.",
    "action": "1. Analyzed system telemetry and identified primary root causes with flamegraphs and metrics. 2. Drafted a comprehensive RFC document evaluating 3 technical trade-offs. 3. Led phased rollout with automated integration tests, canary verification, and rollback flags. 4. Documented operational runbooks and trained on-call teammates.",
    "result": "Successfully deployed to production ahead of schedule, improving system throughput by 3x and achieving 99.99% availability.",
    "metrics": "3x throughput increase, 99.99% uptime, 0 production incidents.",
    "tags": [
      "System Architecture",
      "Leadership",
      "Reliability",
      "Performance"
    ],
    "lastUpdated": "2026-04-20",
    "score": 94
  }
];

/**
 * 100+ Categorized Behavioral Interview Questions mapped to Amazon LPs, Googleyness, and Meta Values.
 */
export const behavioralQuestions = [
  {
    "category": "Conflict",
    "question": "Tell me about a time you had a strong technical disagreement with a team member. How did you resolve it?",
    "tips": "Focus on objective data/benchmarks rather than ego. Highlight how you reached alignment and supported the final decision."
  },
  {
    "category": "Conflict",
    "question": "Describe a situation where product management pushed for an unrealistic deadline that compromised code quality. What did you do?",
    "tips": "Present the risk matrix, outline technical debt costs, and offer a phased MVP delivery option."
  },
  {
    "category": "Conflict",
    "question": "How do you handle working with a colleague whose communication style or work ethic clashes with yours?",
    "tips": "Emphasize empathy, setting clear interface contracts/expectations, and focusing on team outcomes."
  },
  {
    "category": "Conflict",
    "question": "Tell me about a time when your proposal was rejected during an RFC review. How did you react?",
    "tips": "Demonstrate intellectual humility, committing fully to the chosen alternative, and learning from feedback."
  },
  {
    "category": "Conflict",
    "question": "Have you ever had to push back on executive leadership regarding technical feasibility? How did you frame it?",
    "tips": "Frame around business risk, customer impact, and alternative viable solutions."
  },
  {
    "category": "Failure",
    "question": "Describe a significant production outage or bug that you caused. What happened and what did you learn?",
    "tips": "Take 100% ownership. Detail post-mortem findings, blame-free analysis, and automated guardrails instituted."
  },
  {
    "category": "Failure",
    "question": "Tell me about a project that failed to meet its goals or was cancelled after significant effort.",
    "tips": "Discuss early warning signs, lessons in validating assumptions earlier, and reusable assets preserved."
  },
  {
    "category": "Failure",
    "question": "Describe a time you made a poor architectural decision in hindsight. How did you remediate it?",
    "tips": "Explain the constraints at the time, what changed at scale, and the evolutionary migration path chosen."
  },
  {
    "category": "Failure",
    "question": "Tell me about a time you gave an inaccurate engineering estimate that delayed other teams.",
    "tips": "Explain how you communicated early, renegotiated milestones, and improved estimation accuracy moving forward."
  },
  {
    "category": "Failure",
    "question": "Have you ever missed a critical edge case during code review that shipped to production?",
    "tips": "Focus on improving team test automation, regression suites, and review checklists."
  },
  {
    "category": "Impact",
    "question": "Tell me about a time you went above and beyond to solve a customer problem.",
    "tips": "Start from the customer pain point, show initiative outside normal duties, and measure retention/satisfaction impact."
  },
  {
    "category": "Impact",
    "question": "Give an example of when you advocated for user experience over an easier technical implementation.",
    "tips": "Quantify why user friction was unacceptable and how you simplified the technical design."
  },
  {
    "category": "Impact",
    "question": "Describe how you use customer feedback or telemetry data to influence your team’s product roadmap.",
    "tips": "Cite specific metrics, funnel drop-offs, or error rates that led to an engineering sprint priority."
  },
  {
    "category": "Ownership",
    "question": "Tell me about a time you took ownership of an orphaned codebase or neglected technical problem.",
    "tips": "Show proactive responsibility: no \"that is not my job\". Document the audit, cleanup, and handoff."
  },
  {
    "category": "Ownership",
    "question": "Describe a situation where a project was falling behind and you stepped up to get it back on track.",
    "tips": "Highlight unblocking teammates, removing scope, and rallying the team without burning out."
  },
  {
    "category": "Ownership",
    "question": "Give an example of a time you sacrificed your own short-term priorities for the greater benefit of the company.",
    "tips": "Focus on company-wide objectives, unblocking critical path dependencies, and cross-team trust."
  },
  {
    "category": "Ambiguity",
    "question": "Tell me about a time you had to build something with extremely vague or contradictory requirements.",
    "tips": "Detail your framework: write assumptions, timebox prototype, align stakeholders, iterate in public."
  },
  {
    "category": "Ambiguity",
    "question": "Describe a scenario where you had to make an irreversible technical decision with incomplete information.",
    "tips": "Explain your risk assessment, consultation with principal engineers, and mitigation/rollback strategy."
  },
  {
    "category": "Ambiguity",
    "question": "How do you prioritize your work when everything on your plate is marked P0 urgent?",
    "tips": "Discuss Eisenhower matrix, assessing business impact, aligning with engineering manager, and setting boundaries."
  },
  {
    "category": "Mentorship",
    "question": "Tell me about an engineer you mentored who successfully leveled up or got promoted.",
    "tips": "Highlight tailored feedback, delegating stretch assignments, and celebrating their wins."
  },
  {
    "category": "Mentorship",
    "question": "How do you foster an inclusive and psychologically safe engineering culture on your team?",
    "tips": "Discuss blameless post-mortems, constructive PR reviews, and encouraging junior engineers to speak up."
  },
  {
    "category": "Mentorship",
    "question": "Describe how you gave difficult constructive feedback to a struggling peer or direct report.",
    "tips": "Focus on specific behaviors rather than character, offering concrete support, and tracking improvement."
  },
  {
    "category": "Bias for Action",
    "question": "Tell me about a time you made a quick decision without waiting for complete consensus.",
    "tips": "Differentiate two-way doors (reversible) from one-way doors (irreversible). Show calculated speed."
  },
  {
    "category": "Bias for Action",
    "question": "Give an example of a quick prototype or spike you built that proved or disproved a major hypothesis.",
    "tips": "Emphasize minimal throwaway code used purely to gather real empirical data."
  },
  {
    "category": "Leadership",
    "question": "Scenario 1: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 2: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 3: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 4: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 5: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 6: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 7: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 8: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 9: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 10: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 11: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 12: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 13: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 14: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 15: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 16: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 17: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 18: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 19: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 20: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 21: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 22: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 23: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 24: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 25: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 26: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 27: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 28: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 29: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 30: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 31: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 32: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 33: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 34: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 35: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 36: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 37: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 38: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 39: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 40: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 41: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 42: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 43: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 44: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 45: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 46: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 47: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 48: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 49: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 50: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 51: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 52: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 53: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 54: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 55: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 56: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 57: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 58: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 59: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 60: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 61: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 62: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 63: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 64: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 65: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 66: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 67: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 68: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 69: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 70: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 71: In your engineering experience, describe how you approached a challenging situation involving ownership & accountability and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Conflict",
    "question": "Scenario 72: In your engineering experience, describe how you approached a challenging situation involving technical disagreement & conflict and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Failure",
    "question": "Scenario 73: In your engineering experience, describe how you approached a challenging situation involving outage & failure recovery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 74: In your engineering experience, describe how you approached a challenging situation involving invent & simplify / innovation and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Ambiguity",
    "question": "Scenario 75: In your engineering experience, describe how you approached a challenging situation involving ambiguity & fast delivery and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Teamwork",
    "question": "Scenario 76: In your engineering experience, describe how you approached a challenging situation involving mentorship & culture and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 77: In your engineering experience, describe how you approached a challenging situation involving bias for action & deadlines and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 78: In your engineering experience, describe how you approached a challenging situation involving dive deep & root cause analysis and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Leadership",
    "question": "Scenario 79: In your engineering experience, describe how you approached a challenging situation involving high stakes stakeholder management and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  },
  {
    "category": "Impact",
    "question": "Scenario 80: In your engineering experience, describe how you approached a challenging situation involving customer obsession and cross-functional partners.",
    "tips": "Use the STAR framework (Situation, Task, Action, Result). Ensure Action highlights YOUR specific technical decisions."
  }
];
