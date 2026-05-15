import Logo from "./Logo";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7457033236377124864",
  },
  {
    icon: Twitter,
    label: "X",
    href: "https://x.com/TrinosAI1512/status/2051278205739487509?s=20",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/p/1CHPFd3Ca4/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/p/DX6nGg6kcni/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Generative AI & Analytics", href: "/services" },
      { label: "Cyber Security", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "ERP & CRM", href: "/services" },
      { label: "Modernization", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare & Life Sciences", href: "/solutions" },
      { label: "Financial Services", href: "/solutions" },
      { label: "Manufacturing", href: "/solutions" },
      { label: "Retail & E-Commerce", href: "/solutions" },
      { label: "Logistics & Supply Chain", href: "/solutions" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Moltter", href: "/products" },
      { label: "BillDefend AI", href: "/products" },
      { label: "TraceFlow", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-surface-dark text-on-surface-dark pt-20 pb-10">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 pb-14 border-b border-white/10">
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
          <Logo />
          <p className="mt-5 text-white/70 max-w-sm">
            Trinos transforms enterprises with intelligent, secure, and scalable technology — from AI and Cloud to Cyber Security and Enterprise Software Engineering.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-ring group relative h-9 w-9 inline-flex items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
              >
                <span className="absolute inset-0 rounded-full border border-white/15" aria-hidden="true" />
                <svg
                  className="social-ring__svg absolute inset-0 h-full w-full"
                  viewBox="0 0 36 36"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    stroke="hsl(var(--primary-glow))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    pathLength="100"
                  />
                </svg>
                <Icon size={16} className="relative" />
              </a>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="footer-link text-sm">{l.label}</a></li>
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
