import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-azure-600 text-white hover:bg-azure-700 shadow-[0_8px_24px_-8px_rgba(20,115,198,0.6)]",
  ghost:
    "bg-transparent text-navy hover:text-azure-700",
  light:
    "bg-white text-navy hover:bg-azure-50",
  outline:
    "border border-white/25 text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2";
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cn(base, styles[variant], className)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {content}
    </Link>
  );
}
