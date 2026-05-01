import { ArrowRight, Bot, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";
import manish from "@/assets/agent-manish.jpg";
import grace from "@/assets/agent-grace.jpg";
import daphne from "@/assets/agent-daphne.jpg";
import johnny from "@/assets/agent-johnny.jpg";

const agents = [
  { name: "Manish", role: "Orders & Shipping Agent", img: manish },
  { name: "Grace", role: "Account Access Agent", img: grace },
  { name: "Daphne", role: "Medical Records Agent", img: daphne },
  { name: "Johnny", role: "Product & Services Agent", img: johnny },
];

const AgenticAI = () => (
  <section id="agents" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Agentic AI"
        title="A workforce of AI agents, ready to work"
        exploreHref="#"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Big tile: Agents gallery */}
        <div className="lg:col-span-2 tile bg-gradient-tile p-8 md:p-10 flex flex-col justify-between min-h-[460px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {agents.map((a) => (
              <div key={a.name} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                <img src={a.img} alt={`${a.name}, ${a.role}`} loading="lazy" width={768} height={768} className="w-full aspect-square object-cover" />
                <div className="p-3">
                  <div className="font-semibold text-sm text-foreground">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{a.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 chip mb-3"><Bot className="w-3.5 h-3.5" /> Agents</div>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-3 text-balance">
              AI workforces with human-like intelligence
            </h3>
            <p className="text-muted-foreground max-w-xl">
              Transforming employee support, workforce management, and healthcare with always-on AI agents.
            </p>
            <a href="#" className="link-arrow mt-5">Explore Agents <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Side tile: Agentic platform */}
        <div className="tile bg-gradient-dark text-on-surface-dark p-8 md:p-10 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <Layers className="w-10 h-10 text-primary-glow mb-4" />
            <div className="space-y-3">
              {["Discover", "Build", "Deploy", "Monitor", "Scale"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 bg-white/5 backdrop-blur rounded-xl px-4 py-3 border border-white/10">
                  <span className="w-6 h-6 grid place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i + 1}</span>
                  <span className="font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8">
            <span className="chip bg-white/10 text-white border border-white/10">Agentic Platform</span>
            <h3 className="font-display font-bold text-2xl md:text-3xl mt-3 mb-3">
              Build every step on one platform
            </h3>
            <p className="text-white/70 text-sm">
              Deploy production-ready enterprise agents faster and more reliably across your organization.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-5 font-semibold text-primary-glow hover:gap-3 transition-all">
              Explore Agentic Platform <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgenticAI;
