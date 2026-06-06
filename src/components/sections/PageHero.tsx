import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-white sm:pt-40 lg:pb-20">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-azure pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <p className="anim-fade eyebrow text-emerald-bright">{eyebrow}</p>
        <h1 className="anim-rise mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p
            className="anim-rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
            style={{ animationDelay: "120ms" }}
          >
            {intro}
          </p>
        )}
        {children && <div className="anim-rise mt-8" style={{ animationDelay: "200ms" }}>{children}</div>}
      </Container>
    </section>
  );
}
