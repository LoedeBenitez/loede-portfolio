"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-border py-10 first:border-t-0 first:pt-0 sm:py-12"
    >
      <div className="grid gap-6 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-10">
        <div className="flex flex-row items-baseline gap-3 sm:flex-col sm:items-start sm:gap-2">
          <span className="font-mono text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl sm:text-3xl">{project.name}</h3>
            <span className="text-sm text-muted">{project.tagline}</span>
          </div>

          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-[2px] shrink-0 font-mono text-muted">
                  &mdash;
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-xs text-muted">
            <span className="font-mono">{project.stack.join(" · ")}</span>
            <span className="ml-auto flex flex-wrap gap-x-5 gap-y-1">
              {project.metrics.map((m) => (
                <span key={m.label} className="font-mono">
                  {m.value} <span className="text-muted/70">{m.label}</span>
                </span>
              ))}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">{project.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
