"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeUp, STAGGER } from "@/lib/motion";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-20 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp(reduce, 0)}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted"
          >
            <span className="text-accent">01</span>
            <span className="h-px w-6 bg-accent" />
            Selected work
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp(reduce, STAGGER)}
            className="mx-auto mt-3 max-w-2xl text-balance text-center font-serif text-3xl sm:text-4xl"
          >
            Things I&rsquo;ve built behind the interface.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp(reduce, STAGGER * 2)}
            className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-muted"
          >
            Most of the interesting work happens where users don&rsquo;t see
            it &mdash; APIs, business logic, databases, integrations, and
            systems that quietly keep everything running.
          </motion.p>
        </div>

        <div className="mt-10">
          {projects.map((project, i) => (
            <ProjectItem
              key={project.slug}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
