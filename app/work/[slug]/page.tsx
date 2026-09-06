import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import { SectionHeading } from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import TagList from "@/components/TagList";
import ExternalLink from "@/components/ExternalLink";
import { caseStudies, profile } from "@/lib/portfolio";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.name} — ${profile.name}`,
    description: cs.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <div className="flex items-center justify-between">
        <Link href="/#case-studies" className="font-mono text-xs text-muted hover:text-accent">
          ← back to case studies
        </Link>
        <ThemeToggle />
      </div>

      {/* header */}
      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <Badge>CASE STUDY</Badge>
          <Badge variant="success">{cs.status}</Badge>
          <span>· {cs.timeframe}</span>
          <span>· {cs.role}</span>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {cs.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{cs.tagline}</p>
        <TagList items={cs.stack} className="mt-5" />
        {cs.projectUrl && (
          <ExternalLink
            href={cs.projectUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-accent/40 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
          >
            View the project ↗
          </ExternalLink>
        )}
      </header>

      {/* context */}
      <Section n="01" title="Context">
        <p className="leading-relaxed text-muted">{cs.context}</p>
      </Section>

      {/* contributions */}
      <Section n="02" title="My contributions">
        <ul className="space-y-2">
          {cs.contributions.map((p, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <footer className="mt-12 flex items-center justify-between border-t border-line pt-8">
        <Link href="/#case-studies" className="font-mono text-xs text-muted hover:text-accent">
          ← all case studies
        </Link>
        <ExternalLink
          href={profile.socials.linkedin}
          className="font-mono text-xs text-accent hover:underline"
        >
          discuss this work ↗
        </ExternalLink>
      </footer>
    </div>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line py-10">
      <SectionHeading n={n} title={title} inline />
      {children}
    </section>
  );
}
