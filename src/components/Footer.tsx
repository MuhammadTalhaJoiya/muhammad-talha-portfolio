import Link from "next/link";
import AIPulse from "./AIPulse";
import { profile } from "@/data/resume";

const columns = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Full-Stack Dev" },
      { href: "/services", label: "AI Integration" },
      { href: "/services", label: "Cloud & DevOps" },
    ],
  },
];

const socials = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-surface-lowest/70">
      {/* Gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-30" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link href="/" className="font-display text-xl font-bold tracking-tight">
              {profile.name}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
              {profile.role}. Building production-grade, AI-powered web apps with the MERN stack, Next.js, and AWS.
            </p>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-tertiary/30 bg-tertiary/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-tertiary">
              <AIPulse />
              {profile.availability}
            </span>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-1.5 font-mono text-sm text-primary"
            >
              <span className="text-on-surface-variant">&gt;</span> start_a_project
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4 md:col-span-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">Connect</h3>
            <ul className="flex flex-col gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
                  >
                    <span className="text-outline transition-colors group-hover:text-tertiary">↗</span>
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvPath}
                  download
                  className="group inline-flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  <span className="text-outline transition-colors group-hover:text-tertiary">↓</span>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-outline">© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono text-xs text-outline">
            <span className="text-on-surface-variant">&gt;</span> status:{" "}
            <span className="text-tertiary">open_to_work</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
