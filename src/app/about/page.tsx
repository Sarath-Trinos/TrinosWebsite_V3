import type { Metadata } from "next";
import Header from "@/components/site/Header";
import AboutHero from "@/components/site/AboutHero";
import WhoWeAre from "@/components/site/WhoWeAre";
import MissionVision from "@/components/site/MissionVision";
import OurValues from "@/components/site/OurValues";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About Us | Trinos Technologies",
  description:
    "Trinos Technologies builds intelligent technology ecosystems that accelerate secure digital transformation for enterprises.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <OurValues />
      <MissionVision />
      <CTASection />
      <Footer />
    </main>
  );
}
