"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const commands = [
  { cmd: "whoami", out: "Loede Benitez — backend developer" },
  { cmd: "focus --current", out: "Reliable systems. Clear interfaces. Useful tools." },
  { cmd: "status", out: "Accepting select backend projects" },
];

const tools = ["PHP", "Laravel", "MySQL", "REST", "Git"];

function useTypedTerminal(active: boolean) {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(() => commands.map(() => ""));
  const [outShown, setOutShown] = useState(() => commands.map(() => false));
  const [footerShown, setFooterShown] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (!active || reduce) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(setTimeout(resolve, ms));
      });

    (async () => {
      for (let i = 0; i < commands.length; i++) {
        if (cancelled) return;
        setActiveLine(i);
        const full = commands[i].cmd;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          await wait(30);
          setTyped((prev) => {
            const next = [...prev];
            next[i] = full.slice(0, c);
            return next;
          });
        }
        await wait(180);
        if (cancelled) return;
        setOutShown((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        await wait(320);
      }
      if (cancelled) return;
      setActiveLine(-1);
      setFooterShown(true);
    })();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [active, reduce]);

  const skipToEnd = active && reduce;
  return {
    typed: skipToEnd ? commands.map((c) => c.cmd) : typed,
    outShown: skipToEnd ? commands.map(() => true) : outShown,
    footerShown: skipToEnd ? true : footerShown,
    activeLine: skipToEnd ? -1 : activeLine,
  };
}

export default function HeroPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { typed, outShown, footerShown, activeLine } = useTypedTerminal(inView);

  return (
    <div
      ref={ref}
      className="theme-transition relative overflow-hidden rounded-md border border-border bg-card shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        </div>
        <p className="font-mono text-[11px] text-muted">~/systems/loede.profile</p>
      </div>

      <div className="space-y-4 px-5 py-5 font-mono text-xs">
        {commands.map((c, i) => (
          <div key={c.cmd} className="min-h-[2.5em]">
            <p>
              <span className="text-accent">$</span> {typed[i]}
              {activeLine === i && (
                <span className="cursor-blink ml-0.5 inline-block h-3 w-[6px] translate-y-[2px] bg-accent" />
              )}
            </p>
            {outShown[i] && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1 text-muted"
              >
                {c.out}
                {c.cmd === "status" && (
                  <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#22c55e] align-middle" />
                )}
              </motion.p>
            )}
          </div>
        ))}

        {footerShown && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-sm border border-border px-2.5 py-1 text-[11px] text-foreground/80"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[11px] text-muted">
        <span className="flex items-center gap-2">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"
            animate={footerShown ? { opacity: [1, 0.35, 1] } : { opacity: 1 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          {footerShown ? "SYSTEM ONLINE" : "BOOTING…"}
        </span>
        <span className="cursor-blink inline-block h-3 w-[6px] bg-muted" />
      </div>
    </div>
  );
}
