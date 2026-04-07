/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Solution Section: Charl's copy about his approach.
 * Slightly lighter navy background. Bullet points with copper accents.
 * Staggered fade-in animations.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const outcomes = [
  { text: "Follow-ups trigger without reminders" },
  { text: "Information updates across systems automatically" },
  { text: "Repetitive admin disappears" },
  { text: "Exceptions surface early — not weeks later" },
  { text: "You stop babysitting process" },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solution"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1926 0%, #0D1B2A 50%, #0f1926 100%)" }}
    >
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-12"
        >
          // The Solution
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-8"
        >
          What I Do
        </motion.h2>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#F7F5F3]/75 text-lg sm:text-xl leading-relaxed mb-10"
        >
          I redesign how work flows through your business so routine tasks execute automatically and reliably.
        </motion.p>

        {/* That means section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl text-[#C87941] mb-6"
        >
          That means:
        </motion.p>

        {/* Outcome bullets */}
        <div className="space-y-4 mb-14">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-[#C87941] mt-0.5 shrink-0" />
              <p className="font-body text-[#F7F5F3]/80 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-display text-xl sm:text-2xl text-[#F7F5F3]/80 leading-relaxed max-w-2xl"
        >
          You don't need more tools.
          <br />
          <span className="text-[#C87941] italic">You need better wiring between the ones you already use.</span>
        </motion.p>
      </div>
    </section>
  );
}
