type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

/** Reusable section heading: optional mono eyebrow, display title, body subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignment} ${align === "center" ? "max-w-2xl" : ""} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="text-on-surface-variant md:text-lg">{subtitle}</p>}
    </div>
  );
}
