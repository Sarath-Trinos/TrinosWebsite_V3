import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AgentPlatform from "@/components/site/AgentPlatform";
import ErpCrmModernization from "@/components/site/ErpCrmModernization";
import HealthcareAI from "@/components/site/HealthcareAI";
import EnterpriseProof from "@/components/site/EnterpriseProof";
import CustomerStories from "@/components/site/CustomerStories";
import WhyChooseTrinos from "@/components/site/WhyChooseTrinos";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AgentPlatform />
      <ErpCrmModernization />
      <HealthcareAI />
      <EnterpriseProof />
      <CustomerStories />
      <WhyChooseTrinos />
      <CTASection />
      <Footer />
    </main>
  );
}
