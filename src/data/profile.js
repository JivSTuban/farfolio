// Single source of truth for the portfolio copy.
// Canonical source: Jiv_Tuban_Resume_active_supabase_2026-10-05.pdf (Desktop).
// Every number below is copied from that resume; change the resume first, then this file.

export const person = {
  name: 'Jiv Tuban',
  roles: ['AI Engineer', 'Technical Lead', 'Full-Stack Developer'],
  location: 'Cebu, Philippines',
  email: 'jivtuban14@gmail.com',
  github: 'https://github.com/JivSTuban',
  linkedin: 'https://www.linkedin.com/in/jiv-tuban/',
  summary:
    'I build AI automation and multi-tenant RAG systems that run in production: lead routing, ad generation, reporting pipelines and the integrations between them.',
};

// Numbers that carry the pitch. `of` names where the figure comes from so it can be checked.
export const proof = [
  { value: '97.0%', label: 'Slack booking attribution, up from 54.3%', of: 'Traciety' },
  { value: '166', label: 'merged pull requests, 62% of the dashboard repo', of: 'Traciety' },
  { value: '500+', label: 'daily print orders automated, 85% less manual time', of: 'Freckles Graphics' },
  { value: '377', label: 'passing tests on a job-application engine used by 11 people', of: 'AutoApply' },
  { value: 'Top prize', label: 'among 196 teams at the GCash ImaGnation hackathon', of: 'GAssure' },
];

// Newest first. `stops` feeds the route-board lettering (place names, not job duties).
export const experience = [
  {
    code: 'TRC',
    role: 'AI Engineer',
    type: 'Contract, flexible hours',
    company: 'Traciety',
    place: 'New York, NY',
    mode: 'Remote',
    start: 'Apr 2026',
    end: 'Present',
    logo: '/assets/traciety_logo.jpeg',
    bullets: [
      'Traced why 46% of Slack booking messages were not linked to a clinic to n8n workflows using an anonymous database key that a security hardening had silently blocked (200 OK, zero rows); fixed them, lifting attribution from 54.3% to 97.0% and reviving a location sync that had failed 171 runs in a row.',
      "Built a direct Meta Ads reporting pipeline that reads performance straight from Meta (34 of 48 ad accounts at launch) and measures it against GoHighLevel's numbers, so the dashboard can move off GoHighLevel as its ad-data source.",
      'Corrected billing due dates that had drifted for 42 of 57 matched clients (now 0) by syncing from Notion; closed an anonymous-key read and write hole on client location tables and cleared 18 Supabase Security Advisor errors.',
      'Built and extended the image-ad and HeyGen video-ad generation surfaces in the production dashboard, drawing on a 300+ ad creative library, so the team generates medspa ads from structured service and offer inputs instead of producing each asset by hand.',
      'Shipped 166 merged pull requests (62% of the dashboard repo, Apr to Oct 2026); owned technical operations for 40+ client sub-accounts, 18 n8n workflows, and 6+ data systems.',
    ],
  },
  {
    code: 'CRW',
    role: 'Technical Lead',
    type: 'Full-time contract',
    company: 'Crowdsnare AI',
    place: 'Houston, TX',
    mode: 'Remote',
    start: 'Apr 2025',
    end: 'Oct 2025',
    logo: '/assets/crowdsnare_logo.jpeg',
    bullets: [
      'Managed end-to-end development for 6 AI agent products while serving as the technical point of contact for clients, leadership, and junior teammates.',
      'Architected production lead automation using n8n and GoHighLevel, reducing lead processing from manual hours to seconds with OpenAI, Supabase, MCP-enabled tooling, and webhook routing.',
      'Restored critical production workflows by debugging logic-path routing issues, standardizing payload handling, and adding retry patterns to keep lead ingestion reliable.',
    ],
  },
  {
    code: 'AYH',
    role: 'Software Engineer Intern',
    type: 'Internship',
    company: 'Ayahay',
    place: 'Cebu, Philippines',
    mode: 'Hybrid',
    start: 'Nov 2025',
    end: 'Mar 2026',
    logo: '/assets/ayahay_logo.jpeg',
    bullets: [
      'Architected and deployed multi-tenant RAG chatbot infrastructure for Ayahay v2, shipping a backend knowledge-base SDK and React chat UI library for reusable tenant integrations.',
      'Refactored chatbot services into NestJS microservices, reducing response latency by about 40% and improving retrieval recall by about 57% through similarity-threshold tuning and prompt optimization.',
      'Centralized business logic for Next.js and NestJS maritime booking systems in an API gateway and optimized PostgreSQL route and schedule lookups to sub-second latency.',
    ],
  },
  {
    code: 'FRK',
    role: 'Full-Stack Developer',
    type: 'Full-time',
    company: 'Freckles Graphics, Inc.',
    place: 'Lafayette, IN',
    mode: 'Remote',
    start: 'Jul 2024',
    end: 'Mar 2025',
    logo: '/assets/frecklesgraphics_logo.jpeg',
    bullets: [
      'Architected an automated production workflow for Polaris DTG printers processing 500+ daily orders, integrating ShopWorks API, WaveSpeed AI, QR generation, and intelligent artwork sizing to reduce manual processing time by 85% for a $12M+ annual revenue operation.',
      'Built a Next.js and TypeScript AI image generation studio enabling designers to create 1K-4K artwork with text-to-image generation, 10-image reference composition, style presets, sub-30-second generation, and 95%+ success rates.',
      'Built Python/Flask and Supabase order tooling for 5 print locations with auto-crop, transparent-border removal, white-pixel detection, and a RAG-powered eFORCE CRM assistant.',
    ],
  },
  {
    code: 'CFA',
    role: 'AI Automation Developer',
    type: 'Part-time',
    company: 'Cinematography for Actors Institute',
    place: 'Los Angeles, CA',
    mode: 'Remote',
    start: 'Jul 2025',
    end: 'Jan 2026',
    logo: '/assets/cinematographyforactors_logo.jpeg',
    bullets: [
      'Architected and deployed AI-powered email automation on Google Cloud Run, reducing response time by 70% with contextual replies grounded in 50+ SOPs, FAQs, and internal company documents.',
      'Built grant information request automation using Cloud Run, Node.js, and Google Drive integrations, eliminating manual notification workflows and enabling document-aware responses with attachments.',
      'Managed Google Cloud infrastructure across Cloud Run, Pub/Sub, Secret Manager, and Cloud Storage while optimizing Ghost CMS mobile Lighthouse from 45 to 85+ (LCP from 15.4s to under 3.5s).',
    ],
  },
];

