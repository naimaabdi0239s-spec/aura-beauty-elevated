import ctaBg from "@/assets/cta-bg.jpg";
import { Reveal } from "./Reveal";

export function ConsultationCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ivory/70" />
      <div className="relative mx-auto max-w-[1560px] px-6 py-28 text-center md:px-12 md:py-44">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-[4rem]">Not sure where to start?</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-md text-[0.95rem] leading-[1.9] text-muted-foreground">
            Let's create a treatment plan that's completely tailored to you.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-base btn-solid">
              Book Your Consultation
            </a>
            <a href="#contact" className="btn-base btn-outline">
              Contact Aura
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
