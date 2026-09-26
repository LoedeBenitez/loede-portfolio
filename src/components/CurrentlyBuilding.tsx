"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeUpScale, STAGGER } from "@/lib/motion";

const items = [
  "Backend architecture",
  "API improvements",
  "Better internal tools",
  "Cleaner data workflows",
];

const changes = ["architecture", "integrations", "reporting"];

export default function CurrentlyBuilding() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px 0px 0px 0px" }}
            variants={fadeUp(reduce, 0)}
          >
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
              <span className="text-accent">05</span>
              <span className="h-px w-6 bg-accent" />
              Currently building
            </p>

            <h2 className="mt-4 text-balance font-serif text-3xl sm:text-4xl">
              Something useful.
            </h2>

            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              In progress
            </div>

            <ul className="mt-6 space-y-2.5 text-[15px] text-muted">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check size={14} className="shrink-0 text-[#22c55e]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px 0px 0px 0px" }}
            variants={fadeUpScale(reduce, STAGGER)}
            className="theme-transition rounded-md border border-border bg-card shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-[11px] uppercase tracking-wide text-muted">
              <span>Dev / active work</span>
              <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            </div>

            <div className="space-y-3 px-5 py-5 font-mono text-xs">
              <p>
                <span className="text-accent">$</span> git status
              </p>
              <p className="text-muted">On branch improve/systems</p>

              <p className="pt-2 text-muted">Changes in progress:</p>
              <ul className="space-y-1 pl-3 text-muted">
                {changes.map((change) => (
                  <li key={change}>
                    <span className="text-accent">+</span> {change}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                <span>Shipping carefully</span>
                <span className="text-accent">60%</span>
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-border">
                <div className="h-1 w-[60%] rounded-full bg-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
