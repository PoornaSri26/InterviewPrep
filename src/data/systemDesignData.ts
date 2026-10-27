import { SystemDesignTopic } from '../types';

export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'tinyurl',
    title: 'Design a URL Shortener (TinyURL / Bitly)',
    difficulty: 'Easy',
    scaleEstimate: '100M URLs generated per month, 100:1 Read-to-Write ratio (10B redirects/month). Read QPS ~ 3,850, Write QPS ~ 38.',
    requirements: {
      functional: [
        'Given a long URL, service generates a shorter unique alias (e.g. https://tiny.cc/xyz123).',
        'When user accesses the short link, redirect via HTTP 301 or 302 to original long URL.',
        'Custom aliases optional; URLs expire after user-specified TTL or default 5 years.'
      ],
      nonFunctional: [
        'High availability (99.999%): Redirects must not fail.',
        'Real-time redirection with minimal latency (< 20ms P99).',
        'Shortened links should not be guessable or enumerable.'
      ]
    },
    architectureNodes: [
      { id: 'client', label: 'Web / Mobile Client', type: 'client', x: 50, y: 150 },
      { id: 'dns', label: 'DNS / Route 53', type: 'lb', x: 200, y: 150 },
      { id: 'lb', label: 'Global Load Balancer', type: 'lb', x: 350, y: 150 },
      { id: 'gateway', label: 'API Gateway (Rate Limiter)', type: 'gateway', x: 500, y: 150 },
      { id: 'write-svc', label: 'URL Generator Service (Base62 + KGS)', type: 'service', x: 680, y: 80 },
      { id: 'read-svc', label: 'Redirect Service', type: 'service', x: 680, y: 220 },
      { id: 'cache', label: 'Distributed Redis Cache (LRU)', type: 'cache', x: 880, y: 150 },
      { id: 'db', label: 'NoSQL / DynamoDB (Key-Value Store)', type: 'db', x: 1060, y: 150 }
    ],
    architectureConnections: [
      { from: 'client', to: 'dns', label: 'Resolve domain' },
      { from: 'dns', to: 'lb', label: 'Route traffic' },
      { from: 'lb', to: 'gateway', label: 'TLS termination' },
      { from: 'gateway', to: 'write-svc', label: 'POST /shorten' },
      { from: 'gateway', to: 'read-svc', label: 'GET /{hash}' },
      { from: 'read-svc', to: 'cache', label: 'Cache hit (<5ms)' },
      { from: 'read-svc', to: 'db', label: 'Cache miss fallback' },
      { from: 'write-svc', to: 'db', label: 'Store URL mapping' },
      { from: 'write-svc', to: 'cache', label: 'Warm cache' }
    ],
    keyConsiderations: [
      'Base62 Encoding vs MD5/SHA256 truncation: Base62 with 7 characters gives 62^7 = 3.5 Trillion unique URLs.',
      'Key Generation Service (KGS): Pre-generate random 7-character strings in advance and store in a dedicated queue to guarantee zero collisions.',
      'HTTP 301 Permanent Redirect vs 302 Temporary Redirect: 301 lets browser cache redirect (reduces server load), but 302 enables analytics tracking on every single click.',
      'Cache Eviction: With 80/20 rule, caching top 20% of trending links in Redis satisfies 80% of read traffic.'
    ],
    sampleQuestions: [
      'How do you prevent collisions when multiple app servers generate keys concurrently?',
      'What happens when a database shard goes down? How do you partition URL keys?',
      'How would you handle malicious actors scraping URLs or generating spam links?'
    ]
  },
  {
    id: 'youtube-streaming',
    title: 'Design a Video Streaming Platform (YouTube / Netflix)',
    difficulty: 'Hard',
    scaleEstimate: '2 Billion active users, 500 hours of video uploaded per minute. 1 Billion hours watched daily. Bandwidth ~ Petabits/sec.',
    requirements: {
      functional: [
        'Upload videos with automatic multi-resolution transcoding (1080p, 720p, 480p, 360p).',
        'Stream videos smoothly with adaptive bitrate (HLS / DASH) based on network speed.',
        'Search video titles, tags, and user metadata.',
        'View count incrementation and engagement metrics (likes, comments).'
      ],
      nonFunctional: [
        'Ultra-low buffering latency; smooth video playback without stutter.',
        'High availability and durability for uploaded videos (never lose original media).',
        'Global edge distribution via CDN.'
      ]
    },
    architectureNodes: [
      { id: 'creator', label: 'Creator Upload', type: 'client', x: 50, y: 70 },
      { id: 'viewer', label: 'Viewer App / Browser', type: 'client', x: 50, y: 240 },
      { id: 'upload-lb', label: 'Ingest Load Balancer', type: 'lb', x: 230, y: 70 },
      { id: 'cdn', label: 'Global CDN Edge Nodes (Cloudflare/Fastly)', type: 'cache', x: 230, y: 240 },
      { id: 'upload-svc', label: 'Upload Service (Chunked / Resumable)', type: 'service', x: 420, y: 70 },
      { id: 'raw-s3', label: 'Raw Video Storage (S3 / GCS)', type: 'storage', x: 620, y: 70 },
      { id: 'queue', label: 'Transcoding Queue (Kafka)', type: 'queue', x: 790, y: 70 },
      { id: 'transcoder', label: 'Transcoder Workers (FFmpeg / HLS Chunks)', type: 'service', x: 970, y: 70 },
      { id: 'transcoded-s3', label: 'Processed Chunks Storage (S3)', type: 'storage', x: 970, y: 240 },
      { id: 'meta-db', label: 'Metadata DB (Cassandra / Spanner)', type: 'db', x: 620, y: 240 }
    ],
    architectureConnections: [
      { from: 'creator', to: 'upload-lb', label: 'Multipart Upload' },
      { from: 'upload-lb', to: 'upload-svc', label: 'Chunk stream' },
      { from: 'upload-svc', to: 'raw-s3', label: 'Save master' },
      { from: 'upload-svc', to: 'queue', label: 'Enqueue task' },
      { from: 'queue', to: 'transcoder', label: 'Consume' },
      { from: 'transcoder', to: 'transcoded-s3', label: 'Output HLS segments (.ts + .m3u8)' },
      { from: 'transcoder', to: 'meta-db', label: 'Save manifest' },
      { from: 'viewer', to: 'cdn', label: 'Fetch video segment' },
      { from: 'cdn', to: 'transcoded-s3', label: 'Origin fetch on cache miss' }
    ],
    keyConsiderations: [
      'Adaptive Bitrate Streaming (ABR): Use HLS or MPEG-DASH. Video is split into 2-10 second segments across multiple bitrates. Client automatically selects segment bitrate dynamically.',
      'CDN Geo-Caching: Popular videos are cached close to users in regional Internet Exchange Points (IXPs) and ISP caches.',
      'Resumable Multipart Uploads: Upload large 4K files in 5MB chunks with checksums. If connection drops, resume from the last successful chunk.',
      'Eventual Consistency on View Counts: Buffer view events through Kafka + Spark Streaming / Flink and write aggregated increments to Cassandra periodically.'
    ],
    sampleQuestions: [
      'How do you prevent thundering herd problem when a viral video is first published?',
      'How does the player switch bitrates seamlessly without audio/video desync?',
      'What storage tiering strategy reduces cost for videos that haven’t been watched in 90 days?'
    ]
  },
  {
    id: 'rate-limiter',
    title: 'Design a Distributed Rate Limiter',
    difficulty: 'Medium',
    scaleEstimate: '500,000 requests/sec across 100 geographically distributed microservices.',
    requirements: {
      functional: [
        'Limit user or API key to N requests per window (e.g. 100 requests per minute).',
        'Return HTTP 429 Too Many Requests with `Retry-After` header when limit exceeded.'
      ],
      nonFunctional: [
        'Sub-millisecond latency overhead (< 1ms per check).',
        'Accurate distributed synchronization across multiple application instances.',
        'Fault-tolerant: If rate limiter fails, decide fail-open vs fail-closed policy.'
      ]
    },
    architectureNodes: [
      { id: 'client', label: 'Client / 3rd Party API Caller', type: 'client', x: 60, y: 150 },
      { id: 'gw', label: 'Envoy / API Gateway Layer', type: 'gateway', x: 280, y: 150 },
      { id: 'limiter-middleware', label: 'Rate Limiter Middleware', type: 'service', x: 500, y: 150 },
      { id: 'redis-cluster', label: 'Redis Cluster (Sliding Window Log / Lua Script)', type: 'cache', x: 740, y: 150 },
      { id: 'rule-db', label: 'Rules Store (PostgreSQL / Consul)', type: 'db', x: 740, y: 280 },
      { id: 'backend-svc', label: 'Upstream Business Services', type: 'service', x: 960, y: 150 }
    ],
    architectureConnections: [
      { from: 'client', to: 'gw', label: 'API Request' },
      { from: 'gw', to: 'limiter-middleware', label: 'Check quota' },
      { from: 'limiter-middleware', to: 'redis-cluster', label: 'EVALSHA Lua script (Atomic check & inc)' },
      { from: 'limiter-middleware', to: 'rule-db', label: 'Load tier configs' },
      { from: 'limiter-middleware', to: 'backend-svc', label: 'Pass if allowed' }
    ],
    keyConsiderations: [
      'Algorithms Comparison: Token Bucket (allows bursts, low memory), Leaky Bucket (smooths traffic rate), Fixed Window Counter (vulnerable to 2x boundary spike), Sliding Window Log (accurate but high memory), Sliding Window Counter (hybrid best practice).',
      'Race Conditions in Distributed Redis: Use Redis Lua scripts or MULTI/EXEC transactions to execute read-and-increment atomically without separate roundtrips.',
      'Synchronization across Multi-Region: Use local Redis in each data center with asynchronous synchronization or sticky geographic routing.'
    ],
    sampleQuestions: [
      'Why does Fixed Window algorithm suffer from the 2x burst at boundary transitions?',
      'How would you write a Redis Lua script for Token Bucket rate limiting?',
      'How do you protect internal services if the Redis cache cluster is partitioned or fails?'
    ]
  }
];

