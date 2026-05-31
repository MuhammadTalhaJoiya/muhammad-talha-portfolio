"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/resume";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="font-display text-base font-bold tracking-tight md:text-lg">
          {profile.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 rounded border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_18px_rgba(77,142,255,0.25)]"
          >
            <span aria-hidden>↓</span> Download CV
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded bg-gradient-to-r from-primary-container to-secondary px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 glow-primary-hover"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded text-on-surface md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvPath}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded border border-outline-variant px-4 py-3 text-center text-sm font-semibold text-on-surface"
            >
              ↓ Download CV
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded bg-gradient-to-r from-primary-container to-secondary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
