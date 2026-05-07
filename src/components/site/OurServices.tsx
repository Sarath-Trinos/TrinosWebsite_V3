import {
  BarChart3,
  Bot,
  Database,
  Factory,
  TrendingUp,
  Smartphone,
  Layers,
  Building2,
  Briefcase,
  ShieldCheck,
  Users,
  Cloud,
  BrainCircuit,
  Wrench,
  Workflow,
  Eye,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type Service = {
  icon: typeof BarChart3;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Generative AI & Analytics",
    description:
      "Conversational dashboards, intelligent reporting, and automated content generation aligned to business needs.",
  },
  {
    icon: Bot,
    title: "Agent-Based Automation",
    description:
      "Deploy autonomous AI agents that handle complex workflows and execute tasks with minimal human intervention.",
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    description:
      "Build trustworthy AI with private data search and citation.",
  },
  {
    icon: Factory,
    title: "RPA & Industrial AI",
    description:
      "Automation for assembly lines, defect detection, and recurring pattern identification. Edge AI for offline, low-latency environments.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    description:
      "End-to-end ERP implementation and AI integration with SAP, Oracle, Microsoft Dynamics, Infor, QAD and EPICOR.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security Services",
    description:
      "We help enterprises build resilient security frameworks that safeguard critical systems and data.",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description:
      "Streamline customer interactions and improve relationships with integrated CRM solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Accelerate your cloud transformation with secure, scalable, and cost-optimized cloud ecosystems.",
  },
  {
    icon: BrainCircuit,
    title: "Domain-Specific LLMs Fine-Tuning",
    description:
      "Adapt foundation models to your domain. We manage datasets, training runs, and evaluations for reliable, on-brand outputs.",
  },
  {
    icon: Wrench,
    title: "Modernization",
    description:
      "Transform your legacy systems and applications into modern, efficient, and scalable solutions.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Orchestrate end-to-end processes with AI triggers and human approvals. Integrate CRMs, data warehouses, and SaaS tools.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time image and video understanding for detection, quality checks, OCR, and analytics—on cloud or on device.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics & Data Modeling",
    description:
      "Transform historical data into actionable insights with advanced machine learning models.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Modern, accessible websites and cross-platform apps with thoughtful UX and AI-powered features.",
  },
  {
    icon: Layers,
    title: "AI for ERP Systems",
    description:
      "Transform ERPs using NLP, predictive analytics, and generative AI. Reduce training burden and unlock insights.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    description:
      "We build high-performance enterprise applications tailored to your specific needs.",
  },
];

const OurServices = () => (
  <section id="our-services" className="py-24 bg-background">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Our services"
        title="Purpose-built solutions across the AI & ERP lifecycle"
        description="Designed for impact and scale — from generative AI to industrial automation, we deliver the systems that move enterprises forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="group cursor-pointer">
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/40 via-primary/15 to-[#0f1115] transition-transform duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 grid place-items-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-display font-semibold text-xl text-foreground leading-snug text-balance">
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
