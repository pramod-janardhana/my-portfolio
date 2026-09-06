import type { ReactNode } from "react";

type Variant = "default" | "success";

const variants: Record<Variant, string> = {
  default: "bg-line/60 text-muted",
  success: "border border-success/30 bg-success/5 text-success",
};

// Small monospace pill used for statuses and labels.
export default function Badge({
  variant = "default",
  className = "",
  children,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-mono text-xs ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
