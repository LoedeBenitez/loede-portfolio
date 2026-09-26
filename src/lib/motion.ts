export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.7;
export const STAGGER = 0.1;
export const RISE = 28;

export function fadeUp(reduce: boolean | null, delay = 0) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : RISE },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : DURATION, delay: reduce ? 0 : delay, ease: EASE },
    },
  };
}

export function fadeUpScale(reduce: boolean | null, delay = 0) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : RISE, scale: reduce ? 1 : 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.01 : DURATION, delay: reduce ? 0 : delay, ease: EASE },
    },
  };
}
