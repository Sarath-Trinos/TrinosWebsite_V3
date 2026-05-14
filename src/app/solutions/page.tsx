import type { Metadata } from "next";
import Header from "@/components/site/Header";
import SolutionsHero from "@/components/site/SolutionsHero";
import IndustriesGrid from "@/components/site/IndustriesGrid";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Solutions | Trinos Technologies",
  description:
    "Industry-specific AI and ERP solutions designed for healthcare, finance, retail, manufacturing, and more.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SolutionsHero />
      <IndustriesGrid />
      <CTASection variant="orange" />
      <Footer />
    </main>
  );
}
