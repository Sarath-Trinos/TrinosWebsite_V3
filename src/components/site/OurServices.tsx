"use client";

import { useState } from "react";
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

type Service = {
  icon: typeof BarChart3;
  title: string;
  category: string;
  description: string;
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Generative AI & Analytics",
    category: "AI & Analytics",
    description:
      "Conversational dashboards, intelligent reporting, and automated content generation aligned to business needs.",
  },
  {
    icon: Bot,
    title: "Agent-Based Automation",
    category: "AI Automation",
    description:
      "Deploy autonomous AI agents that handle complex workflows and execute tasks with minimal human intervention.",
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    category: "Generative AI",
    description: "Build trustworthy AI with private data search and citation.",
  },
  {
    icon: Factory,
    title: "RPA & Industrial AI",
    category: "Industrial AI",
    description:
      "Automation for assembly lines, defect detection, and recurring pattern identification. Edge AI for offline, low-latency environments.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    category: "ERP",
    description:
      "End-to-end ERP implementation and AI integration with SAP, Oracle, Microsoft Dynamics, Infor, QAD and EPICOR.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security Services",
    category: "Security",
    description:
      "We help enterprises build resilient security frameworks that safeguard critical systems and data.",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    category: "CRM",
    description:
      "Streamline customer interactions and improve relationships with integrated CRM solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    category: "Cloud",
    description:
      "Accelerate your cloud transformation with secure, scalable, and cost-optimized cloud ecosystems.",
  },
  {
    icon: BrainCircuit,
    title: "Domain-Specific LLMs Fine-Tuning",
    category: "Generative AI",
    description:
      "Adapt foundation models to your domain. We manage datasets, training runs, and evaluations for reliable, on-brand outputs.",
  },
  {
    icon: Wrench,
    title: "Modernization",
    category: "Modernization",
    description:
      "Transform your legacy systems and applications into modern, efficient, and scalable solutions.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    category: "Automation",
    description:
      "Orchestrate end-to-end processes with AI triggers and human approvals. Integrate CRMs, data warehouses, and SaaS tools.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    category: "AI & Vision",
    description:
      "Real-time image and video understanding for detection, quality checks, OCR, and analytics—on cloud or on device.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics & Data Modeling",
    category: "Analytics",
    description:
      "Transform historical data into actionable insights with advanced machine learning models.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    category: "Engineering",
    description:
      "Modern, accessible websites and cross-platform apps with thoughtful UX and AI-powered features.",
  },
  {
    icon: Layers,
    title: "AI for ERP Systems",
    category: "ERP & AI",
    description:
      "Transform ERPs using NLP, predictive analytics, and generative AI. Reduce training burden and unlock insights.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    category: "Engineering",
    description:
      "We build high-performance enterprise applications tailored to your specific needs.",
  },
];

const PAGE_SIZE = 6;

const OurServices = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(services.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = services.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    if (p === page || p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <section id="our-services" className="py-10 bg-background">
      <div className="container-px max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display font-normal text-4xl md:text-5xl text-balance">
            <span className="text-black">Our</span>{" "}
            <span className="text-brand-gradient-reverse">services</span>
          </h2>
          <p className="mt-3 max-w-2xl text-balance font-display font-semibold text-lg md:text-xl leading-snug text-foreground">
            Purpose-built solutions across the AI &amp; ERP lifecycle
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Designed for impact and scale — from generative AI to industrial automation, we deliver the systems that move enterprises forward.
          </p>
        </div>

        <div
          key={page}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visible.map(({ icon: Icon, title, category, description }, idx) => (
            <article
              key={`${page}-${title}`}
              className="group rounded-2xl overflow-hidden bg-surface-dark text-on-surface-dark shadow-card hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1 animate-zoom-in-br origin-bottom-right"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/40 via-primary/15 to-[#0f1115]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 grid place-items-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-xl leading-snug text-balance">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed line-clamp-3">
                  {description}
                </p>
                <p className="mt-4 text-xs font-medium text-primary-glow">{category}</p>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Services pagination"
            className="mt-8 flex items-center justify-center gap-2"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const active = p === page;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p)}
                  aria-current={active ? "page" : undefined}
                  aria-label={`Go to page ${p}`}
                  className={`min-w-10 h-10 px-3 rounded-lg text-sm font-semibold transition-colors border ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
};

export default OurServices;
