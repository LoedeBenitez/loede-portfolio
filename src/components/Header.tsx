"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { STAGGER } from "@/lib/motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#build", label: "Build" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  }, [scrolled]);

  return (
    <header
      ref={headerRef}
      className={`theme-transition sticky top-0 z-50 border-b border-border bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_24px_-16px_rgba(0,0,0,0.8)]" : ""
      }`}
    >
      <motion.span
        style={{ scaleX: progress }}
        className="absolute -bottom-px left-0 z-10 h-px w-full origin-left bg-accent"
      />

      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a href="#top" className="group relative flex items-center gap-2 py-1 font-mono text-sm tracking-tight">
          <Image
            src="/logo.png"
            alt=""
            width={1536}
            height={1024}
            className="h-8 w-auto"
            unoptimized
            priority
          />
          Loede Benitez
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wide text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="relative z-50 inline-flex h-9 w-9 items-center justify-center text-muted transition hover:text-foreground sm:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            id="mobile-nav"
            style={{ top: headerHeight }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-border bg-background sm:hidden"
          >
            <ol className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-10">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduce ? 0.01 : 0.3, delay: reduce ? 0 : i * STAGGER }}
                  className="flex items-baseline gap-4"
                >
                  <span className="font-mono text-xs text-muted">
                    0{i + 1}
                  </span>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl italic"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
