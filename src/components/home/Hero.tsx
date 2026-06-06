import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { ShieldCheck, Globe2, TrendingDown } from "lucide-react";

const ganttRows = [
  { label: "Baseline schedule", start: 0, width: 46, tone: "azure" },
  { label: "Resource loading", start: 18, width: 40, tone: "azure" },
  { label: "Look-ahead (3wk)", start: 38, width: 34, tone: "emerald" },
  { label: "Progress update", start: 30, width: 52, tone: "azure" },
  { label: "Critical path", start: 12, width: 70, tone: "emerald" },
  { label: "Variance report", start: 58, width: 30, tone: "azure" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-30 pb-20 text-white sm:pt-36 lg:pb-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-azure pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <p className="anim-fade eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-emerald-bright">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-bright" />
              </span>
              Remote planning &amp; scheduling
            </p>

            <h1 className="anim-rise mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]" style={{ animationDelay: "80ms" }}>
              Enterprise-grade planning.
              <br />
              <span className="bg-gradient-to-r from-azure-300 via-azure-400 to-emerald-bright bg-clip-text text-transparent">
                A fraction of the cost.
              </span>
            </h1>

            <p className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-slate-300" style={{ animationDelay: "180ms" }}>
              {site.name}{" "}
              gives oil &amp; gas, petrochemical and heavy-industry operators a
              senior, certified planning &amp; scheduling desk —
              delivered remotely, secured to your standards, and proven on
              turnarounds where every hour counts.
            </p>

            <div className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
              <Button href={`mailto:${site.email}`} external arrow variant="primary">
                Start a conversation
              </Button>
              <Button href="/how-remote-works" variant="outline" arrow>
                See how remote works
              </Button>
            </div>

            <ul className="anim-rise mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300" style={{ animationDelay: "380ms" }}>
              <li className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-emerald-bright" />
                Up to 60% lower cost
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-bright" />
                Secure, governed access
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-emerald-bright" />
                Your time-zone overlap
              </li>
            </ul>
          </div>

          {/* Gantt visual */}
          <div className="anim-rise relative" style={{ animationDelay: "320ms" }}>
            <div className="absolute -inset-4 rounded-[2rem] bg-azure-500/10 blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-white/10 bg-navy/70 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-bright/80" />
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                  Turnaround_v4.xer
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                {ganttRows.map((row, i) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="w-28 shrink-0 truncate font-mono text-[0.68rem] text-slate-400 sm:w-32">
                      {row.label}
                    </span>
                    <div className="relative h-3 flex-1 rounded-full bg-white/5">
                      <div
                        className="absolute inset-y-0 rounded-full anim-fade"
                        style={{
                          left: `${row.start}%`,
                          width: `${row.width}%`,
                          background:
                            row.tone === "emerald"
                              ? "linear-gradient(90deg,#12b886,#1ed39b)"
                              : "linear-gradient(90deg,#1473c6,#4c98e6)",
                          animationDelay: `${500 + i * 110}ms`,
                          opacity: 0,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {[
                  { k: "On track", v: "94%" },
                  { k: "Float", v: "+2d" },
                  { k: "Updated", v: "Daily" },
                ].map((m) => (
                  <div key={m.k} className="rounded-lg bg-white/5 px-3 py-2.5">
                    <div className="font-display text-lg font-bold text-white">
                      {m.v}
                    </div>
                    <div className="font-mono text-[0.6rem] uppercase tracking-widest text-slate-400">
                      {m.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
