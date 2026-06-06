"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="relative z-10 flex items-center" aria-label={`${site.name} home`}>
          <Image
            src="/brand/ipscc-logo.png"
            alt={`${site.name} — ${site.legalName}`}
            width={830}
            height={196}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-azure-700"
                    : "text-slate-600 hover:text-navy",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-emerald" />
                )}
              </Link>
            );
          })}
        </div>

        <a
          href={`mailto:${site.email}`}
          className="hidden items-center gap-2 rounded-full bg-azure-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,198,0.6)] transition-colors hover:bg-azure-700 lg:inline-flex"
        >
          <Mail className="h-4 w-4" />
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-0 origin-top bg-navy transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="bg-blueprint flex h-full flex-col px-6 pb-10 pt-24">
          <div className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white transition-colors hover:text-emerald-bright"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-6 py-4 text-base font-semibold text-white"
          >
            <Mail className="h-5 w-5" />
            {site.email}
          </a>
          <p className="mt-6 font-mono text-sm text-slate-300">
            {site.phoneDisplay}
          </p>
        </div>
      </div>
    </header>
  );
}
