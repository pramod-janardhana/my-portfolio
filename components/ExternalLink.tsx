import type { AnchorHTMLAttributes, ReactNode } from "react";

// Anchor that always opens safely in a new tab.
export default function ExternalLink({
  href,
  className = "",
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
