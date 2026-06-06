import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Planning & scheduling expertise for oil & gas, petrochemical, power & energy, mining & metals, and construction & EPC — sectors where downtime is measured in dollars.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="We speak the language of heavy industry."
        intro="Scheduling discipline matters most where assets are capital-intensive, downtime is expensive, and safety is non-negotiable. That's exactly where we work."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="space-y-5">
            {industries.map((industry, i) => (
              <Reveal
                key={industry.slug}
                id={industry.slug}
                delay={(i % 2) * 60}
                as="article"
                className="group scroll-mt-28"
              >
                <div className="grid gap-6 rounded-2xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-azure-200 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:p-9">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-emerald-bright">
                      <Icon name={industry.icon} className="h-7 w-7" />
                    </span>
                    <h2 className="text-2xl text-navy">{industry.name}</h2>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-slate-600">
                      {industry.blurb}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                      {industry.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-navy-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-2xl border border-dashed border-azure-200 bg-azure-50/50 p-7 text-center">
            <p className="text-base text-navy-700">
              Operate in an adjacent sector — marine, infrastructure,
              manufacturing? The planning discipline travels.{" "}
              <a
                href="/contact"
                className="font-semibold text-azure-600 underline underline-offset-4"
              >
                Ask us about your asset.
              </a>
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
