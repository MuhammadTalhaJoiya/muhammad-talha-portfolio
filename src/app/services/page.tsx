import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="Services"
        title="What I Can Build For You"
        subtitle="From a single API to a full AI-powered platform — engineered with precision, shipped with confidence."
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            className="group flex flex-col gap-4 rounded-lg border border-outline-variant/60 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_44px_-16px_rgba(77,142,255,0.4)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-high text-2xl transition-colors group-hover:bg-primary/15">
              {service.icon}
            </span>
            <h3 className="font-display text-xl font-semibold">{service.title}</h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">{service.description}</p>

            <ul className="mt-2 grid grid-cols-2 gap-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="text-tertiary">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="glass mt-16 flex flex-col items-center gap-5 rounded-lg px-6 py-12 text-center">
        <h3 className="font-display text-2xl font-bold md:text-3xl">Have a project in mind?</h3>
        <p className="max-w-xl text-on-surface-variant">
          Tell me what you&apos;re building and I&apos;ll help you ship it — faster, cleaner, and smarter.
        </p>
        <Button href="/contact">Start a Conversation</Button>
      </div>
    </section>
  );
}
