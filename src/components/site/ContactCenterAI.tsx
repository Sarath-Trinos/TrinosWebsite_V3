import { ArrowRight, Headphones, MessagesSquare, BarChart3 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Headphones,
    eyebrow: "Voice AI",
    title: "Voice AI that turns every conversation into loyalty",
    desc: "Natural, low-latency voice agents that resolve calls end-to-end across 100+ languages.",
    href: "#",
    label: "Explore Voice AI Agents",
  },
  {
    icon: MessagesSquare,
    eyebrow: "Agent Copilot",
    title: "Meet the copilot your agents will love",
    desc: "AI-generated assistance at every step of the call—summaries, suggested responses, next-best actions.",
    href: "#",
    label: "Explore Agent Copilot",
  },
  {
    icon: BarChart3,
    eyebrow: "Conversational Intelligence",
    title: "Beyond dashboards. Ask in plain language.",
    desc: "Real-time answers powered by your customer conversations and dynamic visualizations.",
    href: "#",
    label: "Explore CI",
  },
];

const ContactCenterAI = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Contact Center AI"
        title="The new sound of AI in your contact center"
        description="From voice automation to live agent copilots and analytics — built for enterprises that scale."
        exploreHref="#"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.eyebrow} className="tile bg-card border border-border p-7 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-gradient-tile grid place-items-center text-primary mb-5">
              <it.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{it.eyebrow}</span>
            <h3 className="font-display font-bold text-2xl mb-3 text-balance">{it.title}</h3>
            <p className="text-muted-foreground flex-1">{it.desc}</p>
            <a href={it.href} className="link-arrow mt-6">
              {it.label} <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ContactCenterAI;
