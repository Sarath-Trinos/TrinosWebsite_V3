import type { Metadata } from "next";
import Header from "@/components/site/Header";
import CareersHero from "@/components/site/CareersHero";
import WhyJoinTrinos from "@/components/site/WhyJoinTrinos";
import OpenPositions from "@/components/site/OpenPositions";
import OurCulture from "@/components/site/OurCulture";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Careers | Trinos Technologies",
  description:
    "Join a team of passionate innovators transforming enterprises with AI. Work on meaningful projects, grow your tech skills, and make a lasting career impact at Trinos.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CareersHero />
      <WhyJoinTrinos />
      <OpenPositions />
      <OurCulture />
      <CTASection variant="pink" />
      <Footer />
    </main>
  );
}
