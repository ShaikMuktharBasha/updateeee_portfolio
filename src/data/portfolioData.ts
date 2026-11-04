import { Project, SkillCategory, Certification, Education } from '../types';

export const PERSONAL_INFO = {
  name: 'Shaik Mukthar Basha',
  shortName: 'Mukthar',
  wordmark: 'MUKTHAR.',
  role: 'Computer Science Student & Full-Stack Developer',
  institution: 'KL University',
  degree: 'B.Tech in Computer Science & Engineering',
  graduationYear: '2026',
  email: 'shaikmuktharbasha2004@gmail.com',
  github: 'https://github.com/ShaikMuktharBasha',
  linkedin: 'https://www.linkedin.com/in/shaik-mukthar-basha-a7192a259',
  location: 'Andhra Pradesh, India',
  status: 'Open to Summer 2025/2026 Internships & Full-time Roles',
  availability: 'Available immediately for impactful engineering opportunities',
  bio: `I'm a Computer Science student and full-stack developer passionate about building useful applications, intelligent systems, and seamless digital experiences.`,
  extendedBio: `Currently pursuing my Bachelor of Technology in Computer Science and Engineering at KL University. My work bridges intuitive user interface engineering with dependable distributed backend architectures and applied artificial intelligence. I focus on creating purposeful digital tools that solve tangible problems through clean code, systems thinking, and minimalist craftsmanship.`
};

