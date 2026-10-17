/** "G" monogram: one round stroke that turns into the crossbar, with an accent dot at its heart. Inherits text color. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <path
        d="M23.78 8.22A11 11 0 1 0 27 16h-6.5"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={15.5} cy={16} r={2.25} className="fill-accent" />
    </svg>
  );
}
