"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Platform", children: ["Agentic Platform", "Trust Architecture", "Integrations"] },
  { label: "Solutions", children: ["Agents", "Contact Center AI", "Healthcare AI", "Voice AI"] },
  { label: "Customers", children: ["Case Studies", "Industries"] },
  { label: "Resources", children: ["Blog", "Docs", "Webinars"] },
  { label: "Company", children: ["About", "Careers", "Contact"] },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-surface-dark ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-px max-w-[1400px] mx-auto flex items-center justify-between h-18 py-4">
        <div className="[&_span:last-child]:text-on-surface-dark">
          <Logo />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-on-surface-dark/80 hover:text-on-surface-dark rounded-full transition-colors">
                {item.label}
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-2xl shadow-card border border-border p-2 min-w-[220px]">
                  {item.children.map((c) => (
                    <a key={c} href="#" className="block px-4 py-2.5 text-sm rounded-xl hover:bg-surface-soft text-foreground/80 hover:text-primary transition-colors">
                      {c}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-on-surface-dark/80 hover:text-on-surface-dark px-4 py-2">Sign in</a>
          <a href="#demo" className="text-sm font-semibold bg-gradient-cta text-primary-foreground px-5 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all">
            Book a demo
          </a>
        </div>

        <button className="lg:hidden p-2 text-on-surface-dark" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-px py-4 space-y-1">
            {navItems.map((i) => (
              <a key={i.label} href="#" className="block py-3 font-medium border-b border-border/60">{i.label}</a>
            ))}
            <a href="#demo" className="block mt-4 text-center bg-gradient-cta text-primary-foreground py-3 rounded-full font-semibold">Book a demo</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
