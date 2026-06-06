import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Network,
  CalendarClock,
  MessagesSquare,
  Globe2,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { remoteProcess, faqs, tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "How Remote Works",
  description:
    "Our remote planning & scheduling model explained: secure access, defined cadence, time-zone overlap, tooling, and data handling — engineered so remote delivery is dependable, not risky.",
  alternates: { canonical: "/how-remote-works" },
};

const security = [
  {
    icon: Lock,
    title: "Least-privilege access",
    body: "Named accounts, scoped permissions and access only to the systems an engagement needs — granted through your VPN or controlled gateways.",
  },
  {
    icon: FileCheck2,
    title: "Agreements first",
    body: "NDAs, confidentiality and security terms signed before any access. Your data-handling and retention policies govern how we work.",
  },
  {
    icon: Network,
    title: "Your environment, your rules",
    body: "We work inside your P6 database, templates and coding structure — not a parallel copy — so there is one source of truth and a clean audit trail.",
  },
];

const cadence = [
  {
    icon: CalendarClock,
    title: "Daily updates",
    body: "Progress captured and the schedule kept live every working day — never a week-old picture.",
  },
  {
    icon: MessagesSquare,
    title: "Weekly review",
    body: "A standing schedule and controls review with your team to align on critical path, risks and look-aheads.",
  },
  {
    icon: Globe2,
    title: "Guaranteed overlap",
    body: "Working hours structured for real overlap with your site, so a planner is reachable when decisions are made.",
  },
  {
    icon: RefreshCw,
    title: "Continuous tuning",
    body: "Cadence and deliverables adjust as the project moves between planning, execution and close-out.",
  },
];

export default function HowRemoteWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How remote works"
        title="Remote delivery, engineered to be trusted."
        intro="The reason offshore planning often disappoints isn't talent — it's process. Here is exactly how we make a remote desk dependable enough for a live turnaround."
      />

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The sequence"
              title="From first call to controlled delivery."
              intro="A repeatable five-step path. Nothing improvised, nothing hidden."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {remoteProcess.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 70}
                className="relative flex flex-col rounded-2xl border border-line bg-paper p-6"
              >
                <span className="font-display text-4xl font-bold text-azure-200">
                  {step.num}
                </span>
                <h3 className="mt-3 text-lg leading-snug text-navy">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Security */}
      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
        <div className="glow-azure pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Security & data"
              title="Your data never leaves your control."
              intro="The first question every operator asks about remote work is security. Here is our answer, before you have to ask."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {security.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald-bright">
                  <item.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300/80">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 flex items-center gap-3 rounded-xl border border-emerald/20 bg-emerald/5 px-5 py-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-bright" />
            <p className="text-sm text-slate-200">
              Specific certifications and security attestations available on
              request. <span className="text-slate-400">[Placeholder — add client&apos;s real certifications.]</span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Cadence */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cadence"
              title="A rhythm your team can rely on."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cadence.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="rounded-2xl border border-line bg-paper p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Tools */}
          <Reveal className="mt-12 rounded-2xl border border-line bg-navy p-8 text-white lg:p-10">
            <p className="eyebrow text-emerald-bright">Tooling</p>
            <h3 className="mt-3 max-w-xl text-2xl text-white">
              We adapt to your stack — not the other way around.
            </h3>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Questions"
              title="The things operators ask us first."
            />
          </Reveal>
          <Reveal className="mt-12">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
