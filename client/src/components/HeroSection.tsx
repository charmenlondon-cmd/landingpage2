/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Hero: Full-viewport, cinematic. Background image with overlay.
 * Ad-optimized: Fast-scanning, single clear CTA, relief-focused.
 * Typography: Playfair Display headline, DM Sans body, Space Grotesk CTA.
 */

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { ArrowDown, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/80 via-[#0D1B2A]/60 to-[#0D1B2A]/95" />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-accent text-[#C87941] text-sm sm:text-base tracking-[0.2em] uppercase mb-6"
        >
          AI-Driven Workflow Automation
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5F3] leading-[1.15] mb-6"
        >
          Still Losing 10–20 Hours a Week to Manual Busywork?
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-[#F7F5F3]/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I design and implement AI-driven workflows that remove repetitive admin, follow-ups, and data-handling — in 30 days or less — so your business runs smoothly without constant oversight.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 text-[#F7F5F3]/70"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#C87941]" />
            <span className="font-body text-sm sm:text-base">No tool chaos</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#C87941]" />
            <span className="font-body text-sm sm:text-base">No "AI experiments"</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#C87941]" />
            <span className="font-body text-sm sm:text-base">I design it, build it, and make sure it actually works</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="https://calendly.com/bisonblu-info/15-minute-automation-exploration-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent text-base font-semibold px-10 py-4 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C87941]/25 hover:-translate-y-0.5"
          >
            Book a Free 15-Minute Automation Assessment
          </a>
          <p className="font-body text-sm text-[#F7F5F3]/50">
            No sales pitch. Just clarity on what you can automate quickly.
          </p>
        </motion.div>

        {/* Charl's name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-accent text-sm text-[#F7F5F3]/40 mt-12 tracking-wide"
        >
          Charl Breytenbach — Efficiency Architect
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#C87941]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
