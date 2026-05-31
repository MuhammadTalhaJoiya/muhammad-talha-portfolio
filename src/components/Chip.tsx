type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

/** Technical tag — JetBrains Mono with a subtle primary tint. */
export default function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium tracking-wide text-primary ${className}`}
    >
      {children}
    </span>
  );
}
