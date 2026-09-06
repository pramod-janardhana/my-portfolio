import type { ReactNode } from "react";

// Numbered section heading (§nn) shared by the home and case-study pages.
export function SectionHeading({
  n,
  id,
  title,
  kicker,
  size = "lg",
  line = true,
  inline = false,
}: {
  n: string;
  id?: string;
  title: ReactNode;
  kicker?: string;
  size?: "lg" | "md";
  line?: boolean;
  inline?: boolean;
}) {
  if (inline) {
    return (
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">§{n}</span>
        <h2 className="text-xl font-semibold text-fg">{title}</h2>
      </div>
    );
  }

  const label = (
    <>
      <span>§{n}</span>
      {kicker && <span className="text-muted">{kicker}</span>}
    </>
  );

  return (
    <div className="mb-8">
      {id ? (
        <a
          href={`#${id}`}
          className="group inline-flex items-baseline gap-3 font-mono text-sm text-accent"
        >
          {label}
        </a>
      ) : (
        <span className="inline-flex items-baseline gap-3 font-mono text-sm text-accent">
          {label}
        </span>
      )}
      <h2
        className={`mt-2 flex items-center gap-4 font-semibold tracking-tight text-fg ${
          size === "lg" ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {title}
        {line && <span className="h-px flex-1 bg-line" />}
      </h2>
    </div>
  );
}
