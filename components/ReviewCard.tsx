"use client";

import { useEffect, useRef, useState } from "react";
import type { Recommendation } from "@/lib/portfolio";

export default function ReviewCard({ r }: { r: Recommendation }) {
  const [expanded, setExpanded] = useState(false);
  const [clampable, setClampable] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  const CLAMP_LINES = 12;

  // Show the toggle only when the full quote is taller than the clamp height.
  // Compares against a computed 12-line height so it's correct whether the
  // quote is expanded or collapsed, and re-checks once web fonts have loaded.
  useEffect(() => {
    const measure = () => {
      const el = quoteRef.current;
      if (!el) return;
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      if (!lineHeight) return;
      setClampable(el.scrollHeight > lineHeight * CLAMP_LINES + 2);
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <figure className="flex flex-col rounded-lg border border-line bg-elev p-5 shadow-sm">
      {r.source && (
        <span className="mb-3 inline-block w-fit rounded border border-line px-2 py-0.5 font-mono text-[10px] text-accent">
          {r.source}
        </span>
      )}
      <div className="flex-1">
        <blockquote
          ref={quoteRef}
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: CLAMP_LINES,
                  overflow: "hidden",
                }
          }
          className="whitespace-pre-line text-sm leading-relaxed text-fg"
        >
          &quot;{r.quote}&quot;
        </blockquote>

        {clampable && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 font-mono text-xs text-accent hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        {r.points && r.points.length > 0 && (
          <div className="mt-3">
            {r.pointsLabel && (
              <p className="mb-1.5 font-mono text-[11px] text-accent">{r.pointsLabel}</p>
            )}
            <ul className="space-y-1">
              {r.points.map((p, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <figcaption className="mt-4 border-t border-line pt-3">
        <p className="text-sm font-medium text-fg">{r.name}</p>
        <p className="font-mono text-xs text-muted">{r.title}</p>
        <p className="mt-1 font-mono text-[11px] text-muted/70">{r.relation}</p>
      </figcaption>
    </figure>
  );
}