export const systemDesignCheatSheet = {
  latencyNumbers: [
    { operation: 'L1 CPU Cache Reference', time: '1 ns', relative: '0.001 μs' },
    { operation: 'Branch Mispredict', time: '3 ns', relative: '0.003 μs' },
    { operation: 'L2 CPU Cache Reference', time: '4 ns', relative: '0.004 μs' },
    { operation: 'RAM Main Memory Access', time: '100 ns', relative: '0.1 μs' },
    { operation: 'Send 1KB over 1 Gbps Network', time: '10,000 ns', relative: '10 μs' },
    { operation: 'Read 1MB sequentially from SSD', time: '200,000 ns', relative: '200 μs' },
    { operation: 'Read 1MB sequentially from HDD', time: '20,000,000 ns', relative: '20 ms' },
    { operation: 'Round trip US East to West Coast', time: '60,000,000 ns', relative: '60 ms' },
    { operation: 'Round trip transatlantic (NY -> London)', time: '150,000,000 ns', relative: '150 ms' }
  ],
  availabilityNines: [
    { level: '99% (Two 9s)', downtimeYear: '3.65 days', downtimeMonth: '7.20 hours' },
    { level: '99.9% (Three 9s)', downtimeYear: '8.76 hours', downtimeMonth: '43.2 minutes' },
    { level: '99.99% (Four 9s)', downtimeYear: '52.6 minutes', downtimeMonth: '4.32 minutes' },
    { level: '99.999% (Five 9s)', downtimeYear: '5.26 minutes', downtimeMonth: '25.9 seconds' }
  ],
  frameworkSteps: [
    { step: '1. Clarify Scope & Estimate Scale (5-7 mins)', desc: 'Ask clarifying questions on user personas, core features, traffic QPS, storage footprint over 5 years, and SLA requirements.' },
    { step: '2. High-Level Architecture (10-15 mins)', desc: 'Draw end-to-end data flow: Clients -> CDN -> Load Balancers -> API Gateways -> Microservices -> Cache -> Primary/Replica DBs.' },
    { step: '3. Deep-Dive Core Components (15-20 mins)', desc: 'Dive into critical bottlenecks: data model & schemas, sharding keys, indexing, distributed caching, idempotency, and asynchronous workers.' },
    { step: '4. Bottlenecks & Fault Tolerance (5-8 mins)', desc: 'Address single points of failure (SPOF), replication lag, rate limiting, circuit breakers, and monitoring/alerting.' }
  ]
};
