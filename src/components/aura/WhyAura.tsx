import { Reveal } from "./Reveal";

const values = [
  {
    n: "01",
    title: "Personalized",
    body: "Every treatment begins with understanding your features, your skin, and your individual goals.",
  },
  {
    n: "02",
    title: "Natural",
    body: "The best results should look like you — simply refreshed, balanced, and confident.",
  },
  {
    n: "03",
    title: "Expert-Led",
    body: "Considered recommendations designed around your skin and your long-term results.",
  },
];

export function WhyAura() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1560px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why Aura</p>
            <h2 className="mt-6 font-display text-4xl md:text-[3.4rem]">
              A more personal <span className="italic">approach</span>
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {values.map((v, i) => (
              <Reveal
                key={v.n}
                delay={i * 140}
                className="group grid grid-cols-1 gap-4 border-t border-border py-7 last:border-b sm:grid-cols-[auto_1fr_1.4fr] sm:items-start sm:gap-10"
              >
                <span className="rule-label text-taupe transition-colors duration-500 group-hover:text-clay">{v.n}</span>
                <h3 className="font-display text-2xl md:text-[2rem]">{v.title}</h3>
                <p className="max-w-md text-sm leading-[1.9] text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
