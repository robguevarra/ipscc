import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Industry } from "@/lib/content";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-700/40 p-7 transition-colors duration-300 hover:bg-navy-700/70">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-bright">
        <Icon name={industry.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl text-white">{industry.name}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-300/80">
        {industry.blurb}
      </p>
      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
        {industry.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
