import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import LogoMarquee from "@/components/site/LogoMarquee";
import MissionStatement from "@/components/site/MissionStatement";
import AgenticAI from "@/components/site/AgenticAI";
import ContactCenterAI from "@/components/site/ContactCenterAI";
import HealthcareAI from "@/components/site/HealthcareAI";
import EnterpriseProof from "@/components/site/EnterpriseProof";
import CustomerStories from "@/components/site/CustomerStories";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <MissionStatement />
      <AgenticAI />
      <ContactCenterAI />
      <HealthcareAI />
      <EnterpriseProof />
      <CustomerStories />
      <CTASection />
      <Footer />
    </main>
  );
}
