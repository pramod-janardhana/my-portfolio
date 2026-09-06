"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "./Badge";
import TagList from "./TagList";
import ExternalLink from "./ExternalLink";
import type { CaseStudy } from "@/lib/portfolio";

export default function CaseStudies({ studies }: { studies: CaseStudy[] }) {
  const [activeSlug, setActiveSlug] = useState(studies[0]?.slug);
  const active = studies.find((s) => s.slug === activeSlug) ?? studies[0];

  return (
    <>
      {/* Desktop: master–detail split */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-[minmax(220px,1fr)_1.8fr]">
        {/* list */}
        <ul className="space-y-2">
          {studies.map((cs) => {
            const isActive = cs.slug === active.slug;
            return (
              <li key={cs.slug}>
                <button
                  onMouseEnter={() => setActiveSlug(cs.slug)}
                  onFocus={() => setActiveSlug(cs.slug)}
                  onClick={() => setActiveSlug(cs.slug)}
                  aria-pressed={isActive}
                  className={`group w-full cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                    isActive
                      ? "border-accent/60 bg-accent/5"
                      : "border-line bg-elev hover:border-accent"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`font-semibold transition-colors ${
                        isActive ? "text-accent" : "text-fg group-hover:text-accent"
                      }`}
                    >
                      {cs.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted">{cs.timeframe}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {cs.tagline}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-muted">{cs.role}</p>
                </button>
              </li>
            );
          })}
        </ul>

        {/* detail pane */}
        <div className="rounded-xl border border-line bg-elev p-6 shadow-sm">
          <DetailPane cs={active} />
        </div>
      </div>

      {/* Mobile: richer preview cards linking to full docs */}
      <div className="grid gap-4 lg:hidden">
        {studies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/work/${cs.slug}`}
            className="group block rounded-xl border border-line bg-elev p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent">
                {cs.name}
              </h3>
              <span className="font-mono text-xs text-muted">{cs.timeframe}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{cs.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">{cs.context}</p>
            <span className="mt-4 inline-block font-mono text-xs text-accent">
              Read full case study →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

function DetailPane({ cs }: { cs: CaseStudy }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
        <Badge variant="success">{cs.status}</Badge>
        <span>· {cs.role}</span>
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-fg">{cs.name}</h3>
      <p className="mt-2 leading-relaxed text-muted">{cs.tagline}</p>

      <TagList items={cs.stack} className="mt-4" />

      {/* context */}
      <div className="mt-6">
        <p className="font-mono text-xs text-accent">// context</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{cs.context}</p>
      </div>

      {/* contributions */}
      <div className="mt-6">
        <p className="font-mono text-xs text-accent">// my contributions</p>
        <ul className="mt-2 space-y-1.5">
          {cs.contributions.map((p, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {cs.projectUrl && (
        <ExternalLink
          href={cs.projectUrl}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-accent/40 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
        >
          View the project ↗
        </ExternalLink>
      )}
    </div>
  );
}
