"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const target = parseFloat(value);
  const isNumeric = !Number.isNaN(target);
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const current = target * eased;
              setDisplay(
                Number.isInteger(target)
                  ? String(Math.round(current))
                  : current.toFixed(1),
              );
              if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [isNumeric, target]);

  return (
    <div ref={ref}>
      <div className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {display}
        <span className="text-emerald-bright">{suffix}</span>
      </div>
      <p className="mt-3 text-sm leading-snug text-slate-300/80">{label}</p>
    </div>
  );
}
