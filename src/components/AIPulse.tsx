type AIPulseProps = {
  className?: string;
  /** tailwind color class for the dot, e.g. "bg-tertiary" */
  color?: string;
};

/** A small breathing dot with an expanding ring — signals a "live" / active system. */
export default function AIPulse({ className = "", color = "bg-tertiary" }: AIPulseProps) {
  return (
    <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
      <span
        className={`absolute inset-0 rounded-full ${color} opacity-60 [animation:var(--animate-pulse-ring)]`}
        aria-hidden
      />
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${color} [animation:var(--animate-breathe)]`} />
    </span>
  );
}
