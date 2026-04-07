/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Who It's For Section: Filter bad-fit calls early, increase trust.
 * Two-column layout: For You / Not For You
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const forYou = [
  "You run a small or growing business",
  "Manual admin is draining your time",
  "You want automation that actually works",
  "You prefer things handled, not explained endlessly",
];

const notForYou = [
  'You want to "learn AI" rather than remove work',
  "You enjoy configuring tools yourself",
  "There's no urgency to free up time",
];

export default function WhoItsForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="who-its-for"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0D1B2A] grain-overlay overflow-hidden"
    >
      {/* Subtle spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C87941]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-12 text-center"
        >
          // Who This Is For
        </motion.p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-lg border border-[#C87941]/20 bg-[#C87941]/[0.02]"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#C87941] mb-6">
              This Is For You If:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C87941] mt-0.5 shrink-0" />
                  <span className="font-body text-[#F7F5F3]/80 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-lg border border-[#F7F5F3]/10 bg-[#F7F5F3]/[0.02]"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5F3]/70 mb-6">
              This Is Not For You If:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#F7F5F3]/40 mt-0.5 shrink-0" />
                  <span className="font-body text-[#F7F5F3]/60 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
