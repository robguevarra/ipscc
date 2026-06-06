import type { Metadata } from "next";
import { Target, Route, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative remote planning & scheduling engagements — turnaround recovery, project controls stand-up, and a flexible planning desk — with the outcomes they delivered.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="What changes when planning is done right."
        intro="The engagements below are representative templates that mirror the work we do. We'll replace them with named, verified client stories as releases are approved."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <Reveal
                key={cs.slug}
                id={cs.slug}
                delay={(i % 2) * 60}
                as="article"
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-line"
              >
                <div className="grid lg:grid-cols-[1.4fr_1fr]">
                  {/* Narrative */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <Badge tone="azure">{cs.industry}</Badge>
                      {cs.placeholder && <Badge tone="muted">Sample story</Badge>}
                    </div>
                    <h2 className="mt-5 text-2xl leading-tight text-navy lg:text-3xl">
                      {cs.title}
                    </h2>

                    <div className="mt-7 space-y-6">
                      <div className="flex gap-4">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                          <Target className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div>
                          <p className="eyebrow text-slate-400">Challenge</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {cs.challenge}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-azure-50 text-azure-600">
                          <Route className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div>
                          <p className="eyebrow text-slate-400">Approach</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {cs.approach}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="relative overflow-hidden bg-navy p-8 text-white lg:p-10">
                    <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-50" />
                    <div className="relative">
                      <p className="eyebrow flex items-center gap-2 text-emerald-bright">
                        <TrendingUp className="h-4 w-4" />
                        Results
                      </p>
                      <div className="mt-7 space-y-7">
                        {cs.results.map((r) => (
                          <div key={r.label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                            <div className="font-display text-4xl font-bold text-white">
                              {r.metric}
                            </div>
                            <div className="mt-1 text-sm text-slate-300/80">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Your story could be next."
        intro="Bring us the asset and the problem. We'll show you, in writing, what a remote desk would deliver and what it would cost."
      />
    </>
  );
}
