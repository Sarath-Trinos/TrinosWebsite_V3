import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Vulnerability Assessments & Penetration Testing",
    description:
      "Comprehensive security audits to identify and address potential vulnerabilities before they become threats.",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Threat Detection & Monitoring",
    description:
      "Real-time monitoring and advanced threat detection systems to protect your digital infrastructure 24/7.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Secure Infrastructure Design",
    description:
      "Architect secure, scalable systems from the ground up with security-first design principles.",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Compliance-driven Security Framework",
    description:
      "Ensure your systems meet industry standards and regulatory requirements with comprehensive compliance frameworks.",
    color: "from-violet-500 to-purple-700",
  },
];

const CustomerStories = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Cyber Security"
        title="Security is foundational to everything we build."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <a key={s.title} href="#" className="tile group relative aspect-[4/5] block">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="relative h-full p-7 flex flex-col justify-between text-on-surface-dark">
              <div className="flex items-start justify-end">
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-balance">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90 text-balance">
                  {s.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerStories;
