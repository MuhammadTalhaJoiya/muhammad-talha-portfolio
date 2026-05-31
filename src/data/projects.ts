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
    slug: "ai-recruitment",
    title: "AI-Based Technical Recruitment Platform",
    shortName: "RecruitAI",
    category: "AI / SaaS",
    year: "2025 – 2026",
    blurb:
      "An end-to-end recruitment platform (React + Next.js) that automates video and audio technical interviews. A resume parsing & scoring module evaluates candidates across 5 skill parameters in under 10s — cutting manual screening by 60%. Backend containerized with Docker and deployed on AWS.",
    tags: ["Next.js", "React", "Python", "MongoDB", "Docker", "AWS"],
    gradient: "from-secondary/70 to-tertiary/60",
    href: "/projects",
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
];

export const featuredProjects = projects.filter((p) => p.featured);