export const EDUCATION_DATA: Education = {
  institution: 'KL University (Koneru Lakshmaiah Education Foundation)',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering',
  period: '2022 — 2026',
  location: 'Vijayawada, India',
  grade: 'CGPA: 8.9 / 10.0',
  highlights: [
    'Core Focus: Data Structures & Algorithms, Systems Design, Full-Stack Architecture, and Machine Learning.',
    'Active participant in university hackathons, national coding symposiums, and engineering research initiatives.',
    'Technical lead across student software projects, guiding peers in clean code principles and Git version control workflows.'
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aetherpath',
    title: 'AetherPath',
    category: 'AI & ML',
    tagline: 'AI Personalized Learning Path Recommender',
    description: 'An intelligent educational guidance engine engineered for the HCLTech Amplified Challenge. Evaluates user competency profiles, identifies curriculum knowledge gaps, and dynamically generates modular, step-by-step learning roadmaps with curated milestones.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'OpenAI API', 'Vector Graph'],
    liveUrl: 'https://hcltechamplifiedchallenge.vercel.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: true,
    highlights: [
      'Built for HCLTech Amplified Challenge',
      'Dynamic curriculum synthesis algorithm',
      'Real-time competency assessment telemetry'
    ],
    previewType: 'aetherpath'
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot',
    category: 'AI & ML',
    tagline: 'Contextual Document Intelligence & Semantic Q&A',
    description: 'Enterprise-grade Retrieval-Augmented Generation application allowing semantic querying across private document corpuses. Employs vector chunking, dense semantic embeddings, and verifiable source citations to eliminate hallucinations in technical documents.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'HuggingFace', 'OpenAI'],
    liveUrl: 'https://ragchatbot-muktharshaik.streamlit.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: true,
    highlights: [
      'Multi-format PDF and text chunking',
      'Vector similarity matching with FAISS',
      'Inline source attribution and citation verification'
    ],
    previewType: 'rag-chatbot'
  },
  {
    id: 'content-analyzer',
    title: 'Content Analyzer',
    category: 'AI & ML',
    tagline: 'Natural Language Quality & Readability Auditor',
    description: 'Multi-dimensional linguistic inspection platform that processes digital copy, evaluating sentiment nuance, structural readability indexes, keyword densities, and tone consistency to elevate editorial quality before publication.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'NLP Heuristics'],
    liveUrl: 'https://contentanalyzer-muktharshaik.vercel.app/login',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: false,
    highlights: [
      'Flesch-Kincaid & Gunning Fog readability metrics',
      'Real-time tone classification & sentiment polarity',
      'Exportable editorial audit summaries'
    ],
    previewType: 'content-analyzer'
  },
  {
    id: 'sentinel-trust-os',
    title: 'Sentinel Trust OS',
    category: 'Systems & Tools',
    tagline: 'Decentralized Zero-Trust Governance & Verification',
    description: 'Tamper-evident verification framework developed during hackathon competition. Implements cryptographic credential verification, zero-trust access policies, and immutable audit logs to protect collaborative enterprise workflows.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SHA-256 Auth', 'REST API'],
    liveUrl: 'https://hackathon-t162-trust.vercel.app/login',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: true,
    highlights: [
      'Hackathon-winning zero-trust security architecture',
      'Cryptographic token verification gate',
      'Real-time role-based policy enforcement'
    ],
    previewType: 'sentinel-trust'
  },
  {
    id: 'movie-planner',
    title: 'Movie Planner',
    category: 'Full-Stack',
    tagline: 'Intelligent Watchlist & Cinema Scheduler',
    description: 'A refined cinema discovery and watch party orchestration platform. Seamlessly integrates TMDB APIs to filter movies by emotional tone, manage custom watch queues, and generate synchronized screening schedules.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'TMDB REST API', 'LocalStorage Sync', 'Lucide'],
    liveUrl: 'https://movie-planner-frontend-sigma.vercel.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: false,
    highlights: [
      'Real-time TMDB catalogue pagination & search',
      'Dynamic mood clustering & genre filters',
      'Offline-capable watchlist persistence'
    ],
    previewType: 'movie-planner'
  },
  {
    id: 'gatherflow',
    title: 'GatherFlow',
    category: 'Full-Stack',
    tagline: 'Full-Cycle Event Management & RSVP Platform',
    description: 'End-to-end event coordination web service handling tier-based registration workflows, attendee analytics, instant digital QR entry passes, and schedule notifications for academic and corporate organizers.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'RESTful API'],
    liveUrl: 'https://eventmanagement-muktharshaik.vercel.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: true,
    highlights: [
      'Complete MongoDB database schema & REST API backend',
      'Ticket tiering & automated capacity limits',
      'Organizer dashboard with attendance telemetry'
    ],
    previewType: 'gatherflow'
  },
  {
    id: 'study-assistant',
    title: 'Study Assistant',
    category: 'AI & ML',
    tagline: 'Cognitive Academic Copilot & Recall Engine',
    description: 'An AI-powered academic companion designed to accelerate learning retention. Automatically generates spaced repetition flashcard decks, synthesizes concept study outlines, and creates personalized self-test quizzes from lecture syllabi.',
    technologies: ['React', 'Firebase Auth', 'Tailwind CSS', 'OpenAI API', 'State Management'],
    liveUrl: 'https://muktharshaik-study-assistant.vercel.app/login',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: false,
    highlights: [
      'Automated flashcard generation from raw notes',
      'Adaptive spaced repetition algorithms',
      'Secure multi-user authentication'
    ],
    previewType: 'study-assistant'
  },
  {
    id: 'noteshare',
    title: 'NoteShare',
    category: 'Full-Stack',
    tagline: 'Peer-to-Peer Academic Knowledge Sharing Hub',
    description: 'A collaborative academic repository allowing university peers to share, review, rate, and index course lecture notes, revision cheat sheets, and laboratory guides across departments and semesters.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'REST API', 'Cloud Document Storage'],
    liveUrl: 'https://noteshare-platform-muktharshaik.vercel.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: false,
    highlights: [
      'Modular document classification taxonomy',
      'Community peer reviews and helpfulness ratings',
      'Instant keyword and subject filtering'
    ],
    previewType: 'noteshare'
  },
  {
    id: 'research-paper-workspace',
    title: 'Research Paper Workspace',
    category: 'Systems & Tools',
    tagline: 'Academic Literature Synthesis & Annotation Suite',
    description: 'A focused, distraction-free digital workbench engineered for researchers. Features PDF document rendering, side-by-side annotation, automatic markdown note synthesis, and standard BibTeX citation management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PDF.js', 'Markdown Engine', 'BibTeX Parser'],
    liveUrl: 'https://research-paper-workspace.vercel.app/',
    githubUrl: 'https://github.com/ShaikMuktharBasha',
    featured: true,
    highlights: [
      'Split-view document reader and markdown note editor',
      'BibTeX citation generator and bibliography manager',
      'Local-first cache with cloud export options'
    ],
    previewType: 'research-paper'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core programming languages for algorithmic problem solving and system development.',
    skills: [
      { name: 'Java', level: 'Object-Oriented & Enterprise Systems', highlight: true },
      { name: 'Python', level: 'AI, Data Pipelines & Scripting', highlight: true },
      { name: 'C', level: 'Low-Level Memory & Computing Fundamentals' },
      { name: 'JavaScript', level: 'Modern ES6+ & Asynchronous Workflows', highlight: true },
      { name: 'SQL', level: 'Complex Queries, Indexing & Normalization', highlight: true }
    ]
  },
  {
    category: 'Frontend',
    description: 'Crafting responsive, accessible, high-performance interfaces.',
    skills: [
      { name: 'React', level: 'Hooks, Context, Component Architecture', highlight: true },
      { name: 'Vite', level: 'Next-Gen Frontend Tooling & Fast Bundling' },
      { name: 'HTML5', level: 'Semantic Markup & Web Standards' },
      { name: 'CSS3', level: 'Responsive Layouts, Flexbox & Grid' },
      { name: 'Tailwind CSS', level: 'Utility-First Scalable Styling Systems', highlight: true }
    ]
  },
  {
    category: 'Backend',
    description: 'Constructing resilient APIs and high-concurrency server applications.',
    skills: [
      { name: 'Node.js', level: 'Event-Driven Server Runtimes', highlight: true },
      { name: 'Spring Boot', level: 'Enterprise Java Microservices & Dependency Injection', highlight: true },
      { name: 'REST APIs', level: 'Stateless Protocol Design & Documentation', highlight: true }
    ]
  },
  {
    category: 'Databases',
    description: 'Designing transactional relational schemas and high-throughput document stores.',
    skills: [
      { name: 'MySQL', level: 'Relational Schema Design & ACID Compliance', highlight: true },
      { name: 'MongoDB', level: 'Document Modeling & Aggregation Pipelines', highlight: true }
    ]
  },
  {
    category: 'Cloud & DevOps',
    description: 'Automating continuous integration, deployment pipelines, and cloud instances.',
    skills: [
      { name: 'AWS', level: 'EC2, S3, IAM, Cloud Deployment Fundamentals', highlight: true },
      { name: 'Azure', level: 'Virtual Machines, App Services & Azure Fundamentals', highlight: true },
      { name: 'Docker', level: 'Containerization & Multi-Environment Packaging' },
      { name: 'Jenkins', level: 'Automated CI/CD Pipeline Build Triggers' },
      { name: 'Git & GitHub', level: 'Version Control, Branching & PR Collaboration', highlight: true }
    ]
  },
  {
    category: 'AI / ML',
    description: 'Harnessing modern machine learning and generative AI architectures.',
    skills: [
      { name: 'Machine Learning', level: 'Supervised & Unsupervised Algorithms', highlight: true },
      { name: 'Deep Learning', level: 'Neural Networks & Representation Learning' },
      { name: 'RAG Systems', level: 'Retrieval-Augmented Generation & Vector Stores', highlight: true },
      { name: 'Generative AI', level: 'LLM Prompt Engineering, API Orchestration & Function Calling', highlight: true }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'az-900',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    issueDate: 'Certified',
    credentialId: 'AZ-900-MSFT-VERIFIED',
    badgeCode: 'AZ-900',
    skills: ['Cloud Computing Concepts', 'Azure Architecture', 'Security & Governance', 'Azure Pricing & Support']
  },
  {
    id: 'mongodb-cert',
    title: 'MongoDB Certified Associate Developer',
    issuer: 'MongoDB University',
    issueDate: 'Certified',
    credentialId: 'MDB-ASSOC-DEV-VERIFIED',
    badgeCode: 'MDB-DEV',
    skills: ['Document Modeling', 'Aggregation Framework', 'CRUD Performance', 'Indexing Strategies']
  },
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'Certified',
    credentialId: 'AWS-CCP-VERIFIED',
    badgeCode: 'AWS-CCP',
    skills: ['Cloud Value Proposition', 'Core AWS Services', 'Security & Compliance', 'Cloud Economics']
  },
  {
    id: 'ibm-ai',
    title: 'IBM Introduction to Artificial Intelligence',
    issuer: 'IBM',
    issueDate: 'Certified',
    credentialId: 'IBM-AI-FOUNDATIONS-VERIFIED',
    badgeCode: 'IBM-AI',
    skills: ['Machine Learning Foundations', 'Deep Learning Paradigms', 'NLP Concepts', 'AI Ethics']
  }
];

export const GITHUB_STATS = {
  username: 'ShaikMuktharBasha',
  profileUrl: 'https://github.com/ShaikMuktharBasha',
  totalRepositories: 18,
  activeBranches: 24,
  primaryStack: ['TypeScript', 'Python', 'Java', 'JavaScript'],
  topRepos: [
    {
      name: 'aetherpath-learning-ai',
      description: 'AI Personalized Learning Path Recommender for HCLTech Amplified Challenge.',
      stars: 12,
      forks: 3,
      language: 'TypeScript'
    },
    {
      name: 'rag-document-chatbot',
      description: 'Retrieval-Augmented Generation pipeline with Streamlit, LangChain and FAISS.',
      stars: 16,
      forks: 5,
      language: 'Python'
    },
    {
      name: 'sentinel-trust-os',
      description: 'Zero-trust decentralized credential verification and audit integrity protocol.',
      stars: 9,
      forks: 2,
      language: 'TypeScript'
    },
    {
      name: 'gatherflow-event-platform',
      description: 'Event orchestration system with full-stack MongoDB and Express backend.',
      stars: 8,
      forks: 2,
      language: 'JavaScript'
    }
  ]
};

