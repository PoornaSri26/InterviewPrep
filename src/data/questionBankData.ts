export interface BankQuestion {
  id: string;
  topic: string;
  question: string;
  answer: string;
  tags: string[];
}

/**
 * Curated question bank distilled from the language/framework interview repos
 * (JavaScript, React, Node, Java, Python, SQL, DevOps, security, behavioral).
 * Kept short on purpose: one crisp model answer per question, not an essay.
 */
export const questionBank: BankQuestion[] = [
  // ---- JavaScript ----
  { id: 'js-1', topic: 'JavaScript', question: 'What is the event loop and why does it matter in interviews?', answer: 'JavaScript runs one task at a time on a single call stack. The event loop pulls tasks from the macrotask queue, drains the microtask queue (promises) after each task, and only then renders. It explains why a blocking loop freezes the UI and why Promise callbacks run before setTimeout.', tags: ['async', 'runtime'] },
  { id: 'js-2', topic: 'JavaScript', question: 'Closures: what are they and where do they leak memory?', answer: 'A closure is a function that keeps a reference to its lexical scope after the outer function returned. It leaks when a long-lived listener, timer, or cache holds that scope — especially large DOM nodes. Fix by nulling references, removing listeners, or moving the cache out of the closure.', tags: ['scope', 'memory'] },
  { id: 'js-3', topic: 'JavaScript', question: '`==` vs `===` and the weird cases worth quoting?', answer: '`===` compares type and value; `==` coerces. `null == undefined` is true, `"" == 0` is true, `[] == false` is true — that coercion surface is why style guides mandate `===` except for the null/undefined check.', tags: ['equality'] },
  { id: 'js-4', topic: 'JavaScript', question: 'Debounce vs throttle — implementation sketch?', answer: 'Debounce delays until calls stop for N ms (search-as-you-type); throttle allows at most one call per N ms (scroll handlers). Both return a wrapper that stores a timer or last-run timestamp and forwards `this`/args.', tags: ['performance'] },

  // ---- TypeScript ----
  { id: 'ts-1', topic: 'TypeScript', question: 'When do you reach for `unknown` instead of `any`?', answer: '`unknown` accepts any value but requires narrowing before use, so it keeps type safety at boundaries (JSON parsing, catch blocks, third-party payloads). `any` disables checking and propagates silently.', tags: ['safety'] },
  { id: 'ts-2', topic: 'TypeScript', question: 'Explain generics with a real constraint.', answer: 'Generics tie an input type to an output type: `function first<T>(xs: T[]): T | undefined`. Constraints (`T extends { id: string }`) let the body use members while still preserving the caller\'s concrete type — the basis for typed API clients.', tags: ['generics'] },
  { id: 'ts-3', topic: 'TypeScript', question: 'How do discriminated unions replace boolean flags?', answer: 'Give each variant a literal `kind` field and narrow with a switch; TypeScript then exposes only valid fields per branch. It makes impossible states unrepresentable — e.g. `{status:\'loading\'} | {status:\'ok\', data} | {status:\'error\', message}`.', tags: ['modeling'] },
  { id: 'ts-4', topic: 'TypeScript', question: 'Structural typing: why can a class satisfy an interface without `implements`?', answer: 'TypeScript compares shapes, not nominal names. If the object has every required member with compatible types it is assignable. That is why mocking in tests is cheap — and why accidental compatibility can surprise you.', tags: ['types'] },

  // ---- React ----
  { id: 'react-1', topic: 'React', question: 'Why does `useEffect` run twice in development?', answer: 'React 18 Strict Mode intentionally mounts, unmounts, and remounts effects in dev to surface missing cleanup. Fix the cleanup rather than removing Strict Mode; production still mounts once.', tags: ['effects'] },
  { id: 'react-2', topic: 'React', question: 'How do you stop unnecessary re-renders?', answer: 'Measure first (Profiler). Then split state so updates stay local, memoise expensive children (`React.memo`), stabilise callbacks with `useCallback`, and keep derived values in `useMemo`. Context values need memoising too, or every consumer re-renders.', tags: ['performance'] },
  { id: 'react-3', topic: 'React', question: 'Controlled vs uncontrolled inputs?', answer: 'Controlled inputs keep value in React state — predictable validation and formatting, more renders. Uncontrolled use refs and read on submit — lighter for large forms. Pick controlled for interactive validation, uncontrolled for big or third-party-managed forms.', tags: ['forms'] },
  { id: 'react-4', topic: 'React', question: 'What actually happens on the first render of a Suspense boundary?', answer: 'React renders children; if a component suspends, React shows the fallback and keeps the tree in a pending state. When the promise resolves it replays the render synchronously. This is why data fetching must be cache-backed, not re-triggered on every replay.', tags: ['suspense'] },

  // ---- Node.js ----
  { id: 'node-1', topic: 'Node.js', question: 'How does Node handle 10k concurrent connections on one thread?', answer: 'I/O is delegated to libuv\'s thread pool and the OS (epoll/kqueue); the single JS thread resumes callbacks. CPU-bound work blocks everything, so it must move to worker threads or a separate service.', tags: ['concurrency'] },
  { id: 'node-2', topic: 'Node.js', question: 'Streams vs buffering a large file?', answer: 'Buffering loads the whole payload into memory and caps concurrency. Streams (with `pipeline`) apply backpressure chunk by chunk, keeping memory flat — the default choice for uploads, proxies, and log processing.', tags: ['streams'] },
  { id: 'node-3', topic: 'Node.js', question: 'How do you survive a thrown error in an async route handler?', answer: 'Wrap handlers so rejections reach `next(err)`, centralise the error middleware, map known errors to status codes, and never leave a response half-written. Unhandled rejections should crash the process and be restarted by the supervisor.', tags: ['errors'] },
  { id: 'node-4', topic: 'Node.js', question: 'Cluster vs worker_threads?', answer: 'Cluster forks whole processes sharing a port — good for HTTP throughput and isolation. Worker threads share memory space for CPU-heavy tasks. Neither fixes a blocking algorithm in the request path; move that to a queue.', tags: ['scaling'] },

  // ---- Python ----
  { id: 'py-1', topic: 'Python', question: 'What does the GIL mean in practice?', answer: 'Only one thread executes bytecode at a time, so threads do not speed up CPU-bound code. They do help I/O-bound work because the GIL is released during I/O. Use multiprocessing or native extensions for parallelism.', tags: ['concurrency'] },
  { id: 'py-2', topic: 'Python', question: 'Generators vs lists?', answer: 'A generator yields lazily, so memory stays constant and work starts immediately — ideal for pipelines and large files. A list materialises everything and supports indexing and multiple passes.', tags: ['iterators'] },
  { id: 'py-3', topic: 'Python', question: '`is` vs `==` and the interning trap?', answer: '`==` compares values; `is` compares identity. Small ints and interned strings may be identical by accident, so `is` must be reserved for `None`, `True`, `False`, and sentinels.', tags: ['equality'] },
  { id: 'py-4', topic: 'Python', question: 'Mutable default arguments — what goes wrong?', answer: 'Defaults are evaluated once at function definition, so a `def f(x=[])` accumulates values across calls. Use `None` as the default and create the container inside.', tags: ['gotchas'] },

  // ---- Java ----
  { id: 'java-1', topic: 'Java', question: 'HashMap internals in one answer?', answer: 'Buckets are an array of nodes; keys hash to an index. Collisions chain in a linked list and treeify to a red-black tree past eight entries in one bucket, giving O(log n) worst case. Resize doubles capacity when load factor 0.75 is exceeded.', tags: ['collections'] },
  { id: 'java-2', topic: 'Java', question: 'Checked vs unchecked exceptions?', answer: 'Checked exceptions must be declared or caught and model recoverable conditions (I/O). Unchecked extend RuntimeException and usually signal programming errors (NPE, illegal state). Modern APIs lean unchecked plus explicit result types.', tags: ['errors'] },
  { id: 'java-3', topic: 'Java', question: 'What problem do virtual threads solve?', answer: 'Platform threads are expensive, so blocking code exhausts pools. Virtual threads are cheap, JVM-scheduled, and unmount while blocked on I/O, letting simple blocking code scale to many concurrent requests without reactive plumbing.', tags: ['concurrency'] },
  { id: 'java-4', topic: 'Java', question: 'Why is `String` immutable?', answer: 'Immutability makes strings safe to share and cache, keeps hash codes stable for map keys, and prevents security bugs (paths, SQL). The cost is allocation, which the compiler and string pool mitigate.', tags: ['strings'] },

  // ---- SQL & Data ----
  { id: 'sql-1', topic: 'SQL & Data', question: 'When does an index not help?', answer: 'When the query filters on a function of the column, uses a leading wildcard, returns a large fraction of rows, or the planner decides a sequential scan is cheaper. Low-selectivity indexes and write-heavy tables also lose more than they gain.', tags: ['indexes'] },
  { id: 'sql-2', topic: 'SQL & Data', question: 'Explain the difference between `WHERE` and `HAVING`.', answer: '`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation. Putting a group predicate in `WHERE` is an error, and putting a row predicate in `HAVING` forces needless aggregation.', tags: ['aggregation'] },
  { id: 'sql-3', topic: 'SQL & Data', question: 'How do you find the second-highest salary?', answer: '`SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp)` — or `DENSE_RANK()` ordered descending and filter rank = 2. The window version generalises to nth and handles ties explicitly.', tags: ['windows'] },
  { id: 'sql-4', topic: 'SQL & Data', question: 'What makes a query N+1 and how do you fix it?', answer: 'The ORM loads a parent list then fires one query per child. Fix with a join/eager load, `IN` batching, or a dataloader that coalesces ids per tick. Always verify with query logging.', tags: ['orm', 'performance'] },

  // ---- System Design ----
  { id: 'sd-1', topic: 'System Design', question: 'How do you choose between SQL and NoSQL?', answer: 'Start from access patterns: strict relations and multi-row transactions favour SQL; huge write volume with simple key access favours wide-column or document stores. Most systems are polyglot — pick per aggregate, not per company.', tags: ['storage'] },
  { id: 'sd-2', topic: 'System Design', question: 'What does idempotency require in a payments API?', answer: 'A client-supplied idempotency key stored with the response, a uniqueness constraint to reject duplicates, and a state machine so retries return the original result. Without the stored response, a retry cannot distinguish success from a lost reply.', tags: ['reliability'] },
  { id: 'sd-3', topic: 'System Design', question: 'How would you design a rate limiter?', answer: 'Token bucket per key in Redis with atomic Lua (or a sliding-window counter for smoother bursts), TTL cleanup, and per-tenant limits. Return 429 with `Retry-After`, and keep the limiter off the hot path with local pre-checks.', tags: ['scaling'] },
  { id: 'sd-4', topic: 'System Design', question: 'Caching: what invalidates, and what is stale on purpose?', answer: 'Cache-aside with TTL for reads; write-through when consistency matters more than latency. Invalidate on write plus a versioned key to avoid races. Accept bounded staleness for feeds; never for balances unless reconciled.', tags: ['caching'] },

  // ---- DevOps ----
  { id: 'devops-1', topic: 'DevOps', question: 'Blue-green vs canary deployment?', answer: 'Blue-green flips all traffic to an identical environment — fast rollback, double cost. Canary shifts a small percentage first and watches error rate/latency, catching defects on real traffic at the cost of longer rollout and version skew.', tags: ['deploy'] },
  { id: 'devops-2', topic: 'DevOps', question: 'What do you alert on in production?', answer: 'Symptom-based SLOs (error rate, latency, saturation) rather than every CPU spike. Every alert must be actionable and link a runbook; otherwise it becomes noise and gets muted.', tags: ['observability'] },
  { id: 'devops-3', topic: 'DevOps', question: 'Kubernetes: why do pods restart in a loop?', answer: 'CrashLoopBackOff means the container exits and the kubelet backs off. Check `kubectl logs --previous`, then liveness probe misconfiguration, missing config/secret, OOMKilled, or a failing dependency at startup.', tags: ['kubernetes'] },
  { id: 'devops-4', topic: 'DevOps', question: 'How do you keep secrets out of images and repos?', answer: 'Inject at runtime from a secret manager or mounted volume, scope IAM per workload, rotate automatically, and scan commits/CI for patterns. Never bake secrets into layers — they survive in history even after deletion.', tags: ['security'] },

  // ---- Security ----
  { id: 'sec-1', topic: 'Security', question: 'How does XSS happen and how is it prevented?', answer: 'Untrusted input reaches HTML, attributes, or JS. Prevent with contextual output encoding (framework auto-escape), a strict Content-Security-Policy, and avoiding `innerHTML`/`dangerouslySetInnerHTML` on user data. Sanitising rich HTML needs a library, not a regex.', tags: ['web'] },
  { id: 'sec-2', topic: 'Security', question: 'Why is JWT in localStorage risky?', answer: 'Any XSS can read it, and it cannot be revoked before expiry. Prefer an httpOnly, Secure, SameSite cookie, short access tokens plus refresh rotation, and server-side revocation for sensitive actions.', tags: ['auth'] },
  { id: 'sec-3', topic: 'Security', question: 'What stops CSRF?', answer: 'SameSite cookies plus an origin check, or a synchroniser token tied to the session for cross-site form posts. CSRF only applies to cookie-based auth; bearer tokens in headers are not auto-attached.', tags: ['web'] },
  { id: 'sec-4', topic: 'Security', question: 'How do you store passwords?', answer: 'Never encrypt — hash with a slow, memory-hard algorithm (Argon2id, bcrypt, scrypt) and a unique salt. Compare in constant time, rate-limit attempts, and rehash on login when parameters change.', tags: ['auth'] },

  // ---- Behavioral ----
  { id: 'beh-1', topic: 'Behavioral', question: 'Tell me about a conflict with a teammate.', answer: 'Situation: two engineers disagreed on an API contract. Task: unblock the sprint. Action: wrote both options as one-page trade-offs, ran a 20-minute decision meeting, escalated only the irreversible point. Result: shipped on time and reused the template for later disputes.', tags: ['conflict', 'STAR'] },
  { id: 'beh-2', topic: 'Behavioral', question: 'Describe a failure you owned.', answer: 'Pick a real miss, state the impact plainly, then the diagnosis and the systemic fix (test, alert, checklist). Interviewers score ownership and learning, not the absence of failure.', tags: ['failure', 'STAR'] },
  { id: 'beh-3', topic: 'Behavioral', question: 'How do you handle ambiguous requirements?', answer: 'Write the smallest explicit spec, list assumptions and unknowns, timebox a spike, then confirm with the stakeholder before building. Ambiguity is a communication problem before it is an engineering one.', tags: ['ambiguity'] },
  { id: 'beh-4', topic: 'Behavioral', question: 'Why are you leaving your current role?', answer: 'Frame around growth and scope, not blame: what you have learned, what you cannot get where you are, and why this team is the specific next step. Keep it under 30 seconds and positive about past colleagues.', tags: ['motivation'] },

  // ---- Ask the interviewer ----
  { id: 'ask-1', topic: 'Ask the interviewer', question: 'What does success look like in the first 90 days?', answer: 'Signals whether the role has a defined mandate and how onboarding is measured. Listen for concrete outcomes versus vague "ramp up".', tags: ['reverse'] },
  { id: 'ask-2', topic: 'Ask the interviewer', question: 'How are technical decisions made when the team disagrees?', answer: 'Reveals whether there is a decision process (RFC, owner, escalation) or ad-hoc escalation to the loudest voice.', tags: ['reverse'] },
  { id: 'ask-3', topic: 'Ask the interviewer', question: 'What is on-call like, and what happened in the last incident?', answer: 'Tests operational maturity and honesty. A team that cannot describe a recent incident either has none or hides them.', tags: ['reverse'] },
  { id: 'ask-4', topic: 'Ask the interviewer', question: 'What would make you reject this hire after six months?', answer: 'Surfaces the real performance bar and the behaviours the manager watches — use the answer to tailor your examples.', tags: ['reverse'] }
];

export const questionTopics = ['All', ...Array.from(new Set(questionBank.map((q) => q.topic)))];
