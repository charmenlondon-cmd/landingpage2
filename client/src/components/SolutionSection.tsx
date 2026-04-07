/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Solution Section: Charl's copy about his approach.
 * Slightly lighter navy background. Bullet points with copper accents.
 * Staggered fade-in animations.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, RefreshCw, Clock, AlertTriangle } from "lucide-react";

const outcomes = [
  { icon: Zap, text: "Repetitive tasks become self-executing." },
  { icon: RefreshCw, text: "Follow-ups trigger automatically." },
  { icon: Clock, text: "Information updates in real time." },
  { icon: AlertTriangle, text: "Exceptions are surfaced early, not discovered late." },
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
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-14"
        >
          We Redesign the{" "}
          <span className="text-[#C87941] italic">Mechanics</span>{" "}
          Behind Your Business.
        </motion.h2>

        {/* Body copy — Charl's text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-[#F7F5F3]/65 text-base sm:text-lg leading-relaxed font-light mb-16"
        >
          <p>
            Together, we identify where time and effort are being lost. Then I take over,
            simplifying and systemising workflows so routine tasks run quietly in the background —
            freeing your team to focus on higher-value decisions.
          </p>
          <p>
            Through automation, intelligent system integration, and practical AI implementation,
            necessary work becomes structured, trackable, and largely self-managing —{" "}
            <span className="text-[#F7F5F3]/90 font-medium">
              repetition handled by technology, judgment handled by people.
            </span>
          </p>
          <p>
            We start by examining how work actually flows across your organisation: how tasks are
            triggered, how information moves, where things stall, and where manual intervention
            quietly compensates for weak structure. From there, we redesign workflows and introduce
            automation and AI deliberately — only where they meaningfully improve execution.
          </p>
          <p>
            That means defining clear triggers and embedding the right logic into your workflows,
            allowing routine actions to execute automatically and at scale. With that structure in
            place, operational capacity expands without constant oversight.
          </p>
        </motion.div>

        {/* Outcome bullets */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-14">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-lg bg-[#F7F5F3]/[0.03] border border-[#C87941]/10 hover:border-[#C87941]/25 transition-colors duration-300"
            >
              <item.icon className="w-5 h-5 text-[#C87941] mt-0.5 shrink-0" />
              <p className="font-body text-[#F7F5F3]/80 text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement — Charl's copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-display text-xl sm:text-2xl text-[#F7F5F3]/80 italic leading-relaxed text-center max-w-3xl mx-auto"
        >
          The result is a business that runs with greater clarity and less intervention — where
          technology supports execution, and your team focuses on{" "}
          <span className="text-[#C87941]">decisions, relationships, and strategy.</span>
        </motion.p>
      </div>
    </section>
  );
}
