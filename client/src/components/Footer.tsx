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
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F5F3] mb-4"
        >
          Ready to Get That Time Back?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-[#F7F5F3]/60 mb-8 max-w-2xl mx-auto"
        >
          Let's identify the fastest automation wins in your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://calendly.com/bisonblu-info/15-minute-automation-exploration-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-accent text-base font-semibold px-10 py-4 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-lg hover:shadow-[#C87941]/25"
          >
            Book Your Automation Assessment
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
