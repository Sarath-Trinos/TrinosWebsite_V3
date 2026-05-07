import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ProductsHero from "@/components/site/ProductsHero";
import ProductShowcase from "@/components/site/ProductShowcase";
import ProductsCTA from "@/components/site/ProductsCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Products | Trinos Technologies",
  description:
    "A growing suite of AI-powered products — Moltter, BillDefend AI, TraceFlow, and MeetingBrain — built to accelerate digital transformation and drive measurable business outcomes.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductsHero />
      <ProductShowcase />
      <ProductsCTA />
      <Footer />
    </main>
  );
}
