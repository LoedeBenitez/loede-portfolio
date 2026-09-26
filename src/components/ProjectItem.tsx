"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DURATION, EASE, RISE } from "@/lib/motion";
import type { Project } from "@/data/projects";

export default function ProjectItem({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.01 : DURATION, ease: EASE }}
      tabIndex={0}
      className="group relative cursor-pointer border-t border-border py-8 pl-5 pr-1 outline-none transition-all duration-300 first:border-t-0 hover:bg-accent-soft hover:pl-7 focus:bg-accent-soft focus:pl-7 sm:py-10"
    >
      <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100 group-focus:scale-y-100" />

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-accent group-focus:text-accent sm:text-3xl">
              {project.name}
            </h3>
            <ArrowUpRight
              size={18}
              className="-translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100"
            />
          </div>
          <p className="mt-1 pl-8 text-sm text-muted">{project.subtitle}</p>

          <p className="mt-4 max-w-xl pl-8 text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 pl-8 font-mono text-xs text-muted transition-opacity duration-300 group-hover:text-foreground/80 group-focus:text-foreground/80">
            {project.tags.join(" · ")}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-3 pt-1">
          <span className="font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
