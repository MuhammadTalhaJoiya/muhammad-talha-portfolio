import AIPulse from "./AIPulse";

const lines: { cmd: string; out: React.ReactNode }[] = [
  {
    cmd: "whoami",
    out: (
      <>
        <span className="text-primary">Muhammad Talha</span> — Full-Stack Developer
      </>
    ),
  },
  {
    cmd: "cat stack.txt",
    out: "MERN · Next.js · AWS · Docker",
  },
  {
    cmd: "status --check",
    out: (
      <>
        <span className="text-tertiary">✓</span> open to work · June 2026
      </>
    ),
  },
];

/** Hero visual: a faux terminal printing the developer's bio, stack, and status. */
export default function TerminalCard() {
  return (
    <div className="glass w-full max-w-md rounded-lg p-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
      {/* Title bar */}
      <div className="flex items-center justify-between rounded-t-md border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-error/80" />
          <span className="h-3 w-3 rounded-full bg-tertiary/70" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
          <AIPulse />
          talha@portfolio — zsh
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-5 py-6 font-mono text-[13px] leading-relaxed">
        {lines.map((line) => (
          <div key={line.cmd} className="flex flex-col gap-1">
            <p>
              <span className="text-tertiary">$</span> <span className="text-on-surface">{line.cmd}</span>
            </p>
            <p className="text-on-surface-variant">
              <span className="text-outline">&gt;</span> {line.out}
            </p>
          </div>
        ))}

        {/* Active prompt with blinking cursor */}
        <p>
          <span className="text-tertiary">$</span>{" "}
          <span className="inline-block text-on-surface [animation:var(--animate-blink)]">▮</span>
        </p>
      </div>
    </div>
  );
}
