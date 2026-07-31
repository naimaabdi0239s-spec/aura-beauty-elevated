import injectables from "@/assets/cat-injectables.jpg";
import skin from "@/assets/cat-skin.jpg";

import facials from "@/assets/pexels-cottonbro-7581078.jpg";
import lips from "@/assets/2.jpeg";
import microneedling from "@/assets/WhatsApp Image 2026-07-31 at 5.51.47 PM.jpeg";
import facialBalancing from "@/assets/33.jpeg";
import { Reveal } from "./Reveal";

export function Treatments() {
  return (
    <section id="treatments" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
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
            <div className="flex flex-col justify-center px-0 py-10 lg:px-16 lg:py-12">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">01</span>
                <h3 className="font-display text-5xl md:text-6xl">Injectables</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Subtle, refined enhancements designed to restore balance and highlight your natural features.
              </p>
              <div className="mt-12 space-y-8">

  <div className="grid grid-cols-[120px_1fr] gap-6 items-center border-b border-border pb-8">
    <img
      src={lips}
      alt="Lip Enhancement"
      className="h-28 w-28 rounded-sm object-cover"
    />

    <div>
      <h4 className="font-display text-2xl">Lip Enhancement</h4>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        Soft volume and refined definition tailored to your natural proportions.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-[120px_1fr] gap-6 items-center border-b border-border pb-8">
    <img
      src={facialBalancing}
      alt="Facial Balancing"
      className="h-28 w-28 rounded-sm object-cover"
    />

    <div>
      <h4 className="font-display text-2xl">Facial Balancing</h4>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        Strategic enhancements designed to create harmony from every angle.
      </p>
    </div>
  </div>

  <div className="flex items-center justify-between pt-2">
    <h4 className="font-display text-2xl">
      Anti-Wrinkle Treatments
    </h4>

    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
      Prevent • Smooth • Refresh
    </span>
  </div>

</div>
              <a href="#menu" className="link-underline mt-10 self-start rule-label text-foreground">
                Explore Injectables
              </a>
            </div>
          </article>
        </Reveal>

        {/* Row 2: Skin Treatments — reversed layout with tall image */}
        <Reveal delay={80}>
          <article className="group grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] border-t border-border mt-0">
            <div className="flex flex-col justify-center px-0 py-10 lg:pr-16 lg:py-12 order-2 lg:order-1">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">02</span>
                <h3 className="font-display text-5xl md:text-6xl">Skin<br />Treatments</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Advanced protocols designed to transform texture, tone and clarity from within.
              </p>
            <div className="mt-12">

  <img
    src={microneedling}
    alt="Microneedling"
    className="mb-6 aspect-[16/10] w-full object-cover"
  />

  <h4 className="font-display text-3xl">
    Microneedling
  </h4>

  <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
    Stimulates collagen production while improving texture, tone and overall skin quality.
  </p>

  <div className="mt-10 flex flex-wrap gap-4">

    <span className="border border-border px-5 py-2 text-xs uppercase tracking-[0.25em]">
      Chemical Peels
    </span>

    <span className="border border-border px-5 py-2 text-xs uppercase tracking-[0.25em]">
      Skin Resurfacing
    </span>

  </div>

</div>
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
               src={facials}
                alt="Practitioner performing a signature facial treatment"
                loading="lazy"
                width={912}
                height={760}
              className="aspect-[4/3] w-full object-contain bg-[#f8f5f2] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="flex flex-col justify-center px-0 py-10 lg:px-16 lg:py-12">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="rule-label text-taupe">03</span>
                <h3 className="font-display text-5xl md:text-6xl">Facials<br />&amp; Glow</h3>
              </div>
              <p className="text-sm leading-[1.9] text-muted-foreground max-w-sm">
                Signature treatments crafted to cleanse, nourish and reveal your healthiest, most luminous glow.
              </p>
              <div className="mt-12 space-y-8">

  <div className="border-b border-border pb-6">
    <h4 className="font-display text-2xl">
      Signature Facial
    </h4>
  </div>

  <div className="border-b border-border pb-6">
    <h4 className="font-display text-2xl">
      Glass Skin Facial
    </h4>
  </div>

  <div className="border-b border-border pb-6">
    <h4 className="font-display text-2xl">
      Deep Cleansing Treatment
    </h4>
  </div>

</div>
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
