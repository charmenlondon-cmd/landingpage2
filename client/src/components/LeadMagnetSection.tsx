/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Lead Magnet Section: The "big reveal." Spotlight effect.
 * Centered, dramatic. Copper band that breaks the pattern.
 * Opt-in form with name + email fields.
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IMAGES } from "@/lib/images";
import { CheckCircle, Download, Sparkles, Clock, BookOpen, Lightbulb } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: Sparkles, text: "Simple, powerful automations you can implement with minimal effort" },
  { icon: BookOpen, text: "Step-by-step instructions to guide you through each setup" },
  { icon: Clock, text: "Time-saving strategies that free your team from repetitive tasks" },
  { icon: Lightbulb, text: "Real-world examples of how these automations transform operations" },
];

export default function LeadMagnetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSubmitted(true);
      toast.success("Thank you. Check your inbox and start saving hours in your week.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="lead-magnet"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.leadMagnet}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/80 to-[#0D1B2A]/95" />
      </div>

      {/* Spotlight glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C87941]/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-8 text-center"
        >
          // Your Free Blueprint
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-4 text-center"
        >
          Stop Reading About Efficiency.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#C87941] italic leading-[1.15] mb-8 text-center"
        >
          Start Building It.
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg sm:text-xl text-[#F7F5F3]/60 text-center max-w-2xl mx-auto mb-14 font-light"
        >
          Imagine reclaiming hours each week, eliminating tedious tasks, and empowering your team to
          focus on what truly matters. It starts here.
        </motion.p>

        {/* Two-column layout: benefits + form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Guide details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Guide title card */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#C87941]/[0.08] border border-[#C87941]/20 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Download className="w-6 h-6 text-[#C87941]" />
                <p className="font-accent text-xs tracking-[0.2em] uppercase text-[#C87941]">
                  Free Guide
                </p>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5F3] leading-tight">
                5 Practical Automations You Can Set Up Right Now
              </h3>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="w-5 h-5 text-[#C87941] mt-0.5 shrink-0" />
                  <p className="font-body text-[#F7F5F3]/70 text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-body text-sm text-[#F7F5F3]/40 mt-8 italic"
            >
              This isn't another generic guide. It's your actionable roadmap to immediate,
              tangible efficiency gains.
            </motion.p>
          </motion.div>

          {/* Right: Opt-in form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="p-6 sm:p-8 rounded-lg bg-[#F7F5F3]/[0.04] border border-[#F7F5F3]/10 backdrop-blur-sm">
              {!submitted ? (
                <>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F7F5F3] mb-2">
                    Get Your Free Copy
                  </h3>
                  <p className="font-body text-sm text-[#F7F5F3]/50 mb-6">
                    Enter your details below and we'll send it straight to your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="font-accent text-xs tracking-wider uppercase text-[#F7F5F3]/50 mb-1.5 block"
                      >
                        Your Name
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded bg-[#0D1B2A] border border-[#F7F5F3]/10 text-[#F7F5F3] placeholder-[#F7F5F3]/25 font-body text-base focus:outline-none focus:border-[#C87941]/50 focus:ring-1 focus:ring-[#C87941]/30 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-email"
                        className="font-accent text-xs tracking-wider uppercase text-[#F7F5F3]/50 mb-1.5 block"
                      >
                        Email Address
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded bg-[#0D1B2A] border border-[#F7F5F3]/10 text-[#F7F5F3] placeholder-[#F7F5F3]/25 font-body text-base focus:outline-none focus:border-[#C87941]/50 focus:ring-1 focus:ring-[#C87941]/30 transition-all duration-300"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full font-accent text-base font-semibold px-6 py-4 bg-[#C87941] text-[#0D1B2A] rounded hover:bg-[#d4894f] transition-all duration-300 hover:shadow-lg hover:shadow-[#C87941]/25 mt-2"
                    >
                      Yes, Send Me the Free Guide
                    </button>
                    <p className="font-body text-xs text-[#F7F5F3]/30 text-center mt-3">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-[#C87941] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-[#F7F5F3] mb-2">
                    Thank You!
                  </h3>
                  <p className="font-body text-[#F7F5F3]/60">
                    Check your inbox and start saving hours in your week.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
