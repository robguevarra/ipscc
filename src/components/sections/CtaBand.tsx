import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function CtaBand({
  title = "Let's plan for your success.",
  intro = "Tell us about your asset, scope and timeline. We'll set up a scoping call, agree deliverables, and stand up secure access — usually within days.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-azure pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-emerald-bright">Get started</p>
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{intro}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`} external arrow variant="primary">
              Email our team
            </Button>
            <Button href="/contact" variant="outline" arrow>
              Contact details
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-emerald-bright" />
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-emerald-bright" />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
