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

        {/* Big headline — Charl's copy */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F5F3] leading-[1.1] mb-4"
        >
          Inefficiency Isn't a Mistake.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C87941] italic leading-[1.1] mb-10 sm:mb-14"
        >
          It's a Tax.
        </motion.h2>

        {/* Sub-question */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-xl sm:text-2xl text-[#F7F5F3]/80 italic mb-10"
        >
          The question is: how much is it costing you?
        </motion.p>

        {/* Body copy — Charl's text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 text-[#F7F5F3]/65 text-base sm:text-lg leading-relaxed font-light"
        >
          <p>
            You've likely been absorbing hidden costs — delays, missed follow-ups, and mounting
            backlogs — simply because small inefficiencies add up over time. They rarely announce
            themselves. They just become "how things work."
          </p>
          <p>
            Most inefficiency isn't caused by poor effort. It's caused by{" "}
            <span className="text-[#C87941] font-medium">invisible gaps</span> — between teams,
            between systems, between decisions and execution. You know what you should be doing.
            Actually doing it is another story.
          </p>
        </motion.div>

        {/* Copper pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 pl-6 border-l-2 border-[#C87941]"
        >
          <p className="font-display text-xl sm:text-2xl text-[#C87941] italic leading-relaxed">
            "You know what you should be doing. Actually doing it is another story."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
