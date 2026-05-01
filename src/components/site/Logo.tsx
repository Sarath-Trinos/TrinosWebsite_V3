const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2 ${className}`} aria-label="Avaamo home">
    <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-sm shadow-glow">
      a
    </span>
    <span className="font-display font-bold text-xl tracking-tight text-foreground">avaamo</span>
  </a>
);

export default Logo;
