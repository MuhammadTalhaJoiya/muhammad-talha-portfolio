export type Service = {
  id: string;
  title: string;
  /** emoji / glyph used as a lightweight icon */
  icon: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    icon: "⚡",
    description:
      "Production-grade web apps on the MERN stack and Next.js — from responsive React frontends to robust Node.js & Express backends, with JWT auth and role-based access control.",
    features: ["React & Next.js", "Node.js & Express", "MongoDB", "Auth & RBAC"],
  },
  {
    id: "ai-integration",
    title: "AI & LLM Integration",
    icon: "🤖",
    description:
      "AI-powered features wired into real products — Google Gemini dashboards and chatbots, SEO content generation, and invoice OCR with AI summarization.",
    features: ["Google Gemini API", "AI chatbots & analytics", "OCR + summarization", "REST API integration"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "☁️",
    description:
      "Containerized deployments and automated pipelines on AWS — Docker images, ECS/ECR/EC2, and CI/CD that turns a Git push into a live environment.",
    features: ["AWS (ECS, ECR, EC2)", "AWS (IAM, S3)", "Docker & Compose", "Jenkins CI/CD"],
  },
];
