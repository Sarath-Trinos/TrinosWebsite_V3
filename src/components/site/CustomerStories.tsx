import { ArrowUpRight, ShieldCheck, Radar, Network, FileCheck, Lock } from "lucide-react";

const services = [
  {
    title: "Vulnerability Assessments & Penetration Testing",
    short: "Pen Testing",
    description:
      "Comprehensive security audits to identify and address potential vulnerabilities before they become threats.",
    icon: ShieldCheck,
    tags: ["OWASP Top 10", "Red Team", "Code Audits"],
  },
  {
    title: "Threat Detection & Monitoring",
    short: "Threat Monitoring",
    description:
      "Real-time monitoring and advanced threat detection systems to protect your digital infrastructure 24/7.",
    icon: Radar,
    tags: ["24/7 SOC", "SIEM", "Anomaly Detection"],
  },
  {
    title: "Secure Infrastructure Design",
    short: "Secure Infra",
    description:
      "Architect secure, scalable systems from the ground up with security-first design principles.",
    icon: Network,
    tags: ["Zero Trust", "Cloud Native", "IAM"],
  },
  {
    title: "Compliance-driven Security Framework",
    short: "Compliance",
    description:
      "Ensure your systems meet industry standards and regulatory requirements with comprehensive compliance frameworks.",
    icon: FileCheck,
    tags: ["SOC 2", "ISO 27001", "HIPAA"],
  },
];

const CustomerStories = () => (
  <section className="py-24 relative overflow-hidden bg-white">
    {/* Decorative background */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
    <div
      aria-hidden
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-3xl"
    />
    <div
      aria-hidden
      className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/10 blur-3xl"
    />

    <div className="container-px max-w-[1400px] mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground border border-primary/20 mb-5">
            <Lock className="w-3.5 h-3.5" />
            Cyber Security
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance text-foreground">
            Security is foundational to{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              everything we build.
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            A multi-layered defense strategy — from offensive testing and continuous monitoring to compliance-grade frameworks.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-primary border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-violet-400 border-2 border-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold">4 Core Capabilities</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.title}
              href="#"
              className="group relative rounded-3xl bg-white border border-border p-7 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.04] group-hover:to-transparent transition-all duration-500" />

              {/* Top decorative line */}
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="relative">
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary-glow/5 border border-primary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center font-mono text-[10px] font-bold text-muted-foreground shadow-soft">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 group-hover:text-white text-muted-foreground">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Short label */}
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                  {s.short}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl leading-tight text-balance min-h-[3.5rem] text-foreground">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-balance">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-soft border border-border text-muted-foreground group-hover:border-primary/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default CustomerStories;
