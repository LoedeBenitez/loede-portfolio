"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { fadeUp, STAGGER } from "@/lib/motion";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, 0)}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted"
        >
          <span className="text-accent">04</span>
          <span className="h-px w-6 bg-accent" />
          Experience
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, STAGGER)}
          className="mx-auto mt-5 max-w-2xl text-balance text-center font-serif text-3xl sm:text-4xl"
        >
          I like building the parts nobody notices &mdash; until they stop
          working.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(reduce, STAGGER * 2)}
          className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-muted"
        >
          I&rsquo;m a backend developer focused on building practical systems
          for real-world operations. I enjoy turning complicated workflows
          into reliable APIs, clean data structures, and tools that make
          people&rsquo;s work easier.
        </motion.p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp(reduce, 0)}
          >
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              Production-minded
            </p>
            <h3 className="mt-4 font-sans text-2xl font-bold leading-snug sm:text-3xl">
              Clear architecture. Useful abstractions. Business problems
              before tooling trends.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I care about maintainability, ownership, and leaving systems
              easier to understand than I found them.
            </p>
          </motion.div>

          <div className="border-t border-border">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp(reduce, i * STAGGER)}
                className="grid grid-cols-1 gap-3 border-b border-border py-8 md:grid-cols-[7rem_1fr_1.4fr] md:gap-8"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  {job.period}
                </p>

                <div>
                  <h4 className="font-sans text-xl font-bold">{job.role}</h4>
                  <p className="mt-1 text-sm text-muted">{job.org}</p>
                </div>

                <div>
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>
                          {bullet.label && (
                            <span className="font-semibold text-foreground">
                              {bullet.label}:{" "}
                            </span>
                          )}
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {job.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
