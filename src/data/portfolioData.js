export const personalInfo = {
  name: "Hidayathullah",
  title: "Senior Full-Stack & AI Systems Engineer",
  subtitle: "Crafting Award-Winning 3D Web Experiences, High-Scale SaaS Platforms & Intelligent AI Agents",
  about: "I am a visionary developer passionate about building high-performance web applications, immersive 3D interactive experiences, and production-ready AI tools. With expertise across React 19, Three.js, Node.js, Python, and Cloud Architecture, I bridge the gap between high-level engineering and breathtaking UI/UX design.",
  location: "Bangalore, India / Remote Worldwide",
  email: "hidayathullah.dev@gmail.com",
  phone: "+91 98765 43210",
  availability: "Available for High-Impact Projects & Senior Roles",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 35, suffix: "+" },
    { label: "Technologies Mastered", value: 24, suffix: "" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ]
};

export const projects = [
  {
    id: "life-flow",
    title: "Life Flow - Smart Blood Donor Finder",
    category: "Full-Stack / Healthcare",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description: "Real-time emergency blood donation matchmaking platform connecting donors with patients near them using geospatial indexing and automated SMS dispatch.",
    features: [
      "Geolocation-based instant donor matching within a 10km radius",
      "Real-time Twilio emergency notification dispatch",
      "Live hospital inventory tracking and emergency request dashboard",
      "HIPAA-compliant encrypted donor records and history tracking"
    ],
    techStack: ["React 19", "Node.js", "Express", "MongoDB", "Geospatial Indexing", "Twilio", "TailwindCSS"],
    liveDemo: "https://example.com/lifeflow",
    github: "https://github.com/hidayathullah/life-flow",
    stats: { users: "10K+", responseTime: "< 2 mins", rating: "4.9/5" }
  },
  {
    id: "taskflow-enterprise",
    title: "TaskFlow Enterprise",
    category: "SaaS / Enterprise",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description: "Next-gen workspace collaboration platform featuring real-time collaborative whiteboards, automated Kanban workflows, and AI summary insights.",
    features: [
      "Real-time multiplayer canvas powered by WebSockets & CRDTs",
      "Automated task prioritization using LLM analysis",
      "Custom role-based permission access control (RBAC)",
      "Dark mode aesthetic with customizable widget layouts"
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Socket.io", "PostgreSQL", "Prisma", "Zustand"],
    liveDemo: "https://example.com/taskflow",
    github: "https://github.com/hidayathullah/taskflow-enterprise",
    stats: { activeTeams: "500+", uptime: "99.99%", latency: "25ms" }
  },
  {
    id: "civil-saas",
    title: "Civil SaaS Platform",
    category: "Web App / Infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description: "Comprehensive civil engineering project management and estimation platform designed to digitize blueprints, track material costs, and monitor timelines.",
    features: [
      "Interactive CAD blueprint viewer and annotation tool",
      "Automated material estimation & cost projection engine",
      "Site progress video feed integration and daily reporting",
      "Multi-currency budget analytics and exportable PDFs"
    ],
    techStack: ["React", "Three.js", "Python FastAPI", "PostgreSQL", "Docker", "AWS S3", "GSAP"],
    liveDemo: "https://example.com/civilsaas",
    github: "https://github.com/hidayathullah/civil-saas-platform",
    stats: { projectsTracked: "$12M+", accuracy: "98.5%", contractors: "1.2K" }
  },
  {
    id: "chessverse",
    title: "ChessVerse 3D",
    category: "Game Dev / 3D",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description: "Immersive 3D online multiplayer chess game with custom thematic environments, Stockfish AI engine integration, and rated matchmaking.",
    features: [
      "Custom procedural 3D board themes and realistic piece physics",
      "Play against Stockfish 16 engine with customizable difficulty levels",
      "Real-time WebRTC peer-to-peer multiplayer with move validation",
      "Detailed PGN move history analysis and blunder detection"
    ],
    techStack: ["React Three Fiber", "Three.js", "Stockfish Engine", "WebRTC", "GLSL Shaders", "TailwindCSS"],
    liveDemo: "https://example.com/chessverse",
    github: "https://github.com/hidayathullah/chessverse-3d",
    stats: { matchesPlayed: "50K+", fps: "60 FPS", globalRankings: "Live" }
  },
  {
    id: "smart-money",
    title: "Smart Money Simple Life",
    category: "Fintech / Mobile",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    description: "AI-driven personal finance manager that categorizes expenses automatically, predicts monthly spending patterns, and guides investment goals.",
    features: [
      "Automated bank SMS parsing & receipt OCR scanner",
      "Predictive cash flow modeling and budget alert notifications",
      "Interactive financial goal planner with compound interest calculator",
      "Biometric authentication and end-to-end local encryption"
    ],
    techStack: ["React Native", "Expo", "Python AI", "Plaid API", "SQLite", "Chart.js"],
    liveDemo: "https://example.com/smartmoney",
    github: "https://github.com/hidayathullah/smart-money-simple-life",
    stats: { downloads: "25K+", savedByUsers: "$500K+", rating: "4.8" }
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI Autonomous Assistant",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description: "Voice-activated AI desktop co-pilot capable of code refactoring, system automation, calendar management, and contextual file search.",
    features: [
      "Low-latency streaming voice recognition & natural TTS synthesis",
      "Local vector storage (RAG) for instant document understanding",
      "Automated browser web scraping & task execution workflows",
      "Sleek futuristic 3D HUD interface with real-time spectrum visualizer"
    ],
    techStack: ["Electron", "Python", "LangChain", "OpenAI GPT-4o", "ChromaDB", "Three.js HUD"],
    liveDemo: "https://example.com/jarvis-ai",
    github: "https://github.com/hidayathullah/jarvis-ai-assistant",
    stats: { querySpeed: "300ms", accuracy: "97%", voiceLatency: "400ms" }
  },
  {
    id: "dresschanger-ai",
    title: "DressChanger AI - Virtual Try-On",
    category: "AI / E-Commerce",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    description: "Generative AI fashion application that allows users to upload their photo and virtually try on outfit collections with photorealistic lighting.",
    features: [
      "Diffusion-based body pose estimation and garment alignment",
      "Photorealistic texture mapping with natural cloth folding dynamics",
      "Instant background replacement and studio lighting simulation",
      "Seamless integration widget for Shopify and custom storefronts"
    ],
    techStack: ["Python", "PyTorch", "Stable Diffusion", "React 19", "FastAPI", "TailwindCSS"],
    liveDemo: "https://example.com/dresschanger",
    github: "https://github.com/hidayathullah/dresschanger-ai",
    stats: { generations: "100K+", processingTime: "3.5s", accuracy: "99%" }
  },
  {
    id: "azeem-ai",
    title: "Azeem AI - Enterprise Knowledge RAG",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    description: "Enterprise search engine that turns company databases, PDFs, and Notion workspaces into a conversational AI knowledge base.",
    features: [
      "Multi-format document processing (PDF, DOCX, CSV, Confluence)",
      "Strict citation linking showing exact source page numbers",
      "Custom fine-tuned embeddings for domain-specific terminology",
      "Enterprise security with role-based document access controls"
    ],
    techStack: ["Python", "Qdrant Vector DB", "LlamaIndex", "React", "FastAPI", "Docker"],
    liveDemo: "https://example.com/azeem-ai",
    github: "https://github.com/hidayathullah/azeem-ai",
    stats: { docIndexed: "1M+", queryTime: "120ms", compliance: "SOC2 Ready" }
  }
];

export const skillsCategories = ["All", "Frontend", "Backend", "Mobile", "Database", "Cloud", "AI", "Tools", "DevOps"];

export const skills = [
  { name: "React 19", category: "Frontend", level: 95, icon: "React", glowColor: "from-cyan-500 to-blue-500" },
  { name: "Three.js / R3F", category: "Frontend", level: 90, icon: "Box", glowColor: "from-purple-500 to-cyan-400" },
  { name: "TypeScript", category: "Frontend", level: 92, icon: "Code", glowColor: "from-blue-600 to-indigo-500" },
  { name: "TailwindCSS", category: "Frontend", level: 98, icon: "Palette", glowColor: "from-teal-400 to-cyan-500" },
  { name: "GSAP & Motion", category: "Frontend", level: 88, icon: "Zap", glowColor: "from-amber-400 to-orange-500" },
  { name: "Next.js", category: "Frontend", level: 90, icon: "Globe", glowColor: "from-gray-300 to-white" },
  { name: "Node.js & Express", category: "Backend", level: 94, icon: "Server", glowColor: "from-green-500 to-emerald-400" },
  { name: "Python / FastAPI", category: "Backend", level: 88, icon: "Terminal", glowColor: "from-yellow-500 to-blue-500" },
  { name: "GraphQL & REST", category: "Backend", level: 90, icon: "Cpu", glowColor: "from-pink-500 to-rose-500" },
  { name: "React Native", category: "Mobile", level: 86, icon: "Smartphone", glowColor: "from-indigo-400 to-cyan-400" },
  { name: "Flutter", category: "Mobile", level: 80, icon: "Layers", glowColor: "from-blue-400 to-cyan-300" },
  { name: "PostgreSQL / Prisma", category: "Database", level: 92, icon: "Database", glowColor: "from-blue-500 to-indigo-600" },
  { name: "MongoDB / Mongoose", category: "Database", level: 95, icon: "HardDrive", glowColor: "from-green-600 to-emerald-500" },
  { name: "Redis Caching", category: "Database", level: 88, icon: "Flame", glowColor: "from-red-500 to-orange-500" },
  { name: "AWS (S3, EC2, Lambda)", category: "Cloud", level: 88, icon: "Cloud", glowColor: "from-amber-500 to-orange-400" },
  { name: "Google Cloud Platform", category: "Cloud", level: 85, icon: "CloudRain", glowColor: "from-blue-500 to-red-500" },
  { name: "Docker & Kubernetes", category: "DevOps", level: 85, icon: "Container", glowColor: "from-blue-600 to-cyan-500" },
  { name: "CI/CD & GitHub Actions", category: "DevOps", level: 90, icon: "GitBranch", glowColor: "from-purple-500 to-indigo-500" },
  { name: "OpenAI API & RAG", category: "AI", level: 92, icon: "Sparkles", glowColor: "from-purple-400 to-pink-500" },
  { name: "PyTorch & Stable Diffusion", category: "AI", level: 82, icon: "Cpu", glowColor: "from-red-400 to-purple-500" },
  { name: "Git & Version Control", category: "Tools", level: 96, icon: "GitCommit", glowColor: "from-orange-500 to-red-500" },
  { name: "Figma & UI/UX Design", category: "Tools", level: 90, icon: "Figma", glowColor: "from-pink-500 to-purple-500" }
];

export const experienceTimeline = [
  {
    role: "Senior Full-Stack & 3D Web Engineer",
    company: "Apex Tech Innovations",
    period: "2023 - Present",
    location: "Bangalore, India",
    description: "Leading the development of high-performance 3D web applications, microservices architecture, and AI integrations for enterprise clients.",
    achievements: [
      "Engineered a Three.js interactive visualizer that boosted client engagement by 140%",
      "Architected sub-100ms API endpoints using Node.js, Redis, and PostgreSQL",
      "Mentored a team of 8 junior/mid-level engineers in modern React 19 design patterns"
    ],
    tech: ["React 19", "Three.js", "Node.js", "TypeScript", "AWS", "TailwindCSS"]
  },
  {
    role: "Full-Stack Developer & AI Specialist",
    company: "Nexus Software Solutions",
    period: "2021 - 2023",
    location: "Remote",
    description: "Developed scalable SaaS products, real-time collaboration platforms, and intelligent computer vision applications.",
    achievements: [
      "Built 'TaskFlow Enterprise' from scratch, scaling to over 10,000 active users",
      "Implemented real-time WebSocket communication channels with zero message loss",
      "Integrated Stable Diffusion AI models into production Web Apps"
    ],
    tech: ["Next.js", "Python", "FastAPI", "MongoDB", "Docker", "Socket.io"]
  },
  {
    role: "Frontend Engineer",
    company: "ByteWave Creative Studio",
    period: "2019 - 2021",
    location: "Bangalore, India",
    description: "Specialized in crafting pixel-perfect, responsive web interfaces, interactive GSAP animations, and custom design systems.",
    achievements: [
      "Delivered 20+ award-winning websites with 98+ Lighthouse scores",
      "Reduced bundle size by 45% using code-splitting and dynamic imports"
    ],
    tech: ["React", "JavaScript", "GSAP", "CSS3", "Framer Motion", "Figma"]
  }
];

export const services = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: "Globe",
    description: "Ultra-fast, responsive, and SEO-optimized web applications crafted with React 19, Next.js, and modern CSS architecture.",
    tags: ["React 19", "Next.js", "TailwindCSS", "SEO"]
  },
  {
    id: "3d-web",
    title: "3D & Creative Web Experiences",
    icon: "Box",
    description: "Immersive 3D websites featuring Three.js, React Three Fiber, custom shaders, and buttery smooth GSAP animations.",
    tags: ["Three.js", "R3F", "GLSL Shaders", "GSAP"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    icon: "Smartphone",
    description: "Cross-platform mobile applications for iOS & Android built with React Native and Expo for native-grade performance.",
    tags: ["React Native", "Expo", "iOS & Android", "Biometrics"]
  },
  {
    id: "ai-integration",
    title: "AI & LLM Integrations",
    icon: "Sparkles",
    description: "Custom AI autonomous agents, OpenAI RAG pipelines, fine-tuned diffusion models, and smart automation bots.",
    tags: ["GPT-4o", "LangChain", "Vector DB", "RAG"]
  },
  {
    id: "backend-apis",
    title: "Backend & API Architecture",
    icon: "Server",
    description: "Scalable REST & GraphQL microservices, real-time WebSocket servers, and secure database schemas.",
    tags: ["Node.js", "Python FastAPI", "PostgreSQL", "Redis"]
  },
  {
    id: "uiux-design",
    title: "UI / UX & Interactive Design",
    icon: "Palette",
    description: "Modern dark-mode design systems, glassmorphism, high-fidelity Figma prototypes, and micro-interaction design.",
    tags: ["Figma", "Design Systems", "Prototyping", "Aesthetics"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    icon: "Cloud",
    description: "Automated CI/CD pipelines, Docker containerization, AWS/GCP deployments, and serverless infrastructure.",
    tags: ["AWS", "Docker", "GitHub Actions", "Nginx"]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    icon: "Zap",
    description: "Custom web scrapers, data processing pipelines, notification systems, and third-party API integrations.",
    tags: ["Python", "Puppeteer", "Twilio", "Zapier Hooks"]
  }
];

export const certificates = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "Official Certification",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://aws.amazon.com/verification"
  },
  {
    id: "cert-2",
    title: "Meta Certified Senior Front-End Developer",
    issuer: "Meta / Coursera",
    date: "2023",
    badge: "Professional Specialization",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://coursera.org/verify"
  },
  {
    id: "cert-3",
    title: "Three.js Journey & Creative Coding Master",
    issuer: "Three.js Journey / Bruno Simon",
    date: "2023",
    badge: "3D Graphics Mastery",
    category: "3D / WebGL",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://threejs-journey.com"
  },
  {
    id: "cert-4",
    title: "TensorFlow & AI Developer Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    badge: "Deep Learning",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://deeplearning.ai"
  }
];

