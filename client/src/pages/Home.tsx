/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Home Page: Assembles all sections in narrative order.
 * Full-page dark navy canvas. Cinematic scroll experience.
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import AboutSection from "@/components/AboutSection";
import StrategyCallSection from "@/components/StrategyCallSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <LeadMagnetSection />
        <AboutSection />
        <StrategyCallSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
