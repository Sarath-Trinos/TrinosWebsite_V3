"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

type NavLink = { label: string; href: string };
type NavDropdown = { label: string; children: NavLink[] };
type NavItem = NavLink | NavDropdown;

function isDropdown(item: NavItem): item is NavDropdown {
  return "children" in item;
}

const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  {
    label: "Company",
    children: [
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isGroupActive = (children: NavLink[]) => children.some((c) => isActive(c.href));

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white shadow-soft" : "bg-white/95"
      }`}
    >
      <div className="container-px max-w-[1400px] mx-auto flex items-center justify-between min-h-[4.5rem] py-3 md:min-h-[5rem] md:py-4">
        <div className="[&_.logo-wordmark]:text-[#0c3470] [&_.logo-wordmark]:font-normal">
          <Logo variant="header" />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className={`nav-link flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors ${
                    isGroupActive(item.children)
                      ? "is-active text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-2xl shadow-card border border-border p-2 min-w-[200px]">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className={`block px-4 py-2.5 text-sm rounded-xl hover:bg-surface-soft transition-colors ${
                          isActive(c.href)
                            ? "text-primary bg-surface-soft"
                            : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link px-4 py-2 text-base font-medium rounded-full transition-colors ${
                  isActive(item.href)
                    ? "is-active text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/contact"
            className="text-base font-semibold bg-gradient-cta text-primary-foreground px-5 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all"
          >
            Contact Us
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-px py-4 space-y-1">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <div key={item.label} className="border-b border-border/60 pb-2 mb-2">
                  <div className="py-3 font-medium text-foreground">{item.label}</div>
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="block py-2.5 pl-4 text-sm text-muted-foreground hover:text-primary"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 font-medium border-b border-border/60"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="/contact"
              className="block mt-4 text-center bg-gradient-cta text-primary-foreground py-3 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
