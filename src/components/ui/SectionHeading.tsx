import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
            light ? "text-emerald-bright" : "text-azure-600",
          )}
        >
          <span
            className={cn(
              "inline-block h-px w-8",
              light ? "bg-emerald-bright/60" : "bg-azure-600/50",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-slate-200/80" : "text-slate-600",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
