"use client";

import { Moon, Sun } from "lucide-react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

export default function ThemeToggle() {
  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = !document.documentElement.classList.contains("dark");
    const apply = () => {
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
    };

    const doc = document as ViewTransitionDocument;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || prefersReduced) {
      apply();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-r", `${radius}px`);
    document.documentElement.dataset.themeDir = next ? "in" : "out";

    const transition = doc.startViewTransition(apply);
    transition.ready
      .then(() => transition.finished)
      .then(() => {
        delete document.documentElement.dataset.themeDir;
      })
      .catch(() => {});
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="group relative inline-flex h-9 w-9 items-center justify-center text-muted transition hover:text-accent"
    >
      <Moon
        size={16}
        className="absolute transition-all duration-300 rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Sun
        size={16}
        className="absolute transition-all duration-300 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
