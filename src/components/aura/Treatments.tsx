import injectables from "@/assets/cat-injectables.jpg";
import skin from "@/assets/cat-skin.jpg";
import { Reveal } from "./Reveal";

export function Treatments() {
  return (
    <section id="treatments" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-32 md:px-12 md:py-44">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 pb-16">
            <h2 className="max-w-xl font-display text-5xl md:text-7xl leading-[0.9]">Treatments,<br /><span className="italic">considered</span></h2>
            <p className="eyebrow">Three Pillars of Care</p>
          </div>
        </Reveal>

        {/* Row 1: Injectables — full-width hero treatment */}
        <Reveal>
          <article className="group grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] border-t border-border">
            <div className="overflow-hidden">
              <img
                src={injectables}
                alt="Editorial close-up of naturally defined lips and jawline"
                loading="lazy"
                width={912}
                height={760}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center px-0 py-12 lg:px-16 lg:py-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">01</span>
                <h3 className="font-display text-5xl md:text-6xl">Injectables</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Subtle, refined enhancements designed to restore balance and highlight your natural features.
              </p>
              <ul className="mt-8 space-y-4">
                {["Anti-Wrinkle Treatments", "Lip Enhancement", "Facial Balancing"].map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-border/70 pb-4 text-[0.8rem] tracking-wide">
                    <span className="h-px w-5 bg-taupe shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#menu" className="link-underline mt-10 self-start rule-label text-foreground">
                Explore Injectables
              </a>
            </div>
          </article>
        </Reveal>

        {/* Row 2: Skin Treatments — reversed layout with tall image */}
        <Reveal delay={80}>
          <article className="group grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] border-t border-border mt-0">
            <div className="flex flex-col justify-center px-0 py-12 lg:pr-16 lg:py-16 order-2 lg:order-1">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">02</span>
                <h3 className="font-display text-5xl md:text-6xl">Skin<br />Treatments</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Advanced protocols designed to transform texture, tone and clarity from within.
              </p>
              <ul className="mt-8 space-y-4">
                {["Microneedling", "Chemical Peels", "Skin Resurfacing"].map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-border/70 pb-4 text-[0.8rem] tracking-wide">
                    <span className="h-px w-5 bg-taupe shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#menu" className="link-underline mt-10 self-start rule-label text-foreground">
                Explore Skin Treatments
              </a>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img
                src={skin}
                alt="Macro photograph of radiant, hydrated skin texture"
                loading="lazy"
                width={912}
                height={760}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>
          </article>
        </Reveal>

        {/* Row 3: Facials — narrow text + tall portrait image */}
        <Reveal delay={160}>
          <article className="group grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] border-t border-border mt-0">
            <div className="overflow-hidden">
              <img
                src="/WhatsApp_Image_2026-07-31_at_5.51.47_PM.jpeg"
                alt="Practitioner performing a signature facial treatment"
                loading="lazy"
                width={912}
                height={760}
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center px-0 py-12 lg:px-16 lg:py-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">03</span>
                <h3 className="font-display text-5xl md:text-6xl">Facials<br />&amp; Glow</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Signature treatments crafted to cleanse, nourish and reveal your healthiest, most luminous glow.
              </p>
              <ul className="mt-8 space-y-4">
                {["Signature Facial", "Glass Skin Facial", "Deep Cleansing Treatments"].map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-border/70 pb-4 text-[0.8rem] tracking-wide">
                    <span className="h-px w-5 bg-taupe shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#menu" className="link-underline mt-10 self-start rule-label text-foreground">
                Explore Facials
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
