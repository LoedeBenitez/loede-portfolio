"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stackGroups } from "@/data/stack";
import { DURATION, EASE, fadeUp, RISE, STAGGER } from "@/lib/motion";

const tilt = [-2, 1.5, -1, 2, -1.5];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="stack" className="scroll-mt-20 border-y border-border bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp(reduce, 0)}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted"
            >
              <span className="text-accent">03</span>
              <span className="h-px w-6 bg-accent" />
              Stack
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp(reduce, STAGGER)}
              className="mt-3 text-balance font-serif text-3xl sm:text-4xl"
            >
              My usual toolbox.
            </motion.h2>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
            build: 2026 · status: operational
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {stackGroups.map((group, i) => {
            const rotate = reduce ? 0 : tilt[i % tilt.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: reduce ? 0 : RISE, scale: reduce ? 1 : 0.98, rotate }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate }}
                whileHover={{ rotate: 0, y: -4 }}
                whileFocus={{ rotate: 0, y: -4 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: reduce ? 0.01 : DURATION, delay: reduce ? 0 : (i % 3) * STAGGER, ease: EASE }}
                tabIndex={0}
                className="group relative w-full outline-none sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="theme-transition relative border border-border bg-background p-6 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-300 group-hover:shadow-[0_10px_26px_-6px_rgba(0,0,0,0.22)] group-focus:shadow-[0_10px_26px_-6px_rgba(0,0,0,0.22)] dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.6)] dark:group-hover:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.75)]">
                  <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />

                  <p className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")} / {String(stackGroups.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{group.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm bg-card px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-md text-center font-serif text-lg italic text-muted">
          I don&rsquo;t collect technologies. I collect problems worth
          solving.
        </p>
      </div>
    </section>
  );
}
