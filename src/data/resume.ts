export const profile = {
  name: "Muhammad Talha",
  role: "Full-Stack Developer & AI Integration Specialist",
  tagline: "Full Stack Developer · MERN · Next.js · AWS · Docker",
  email: "talhajoiyamuhammad@gmail.com",
  phone: "+92 312 0215244",
  github: "https://github.com/MuhammadTalhaJoiya",
  linkedin: "https://linkedin.com/in/muhammad-talha",
  location: "Karachi, Pakistan",
  cvPath: "/Muhammad-Talha-CV.pdf",
  availability: "Open to Full-Stack roles from June 2026",
  summary:
    "Full-Stack Developer proficient in JavaScript, React, Next.js, Node.js, Express, and MongoDB, with hands-on experience integrating Generative AI (Google Gemini) and deploying containerized applications on AWS using Docker, ECS, and ECR. I build production-grade, AI-powered web applications and ship features through effective collaboration and problem-solving.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "8SolveAI",
    period: "Jul 2025 – Aug 2025",
    location: "Karachi, Pakistan",
    points: [
      "Delivered 3+ production features per sprint on a SaaS platform, accelerating release cycles by 40% through AI-assisted development with Claude Code and GitHub Copilot.",
      "Built React-based UI components and integrated RESTful APIs end-to-end across frontend and backend services.",
      "Participated in code reviews, daily stand-ups, and sprint planning following standard Git workflows and agile practices.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Dawood University of Engineering & Technology",
    period: "2022 – 2026 (expected June 2026)",
    location: "Karachi, Pakistan",
    note: "Capstone: AI-Based Technical Recruitment Platform — an automated hiring pipeline with video interviews deployed on AWS.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [{ name: "Claude Code", issuer: "Anthropic", year: "2025" }];
