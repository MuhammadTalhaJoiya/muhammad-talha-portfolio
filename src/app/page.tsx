import Link from "next/link";
import Button from "@/components/Button";
import AIPulse from "@/components/AIPulse";
import TerminalCard from "@/components/TerminalCard";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { techStack } from "@/data/techStack";
import { profile, experience, education, certifications } from "@/data/resume";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-tertiary/30 bg-tertiary/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-tertiary">
            <AIPulse />
            {profile.availability}
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Full-Stack Developer &amp; <span className="text-gradient">AI Integration</span> Specialist
          </h1>

          <p className="max-w-xl text-on-surface-variant md:text-lg">{profile.summary}</p>

          <div className="flex flex-wrap gap-3">
            <Button href="/projects">View My Work</Button>
            <Button href={profile.cvPath} download variant="ghost">
              <span aria-hidden>↓</span> Download CV
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <TerminalCard />
        </div>
      </section>

      {/* ── Tech stack ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Tech Stack" title="Pioneering with Leading-Edge Technologies" className="mb-12" />
        <div className="grid grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-outline-variant/50 bg-surface px-4 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_-12px_rgba(77,142,255,0.4)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-high font-mono text-lg font-semibold text-primary transition-colors group-hover:bg-primary/15">
                {tech.glyph}
              </span>
              <span className="text-sm font-medium text-on-surface-variant">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured projects ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Featured Engineering Projects"
            subtitle="Recent builds focused on AI-powered products, full-stack web systems, and automated cloud deployments."
          />
          <Link
            href="/projects"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5"
          >
            Explore All Projects <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ── Experience & Education ─────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Background" title="Experience & Education" className="mb-12" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Experience */}
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experience</h3>
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-lg border border-outline-variant/60 bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg font-semibold">{job.role}</h4>
                  <span className="font-mono text-xs text-on-surface-variant">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-primary">
                  {job.company} <span className="text-outline">· {job.location}</span>
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-on-surface-variant">
                      <span className="mt-1 text-tertiary">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education + Certifications */}
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Education</h3>
            {education.map((edu) => (
              <div key={edu.school} className="rounded-lg border border-outline-variant/60 bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg font-semibold">{edu.degree}</h4>
                  <span className="font-mono text-xs text-on-surface-variant">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-primary">
                  {edu.school} <span className="text-outline">· {edu.location}</span>
                </p>
                {edu.note && <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{edu.note}</p>}
              </div>
            ))}

            <h3 className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Certifications</h3>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between rounded-lg border border-outline-variant/60 bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded bg-primary/15 text-primary">✦</span>
                  <div>
                    <p className="font-display font-semibold">{cert.name}</p>
                    <p className="text-sm text-on-surface-variant">{cert.issuer}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-on-surface-variant">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
