import fs from 'fs';

const filePath = 'src/data/systemDesignData.ts';
let code = fs.readFileSync(filePath, 'utf8');

const newBlueprints = `  ,
  {
    id: 'whatsapp-chat',
    title: 'Design a Real-Time Messenger (WhatsApp / Discord)',
    difficulty: 'Hard',
    scaleEstimate: '2 Billion active users, 100 Billion messages delivered per day. Peak traffic: 1.5M messages/sec. High concurrency with 50M persistent connections.',
    requirements: {
      functional: [
        '1-on-1 real-time messaging with delivery receipts (Sent, Delivered, Read).',
        'Online / Offline presence indicators and last seen timestamp.',
        'Group chats supporting up to 1,024 members with order preservation.',
        'End-to-End Encryption (Signal Protocol) and media attachment support.'
      ],
      nonFunctional: [
        'Ultra-low latency (< 100ms message delivery worldwide).',
        'Strict message ordering per chat conversation.',
        'High availability (99.999%) and durable message storage for undelivered queues.'
      ]
    },
    architectureNodes: [
      { id: 'client-a', label: 'Sender Client (iOS / Android)', type: 'client', x: 50, y: 100 },
      { id: 'client-b', label: 'Receiver Client', type: 'client', x: 50, y: 280 },
      { id: 'ws-gateway', label: 'WebSocket Gateway Cluster (Sticky TCP / TLS)', type: 'gateway', x: 280, y: 180 },
      { id: 'session-svc', label: 'Presence & Session Registry (Redis Cluster)', type: 'cache', x: 500, y: 80 },
      { id: 'chat-svc', label: 'Chat & Message Routing Service', type: 'service', x: 500, y: 220 },
      { id: 'msg-bus', label: 'Kafka Message Bus (Partitioned by ChatID)', type: 'queue', x: 740, y: 220 },
      { id: 'offline-queue', label: 'Offline Queue / APNS & FCM Push', type: 'service', x: 740, y: 340 },
      { id: 'msg-store', label: 'Chat History Store (ScyllaDB / Cassandra)', type: 'db', x: 970, y: 220 }
    ],
    architectureConnections: [
      { from: 'client-a', to: 'ws-gateway', label: 'WSS persistent duplex socket' },
      { from: 'ws-gateway', to: 'session-svc', label: 'Heartbeat & lookup recipient server' },
      { from: 'ws-gateway', to: 'chat-svc', label: 'Forward payload' },
      { from: 'chat-svc', to: 'msg-bus', label: 'Publish message (ordered per chat)' },
      { from: 'msg-bus', to: 'msg-store', label: 'Async persist to database' },
      { from: 'msg-bus', to: 'ws-gateway', label: 'Deliver to target gateway server' },
      { from: 'ws-gateway', to: 'client-b', label: 'Push message over receiver socket' },
      { from: 'chat-svc', to: 'offline-queue', label: 'Fallback if recipient disconnected' }
    ],
    keyConsiderations: [
      'WebSocket Connection Scale: Managing 10M open sockets per host requires tuning Linux epoll, ulimit file descriptors, and lightweight Erlang/Go actor processes.',
      'Message Ordering: Guaranteeing sequence in group chat requires monotonically increasing sequence IDs assigned per conversation partition in Kafka.',
      'Data Modeling in Cassandra: Table partitioned by chat_id with message_id (combining timestamp and UUID) as clustering key sorted DESC.',
      'Presence Optimization: Do not broadcast presence to entire address book on every connect; fetch presence lazily only when opening a chat window.'
    ],
    sampleQuestions: [
      'How does the system ensure message delivery when the receiver is offline for 3 days?',
      'Why is Cassandra or ScyllaDB preferred over PostgreSQL for message history?',
      'How do you prevent a viral group chat of 1,000 members from overwhelming socket servers?'
    ]
  },
  {
    id: 'uber-rides',
    title: 'Design a Ride-Sharing Dispatch Service (Uber / Lyft)',
    difficulty: 'Hard',
    scaleEstimate: '50 Million active riders, 5 Million active drivers. Peak dispatch: 100,000 trip requests per minute. Driver locations pinged every 4 seconds.',
    requirements: {
      functional: [
        'Drivers continuously broadcast real-time GPS location (lat, lng, bearing) every 4 seconds.',
        'Riders request rides and see nearby available drivers on the map in real-time.',
        'Matching engine pairs rider with optimal driver based on ETA, rating, and route constraints.'
      ],
      nonFunctional: [
        'Near real-time dispatch latency (< 2 seconds to match and alert driver).',
        'High availability and geospatial partition tolerance.',
        'No double-dispatch (a driver cannot be accepted by two riders simultaneously).'
      ]
    },
    architectureNodes: [
      { id: 'driver-app', label: 'Driver App (GPS Pings)', type: 'client', x: 60, y: 90 },
      { id: 'rider-app', label: 'Rider App (Trip Request)', type: 'client', x: 60, y: 260 },
      { id: 'geo-gateway', label: 'Geospatial Ingest Gateway', type: 'gateway', x: 260, y: 90 },
      { id: 'dispatch-gateway', label: 'Trip Request Gateway', type: 'gateway', x: 260, y: 260 },
      { id: 's2-cache', label: 'Spatial Index Cluster (Redis + Google S2 Cells / H3)', type: 'cache', x: 500, y: 90 },
      { id: 'matching-engine', label: 'Matching & Dispatch Engine (ETA Calculator)', type: 'service', x: 500, y: 260 },
      { id: 'trip-db', label: 'Trip State & Ledger DB (PostgreSQL / CockroachDB)', type: 'db', x: 740, y: 260 },
      { id: 'pricing-svc', label: 'Dynamic Surge Pricing Engine', type: 'service', x: 740, y: 120 }
    ],
    architectureConnections: [
      { from: 'driver-app', to: 'geo-gateway', label: 'GPS coordinates every 4s' },
      { from: 'geo-gateway', to: 's2-cache', label: 'Update driver cell index' },
      { from: 'rider-app', to: 'dispatch-gateway', label: 'POST /rides/request' },
      { from: 'dispatch-gateway', to: 'matching-engine', label: 'Find driver for pickup' },
      { from: 'matching-engine', to: 's2-cache', label: 'Query k-nearest drivers in cell' },
      { from: 'matching-engine', to: 'pricing-svc', label: 'Compute surge multiplier' },
      { from: 'matching-engine', to: 'trip-db', label: 'Create atomic trip reservation' }
    ],
    keyConsiderations: [
      'Geospatial Indexing: Google S2 or Uber H3 hexagonal hierarchical spatial indexes transform 2D lat/long into 64-bit integer cell IDs. Proximity searches become fast B-tree range queries.',
      'Surge Pricing: Ratio of supply (available drivers in S2 cell) to demand (open ride requests) triggers real-time price multipliers calculated via streaming analytics.',
      'Distributed Locking: Use Redis Redlock or Postgres row-level locks on driver state to prevent race conditions during concurrent ride dispatches.'
    ],
    sampleQuestions: [
      'How does Uber H3 hexagonal tiling prevent distortion compared to square grid quadtrees?',
      'How do you handle connection drops while a driver is navigating a tunnel?',
      'How do you avoid dispatching a driver who is already on the opposite side of a divided highway?'
    ]
  },
  {
    id: 'distributed-cache',
    title: 'Design a Distributed In-Memory Cache (Memcached / Redis Cluster)',
    difficulty: 'Medium',
    scaleEstimate: '10 Million operations per second, 10 Terabytes total memory across 100 cache nodes. P99 latency < 2ms.',
    requirements: {
      functional: [
        'Support high-throughput GET, SET, and DELETE operations with sub-millisecond response.',
        'Configurable eviction policy (LRU, LFU, TTL expiration).',
        'Horizontal auto-scaling with minimal key re-distribution when adding or removing nodes.'
      ],
      nonFunctional: [
        'P99 read latency < 1ms, write latency < 2ms.',
        'High availability via master-replica failover.',
        'High cache hit ratio and resilience against hot-key degradation.'
      ]
    },
    architectureNodes: [
      { id: 'apps', label: 'App Servers (Smart Clients)', type: 'client', x: 60, y: 160 },
      { id: 'ch-ring', label: 'Consistent Hash Ring Coordinator', type: 'gateway', x: 300, y: 160 },
      { id: 'node-1', label: 'Cache Shard 1 (Master + Replica)', type: 'cache', x: 580, y: 70 },
      { id: 'node-2', label: 'Cache Shard 2 (Master + Replica)', type: 'cache', x: 580, y: 190 },
      { id: 'node-3', label: 'Cache Shard 3 (Master + Replica)', type: 'cache', x: 580, y: 310 },
      { id: 'sentinel', label: 'Health Sentinel & Gossip Protocol', type: 'service', x: 860, y: 190 }
    ],
    architectureConnections: [
      { from: 'apps', to: 'ch-ring', label: 'Hash key to determine shard' },
      { from: 'ch-ring', to: 'node-1', label: 'Direct TCP socket' },
      { from: 'ch-ring', to: 'node-2', label: 'Direct TCP socket' },
      { from: 'ch-ring', to: 'node-3', label: 'Direct TCP socket' },
      { from: 'sentinel', to: 'node-1', label: 'Heartbeat probe & auto-failover' },
      { from: 'sentinel', to: 'node-2', label: 'Heartbeat probe & auto-failover' },
      { from: 'sentinel', to: 'node-3', label: 'Heartbeat probe & auto-failover' }
    ],
    keyConsiderations: [
      'Consistent Hashing & Virtual Nodes: Distributes keys evenly across hash ring; when a node joins or leaves, only K/N keys are moved instead of full hash reshuffling.',
      'Eviction Algorithms: LRU implemented using Hash Map + Doubly Linked List for O(1) lookups, deletions, and head-promotions.',
      'Mitigating Cache Stampede / Hot Keys: Use probabilistic early expiration (XFetch algorithm) or mutex locks to let only 1 thread populate a missing cache item.'
    ],
    sampleQuestions: [
      'What happens when a single cache key receives 500,000 QPS (celebrity problem)?',
      'How does Redis Sentinel elect a new master during network partition?',
      'Compare write-through, write-behind, and cache-aside patterns.'
    ]
  },
  {
    id: 'payment-gateway',
    title: 'Design a Distributed Payment Processing System (Stripe / PayPal)',
    difficulty: 'Hard',
    scaleEstimate: '10,000 payment transactions per second. Zero tolerance for double-charges or lost transaction state. P99 latency < 800ms.',
    requirements: {
      functional: [
        'Accept payment charge requests with multiple payment methods (Credit Card, Apple Pay, Bank Transfer).',
        'Idempotent API processing (retrying network requests must never cause duplicate charges).',
        'Automatic ledger accounting with double-entry bookkeeping.',
        'Webhook delivery and real-time reconciliation against banking rails.'
      ],
      nonFunctional: [
        'Strict ACID consistency and data durability (audit trail cannot be modified).',
        'PCI-DSS compliance with tokenization (no raw card data on internal servers).',
        '99.999% availability with circuit-breaking against 3rd-party bank failures.'
      ]
    },
    architectureNodes: [
      { id: 'merchant', label: 'Merchant App / Webhook Client', type: 'client', x: 60, y: 150 },
      { id: 'pay-gw', label: 'Payment Gateway (TLS & Tokenizer)', type: 'gateway', x: 260, y: 150 },
      { id: 'idemp-store', label: 'Idempotency Cache (Redis TTL)', type: 'cache', x: 480, y: 60 },
      { id: 'pay-svc', label: 'Payment Orchestrator Service', type: 'service', x: 480, y: 220 },
      { id: 'ledger-db', label: 'Double-Entry Ledger DB (PostgreSQL / Spanner)', type: 'db', x: 730, y: 220 },
      { id: 'bank-connector', label: 'Banking Rails Connector (Visa / Mastercard)', type: 'service', x: 960, y: 220 },
      { id: 'reconcile-svc', label: 'Daily Settlement & Reconciliation Engine', type: 'service', x: 730, y: 90 }
    ],
    architectureConnections: [
      { from: 'merchant', to: 'pay-gw', label: 'POST /v1/charges (with Idempotency-Key)' },
      { from: 'pay-gw', to: 'idemp-store', label: 'Check idempotency key' },
      { from: 'pay-gw', to: 'pay-svc', label: 'Process transaction payload' },
      { from: 'pay-svc', to: 'ledger-db', label: 'Record pending transaction' },
      { from: 'pay-svc', to: 'bank-connector', label: 'Submit capture request to bank' },
      { from: 'reconcile-svc', to: 'ledger-db', label: 'Verify balances against settlement file' }
    ],
    keyConsiderations: [
      'Idempotency Keys: Client supplies a unique UUID in the header. Gateway checks Redis: if key exists and completed, return cached response; if in-flight, return 409 conflict; if new, execute atomically.',
      'Double-Entry Bookkeeping: Every financial event must have balanced debits and credits: Debit Cash, Credit Merchant Payable. Balances never drift.',
      'Saga Pattern & Distributed Transactions: Use choreographed or orchestrated Sagas with compensating transactions to safely roll back failed multi-step payment flows.'
    ],
    sampleQuestions: [
      'What happens when the bank charges the card successfully but drops the network connection before returning HTTP 200?',
      'How does double-entry accounting guarantee zero money loss during discrepancies?',
      'How do you securely tokenize credit cards without storing PAN numbers on internal servers?'
    ]
  },
  {
    id: 'web-crawler',
    title: 'Design a Distributed Web Crawler (Googlebot / Common Crawl)',
    difficulty: 'Medium',
    scaleEstimate: '1 Billion web pages crawled per month. Raw HTML storage: 1 Petabyte. Network throughput ~ 400 MB/sec continuous.',
    requirements: {
      functional: [
        'Given a list of seed URLs, crawl the web recursively by extracting outlinks.',
        'Respect robots.txt politeness protocols and crawl delays.',
        'Avoid duplicate downloads of identical content and infinite crawl loops (spider traps).'
      ],
      nonFunctional: [
        'Scalable across hundreds of distributed crawling nodes.',
        'Sub-second DNS caching to minimize lookup overhead.',
        'High fault-tolerance: Crashed crawlers resume work without re-crawling entire domains.'
      ]
    },
    architectureNodes: [
      { id: 'seeds', label: 'Seed URL Frontier Generator', type: 'client', x: 50, y: 150 },
      { id: 'frontier', label: 'URL Frontier Queue (Priority + Politeness)', type: 'queue', x: 250, y: 150 },
      { id: 'crawler-worker', label: 'Crawler Fetch Workers Cluster', type: 'service', x: 480, y: 150 },
      { id: 'dns-cache', label: 'Dedicated DNS Cache / Resolver', type: 'cache', x: 480, y: 40 },
      { id: 'html-store', label: 'HTML Raw Storage (S3 / Distributed Blob)', type: 'storage', x: 740, y: 60 },
      { id: 'parser', label: 'Link Extractor & MIME Parser', type: 'service', x: 740, y: 200 },
      { id: 'bloom-filter', label: 'URL Deduplication Filter (Bloom Filter + DB)', type: 'db', x: 960, y: 200 }
    ],
    architectureConnections: [
      { from: 'seeds', to: 'frontier', label: 'Seed URLs' },
      { from: 'frontier', to: 'crawler-worker', label: 'Dequeue polite domain URL' },
      { from: 'crawler-worker', to: 'dns-cache', label: 'Resolve domain IP (<1ms)' },
      { from: 'crawler-worker', to: 'html-store', label: 'Stream compressed HTML' },
      { from: 'crawler-worker', to: 'parser', label: 'Pass response body' },
      { from: 'parser', to: 'bloom-filter', label: 'Check if extracted URL visited' },
      { from: 'bloom-filter', to: 'frontier', label: 'Enqueue new unvisited URLs' }
    ],
    keyConsiderations: [
      'Politeness & Domain Throttling: URL Frontier uses two queues: Priority queue (PageRank score) and Politeness queue (1 queue per hostname with delay timer) so a domain is never hammered.',
      'Deduplication at Scale: Storing 1 Billion URLs requires a Bloom filter in memory (~1.2 GB RAM for 99% accuracy) followed by a persistent RocksDB key-value store.',
      'Avoiding Spider Traps: Deep URL path limits, cyclic graph detection, and dynamic page query-param stripping.'
    ],
    sampleQuestions: [
      'How does the URL Frontier manage politeness so that 10,000 workers do not overwhelm a single small website?',
      'Why is a Bloom filter ideal for URL deduplication before hitting disk?',
      'How do you detect near-duplicate pages (e.g. mirror sites) using SimHash?'
    ]
  }
`;

const insertMarker = '    sampleQuestions: [\n      \'Why does Fixed Window algorithm suffer from the 2x burst at boundary transitions?\',\n      \'How would you write a Redis Lua script for Token Bucket rate limiting?\',\n      \'How do you protect internal services if the Redis cache cluster is partitioned or fails?\'\n    ]\n  }\n];';

if (!code.includes(insertMarker)) {
  console.error('Marker not found!');
  process.exit(1);
}

const replacement = '    sampleQuestions: [\n      \'Why does Fixed Window algorithm suffer from the 2x burst at boundary transitions?\',\n      \'How would you write a Redis Lua script for Token Bucket rate limiting?\',\n      \'How do you protect internal services if the Redis cache cluster is partitioned or fails?\'\n    ]\n  }' + newBlueprints + '];';

code = code.replace(insertMarker, replacement);
fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully appended 5 system design blueprints!');
