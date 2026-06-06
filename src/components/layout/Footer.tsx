import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-azure pointer-events-none absolute inset-0 opacity-40" />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/brand/ipscc-logo-alt.png"
              alt={site.name}
              width={830}
              height={196}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.legalName}. {site.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-emerald-bright">
                Remote-first
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-azure-300">
                Oil &amp; Gas · Energy
              </span>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-emerald-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-slate-300 transition-colors hover:text-emerald-bright"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
                  <span>{site.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.founded}–present {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
