import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { site, mailtoQuote } from "@/lib/site";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with iPSCC for remote planning & scheduling. Email info@ipscc.net or call +63 927 400 9893. Monday–Saturday, 9 AM–5 PM PHT.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.address.full,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
  },
];

const includeList = [
  "Your company and the asset or site involved",
  "Industry and asset type (refinery, plant, outage, etc.)",
  "Scope: project, turnaround, maintenance, controls or training",
  "Timeline and any key milestone dates",
  "Preferred tools (Primavera P6, MS Project, …)",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan for your success."
        intro="No forms to wrestle with. Email or call us directly — a senior planner, not a sales queue, will get back to you."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Methods */}
            <Reveal>
              <SectionHeading eyebrow="Reach us" title="Direct lines." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactMethods.map((m) => {
                  const Inner = (
                    <>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                        <m.icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <div className="mt-4">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                          {m.label}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 font-semibold text-navy">
                          {m.value}
                          {m.href && (
                            <ArrowUpRight className="h-4 w-4 text-azure-500" />
                          )}
                        </p>
                      </div>
                    </>
                  );
                  return m.href ? (
                    <a
                      key={m.label}
                      href={m.href}
                      className="group rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-azure-200"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-line bg-paper p-6"
                    >
                      {Inner}
                    </div>
                  );
                })}
              </div>

              <a
                href={mailtoQuote}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-azure-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,198,0.6)] transition-colors hover:bg-azure-700"
              >
                <Mail className="h-4 w-4" />
                Start a project enquiry
              </a>
            </Reveal>

            {/* What to include */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-line bg-navy p-8 text-white lg:p-10">
                <p className="eyebrow text-emerald-bright">Make it fast</p>
                <h2 className="mt-3 text-2xl text-white">
                  A few details get you a sharper reply.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Pop these into your email and we can come back with a concrete
                  recommendation instead of a discovery call about a discovery
                  call.
                </p>
                <ul className="mt-7 space-y-3">
                  {includeList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-bright" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
                  Typical response within one business day · {site.hours}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Before you write"
              title="Quick answers to common questions."
            />
          </Reveal>
          <Reveal className="mt-12">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
