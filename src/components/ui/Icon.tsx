import {
  CalendarRange,
  Wrench,
  LayoutDashboard,
  Users,
  GraduationCap,
  Globe2,
  Fuel,
  FlaskConical,
  Zap,
  Mountain,
  HardHat,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  CalendarRange,
  Wrench,
  LayoutDashboard,
  Users,
  GraduationCap,
  Globe2,
  Fuel,
  FlaskConical,
  Zap,
  Mountain,
  HardHat,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? CalendarRange;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
