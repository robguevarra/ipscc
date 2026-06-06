import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-[0_24px_48px_-24px_rgba(15,92,163,0.35)]"
    >
      <div className="bg-blueprint-light pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600 transition-colors duration-300 group-hover:bg-azure-600 group-hover:text-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure-600" />
      </div>
      <h3 className="relative mt-6 text-xl leading-snug text-navy">
        {service.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
        {service.short}
      </p>
    </Link>
  );
}
