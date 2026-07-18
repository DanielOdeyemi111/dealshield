"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollSection({
  children,
  zIndex,
}: {
  children: ReactNode;
  zIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Top corners animate from 24 → 0 as the section slides into position
  const radius = useTransform(scrollYProgress, [0, 0.55], [24, 0]);

  return (
    <div ref={ref} className="sticky top-0" style={{ zIndex }}>
      <motion.div
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
        className="overflow-hidden shadow-[0_-6px_32px_rgba(17,24,40,0.08)]"
      >
        {children}
      </motion.div>
    </div>
  );
}
