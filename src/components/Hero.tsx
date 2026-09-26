"use client";

import { motion, useReducedMotion } from "framer-motion";

const meta = [
  { label: "Role", value: "Developer, Mary Grace" },
  { label: "Focus", value: "Internal Laravel platforms" },
  { label: "Stack", value: "Laravel · PHP · MySQL · Redis · SAP" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: reduce ? 0 : i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="top" className="px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-wide text-muted"
        >
          Full-stack developer
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-[1.15] sm:text-5xl"
        >
          I build the systems that run Mary Grace&rsquo;s stores.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted"
        >
          I design and maintain a family of internal Laravel platforms
          spanning point-of-sale, supply chain and manufacturing, inventory,
          HR, and store operations &mdash; wired together with SAP, Redis, and
          a fair amount of production-line-grade reliability.
        </motion.p>

        <motion.dl
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 border-y border-border py-5 text-sm sm:grid-cols-3"
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {item.label}
              </dt>
              <dd className="mt-1">{item.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
        >
          <a href="#work" className="underline decoration-border underline-offset-4 transition hover:decoration-accent hover:text-accent">
            See the work &rarr;
          </a>
          <a href="#about" className="text-muted underline decoration-border underline-offset-4 transition hover:decoration-accent hover:text-foreground">
            More about me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
