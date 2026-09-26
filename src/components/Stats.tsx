"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, motion, animate } from "framer-motion";
import { stats } from "@/data/stats";
import { fadeUpScale, STAGGER } from "@/lib/motion";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const digits = match?.[1];
  const suffix = match?.[2] ?? "";
  const shouldAnimate = inView && !reduce && !!digits;
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!shouldAnimate || !digits) return;
    const target = Number(digits);
    const controls = animate(0, target, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [shouldAnimate, digits, suffix]);

  return (
    <span ref={ref} className="font-sans text-4xl font-bold leading-none sm:text-5xl">
      {shouldAnimate ? display : value}
    </span>
  );
}

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="theme-transition rounded-md border border-border bg-card p-6 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                Proof metrics
              </p>
              <h2 className="mt-2 font-sans text-2xl font-bold sm:text-3xl">
                System impact
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live systems
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUpScale(reduce, i * STAGGER)}
                className="theme-transition rounded-md border border-border bg-background p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <StatValue value={stat.value} />
                  <span className="shrink-0 rounded-full border border-accent/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    {stat.tag}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted/70">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
