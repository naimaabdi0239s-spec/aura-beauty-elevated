import injectables from "@/assets/cat-injectables.jpg";
import skin from "@/assets/cat-skin.jpg";
import facials from "@/assets/cat-facials.jpg";
import { Reveal } from "./Reveal";

const categories = [
  {
    index: "01",
    title: "Injectables",
    image: injectables,
    alt: "Editorial close-up of naturally defined lips and jawline",
    description:
      "Subtle, refined enhancements designed to restore balance and highlight your natural features.",
    items: ["Anti-Wrinkle Treatments", "Lip Enhancement", "Facial Balancing"],
    cta: "Explore Injectables",
  },
  {
    index: "02",
    title: "Skin Treatments",
    image: skin,
    alt: "Macro photograph of radiant, hydrated skin texture",
    description: "Advanced treatments designed to improve skin texture, tone, clarity, and overall radiance.",
    items: ["Microneedling", "Chemical Peels", "Skin Resurfacing"],
    cta: "Explore Skin Treatments",
  },
  {
    index: "03",
    title: "Facials & Glow",
    image: facials,
    alt: "Practitioner applying serum during a facial treatment",
    description: "Signature treatments created to cleanse, nourish, hydrate, and reveal your healthiest glow.",
    items: ["Signature Facial", "Glass Skin Facial", "Deep Cleansing Treatments"],
    cta: "Explore Facials",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="max-w-xl font-display text-4xl md:text-6xl">Treatments, considered</h2>
            <p className="eyebrow">Three Pillars of Care</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 140}
              as="article"
              className={`group flex flex-col border-b border-border pb-12 pt-12 md:pb-0 ${
                i > 0 ? "md:border-l md:border-b-0 md:pl-10" : "md:border-b-0"
              } ${i < 2 ? "md:pr-10" : ""}`}
            >
              <div className="mb-8 flex items-baseline gap-4">
                <span className="rule-label text-taupe">{c.index}</span>
                <h3 className="font-display text-3xl">{c.title}</h3>
              </div>
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-8 text-sm leading-[1.85] text-muted-foreground">{c.description}</p>
              <ul className="mt-7 space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-border/70 pb-3 text-[0.8rem] tracking-wide">
                    <span className="h-px w-4 bg-taupe" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#menu" className="link-underline mt-8 self-start rule-label text-foreground">
                {c.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
