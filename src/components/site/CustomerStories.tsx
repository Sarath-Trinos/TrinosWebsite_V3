import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const stories = [
  { brand: "Volkswagen", title: "More parts, more problems? AI disagrees.", tag: "Manufacturing", color: "from-blue-500 to-blue-700" },
  { brand: "UCHealth", title: "Empowering patients, every step of the way", tag: "Healthcare", color: "from-emerald-500 to-teal-600" },
  { brand: "Penske", title: "Truck reservations: fully automated", tag: "Logistics", color: "from-amber-500 to-orange-600" },
  { brand: "Wipro", title: "The largest GenAI deployment in the enterprise", tag: "Technology", color: "from-violet-500 to-purple-700" },
  { brand: "Siemens", title: "AI Copilot turbocharging sales efficiency", tag: "B2B Sales", color: "from-cyan-500 to-sky-700" },
  { brand: "Mondelēz", title: "Sweet success: indirect buying with GenAI", tag: "CPG", color: "from-rose-500 to-pink-700" },
];

const CustomerStories = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Customer stories"
        title="AI trusted by the world's largest enterprises"
        exploreHref="#"
        exploreLabel="View all stories"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <a key={s.brand} href="#" className="tile group relative aspect-[4/5] block">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="relative h-full p-7 flex flex-col justify-between text-on-surface-dark">
              <div className="flex items-start justify-between">
                <span className="font-display font-bold text-2xl">{s.brand}</span>
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div>
                <span className="chip bg-white/15 text-white border border-white/20 mb-3">{s.tag}</span>
                <h3 className="font-display font-bold text-2xl text-balance">{s.title}</h3>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold opacity-90">
                  View story →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerStories;
