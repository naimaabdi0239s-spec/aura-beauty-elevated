import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="mx-auto max-w-[1560px] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">A More Considered Approach to Aesthetics</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-5xl md:text-[5rem] leading-[0.9]">
            Beauty, <span className="italic">with intention.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-[1.9] text-muted-foreground">
            At Aura Aesthetics, every treatment begins with understanding you. We combine thoughtful consultation,
            advanced techniques, and personalized care to create results that feel refined, natural, and uniquely yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