export const githubStats = {
  totalCommits: "2,480+",
  pullRequests: "340+",
  repositories: "48",
  starsEarned: "620+",
  contributions: [
    { day: "Mon", count: 12 },
    { day: "Tue", count: 18 },
    { day: "Wed", count: 24 },
    { day: "Thu", count: 15 },
    { day: "Fri", count: 29 },
    { day: "Sat", count: 8 },
    { day: "Sun", count: 10 }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "CTO at Nexus Innovations",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "Hidayathullah is hands down one of the most talented developers I have ever collaborated with. He delivered an award-winning 3D web platform ahead of schedule with immaculate attention to detail."
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Product Lead at CyberPulse Studio",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "His mastery of Three.js, React 19, and GSAP animations elevated our SaaS application to a whole new level. Our conversion rate increased by 65% after the launch."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder & CEO at LifeFlow Health",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "Hidayathullah built our real-time blood donation finder with exceptional engineering quality. His deep understanding of both full-stack systems and smooth UX is outstanding."
  }
];

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React 19, Next.js, Three.js / React Three Fiber, TypeScript, TailwindCSS, Node.js, Python (FastAPI/LangChain), PostgreSQL, and Cloud infrastructure (AWS/Docker)."
  },
  {
    question: "Are you available for freelance projects or full-time roles?",
    answer: "Yes! I am open to high-impact freelance contracts, technical consulting, as well as full-time senior or lead software engineering positions."
  },
  {
    question: "How do you ensure 60 FPS performance in 3D WebGL applications?",
    answer: "I enforce GPU-friendly instanced geometry, dynamic level-of-detail (LOD), texture compression (KTX2/Basis), requestAnimationFrame optimization, and minimal draw calls."
  },
  {
    question: "Can you help integrate AI capabilities into our existing web app?",
    answer: "Absolutely. I have extensive experience setting up LLM pipelines (OpenAI/Anthropic), RAG search with vector databases, real-time voice streaming, and Stable Diffusion image generation."
  },
  {
    question: "What is your typical project delivery timeline?",
    answer: "Project timelines depend on scope. Small landing pages or 3D visualizers take 1-2 weeks, while full production SaaS platforms or mobile apps take 4-8 weeks."
  }
];
