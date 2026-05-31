"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import AIPulse from "@/components/AIPulse";
import { profile } from "@/data/resume";

const inputClass =
  "w-full border-b border-outline-variant bg-transparent px-1 py-3 text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary";

const contactDetails = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "GitHub", value: "github.com/MuhammadTalhaJoiya", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/muhammad-talha", href: profile.linkedin },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!data.success) throw new Error(data.message || "Something went wrong. Please try again.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something"
        subtitle="Got an idea, a problem, or a half-finished project? Send a message and I'll get back to you within a day."
        className="mb-14"
      />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={update("name")}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="flex items-center gap-2 font-mono text-xs text-tertiary">
              <AIPulse /> Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && <p className="font-mono text-xs text-error">{error}</p>}
        </form>

        {/* Details */}
        <div className="flex flex-col gap-8 md:pl-8">
          <div className="glass flex items-center gap-3 rounded-lg px-5 py-4">
            <AIPulse color="bg-tertiary" />
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
              {profile.availability}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                className="group flex flex-col gap-1 border-b border-outline-variant/40 pb-4 transition-colors hover:border-primary/50"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  {detail.label}
                </span>
                <span className="text-lg text-on-surface transition-colors group-hover:text-primary">
                  {detail.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
