import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink py-32 text-white">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-azure pointer-events-none absolute inset-0" />
      <Container className="relative text-center">
        <p className="font-display text-7xl font-bold text-azure-400 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-3xl text-white sm:text-4xl">
          This activity isn&apos;t on the schedule.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          The page you&apos;re looking for has slipped off the critical path.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" arrow>
            Back to home
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-slate-400">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-bright"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
