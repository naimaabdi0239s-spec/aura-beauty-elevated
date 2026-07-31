import { useState } from "react";
import { Reveal } from "./Reveal";

const treatments = [
  {
    name: "Signature Facial",
    description: "A tailored cleanse, exfoliation, and massage protocol calibrated to your skin on the day.",
    duration: "60 minutes",
    idealFor: "Maintenance and glow before an event",
  },
  {
    name: "Glass Skin Facial",
    description: "Layered hydration and gentle resurfacing for a smooth, reflective finish.",
    duration: "75 minutes",
    idealFor: "Dull, dehydrated or uneven skin",
  },
  {
    name: "Chemical Peel",
    description: "Medical-grade exfoliation to soften pigmentation, congestion and texture over time.",
    duration: "45 minutes",
    idealFor: "Pigmentation and post-acne marks",
  },
  {
    name: "Microneedling",
    description: "Controlled collagen induction that refines pores and firms the skin across a course.",
    duration: "60 minutes",
    idealFor: "Scarring, fine lines and laxity",
  },
  {
    name: "Lip Enhancement",
    description: "Conservative, anatomy-led hydration and shaping — never more than your face can carry.",
    duration: "45 minutes",
    idealFor: "Definition, hydration and balance",
  },
  {
    name: "Anti-Wrinkle Treatment",
    description: "Softened movement with expression preserved, mapped to your muscle pattern.",
    duration: "30 minutes",
    idealFor: "Forehead, frown and eye lines",
  },
];

export function TreatmentMenu() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="menu" className="bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow">The Menu</p>
          <h2 className="mt-7 max-w-xl font-display text-4xl md:text-[3.4rem]">Our most loved treatments</h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {treatments.map((t, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={t.name} delay={i * 60} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="flex min-w-0 items-baseline gap-6">
                    <span className="rule-label shrink-0 text-taupe">{String(i + 1).padStart(2, "0")}</span>
                    <span className="truncate font-display text-2xl transition-colors duration-500 group-hover:text-clay md:text-[2rem]">
                      {t.name}
                    </span>
                  </span>
                  <span className="relative h-3 w-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 bg-foreground" />
                    <span
                      className={`absolute left-1/2 top-0 h-3 w-px bg-foreground transition-transform duration-500 ${
                        isOpen ? "scale-y-0" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-8 pb-10 sm:grid-cols-[1.6fr_1fr_1fr] sm:items-start md:pl-[4.5rem]">
                      <p className="max-w-md text-sm leading-[1.9] text-muted-foreground">{t.description}</p>
                      <div>
                        <p className="rule-label text-taupe">Duration</p>
                        <p className="mt-2 text-sm">{t.duration}</p>
                      </div>
                      <div>
                        <p className="rule-label text-taupe">Ideal for</p>
                        <p className="mt-2 text-sm">{t.idealFor}</p>
                      </div>
                      <a href="#contact" className="btn-base btn-solid w-fit sm:col-span-3">
                        Book This Treatment
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <a href="#contact" className="btn-base btn-outline mt-14">
            View All Treatments
          </a>
        </Reveal>
      </div>
    </section>
  );
}
