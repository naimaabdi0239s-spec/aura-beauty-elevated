
import interior from "@/assets/clinic-interior.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">The Aura Approach</p>
          <h2 className="mt-6 max-w-md font-display text-4xl md:text-[3.4rem]">
            Where expertise meets <span className="italic">intention.</span>
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-[1.95] text-muted-foreground">
            Aura Aesthetics was created around a simple belief: the best aesthetic treatments don't change who you are.
            They enhance what is already there. Our approach is personal, considered, and always centered around helping
            you feel confident in your own skin.
          </p>
          <a href="#contact" className="btn-base btn-solid mt-8">
            Discover Aura
          </a>
        </Reveal>

        <Reveal delay={140} className="order-1 lg:order-2">
          <img
            src={interior}
            alt="Minimal travertine and plaster interior of the Aura Aesthetics clinic"
            loading="lazy"
            width={1200}
            height={1504}
            className="aspect-[4/5] w-full object-cover lg:aspect-[4/4.6]"
          />
        </Reveal>
      </div>
    </section>
  );
}
