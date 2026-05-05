import { BarChart3, Layers, Workflow, Gauge } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: BarChart3,
    eyebrow: "AI-driven analytics",
    title: "AI-driven analytics",
    desc: "Transform raw data into actionable insights with advanced AI analytics that predict trends and optimize decision-making.",
  },
  {
    icon: Layers,
    eyebrow: "Intelligent UX layers",
    title: "Intelligent UX layers",
    desc: "Create intuitive, user-friendly interfaces that adapt to user behavior and enhance productivity across all touchpoints.",
  },
  {
    icon: Workflow,
    eyebrow: "Workflow automation",
    title: "Workflow automation",
    desc: "Streamline business processes with intelligent automation that reduces manual work and eliminates bottlenecks.",
  },
  {
    icon: Gauge,
    eyebrow: "Performance optimization",
    title: "Performance optimization",
    desc: "Enhance system performance and responsiveness to ensure your ERP/CRM platforms run at peak efficiency.",
  },
];

const ErpCrmModernization = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="ERP & CRM Modernization"
        title="ERP & CRM Modernization"
        description="We enhance platforms such as SAP, Oracle, Microsoft, Infor, QAD, EPICOR with:"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <article key={it.eyebrow} className="tile bg-card border border-border p-7 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-gradient-tile grid place-items-center text-primary mb-5">
              <it.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3 text-balance">{it.title}</h3>
            <p className="text-muted-foreground flex-1">{it.desc}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
        Helping enterprises streamline processes and make faster, data-led decisions.
      </p>
    </div>
  </section>
);

export default ErpCrmModernization;
