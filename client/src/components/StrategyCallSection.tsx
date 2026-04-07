/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Strategy Call CTA: Dramatic, cinematic background.
 * Three-step process. Large CTA button.
 * Calendly link opens in new tab.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/images";
import { Search, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess",
    description: "We briefly assess your current operational landscape and identify key areas for improvement.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Discuss",
    description: "We discuss the immediate impact that targeted automations could have on your business.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Outline",
    description: "We outline a potential roadmap to leverage AI and strategic systems for sustained growth.",
  },
];

export default function StrategyCallSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="strategy-call"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.cta}
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/80 to-[#0D1B2A]/95" />
      </div>

      {/* Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C87941]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-8"
        >
          // Let's Talk
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-4"
        >
          Ready to Build Your
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#C87941] italic leading-[1.15] mb-8"
        >
          Efficient Future?
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg sm:text-xl text-[#F7F5F3]/60 max-w-2xl mx-auto mb-14 font-light"
        >
          Your business has unique challenges and untapped potential. A quick, focused conversation
          can reveal how strategic automation and AI can redefine your operations.
        </motion.p>

        {/* Three steps */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-14 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C87941]/10 border border-[#C87941]/20 mb-4">
                <step.icon className="w-6 h-6 text-[#C87941]" />
              </div>
              <p className="font-accent text-xs text-[#C87941]/50 tracking-wider mb-1">
                {step.number}
              </p>
              <h3 className="font-accent text-lg font-semibold text-[#F7F5F3] mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#F7F5F3]/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Copper divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-[1px] bg-[#C87941]/40 mx-auto mb-10"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="font-body text-sm text-[#F7F5F3]/40 mb-4 uppercase tracking-wider">
            Free &middot; 15 Minutes &middot; No Obligation
          </p>
          <a
            href="https://calendly.com/bisonblu-info/15-minute-automation-exploration-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-accent text-lg font-semibold px-10 py-5 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C87941]/25 hover:-translate-y-0.5"
          >
            Book Your FREE Strategy Call Now
          </a>
          <p className="font-body text-xs text-[#F7F5F3]/30 mt-4">
            This isn't a sales pitch. It's a valuable, no-obligation opportunity to gain clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
