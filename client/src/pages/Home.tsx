/*
 * Design: "Dark Forge" — Dramatic Contrast Storytelling
 * Home Page: Ad-specific landing page for automation services.
 * Focused conversion path: Pain → Relief → Action
 * Full-page dark navy canvas. Fast-scanning, single CTA.
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StrategyCallSection from "@/components/StrategyCallSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StrategyCallSection />
        <WhoItsForSection />
      </main>
      <Footer />
    </div>
  );
}
