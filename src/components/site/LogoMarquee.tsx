const logos = [
  "Mount Sinai", "Mondelēz", "Cargill", "UCHealth", "Ericsson",
  "Wipro", "Penske", "Siemens", "intel", "Volkswagen", "PepsiCo", "Air India",
];

const LogoMarquee = () => {
  return (
    <section className="py-14 border-y border-border bg-surface-soft overflow-hidden">
      <div className="container-px max-w-[1400px] mx-auto mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by the world's largest enterprises
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-primary transition-colors shrink-0"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-soft to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-soft to-transparent" />
      </div>
    </section>
  );
};

export default LogoMarquee;
