import Link from "next/link";
import Chip from "./Chip";
import type { Project } from "@/data/projects";

/** Sleek project card: gradient visual header, tag chips, title, blurb, case-study link. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-outline-variant/60 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(77,142,255,0.35)]">
      {/* Visual header */}
      <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="bg-grid absolute inset-0 opacity-40" />
        <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-white/70">
          {project.category} · {project.year}
        </span>
        <span className="absolute bottom-3 left-4 font-display text-2xl font-extrabold text-white/90">
          {project.shortName}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-on-surface-variant">{project.blurb}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>

        <Link
          href={project.href}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:gap-2.5"
        >
          View Case Study
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
