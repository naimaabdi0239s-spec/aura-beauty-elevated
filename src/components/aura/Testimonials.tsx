import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "I felt completely understood from my consultation to my treatment. The results were so natural and exactly what I wanted.",
    name: "Sarah M.",
    detail: "Facial Balancing",
  },
  {
    quote:
      "They talked me out of half of what I came in asking for. Six months later my skin looks better than it has in years.",
    name: "Layla A.",
    detail: "Skin Programme",
  },
  {
    quote: "Nobody has asked me what I've had done. They just keep asking if I've been on holiday.",
    name: "Nadia K.",
    detail: "Anti-Wrinkle Treatment",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow">Words From Our Clients</p>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 140} className="flex flex-col justify-between bg-background p-8 md:p-10">
              <p className="font-display text-[1.6rem] leading-[1.35] md:text-[1.8rem]">“{t.quote}”</p>
              <div className="mt-10 flex items-baseline justify-between gap-4 border-t border-border pt-5">
                <span className="rule-label">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
