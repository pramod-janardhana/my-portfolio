import type { ElementType, ReactNode } from "react";

// Elevated bordered surface used for panels, tiles, and list items.
export default function Card({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`rounded-lg border border-line bg-elev shadow-sm ${className}`}>
      {children}
    </Tag>
  );
}
