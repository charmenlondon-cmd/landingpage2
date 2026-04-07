/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * About Section: Asymmetric layout. Background image on right.
 * Authority positioning without being self-inflating.
 * Credibility through experience, not testimonials.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/images";
import { Workflow, Brain, Wrench } from "lucide-react";

const credentials = [
  {
    icon: Workflow,
    title: "Systems Thinker",
    description:
      "I see the invisible architecture behind how businesses operate — the gaps between teams, systems, and decisions that silently drain productivity.",
  },
  {
    icon: Brain,
    title: "AI Practitioner",
    description:
      "Not just theory. I've built and deployed automation frameworks and AI solutions within real organisations, solving real operational problems.",
  },
  {
    icon: Wrench,
    title: "Hands-On Builder",
    description:
      "I don't just advise. I design, build, and implement the systems that transform how your business runs — from workflow logic to full automation stacks.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0D1B2A] overflow-hidden"
    >
      {/* Background image — subtle, right-aligned */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.about}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/95 to-[#0D1B2A]/80" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-12"
        >
          // Who I Am
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-6"
        >
          Meet <span className="text-[#C87941]">Charl Breytenbach</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-accent text-base sm:text-lg text-[#C87941]/80 tracking-wide mb-10"
        >
          Efficiency Architect
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-[#F7F5F3]/65 text-base sm:text-lg leading-relaxed font-light max-w-3xl mb-16"
        >
          <p>
            I'm not here to sell you on AI as a silver bullet. I'm here because most businesses
            are losing time, money, and momentum to problems they can't quite see — and I know
            how to find them.
          </p>
          <p>
            My background is in building and deploying automation systems within real
            organisations. I've designed workflows that eliminated hours of manual processing,
            built AI-powered tools that surfaced critical information before it was too late,
            and created operational frameworks that let teams focus on the work that actually
            matters.
          </p>
          <p>
            I work at the intersection of{" "}
            <span className="text-[#F7F5F3]/90 font-medium">
              strategy, systems design, and practical technology
            </span>
            . The goal is never "more AI" — it's less friction, more clarity, and operations
            that scale without breaking.
          </p>
        </motion.div>

        {/* Credential cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {credentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-6 rounded-lg bg-[#F7F5F3]/[0.03] border border-[#C87941]/10 hover:border-[#C87941]/25 transition-all duration-300 group"
            >
              <item.icon className="w-6 h-6 text-[#C87941] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-accent text-base font-semibold text-[#F7F5F3] mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-[#F7F5F3]/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