export const projects = [
  {
    name: 'AutoApply',
    tagline: 'Multi-tenant job application engine',
    when: 'Jun 2026 to Present',
    icon: 'send',
    screen: { value: '377', label: 'passing tests', lines: ['parse resume', 'score fit with a chain of AI models', 'submit the application'] },
    stack: ['Node.js', 'Playwright', 'Supabase', 'React', 'TypeScript', 'OpenAI'],
    bullets: [
      'Built and operate a job-application SaaS used by 11 people: it parses resumes, scores fit with a chain of AI models, and submits through Playwright and direct Greenhouse, Ashby, Lever, and micro1 integrations (113 commits across backend, frontend, and database repos).',
      'Designed an ATS collector that sweeps public board APIs (60 boards, 3,186 jobs in one sweep) into a job index, so each run scores about 300 listings instead of only the newest 30.',
      'Wrote 377 passing tests and root-caused two production failures: a stored resume that was a raw multipart envelope (the PDF began at byte 267), which corrupted every attachment, and an AI-provider outage that dropped applications to zero, fixed with model fallthrough and an outage brake.',
    ],
  },
  {
    name: 'weewoo',
    tagline: 'End-to-end encrypted location sharing and chat',
    when: 'Sep 2026',
    icon: 'lock',
    screen: { value: '36', label: 'row-level-security policies', lines: ['argon2id key derivation', 'sealed box per circle key', 'new keys every epoch'] },
    stack: ['Flutter', 'Dart', 'Supabase', 'libsodium', 'Argon2id'],
    bullets: [
      'Built a self-hostable, Life360-style mobile app where the server stores only ciphertext: Argon2id key derivation from the password, libsodium sealed boxes for per-member circle keys, and per-epoch keys so a removed member\'s key opens nothing sent afterwards.',
      'Enforced privacy in the database rather than the client: 36 row-level-security policies across 9 tables gate who can read a position, turning sharing off deletes the stored coordinate, and accounts need no email or phone number.',
      'Shipped 11.7k lines of Dart with 223 passing tests and a design doc covering the threat model, key lifecycle, and what the operator can still observe.',
    ],
  },
  {
    name: 'Ayahay RAG Knowledge Base SDK',
    tagline: 'Open source, powers Ayahay\'s multi-tenant chatbots',
    when: 'Jan 2026 to Apr 2026',
    icon: 'database',
    screen: { value: 'RAG', label: 'knowledge-base SDK', lines: ['ingest documents', 'vector search', 'stream answers', 'live-data tools'] },
    stack: ['TypeScript', 'React', 'OpenAI', 'pgvector', 'Vercel AI SDK'],
    href: 'https://github.com/JivSTuban/knowledge-base-sdk',
    bullets: [
      'Published a TypeScript SDK for document ingestion, vector search, streaming responses, and live-data tools, plus a whitelabel React chat widget, powering Ayahay\'s multi-tenant chatbots.',
    ],
  },
];

