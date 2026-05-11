import Image from "next/image";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import erpAnalytics from "@/assets/erp-analytics.png";
import erpUx from "@/assets/erp-ux.png";
import erpWorkflow from "@/assets/erp-workflow.png";
import erpPerformance from "@/assets/erp-performance.png";

const items = [
  {
    image: erpAnalytics,
    title: "AI-driven analytics",
    desc: "Transform raw data into actionable insights with advanced AI analytics that predict trends and optimize decision-making.",
    cta: "Explore Analytics",
    href: "#",
  },
  {
    image: erpUx,
    title: "Intelligent UX layers",
    desc: "Create intuitive, user-friendly interfaces that adapt to user behavior and enhance productivity across all touchpoints.",
    cta: "Explore UX Layers",
    href: "#",
  },
  {
    image: erpWorkflow,
    title: "Workflow automation",
    desc: "Streamline business processes with intelligent automation that reduces manual work and eliminates bottlenecks.",
    cta: "Explore Automation",
    href: "#",
  },
  {
    image: erpPerformance,
    title: "Performance optimization",
    desc: "Enhance system performance and responsiveness to ensure your ERP/CRM platforms run at peak efficiency.",
    cta: "Explore Performance",
    href: "#",
  },
];

const ErpCrmModernization = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="mb-16">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              ERP & CRM{" "}
              <span className="text-brand-gradient-reverse">Modernization</span>
            </>
          }
          description="We enhance platforms such as SAP, Oracle, Microsoft, Infor, QAD, EPICOR with:"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <article key={it.title} className="flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-soft mb-6">
              <Image
                src={it.image}
                alt={it.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3 text-balance">
              {it.title}
            </h3>
            <p className="text-muted-foreground mb-6 flex-1">{it.desc}</p>
            <a
              href={it.href}
              className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors"
            >
              {it.cta} <ChevronRight className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <p className="text-center text-lg text-muted-foreground text-balance max-w-2xl">
          Helping enterprises streamline processes and make faster, data-led decisions.
        </p>
      </div>
    </div>
  </section>
);

export default ErpCrmModernization;
