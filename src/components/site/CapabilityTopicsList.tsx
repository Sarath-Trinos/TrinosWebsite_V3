export type CapabilityTopicItem = {
  id: string;
  title: string;
  description: string;
};

export function CapabilityTopicsList({ items }: { items: CapabilityTopicItem[] }) {
  return (
    <div className="space-y-3 flex-1">
      {items.map((c, i) => (
        <div
          key={c.id}
          tabIndex={0}
          className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur outline-none transition-colors hover:border-white/15 hover:bg-white/10 focus-visible:border-white/15 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary-glow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {i + 1}
            </span>
            <span className="text-sm font-medium leading-snug text-balance">{c.title}</span>
          </div>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden min-h-0">
              <p className="mt-3 border-t border-white/10 pt-3 pl-9 text-sm leading-relaxed text-white/80">
                {c.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
