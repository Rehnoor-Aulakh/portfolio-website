const numberedImages = (folder, count, extension = 'png') =>
  Array.from({ length: count }, (_, index) => `/${folder}/${index + 1}.${extension}`)

export const projects = [
  {
    id: 'ai-agent-platform',
    folder: 'project1',
    imageCount: 7,
    title: 'Autonomous AI Sales Agent',
    category: 'AI Agents',
    client: 'B2B SaaS Company',
    impact: '⚡ 80% Manual Prospecting Reduced',
    description: 'A fully autonomous multi-agent pipeline that crawls target domains, qualifies leads, drafts hyper-personalized outreach emails, and books meetings automatically.',
    challenge: 'The sales team spent 25+ hours weekly manually researching leads and typing cold emails, resulting in inconsistent outreach and low response rates.',
    solution: 'Built a LangChain & GPT-4o autonomous agent with web browsing, lead scoring criteria, CRM synchronization, and automated multi-touch email sequences.',
    deliverables: ['Autonomous Web Researcher Agent', 'Dynamic Email Personalization Engine', 'FastAPI Backend & React Dashboard', 'HubSpot & Salesforce Webhooks'],
    technologies: ['Python', 'LangChain', 'GPT-4o', 'React', 'FastAPI', 'PostgreSQL'],
    liveUrl: null,
    featured: true,
    badge: 'AI'
  },
  {
    id: 'ecommerce-chatbot',
    folder: 'project2',
    imageCount: 2,
    title: 'E-commerce Support Chatbot',
    category: 'Chatbot',
    client: 'Fashion & Apparel Brand',
    impact: '⚡ 94% Resolution Rate (3K+ Daily)',
    description: 'A custom RAG-powered support intelligence chatbot handling 3,000+ daily queries with accurate order tracking, returns processing, and personalized recommendations.',
    challenge: 'Surging ticket volume during peak holiday seasons was overwhelming customer support agents, leading to 6+ hour first-response delays.',
    solution: 'Engineered a vector-embedded RAG chatbot connected directly to Shopify API and Zendesk, capable of autonomously resolving order queries in 50+ languages.',
    deliverables: ['Vector Embeddings & Semantic Search', 'Shopify Store & Inventory Integration', 'Live Human Handoff Protocol', 'Custom Analytics & Sentiment Tracker'],
    technologies: ['LLM', 'RAG', 'Node.js', 'React', 'MongoDB', 'Shopify API'],
    liveUrl: null,
    featured: true,
    badge: 'AI'
  },
  {
    id: 'brand-digital-presence',
    folder: 'project3',
    imageCount: 3,
    title: 'Premium Brand Digital Presence',
    category: 'Web Design',
    client: 'Luxury Goods Brand',
    impact: '⚡ 3-Week Rapid Launch',
    description: 'A focused, high-fashion visual identity and web experience for an emerging luxury product brand — crafted with fluid micro-interactions and strict editorial elegance.',
    challenge: 'The client needed a digital storefront that mirrored their physical luxury flagship store and converted affluent buyers without looking like a generic template.',
    solution: 'Custom typography system, smooth scroll choreography, high-converting product pages, and 100/100 Google Lighthouse performance score.',
    deliverables: ['Design System & Figma Tokens', 'Fluid Framer Motion Transitions', 'Responsive Mobile-First UI', 'Technical SEO & OpenGraph Optimization'],
    technologies: ['React', 'Framer Motion', 'Responsive UI', 'Modern CSS', 'SEO'],
    liveUrl: null,
    featured: false,
    badge: 'Web'
  },
  {
    id: 'ml-demand-forecasting',
    folder: 'project4',
    imageCount: 5,
    title: 'ML Demand Forecasting Engine',
    category: 'Machine Learning',
    client: 'Retail Chain',
    impact: '⚡ $240K/Year Overstock Savings',
    description: 'A time-series machine learning system forecasting regional inventory demand with 91% accuracy across 42 store locations, drastically slashing dead stock.',
    challenge: 'Over-purchasing inventory in slower quarters resulted in heavy markdowns and over $300K annual dead-stock holding expense.',
    solution: 'Designed an ensemble Prophet + XGBoost time-series forecasting model ingesting historical sales, regional seasonality, and promotional calendars.',
    deliverables: ['Time-Series Predictive ML Model', 'FastAPI Data Ingestion Service', 'Interactive Executive React Dashboard', 'Weekly Automated Reorder Triggers'],
    technologies: ['Python', 'TensorFlow', 'XGBoost', 'FastAPI', 'Pandas', 'React'],
    liveUrl: null,
    featured: true,
    badge: 'ML'
  },
  {
    id: 'editorial-platform',
    folder: 'project5',
    imageCount: 4,
    title: 'Editorial Publishing Platform',
    category: 'Web Application',
    client: 'Media Startup',
    impact: '⚡ +180% Reader Retention',
    description: 'A flexible, high-aesthetic reading and discovery experience built for modern digital journalism — strong typographic hierarchy and sub-second page transitions.',
    challenge: 'Their legacy WordPress site suffered from 4-second load times and 68% mobile bounce rates, hurting paid newsletter subscriptions.',
    solution: 'Re-architected the entire reading experience into a lightweight modern React application with instant article caching and clean reading typography.',
    deliverables: ['Custom Reading Mode & Typography', 'Headless CMS Architecture', 'Subscriber Paywall & Auth', 'Zero-CLS Layout Optimization'],
    technologies: ['React', 'Content Architecture', 'Headless CMS', 'Tailored CSS'],
    liveUrl: null,
    featured: false,
    badge: 'Web'
  },
].map((project) => ({ ...project, images: numberedImages(project.folder, project.imageCount) }))

