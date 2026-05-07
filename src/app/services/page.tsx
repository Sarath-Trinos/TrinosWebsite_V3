import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ServicesHero from "@/components/site/ServicesHero";
import ServicesCapabilities from "@/components/site/ServicesCapabilities";
import OurServices from "@/components/site/OurServices";
import ServicesCTA from "@/components/site/ServicesCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Services | Trinos Technologies",
  description:
    "End-to-end AI services — generative AI, agent-based automation, RAG, RPA, predictive analytics, and enterprise software development — purpose-built across the AI and ERP lifecycle.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesCapabilities />
      <OurServices />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
