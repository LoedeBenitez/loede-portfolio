"use client";

import { motion, useReducedMotion } from "framer-motion";
import { capabilities } from "@/data/capabilities";
import { fadeUp, STAGGER } from "@/lib/motion";

export default function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section id="build" className="scroll-mt-20 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, 0)}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted"
        >
          <span className="text-accent">02</span>
          <span className="h-px w-6 bg-accent" />
          What I build
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, STAGGER)}
          className="mx-auto mt-5 max-w-2xl text-balance text-center font-serif text-3xl sm:text-4xl"
        >
          Backend foundations designed for real operations.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, STAGGER * 2)}
          className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-muted"
        >
          From a clean API contract to the data model underneath it, I build
          practical systems that are reliable, legible, and ready to evolve.
        </motion.p>

        <div className="mt-10 border-t border-border">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp(reduce, (i % 3) * STAGGER)}
                className="group flex items-center gap-5 border-b border-border py-6 pl-0 transition-all duration-300 hover:bg-accent-soft hover:pl-3 sm:gap-6"
              >
                <span className="w-6 shrink-0 font-mono text-sm text-muted sm:w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-card text-accent transition-colors duration-300 group-hover:border-accent">
                  <Icon size={18} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-sans text-xl font-bold sm:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>

                <div className="hidden shrink-0 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-accent sm:block">
                  {item.route}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
