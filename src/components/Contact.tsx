"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, STAGGER } from "@/lib/motion";

function GithubIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.98 10.98 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.17v3.22c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21h-4V9Z" />
    </svg>
  );
}

const links = [
  { label: "Email", value: "benitez.loede@gmail.com", href: "mailto:benitez.loede@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/LoedeBenitez", href: "https://github.com/LoedeBenitez", icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/loede-benitez", href: "https://www.linkedin.com/in/loede-benitez-133282227", icon: LinkedinIcon },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px 0px 0px 0px" }}
            variants={fadeUp(reduce, 0)}
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              Contact / Start a conversation
            </p>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl sm:text-4xl">
              Got a system that needs building?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Whether it&rsquo;s an API, internal platform, integration, or a
              backend problem that needs untangling, let&rsquo;s talk.
            </p>

            <a
              href="mailto:benitez.loede@gmail.com"
              className="mt-8 inline-flex items-center gap-2 bg-accent-deep px-5 py-3 font-mono text-xs uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Send an email
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <div className="border-t border-border">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px 0px 0px 0px" }}
                  variants={fadeUp(reduce, i * STAGGER)}
                  className="group flex items-center gap-4 border-b border-border py-5 pl-0 transition-all duration-300 hover:bg-accent-soft hover:pl-3"
                >
                  <Icon size={16} className="shrink-0 text-accent" />
                  <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wide text-muted">
                    {link.label}
                  </span>
                  <span className="flex-1 truncate text-sm">{link.value}</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted transition-colors duration-300 group-hover:text-accent"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
