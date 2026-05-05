import { ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { CapabilityTopicsList } from "./CapabilityTopicsList";
import manish from "@/assets/agent-manish.jpg";
import grace from "@/assets/agent-grace.jpg";
import daphne from "@/assets/agent-daphne.jpg";
import johnny from "@/assets/agent-johnny.jpg";
import heroAgent from "@/assets/hero-agent.jpg";

const capabilities = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    img: manish,
    description:
      "Multi-step autonomous agents that plan, call tools, and take action. Safeguards and human-in-the-loop baked in.",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    img: grace,
    description:
      "Build intelligent systems that combine the power of large language models with your proprietary data.",
  },
  {
    id: "mvp",
    title: "MVP Development",
    img: daphne,
    description:
      "Design and ship a production-ready Minimum Viable Product fast—clean UX, reliable backend, and AI features where they matter most.",
  },
  {
    id: "voice",
    title: "Voice Assistants & Chatbots",
    img: johnny,
    description:
      "Real-time natural conversations with speech-to-text and TTS. Domain-aware assistants for support, sales, and internal ops.",
  },
  {
    id: "nlp-cv",
    title: "NLP, Computer Vision",
    img: heroAgent,
    description:
      "Leverage natural language processing and computer vision technologies.",
  },
  {
    id: "rpa",
    title: "Robotic Process Automation (RPA)",
    img: heroAgent,
    description:
      "Automate repetitive business processes and workflows to improve efficiency and reduce errors.",
  },
];

const AgenticAI = () => (
  <section id="agents" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        title="AI & Intelligent Systems"
        description="Specialized AI agents and enterprise platforms that transform support, workforce operations, and healthcare—with human-like intelligence you can deploy at scale."
        exploreHref="#"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Big tile: Agents gallery */}
        <div className="lg:col-span-2 tile bg-gradient-tile p-8 md:p-10 flex flex-col min-h-[460px]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <div key={c.id} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                <Image src={c.img} alt="" placeholder="blur" className="w-full aspect-square object-cover" />
                <div className="p-3">
                  <div className="font-semibold text-sm text-foreground text-balance leading-snug">{c.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side tile: same capability topics */}
        <div className="tile bg-gradient-dark text-on-surface-dark p-8 md:p-10 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative flex flex-col h-full">
            <Layers className="w-10 h-10 text-primary-glow mb-4 shrink-0" />
            <CapabilityTopicsList
              items={capabilities.map(({ id, title, description }) => ({
                id,
                title,
                description,
              }))}
            />
            <a href="#" className="inline-flex items-center gap-2 mt-8 font-semibold text-primary-glow hover:gap-3 transition-all shrink-0">
              Explore capabilities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgenticAI;
