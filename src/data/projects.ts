export type Project = {
  slug: string;
  title: string;
  shortName: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  /** tailwind gradient classes for the card visual, e.g. "from-... to-..." */
  gradient: string;
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-ecommerce",
    title: "AI-Powered Full-Stack E-Commerce Platform",
    shortName: "AI Commerce",
    category: "Full-Stack / AI",
    year: "2025",
    blurb:
      "A production-grade MERN e-commerce platform with JWT auth, role-based access, and end-to-end checkout. Integrates Google Gemini for an AI sales-analytics dashboard, a business-assistant chatbot, SEO product-copy generation, and invoice OCR with AI summarization.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API", "OCR", "JWT"],
    gradient: "from-primary-container/70 to-secondary/70",
    href: "/projects",
    featured: true,
  },
  {
    slug: "cypher-ai",
    title: "Cypher AI — Technical Recruitment Platform",
    shortName: "Cypher AI",
    category: "AI / SaaS",
    year: "2025 – 2026",
    blurb:
      "An end-to-end recruitment platform (React + Next.js) that automates video and audio technical interviews. A resume parsing & scoring module evaluates candidates across 5 skill parameters in under 10s — cutting manual screening by 60%.",
    tags: ["Next.js", "React", "Python", "MongoDB", "Docker", "AWS"],
    gradient: "from-secondary/70 to-tertiary/60",
    href: "https://github.com/MuhammadTalhaJoiya/FYP",
    featured: true,
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline for a Three-Tier Web App",
    shortName: "CI/CD Pipeline",
    category: "DevOps",
    year: "2025",
    blurb:
      "An automated Jenkins CI/CD pipeline that cut manual deployment steps from 6 to 1, triggered on every GitHub push via webhooks. Multi-stage Docker builds pushed to AWS ECR reduced image size by 40%, with three-tier deploys orchestrated by Docker Compose on EC2.",
    tags: ["Jenkins", "Docker", "AWS ECR", "EC2", "Docker Compose"],
    gradient: "from-tertiary/60 to-primary-container/70",
    href: "/projects",
    featured: true,
  },
  {
    slug: "n8n-price-tracker",
    title: "n8n Competitor Price Tracker & Alert System",
    shortName: "Price Tracker",
    category: "Automation / n8n",
    year: "2026",
    blurb:
      "An n8n workflow that monitors competitor prices in real time via the Outfitters API, detects price changes, logs history to Google Sheets, and fires Gmail alerts whenever a tracked product shifts — zero-code automation replacing a manual daily task.",
    tags: ["n8n", "Google Sheets", "Gmail API", "REST API", "Automation"],
    gradient: "from-primary/50 to-secondary/60",
    href: "https://github.com/MuhammadTalhaJoiya/n8n-competitor-price-tracker",
    featured: true,
  },
  {
    slug: "heart-disease-predictor",
    title: "Heart Disease Prediction Web App",
    shortName: "Health AI",
    category: "ML / Healthcare AI",
    year: "2025",
    blurb:
      "A machine-learning web app that predicts heart disease risk from clinical inputs using a trained classification model. Built with Python Flask for the API layer and a lightweight HTML/CSS frontend, giving patients and clinicians an instant, explainable risk score.",
    tags: ["Python", "Flask", "Machine Learning", "Healthcare AI", "scikit-learn"],
    gradient: "from-tertiary/50 to-primary/60",
    href: "https://github.com/MuhammadTalhaJoiya/heart-diesease-predictor",
    featured: true,
  },
  {
    slug: "e-learning-platform",
    title: "Full-Stack E-Learning Platform",
    shortName: "E-Learning",
    category: "Full-Stack / EdTech",
    year: "2025",
    blurb:
      "A production-deployed TypeScript e-learning platform with full backend integration — course catalog, enrollment flows, and progress tracking. Shipped to Vercel with CI in under a week; the UI/UX was iteratively refined through two revamp cycles (React + Vite).",
    tags: ["TypeScript", "React", "Vite", "Node.js", "Vercel"],
    gradient: "from-secondary/50 to-tertiary/60",
    href: "https://e-learning-seven-beige.vercel.app",
    featured: true,
  },
  {
    slug: "whatsapp-shipping-bot",
    title: "WhatsApp Freight Rate Inquiry Bot",
    shortName: "WhatsApp Bot",
    category: "AI / Automation",
    year: "2026",
    blurb:
      "A WhatsApp chatbot for Vayani Shipping Line that handles freight rate inquiries end-to-end. Built on n8n with Groq AI for natural-language understanding and Google Sheets as the rate database — customers get instant, accurate quotes 24/7 with no human intervention.",
    tags: ["n8n", "Groq AI", "WhatsApp", "Google Sheets", "Automation"],
    gradient: "from-primary/60 to-tertiary/50",
    href: "https://github.com/MuhammadTalhaJoiya/whatsapp-shipping-bot",
    featured: true,
  },
  {
    slug: "voice-agent",
    title: "AI Voice Appointment Scheduling Agent",
    shortName: "Voice Agent",
    category: "AI / Voice",
    year: "2026",
    blurb:
      "A fully voice-driven appointment scheduler powered by Groq (LLM), edge-tts (speech synthesis), and FastAPI. Handles natural-language booking conversations, confirms slots, and manages availability — all through speech, with no human operator required.",
    tags: ["Groq", "FastAPI", "Python", "edge-tts", "Voice AI"],
    gradient: "from-tertiary/60 to-secondary/50",
    href: "https://github.com/MuhammadTalhaJoiya/voice-agent",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