export const team = [
  {
    name: 'Rehnoor Aulakh',
    role: 'Creative & Full Stack Developer',
    initials: 'RA',
    description: 'Rehnoor brings ideas to life at the intersection of beautiful design and powerful technology. Specializes in React, AI integrations, and pixel-perfect UI.',
    skills: ['React', 'AI Integration', 'UI/UX', 'LangChain', 'Node.js'],
    linkedin: 'https://linkedin.com/in/rehnoor-aulakh',
    github: 'https://github.com/Rehnoor-Aulakh',
  },
  {
    name: 'Jatin Kalra',
    role: 'GenAI Engineer',
    initials: 'JK',
    description: 'Jatin architechts the intelligence behind the curtain — from ML pipelines to AI agents. Specializes in Python, machine learning, and backend systems.',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'LLMs'],
    linkedin: 'https://linkedin.com/in/jatinkalra1710',
    github: 'https://github.com/jatinkalra1710',
  },
]

export const services = [
  { number: '01', title: 'AI Agent Development', description: 'Custom autonomous agents that research, decide, and act — reducing manual work and scaling your operations.', icon: '🤖', category: 'AI' },
  { number: '02', title: 'Chatbot & Conversational AI', description: 'Intelligent chatbots powered by GPT-4 and custom LLMs that actually understand your customers and resolve queries.', icon: '💬', category: 'AI' },
  { number: '03', title: 'LLM Integration & RAG', description: 'Integrate GPT-4, Claude, or open-source LLMs into your product with Retrieval-Augmented Generation for accuracy.', icon: '⚡', category: 'AI' },
  { number: '04', title: 'Web Design & UI/UX', description: 'Clear, expressive, conversion-optimized interfaces — built to feel premium and perform across every device.', icon: '🎨', category: 'Web' },
  { number: '05', title: 'React & Frontend Dev', description: 'Fast, accessible, beautifully animated React applications with the performance your users expect.', icon: '⚛️', category: 'Web' },
  { number: '06', title: 'E-commerce & Storefronts', description: 'Conversion-optimized online stores with smooth UX, payment integration, and AI-powered recommendations.', icon: '🛒', category: 'Web' },
]

export const processSteps = [
  ['01', 'Discovery', 'We get deep into your business, goals, audience, and the problem you need solved. No assumptions.'],
  ['02', 'Strategy', 'We map out the technical approach, timeline, and success metrics — then align on every detail.'],
  ['03', 'Design', 'We craft the interface, flow, and visual language — iterating until it feels exactly right.'],
  ['04', 'Build', 'We write clean, scalable code and train/integrate AI models with rigorous testing throughout.'],
  ['05', 'Launch & Support', 'We deploy, monitor, and support post-launch — ensuring everything runs perfectly in production.'],
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '', label: 'Countries Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'Avg ROI Delivered' },
]
