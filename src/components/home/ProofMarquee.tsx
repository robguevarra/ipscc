import { tools } from "@/lib/content";

export function ProofMarquee() {
  const items = [...tools, ...tools];
  return (
    <section className="border-y border-line bg-paper py-7" aria-label="Tools and platforms we work in">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
            Fluent in your stack
          </p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-10">
              {items.map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="whitespace-nowrap font-display text-lg font-semibold text-navy/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
