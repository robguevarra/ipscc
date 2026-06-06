import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  tone = "azure",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "azure" | "emerald" | "muted";
}) {
  const tones = {
    azure: "bg-azure-50 text-azure-700 border-azure-200",
    emerald: "bg-emerald/10 text-emerald-deep border-emerald/30",
    muted: "bg-slate-100 text-slate-500 border-slate-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
