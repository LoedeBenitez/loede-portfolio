"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="border-t border-border px-6 py-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px 0px 0px 0px" }}
        variants={fadeUp(reduce, 0)}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row"
      >
        <p>
          Loede Benitez &mdash; Backend Developer · Systems Builder · &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <p>Built with caffeine, Laravel, and questionable debugging decisions.</p>
      </motion.div>
    </footer>
  );
}
