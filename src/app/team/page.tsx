import type { Metadata } from "next";
import Header from "@/components/site/Header";
import TeamHero from "@/components/site/TeamHero";
import TeamLeadership from "@/components/site/TeamLeadership";
import CombinedLeadership from "@/components/site/CombinedLeadership";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Team | Trinos Technologies",
  description:
    "Meet the minds behind Trinos. Three co-founders with five decades of combined experience building intelligent, secure, and scalable technology for the modern enterprise.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TeamHero />
      <TeamLeadership />
      <CombinedLeadership />
      <CTASection />
      <Footer />
    </main>
  );
}
