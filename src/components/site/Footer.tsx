import Logo from "./Logo";
import { Linkedin, Twitter, Facebook, Youtube, Instagram, Github } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const footerCols = [
  { title: "Platform", links: ["Agentic Platform", "Trust Architecture", "Integrations", "Security"] },
  { title: "Solutions", links: ["Agents", "Voice AI", "Agent Copilot", "Healthcare AI", "Ambient AI"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Docs", "Webinars", "ROI Calculator"] },
  { title: "Company", links: ["About", "Careers", "Press", "Partners", "Contact"] },
];

const Footer = () => (
  <footer className="bg-surface-dark text-on-surface-dark pt-20 pb-10">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-6 gap-10 pb-14 border-b border-white/10">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 text-white/70 max-w-sm">
            Trinos builds AI agents that deliver human experiences at AI scale for the world's largest enterprises.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-primary-glow hover:bg-primary/20 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-white/60 hover:text-primary-glow text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Trinos Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
