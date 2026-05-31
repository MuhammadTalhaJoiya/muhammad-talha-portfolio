"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        align="left"
        eyebrow="Portfolio"
        title="Engineering Projects"
        subtitle="A full archive of products, platforms, and automations I've designed, built, and shipped."
        className="mb-10"
      />

      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setFilter(tag)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs tracking-wide transition-colors ${
              filter === tag
                ? "bg-primary text-on-primary"
                : "border border-outline-variant/60 text-on-surface-variant hover:border-primary/50 hover:text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
