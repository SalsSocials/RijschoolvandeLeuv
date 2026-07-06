import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) =>
    `${Math.round(v).toLocaleString("nl-NL")}${suffix}`
  );
  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
