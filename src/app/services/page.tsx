import type { Metadata } from "next";
import { Check, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Remote planning & scheduling services: integrated CPM scheduling, turnaround & shutdown planning, project controls, workforce supply, training and a fully remote planning desk.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Depth where it matters, flexibility where you need it."
        intro="Six ways we plug into your operation — from a single resource-loaded baseline to a fully embedded, remote project-controls function."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                id={service.slug}
                as="article"
                className="scroll-mt-28"
              >
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  {/* Left: identity */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                        <Icon name={service.icon} className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-sm text-slate-400">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl leading-tight text-navy lg:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {service.short}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <Badge key={tool} tone="muted">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right: detail */}
                  <div className="rounded-2xl border border-line bg-paper p-7 lg:p-9">
                    <div className="rounded-xl border border-azure-100 bg-azure-50/60 p-5">
                      <p className="eyebrow text-azure-700">The problem</p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        {service.problem}
                      </p>
                    </div>

                    <div className="mt-7 grid gap-7 sm:grid-cols-2">
                      <div>
                        <h3 className="flex items-center gap-2 text-base text-navy">
                          <Wrench className="h-4 w-4 text-azure-600" />
                          What we do
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {service.whatWeDo.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base text-navy">You receive</h3>
                        <ul className="mt-3 space-y-2.5">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
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
        title="Not sure which fits?"
        intro="Tell us the asset and the problem. We'll recommend the lightest engagement that solves it — and scale from there."
      />
    </>
  );
}
