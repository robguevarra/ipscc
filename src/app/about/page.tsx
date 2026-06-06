import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Compass, Award, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { credentials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "iPSCC is a remote planning & scheduling consultancy built on a simple idea: senior, certified planning talent should be accessible to every operator — not just those who can afford a large on-site team.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Mission",
    body: "To give every operator access to senior, certified planning & scheduling expertise — delivered remotely, securely, and at a cost that makes sense.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "A world where great project control isn't a luxury of the largest budgets, but the standard for any asset that values its uptime.",
  },
  {
    icon: Compass,
    title: "How we work",
    body: "Engineered process over improvisation. Honest schedules over optimistic ones. Your standards, your tools, your single source of truth.",
  },
];

const principles = [
  "We tell you the real date, not the comfortable one.",
  "We work inside your environment, never a parallel copy.",
  "We earn trust with cadence and proof, every week.",
  "We scale with your project load, not against your budget.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About iPSCC"
        title="Senior planning expertise, made accessible."
        intro={`${site.legalName} exists to close a simple gap: the operators who most need disciplined planning often can't justify a large on-site controls team. We deliver that capability remotely — at a fraction of the cost.`}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="Built remote-first, on purpose."
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  iPSCC was founded on a conviction formed across years on
                  turnarounds, shutdowns and capital projects: the difference
                  between a project that holds and one that slips is almost
                  always the quality of its planning — and that quality is far
                  too scarce and expensive.
                </p>
                <p>
                  So we built a consultancy designed for remote delivery from
                  day one. Not a call centre, and not freelancers — a senior
                  desk of certified planners and schedulers who embed in your
                  tools and governance, hold a real cadence, and deliver the
                  same output a strong on-site team would.
                </p>
                <p>
                  Based in the Philippines and serving operators worldwide, we
                  pair deep industry experience with a cost base that lets you
                  put senior planning on every project — not just the flagship
                  ones.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {credentials.map((c) => (
                  <Badge key={c} tone="emerald">
                    <Award className="h-3 w-3" /> {c}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 font-mono text-xs text-slate-400">
                [Placeholder credentials — replace with the team&apos;s verified
                certifications.]
              </p>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-azure-100/60 blur-2xl" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-navy">
                <Image
                  src="/brand/ipscc-mark.png"
                  alt="iPSCC"
                  width={900}
                  height={900}
                  className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 opacity-90"
                />
                <div className="bg-blueprint absolute inset-0 opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-7">
                  <p className="font-display text-xl font-semibold text-white">
                    Plan for your success.
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Remote · Certified · Secure
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What drives us"
              title="The principles behind every engagement."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="rounded-2xl border border-line bg-white p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
                  <v.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-3xl border border-line bg-navy p-8 text-white lg:p-12">
            <p className="eyebrow text-emerald-bright">What you can hold us to</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-bright" />
                  <span className="text-base text-slate-200">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
