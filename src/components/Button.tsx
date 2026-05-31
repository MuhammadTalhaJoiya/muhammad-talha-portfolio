import Link from "next/link";

type Variant = "primary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  /** Render a plain <a> (use for file downloads / external links). */
  external?: boolean;
  download?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded px-5 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary-container to-secondary text-white glow-primary hover:-translate-y-0.5 glow-primary-hover",
  ghost:
    "border border-outline-variant text-on-surface hover:border-primary hover:text-primary hover:shadow-[0_0_18px_rgba(77,142,255,0.25)]",
};

/** Primary (gradient + glow) or ghost (bordered) button. Renders a Link, a plain <a> (external/download), or a button. */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  external = false,
  download = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && (external || download)) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external && !download ? "_blank" : undefined}
        rel={external && !download ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
