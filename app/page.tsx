import ContentsRail from "@/components/ContentsRail";
import SystemDiagram from "@/components/SystemDiagram";
import CaseStudies from "@/components/CaseStudies";
import ReviewCard from "@/components/ReviewCard";
import DeploymentCard from "@/components/DeploymentCard";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import StatTile from "@/components/StatTile";
import ExternalLink from "@/components/ExternalLink";
import {
  profile,
  metrics,
  principles,
  stack,
  experience,
  caseStudies,
  recommendations,
  milestones,
  education,
  certifications,
} from "@/lib/portfolio";

export default function Home() {
  const recs = recommendations.filter((r) => r.kind === "recommendation");
  const feedback = recommendations.filter((r) => r.kind === "feedback");

  return (
    <div id="top" className="mx-auto max-w-doc px-6">
      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
        <ContentsRail />

        <div className="min-w-0 py-12 lg:py-20">
          {/* ---------------- Header / TL;DR ---------------- */}
          <header className="border-b border-line pb-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              <Badge>DESIGN DOC</Badge>
              {profile.available && (
                <Badge variant="success">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                  </span>
                  {profile.status}
                </Badge>
              )}
              <span>· {profile.location}</span>
              <span>· updated {profile.updated}</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-base text-accent">{profile.role}</p>
            <p className="mt-1.5 text-sm text-muted">
              {profile.title} @ {profile.company}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.tldr}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
              >
                Read case studies
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${profile.resumeUrl}`}
                className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
              >
                Resume ↗
              </a>
              <a
                href="#appendix"
                className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
              >
                Contact
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((m) => (
                <StatTile key={m.label} value={m.value} label={m.label} />
              ))}
            </dl>
          </header>

          {/* ---------------- §1 Abstract ---------------- */}
          <Reveal>
            <section id="abstract" className="scroll-mt-24 py-16">
              <SectionHeading n="01" id="abstract" title="Abstract" kicker="// summary" />
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
                {profile.abstract.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------------- §2 Principles ---------------- */}
          <Reveal>
            <section id="principles" className="scroll-mt-24 py-16">
              <SectionHeading n="02" id="principles" title="Principles" kicker="// how I work" />
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((p) => (
                  <Card key={p.title} className="p-5">
                    <h3 className="font-mono text-sm text-accent">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </Card>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------------- §3 Components (stack + architecture) ---------------- */}
          <Reveal>
            <section id="components" className="scroll-mt-24 py-16">
              <SectionHeading n="03" id="components" title="Components" kicker="// stack & how it fits" />
              <div className="grid gap-4 sm:grid-cols-2">
                {stack.map((group) => (
                  <Card key={group.category} className="p-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-mono text-sm text-accent">{group.category}</h3>
                      <span className="font-mono text-xs text-muted">{group.note}</span>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-md border border-line bg-card px-3 py-1 text-sm text-fg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>

              <p className="mb-4 mt-10 max-w-2xl text-sm leading-relaxed text-muted">
                And how those pieces fit together on a typical request path —
                hover any node to see how I work at that layer.
              </p>
              <SystemDiagram />
            </section>
          </Reveal>

          {/* ---------------- §4 Deployments ---------------- */}
          <Reveal>
            <section id="deployments" className="scroll-mt-24 py-16">
              <SectionHeading n="04" id="deployments" title="Deployments" kicker="// experience" />
              <div className="relative space-y-8">
                {experience.map((c) => (
                  <DeploymentCard key={c.company} c={c} />
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------------- §5 Case Studies ---------------- */}
          <Reveal>
            <section id="case-studies" className="scroll-mt-24 py-16">
              <SectionHeading n="05" id="case-studies" title="Case Studies" kicker="// selected work" />
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
                Selected systems I&apos;ve designed and shipped, written up as
                short design docs. Pick one to read the summary, or open the full
                doc.
              </p>
              <CaseStudies studies={caseStudies} />
            </section>
          </Reveal>

          {/* ---------------- §6 Reviews ---------------- */}
          <Reveal>
            <section id="reviews" className="scroll-mt-24 py-16">
              <SectionHeading n="06" id="reviews" title="Reviews" kicker="// recommendations & feedback" />

              {/* 5.1 Recommendations */}
              {recs.length > 0 && (
                <div id="reviews-recommendations" className="scroll-mt-24">
                  <h3 className="mb-6 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-accent">6.1</span>
                    <span className="text-lg font-semibold text-fg">Recommendations</span>
                    <span className="font-mono text-xs text-muted">// LinkedIn</span>
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {recs.map((r, i) => (
                      <ReviewCard key={i} r={r} />
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-xs text-muted">
                    From{" "}
                    <ExternalLink href={profile.socials.linkedin} className="text-accent hover:underline">
                      LinkedIn ↗
                    </ExternalLink>
                  </p>
                </div>
              )}

              {/* 5.2 Feedback */}
              {feedback.length > 0 && (
                <div id="reviews-feedback" className="mt-12 scroll-mt-24">
                  <h3 className="mb-6 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-accent">6.2</span>
                    <span className="text-lg font-semibold text-fg">Feedback</span>
                    <span className="font-mono text-xs text-muted">// performance reviews</span>
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {feedback.map((r, i) => (
                      <ReviewCard key={i} r={r} />
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-xs text-muted">
                    From internal performance reviews
                  </p>
                </div>
              )}
            </section>
          </Reveal>

          {/* ---------------- §7 Milestones ---------------- */}
          <Reveal>
            <section id="milestones" className="scroll-mt-24 py-16">
              <SectionHeading n="07" id="milestones" title="Milestones" kicker="// recognition" />
              <ul className="space-y-3">
                {milestones.map((m, i) => (
                  <li key={i} className="flex items-baseline gap-4 border-b border-line pb-3">
                    <span className="font-mono text-sm text-accent">{m.year}</span>
                    <span className="text-sm text-muted">{m.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card className="p-5">
                  <p className="font-mono text-xs text-accent">// education</p>
                  <p className="mt-2 text-sm font-medium text-fg">{education.degree}</p>
                  <p className="text-sm text-muted">{education.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {education.period} · CGPA {education.cgpa}
                  </p>
                </Card>
                <Card className="p-5">
                  <p className="font-mono text-xs text-accent">// certifications</p>
                  <ul className="mt-3 space-y-2.5">
                    {certifications.map((c) => (
                      <li key={c.title} className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-fg">
                          {c.title}
                          <span className="ml-2 font-mono text-xs text-muted">{c.issuer}</span>
                        </span>
                        <span className="shrink-0 font-mono text-xs text-muted">{c.date}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>
          </Reveal>

          {/* ---------------- §8 Appendix / Contact ---------------- */}
          <Reveal>
            <section id="appendix" className="scroll-mt-24 py-16">
              <SectionHeading n="08" id="appendix" title="Appendix" kicker="// get in touch" />
              <div className="rounded-xl border border-line bg-elev p-8 text-center shadow-sm">
                <p className="mx-auto max-w-lg text-base leading-relaxed text-muted">
                  I&apos;m open to backend and platform engineering roles, and to
                  interesting systems-design conversations. The fastest way to
                  reach me is a LinkedIn DM — or drop me an email.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <ExternalLink
                    href={profile.socials.linkedin}
                    className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
                  >
                    Message me on LinkedIn ↗
                  </ExternalLink>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-md border border-accent/40 px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-center gap-5 font-mono text-sm text-muted">
                  <ExternalLink href={profile.socials.github} className="hover:text-accent">GitHub</ExternalLink>
                  <span className="text-line">/</span>
                  <ExternalLink href={profile.socials.linkedin} className="hover:text-accent">LinkedIn</ExternalLink>
                </div>
              </div>
            </section>
          </Reveal>

          <footer className="border-t border-line py-8 font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name} · Crafted with care
          </footer>
        </div>
      </div>
    </div>
  );
}
