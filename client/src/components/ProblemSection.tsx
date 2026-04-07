/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Problem Section: Charl's existing copy. Large typographic statement.
 * Copper pull-quote. Dark navy background with subtle spotlight.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0D1B2A] grain-overlay overflow-hidden"
    >
      {/* Subtle spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C87941]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-12"
        >
          // The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-10"
        >
          If any of this feels familiar, you're not alone:
        </motion.h2>

        {/* Pain points list */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-[#F7F5F3]/75 text-base sm:text-lg leading-relaxed mb-10"
        >
          <li className="flex items-start gap-3">
            <span className="text-[#C87941] text-xl mt-1">•</span>
            <span>Chasing follow-ups manually because nothing triggers automatically</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C87941] text-xl mt-1">•</span>
            <span>Copy-pasting the same information between tools every week</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C87941] text-xl mt-1">•</span>
            <span>Checking multiple systems just to see what happened</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C87941] text-xl mt-1">•</span>
            <span>Fixing errors that only exist because work is handled manually</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C87941] text-xl mt-1">•</span>
            <span>Knowing things could run better — but never having time to fix them</span>
          </li>
        </motion.ul>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#F7F5F3]/80 text-lg sm:text-xl leading-relaxed mb-6"
        >
          None of this is because your team is lazy.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-xl sm:text-2xl text-[#C87941] italic leading-relaxed"
        >
          It's because the work has no structure.
        </motion.p>
      </div>
    </section>
  );
}
