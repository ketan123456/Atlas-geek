"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
  useMotionTemplate,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({
  value,
  suffix = "",
  duration = 2.5,
}: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const display = useMotionTemplate`${rounded}`;

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, duration, motionValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default AnimatedNumber;
