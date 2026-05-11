import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="relative pt-36 lg:pt-44 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container-px max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-foreground/80">Contact</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
            Let's Build Something{" "}
            <span className="text-brand-gradient-reverse">
              Intelligent
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
            Have a question or want to discuss a project? Our team is here to help you transform
            your business with AI-powered solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
