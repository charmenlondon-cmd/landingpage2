/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * FAQ Section: Clean, minimal. Accordion-style.
 * Copper accents on active items.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this only for large enterprises?",
    answer:
      "Not at all. While I have experience with large organisations, my strategies are scalable and beneficial for businesses of all sizes looking to optimise their operations and leverage technology more effectively. Whether you're a growing startup or an established company, if inefficiency is costing you time and money, I can help.",
  },
  {
    question: "Do I need to be an AI expert to work with you?",
    answer:
      "Absolutely not. My role is to translate complex AI and automation concepts into practical, easy-to-understand solutions for your business. You focus on your business; I'll handle the technology. Everything I recommend is explained in plain language, and I only implement what makes genuine operational sense.",
  },
  {
    question: "What if I already have some automations in place?",
    answer:
      "That's a great starting point. We can review your existing systems, identify areas for enhancement, and integrate new solutions to create a more cohesive and powerful operational framework. Often, the biggest gains come from connecting existing tools more intelligently rather than replacing them.",
  },
  {
    question: "What happens after the 15-minute strategy call?",
    answer:
      "The call is designed to provide immediate value and clarity. We'll identify at least one concrete area where automation could save you time. If we both feel there's a strong fit, we can discuss potential next steps, which might include a more in-depth assessment or a tailored proposal. There's absolutely no obligation.",
  },
  {
    question: "How quickly can I expect to see results?",
    answer:
      "Many of the automations I implement can be operational within days, not months. The 5 automations in the free guide, for example, can be set up immediately. For more complex system redesigns, we work in focused phases so you see incremental improvements throughout the process, not just at the end.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "I'm platform-agnostic. I work with whatever tools make the most sense for your business — whether that's existing software you already use, low-code automation platforms, custom AI solutions, or a combination. The goal is always the right tool for the job, not the trendiest one.",
  },
];

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0D1B2A] grain-overlay overflow-hidden"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs tracking-[0.3em] uppercase text-[#C87941]/60 mb-12"
        >
          // Common Questions
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F3] leading-[1.15] mb-14"
        >
          Frequently Asked{" "}
          <span className="text-[#C87941] italic">Questions</span>
        </motion.h2>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-[#F7F5F3]/5 rounded-lg px-6 data-[state=open]:border-[#C87941]/20 transition-colors duration-300 bg-[#F7F5F3]/[0.02]"
              >
                <AccordionTrigger className="font-accent text-base sm:text-lg text-[#F7F5F3]/90 hover:text-[#C87941] transition-colors duration-300 text-left py-5 [&[data-state=open]]:text-[#C87941]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[#F7F5F3]/55 text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
