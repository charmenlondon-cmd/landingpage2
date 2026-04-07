/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Footer: Minimal, dark. Final CTA. Copper accent line at top.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-[#0a1420] border-t border-[#C87941]/10"
    >
      {/* Final CTA band */}
      <div className="py-16 sm:py-20 text-center px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F5F3] mb-6"
        >
          Ready to Transform Your{" "}
          <span className="text-[#C87941] italic">Operations?</span>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/bisonblu-info/15-minute-automation-exploration-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent text-base font-semibold px-8 py-4 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-lg hover:shadow-[#C87941]/25"
          >
            Book Your FREE Strategy Call
          </a>
          <a
            href="#lead-magnet"
            onClick={(e) => handleNavClick(e, "#lead-magnet")}
            className="font-accent text-sm font-medium text-[#C87941]/70 hover:text-[#C87941] transition-colors duration-300"
          >
            Or get the free guide first &rarr;
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F7F5F3]/5 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-accent text-sm text-[#F7F5F3]/30">
            &copy; {new Date().getFullYear()} Charl Breytenbach. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-accent text-xs text-[#F7F5F3]/30 hover:text-[#C87941]/60 transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
