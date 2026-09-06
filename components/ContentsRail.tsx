"use client";

import { useEffect, useState } from "react";
import { sections, profile } from "@/lib/portfolio";
import ThemeToggle from "./ThemeToggle";
import ExternalLink from "./ExternalLink";

export default function ContentsRail() {
  const [active, setActive] = useState(sections[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop sticky rail */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-12">
        <div>
          <a href="#top" className="font-mono text-sm font-semibold text-fg">
            {profile.first}
            <span className="text-accent">.sys</span>
          </a>
          <p className="mt-1 font-mono text-xs text-muted">
            design doc · {profile.version}
          </p>

          <nav className="mt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              Contents
            </p>
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`group flex items-center gap-3 py-1 font-mono text-sm transition-colors ${
                        isActive ? "text-accent" : "text-muted hover:text-fg"
                      }`}
                    >
                      <span
                        className={`h-px transition-all ${
                          isActive
                            ? "w-8 bg-accent"
                            : "w-4 bg-line group-hover:w-6 group-hover:bg-muted"
                        }`}
                      />
                      <span className="text-xs opacity-70">{s.n}</span>
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ExternalLink
            href={profile.socials.github}
            className="font-mono text-xs text-muted hover:text-accent"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href={profile.socials.linkedin}
            className="font-mono text-xs text-muted hover:text-accent"
          >
            LinkedIn
          </ExternalLink>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-bg/80 px-6 py-3 backdrop-blur-md lg:hidden">
        <a href="#top" className="font-mono text-sm font-semibold text-fg">
          {profile.first}
          <span className="text-accent">.sys</span>
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle contents"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="sticky top-[57px] z-30 border-b border-line bg-elev px-6 py-3 lg:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-1.5 font-mono text-xs text-muted hover:text-accent"
                >
                  <span className="opacity-60">{s.n}</span> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