export const award = {
  title: 'GCash ImaGnation 2025 Hackathon Winner',
  team: 'CAT5 Team',
  when: 'Nov 2025',
  stack: ['React', 'Supabase', 'Solana', '@solana/web3.js'],
  bullets: [
    'Won top prize among 196 teams and 980 students for GAssure, a blockchain-backed escrow solution addressing middle-man scams in P2P and B2B transactions.',
    'Architected a trustless escrow flow with immutable audit trails, real-time balance tracking, and multi-party transaction handling.',
  ],
};

// The 3D "Work" showcase: the resume's projects plus the hackathon win, in one list.
export const showcase = [
  ...projects,
  {
    name: 'GAssure',
    tagline: `${award.title}, ${award.team}`,
    when: award.when,
    icon: 'shield',
    screen: { value: 'Top prize', label: 'among 196 teams', lines: ['trustless escrow', 'immutable audit trail', 'real-time balances'] },
    stack: award.stack,
    bullets: award.bullets,
  },
];

// Live or public work that is not on the resume, kept to one line each for the CV modal.
export const alsoShipped = [
  { name: 'Austin McClain Portfolio', text: 'Real estate site on React (Vite) and Supabase with live MLS feed automation, 119+ listings worth $13.5M, 95+ Lighthouse.', href: 'https://austinmcclain.com', cta: 'Live site' },
  { name: "Keilah's Cakes and Pastries", text: 'Bakery e-commerce on Next.js 13 and Supabase with 95+ Lighthouse and 40% faster page loads.', href: 'https://keilahs.shop', cta: 'Live site' },
  { name: 'OJTech', text: 'Multi-role training platform for students, employers, liaison officers and admins, on React and Spring Boot, with AI-generated CVs.', href: 'https://github.com/JivSTuban/OJTech', cta: 'GitHub' },
  { name: 'LinkedIn Growth Automation', text: 'A Claude Code skill run by pm2 that sends connection requests and comments on fresh posts each morning, with rate limits.', href: 'https://github.com/JivSTuban/claude-inlinkedin', cta: 'GitHub' },
  { name: 'InvestaBot', text: 'Discord bot that scores stock, crypto and options signals from technical indicators and Perplexity news sentiment.', href: 'https://github.com/JivSTuban/investabot', cta: 'GitHub' },
];

export const education = {
  degree: 'BS Information Technology',
  school: 'Cebu Institute of Technology, University',
  place: 'Cebu, Philippines',
  graduated: 'May 2026',
  coursework: 'Data Structures & Algorithms, Software Engineering, Databases, Web and Mobile Development',
};

export const certifications = [
  { group: 'AI', issuer: 'Anthropic Academy, 18 certificates, Jun 2026', items: ['Claude Code in Action', 'Building with the Claude API', 'Model Context Protocol (Intro and Advanced)', 'Agent Skills', 'Subagents'] },
  { group: 'Cloud', issuer: 'AWS Academy', items: ['Cloud Architecting', 'Cloud Foundations'] },
  { group: 'Software', issuer: 'Udemy', items: ['Python & Django Full Stack Bootcamp', 'Web API in .NET 8', 'PHP Full Stack Bootcamp', 'Angular, The Complete Guide'] },
  { group: 'Additional', issuer: '', items: ['Accenture Digital Skills: UX', 'Foundational C# with Microsoft (freeCodeCamp)', 'Java OOP Certification (Codechum)'] },
];

export const skills = [
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Spring Boot', 'Django', 'FastAPI', 'Flask', 'ASP.NET Core', 'Laravel', 'REST APIs', 'microservices'] },
  { group: 'Frontend and mobile', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'Dart', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'Bootstrap', 'Blazor'] },
  { group: 'Data and platforms', items: ['Supabase', 'PostgreSQL', 'MySQL', 'Airtable', 'GoHighLevel', 'Google Sheets', 'Notion', 'Slack'] },
  { group: 'AI and automation', items: ['OpenAI API', 'RAG systems', 'MCP', 'prompt engineering', 'Playwright', 'n8n', 'Zapier', 'Make', 'Vapi', 'ElevenLabs', 'AI agents', 'Claude Code', 'Codex CLI'] },
  { group: 'Cloud and DevOps', items: ['AWS', 'Google Cloud Run', 'Pub/Sub', 'Secret Manager', 'Cloud Storage', 'Docker', 'PM2', 'GitHub', 'CI/CD', 'DigitalOcean', 'Apache Kafka'] },
];
