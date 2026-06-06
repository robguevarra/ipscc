import Link from "next/link";
import { ArrowRight, Quote, ShieldCheck, Clock, Banknote, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { Hero } from "@/components/home/Hero";
import { ProofMarquee } from "@/components/home/ProofMarquee";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  services,
  industries,
  stats,
  remoteProcess,
  caseStudies,
  testimonials,
} from "@/lib/content";

const valueProps = [
  {
    icon: Banknote,
    title: "Cut planning cost, not quality",
    body: "An offshore senior desk delivers the same Primavera-grade output as an on-site team — typically at a fraction of the loaded cost.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for remote, not improvised",
    body: "Secure named-account access, least-privilege data handling, and a defined cadence make remote delivery dependable, not risky.",
  },
  {
    icon: Clock,
    title: "Always in your working hours",
    body: "Every engagement guarantees meaningful time-zone overlap, so a planner is reachable when your project teams need answers.",
  },
  {
    icon: Layers,
    title: "Scales with your project load",
    body: "Flex capacity up for projects and turnarounds, then back down between them. Senior expertise on demand, no permanent overhead.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofMarquee />

      {/* Value props */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why iPSCC"
              title="The remote planning desk, done properly."
              intro="Most operators know offshore planning could save money. The reason it often fails is execution — security, cadence and quality. We engineered all three from the start."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-white">
                <div className="flex h-full flex-col p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                    <v.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg leading-snug text-navy">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Planning & scheduling, end to end."
              intro="From a single resource-loaded baseline to a fully embedded controls function — pick the depth you need."
            />
            <Button href="/services" variant="ghost" arrow className="shrink-0 px-0">
              All services
            </Button>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
        <div className="glow-azure pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative">
          <Reveal className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </Reveal>
          <p className="mt-10 font-mono text-xs text-slate-500">
            * Indicative figures — replace with verified client metrics.
          </p>
        </Container>
      </section>

      {/* Process teaser */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="How remote works"
                title="A model you can trust with a live turnaround."
                intro="No black box. A clear, repeatable sequence from first conversation to controlled delivery — secured to your standards at every step."
              />
              <Button href="/how-remote-works" arrow className="mt-8">
                The full process
              </Button>
            </Reveal>

            <div className="relative">
              <div className="absolute top-2 bottom-2 left-[15px] w-px bg-line lg:left-[19px]" aria-hidden />
              <ol className="space-y-7">
                {remoteProcess.slice(0, 4).map((step, i) => (
                  <Reveal key={step.num} delay={i * 70} as="li" className="relative flex gap-5">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-xs font-medium text-white lg:h-10 lg:w-10">
                      {step.num}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg text-navy">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="Industries"
              title="Built for the assets where downtime is measured in dollars."
              intro="We work where scheduling discipline directly protects production, safety and budget."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 80}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Proof"
              title="Outcomes, not promises."
              intro="Representative engagements showing how a remote desk changes results on the ground."
            />
            <Button href="/case-studies" variant="ghost" arrow className="shrink-0 px-0">
              All case studies
            </Button>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/case-studies#${cs.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,92,163,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <Badge tone="azure">{cs.industry}</Badge>
                    {cs.placeholder && <Badge tone="muted">Sample</Badge>}
                  </div>
                  <h3 className="mt-5 text-lg leading-snug text-navy">{cs.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-5">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-display text-xl font-bold text-azure-600">
                          {r.metric}
                        </div>
                        <div className="font-mono text-[0.6rem] uppercase tracking-wider text-slate-500">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600">
                    Read the story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="In their words"
              title="What partnering with a remote desk feels like."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7">
                  <Quote className="h-8 w-8 text-azure-200" />
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-navy">{t.name}</div>
                        <div className="text-sm text-slate-500">{t.role}</div>
                      </div>
                      {t.placeholder && <Badge tone="muted">Sample</Badge>}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
