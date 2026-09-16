const numberedImages = (folder, count, extension = 'png') =>
  Array.from({ length: count }, (_, index) => `/${folder}/${index + 1}.${extension}`)

export const projects = [
  {
    id: 'health-diagnostics-platform',
    folder: 'project1',
    imageCount: 7,
    title: 'Medical Diagnostics & Health Reports Platform',
    category: 'Health Tech',
    client: 'Diagnostic Healthcare Lab',
    impact: '⚡ Lab Reports Turned Into Clear, Trackable Insights',
    description: 'A full patient portal that translates raw lab report data into a clear, trackable health history — with automated abnormal-result flagging, historical trend charts, diagnostic package booking, and an admin backend for staff.',
    challenge: 'Patients received dense, jargon-heavy PDF lab reports with no way to see how a given marker was trending over time, and staff had no centralized system for managing diagnostic packages and patient records.',
    solution: 'Built a patient-facing portal integrated with lab partners (Thyrocare & Agilus Diagnostics) that ingests report data, flags abnormal values against reference ranges, plots historical trends per test, and generates downloadable PDF reports — backed by an admin panel for managing patients, tests, and packages.',
    deliverables: ['Health History Dashboard with Trend Analytics', 'Automated Abnormal-Result Flagging & Reference Ranges', 'One-Click PDF Report Downloads', 'Diagnostic Package Search & Booking', 'Admin Panel for Patients, Tests & Packages', 'Lab Partner API Integrations'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'REST APIs', 'PDF Generation'],
    liveUrl: null,
    featured: true,
    badge: 'Web'
  },
  {
    id: 'talent-show-registration',
    folder: 'project2',
    imageCount: 2,
    title: 'Reality Talent Show Registration Platform',
    category: 'Web Design',
    client: 'Entertainment & Reality TV Production House',
    impact: '⚡ Multi-City Registration Campaign Launch',
    description: 'A bold, mobile-first landing page for a nationwide OTT talent-hunt show, built to drive registrations across multiple cities and talent categories ahead of a hard sign-up deadline.',
    challenge: 'The production needed a fast, visually striking single-page site to convert visitors into registered contestants across many cities and talent categories — while supporting quick color/theme reskins for different marketing pushes.',
    solution: 'Built a responsive, mobile-first landing page with a high-impact hero, clear prize and entry-fee details, a category breakdown, and a streamlined one-click registration flow — powered by a themeable color system so the whole page can be reskinned for a new campaign without touching layout code.',
    deliverables: ['Mobile-First Responsive Landing Page', 'Reskinnable Theme System (Multiple Color Variants)', 'Category, Prize & Fee Breakdown Sections', 'One-Click Registration CTA Flow', 'City-Wise Slot Availability Messaging'],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: null,
    featured: false,
    badge: 'Web'
  },
{
    id: 'hospitality-admin-dashboard',
    folder: 'project3',
    imageCount: 3,
    title: 'Hotel & Cabin Booking Admin Dashboard',
    category: 'Web Application',
    client: 'Boutique Hospitality Business',
    impact: '⚡ Full Booking Ops Visibility in One Screen',
    description: 'An internal admin dashboard for a boutique hospitality business to manage bookings, cabins, guests, and revenue — replacing scattered spreadsheets with a single real-time operations view.',
    challenge: 'Staff were tracking bookings, guest check-ins, and cabin pricing across disconnected spreadsheets, making it hard to see occupancy trends, revenue, or which bookings needed confirmation at a glance.',
    solution: 'Built a role-based admin dashboard with live booking stats, a stay-duration breakdown, a sales-over-time chart, and full CRUD screens for bookings, cabins, and users — including check-in/checkout/unconfirmed status tracking and per-cabin pricing and discounts.',
    deliverables: ['Live Stats Dashboard (Bookings, Sales, Check-ins, Occupancy)', 'Sales & Stay-Duration Analytics Charts', 'Bookings Management with Status Filtering', 'Cabin Inventory with Pricing & Discounts', 'User & Guest Management'],
    technologies: ['React', 'React Query', 'Supabase', 'Recharts', 'Styled Components'],
    liveUrl: null,
    featured: false,
    badge: 'Web'
},
{
    id: 'pizza-ordering-platform',
    folder: 'project4',
    imageCount: 4,
    title: 'Online Pizza Ordering & Live Order Tracking',
    category: 'Web Application',
    client: 'Restaurant / Food Delivery Business',
    impact: '⚡ Real-Time Order Status for Every Customer',
    description: 'A fast, no-login-required ordering platform for a pizza restaurant — customers browse the menu, build a cart, place an order with just a name and address, and track live delivery status by order number.',
    challenge: 'The business needed a lightweight ordering experience with zero account-creation friction, live stock awareness (sold-out items), and a way for customers to check on an order\'s progress without calling in.',
    solution: 'Built a menu and cart flow with quantity controls and sold-out item handling, a guest checkout (name, phone, address, geolocation "get position" button, and priority-order option), and a live order-status page showing prep time, delivery estimate, and itemized pricing.',
    deliverables: ['Menu Browsing with Sold-Out State Handling', 'Cart with Quantity Controls & Live Totals', 'Guest Checkout with Geolocation Address Capture', 'Priority Order Upgrade Option', 'Live Order Status & Delivery ETA Tracking'],
    technologies: ['React', 'React Router', 'Redux Toolkit', 'Tailwind CSS'],
    liveUrl: null,
    featured: false,
    badge: 'Web'
},
{
    id: 'jewelry-ecommerce-platform',
    folder: 'project5',
    imageCount: 5,
    title: 'Luxury Jewelry E-Commerce Platform',
    category: 'E-commerce',
    client: 'Luxury Jewelry Brand',
    impact: '⚡ Full Storefront-to-Checkout Shopping Experience',
    description: 'A premium e-commerce storefront for a handcrafted gold & silver jewelry brand — built around storytelling, live stock transparency, and a smooth cart-to-checkout flow with multiple local payment options.',
    challenge: 'The brand needed an online presence that matched the craftsmanship and heritage of hand-cast jewelry — not a generic storefront template — while still handling real e-commerce needs like live stock, wishlists, and checkout.',
    solution: 'Designed and built an editorial-style storefront with a curated collection grid, per-category filtering, a "craft story" page highlighting the making process, a persistent cart/wishlist, and a multi-step checkout supporting UPI, card, and cash-on-delivery payments.',
    deliverables: ['Editorial-Style Homepage & Brand Storytelling', 'Filterable Collection Grid with Live Stock Status', 'Wishlist & Persistent Shopping Bag', 'Multi-Step Checkout with UPI / Card / COD', 'Category Pages (Rings, Necklaces, Earrings, Bangles, Bracelets, Mangalsutra)'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe/Razorpay', 'Framer Motion'],
    liveUrl: null,
    featured: true,
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
