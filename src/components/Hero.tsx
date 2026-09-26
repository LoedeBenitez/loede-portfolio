"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DURATION, EASE, RISE, STAGGER } from "@/lib/motion";
import HeroPanel from "./HeroPanel";

const meta = [
  { label: "Based in", value: "Philippines" },
  { label: "Focus", value: "Backend systems · APIs · databases" },
  { label: "Currently", value: "Building reliable things behind the scenes" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : RISE },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : DURATION, delay: reduce ? 0 : i * STAGGER, ease: EASE },
    }),
  };

  return (
    <section id="top" className="scroll-mt-20 relative overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 130px)",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent"
            >
              <span className="h-px w-6 bg-accent" />
              Backend developer · Systems builder
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="mt-5 max-w-xl text-balance font-sans text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]"
            >
              I build the systems
              <br />
              behind the things
              <br />
              <span className="text-accent-tint">people use.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-muted"
            >
              I design and build APIs, backend services, databases, integrations,
              and internal tools that keep products and operations moving.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-accent-deep px-5 py-3 font-mono text-xs uppercase tracking-wide text-white transition hover:opacity-90"
              >
                View my work
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wide transition hover:border-accent hover:text-accent"
              >
                Let&rsquo;s talk
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : RISE, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduce ? 0.01 : DURATION, delay: reduce ? 0 : 4 * STAGGER, ease: EASE }}
          >
            <HeroPanel />
          </motion.div>
        </div>

        <motion.dl
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="mt-16 grid grid-cols-1 divide-y divide-border border-t border-border text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {meta.map((item) => (
            <div key={item.label} className="py-5 sm:px-8 sm:first:pl-0">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {item.label}
              </dt>
              <dd className="mt-1.5">{item.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
