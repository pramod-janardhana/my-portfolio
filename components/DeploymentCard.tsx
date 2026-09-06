"use client";

import { useState } from "react";
import Link from "next/link";
import type { Company } from "@/lib/portfolio";
import Card from "./Card";
import TagList from "./TagList";
import ExternalLink from "./ExternalLink";

export default function DeploymentCard({ c }: { c: Company }) {
  // Most recent role (index 0) is expanded by default; older roles collapse.
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const toggle = (i: number) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  const hasAside = (c.projects?.length ?? 0) > 0 || c.stack.length > 0;

  return (
    <Card className="p-6">
      <div className={`grid gap-8 ${hasAside ? "lg:grid-cols-[1.7fr_1fr]" : ""}`}>
        {/* left: identity + collapsible career path */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-accent">{c.company}</h3>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              {c.current && <span className="h-1.5 w-1.5 rounded-full bg-success" />}
              {c.period} · {c.location}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>

          <ol className="mt-5 space-y-4 border-l border-line pl-5">
            {c.roles.map((role, i) => {
              const hasHighlights = !!role.highlights?.length;
              const isOpen = !!open[i];
              return (
                <li key={role.title} className="relative">
                  <span
                    className={`absolute -left-[23px] top-2 h-2 w-2 rounded-full ring-4 ring-elev ${
                      i === 0 ? "bg-accent" : "bg-line"
                    }`}
                  />
                  {hasHighlights ? (
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="group -mx-2 flex w-full cursor-pointer flex-wrap items-baseline justify-between gap-x-3 rounded-md px-2 py-1 text-left transition-colors hover:bg-card"
                    >
                      <span className="text-sm font-medium text-fg transition-colors group-hover:text-accent">
                        {role.title}
                        <span
                          className={`ml-2 inline-block text-muted transition-transform group-hover:text-accent ${
                            isOpen ? "rotate-90 text-accent" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </span>
                      <span className="font-mono text-[11px] text-muted">{role.period}</span>
                    </button>
                  ) : (
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 px-0 py-1">
                      <span className="text-sm font-medium text-fg">{role.title}</span>
                      <span className="font-mono text-[11px] text-muted">{role.period}</span>
                    </div>
                  )}

                  {role.note && <p className="mt-0.5 text-xs text-muted">{role.note}</p>}

                  {hasHighlights && isOpen && (
                    <ul className="mt-2 space-y-1.5">
                      {role.highlights!.map((h, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {hasHighlights && !isOpen && (
                    <button
                      onClick={() => toggle(i)}
                      className="mt-1 inline-flex cursor-pointer items-center gap-1 font-mono text-[11px] text-accent hover:underline"
                    >
                      <span aria-hidden>▸</span> show {role.highlights!.length} highlights
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* right: projects + stack */}
        {hasAside && (
          <div className="min-w-0 lg:border-l lg:border-line lg:pl-8">
            {c.projects && c.projects.length > 0 && (
              <div>
                <p className="font-mono text-xs text-accent">// projects</p>
                <ul className="mt-3 space-y-3">
                  {c.projects.map((p) => {
                    // Whole card is the click target. A case study takes priority
                    // over the product link (the case study links to the product).
                    const primaryHref = p.caseStudy ? `/work/${p.caseStudy}` : p.url;
                    return (
                      <li
                        key={p.name}
                        className="group relative rounded-lg border border-line bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                      >
                        {/* stretched link — makes the entire card clickable */}
                        {primaryHref &&
                          (p.caseStudy ? (
                            <Link
                              href={primaryHref}
                              aria-label={`${p.name} — case study`}
                              className="absolute inset-0 z-0 rounded-lg"
                            />
                          ) : (
                            <ExternalLink
                              href={primaryHref}
                              aria-label={`${p.name} — product page`}
                              className="absolute inset-0 z-0 rounded-lg"
                            />
                          ))}

                        <div className="pointer-events-none relative flex flex-wrap items-baseline justify-between gap-x-3">
                          <span className="text-sm font-medium text-fg transition-colors group-hover:text-accent">
                            {p.name}
                          </span>
                          <span className="font-mono text-xs">
                            {p.caseStudy ? (
                              <span className="text-accent">Case study →</span>
                            ) : (
                              p.url && (
                                <span className="text-muted group-hover:text-accent">Product ↗</span>
                              )
                            )}
                          </span>
                        </div>
                        <p className="pointer-events-none relative mt-1 text-sm leading-relaxed text-muted">
                          {p.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {c.stack.length > 0 && (
              <>
                <p className={`font-mono text-xs text-accent ${c.projects?.length ? "mt-6" : ""}`}>
                  // stack
                </p>
                <TagList items={c.stack} className="mt-3" />
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
