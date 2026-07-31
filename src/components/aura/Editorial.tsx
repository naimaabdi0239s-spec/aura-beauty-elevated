import { Reveal } from "./Reveal";

export function Editorial() {
  return (
    <section className="overflow-hidden bg-espresso">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <p className="eyebrow !text-ivory/45 mb-8">The Aura Philosophy</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] text-ivory"
            style={{ letterSpacing: "-0.03em" }}
          >
            Less is more.<br />
            <span className="italic text-ivory/55">Always.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">
            <p className="max-w-lg text-[1.05rem] leading-[1.95] text-ivory/65 font-light">
              We believe the most beautiful results are the ones no one can quite explain.
              A certain glow. A quiet confidence. Features that look rested, refined, and entirely yours.
            </p>
            <a
              href="#contact"
              className="btn-base border border-ivory/30 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-espresso self-end shrink-0"
            >
              Book a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

