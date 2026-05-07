import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ContactHero from "@/components/site/ContactHero";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Contact | Trinos Technologies",
  description:
    "Have a question or want to discuss a project? Reach out to Trinos Technologies — our team is here to help you transform your business with AI-powered solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
