import { Reveal } from "./Reveal";

const details = ["Deep cleansing", "Skin renewal", "Intense hydration", "Signature finishing ritual"];

export function Featured() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[60vh] overflow-hidden lg:min-h-[92vh]">
        <img
          src="/WhatsApp_Image_2026-07-31_at_5.51.47_PM.jpeg"
          alt="Practitioner performing a signature Aura facial treatment"
          loading="lazy"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex items-center bg-espresso px-6 py-24 text-ivory md:px-16 lg:px-24">
        <div className="max-w-lg">
          <Reveal>
            <p className="eyebrow !text-ivory/55">The Aura Signature</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-7 font-display text-4xl leading-[1] md:text-[3.6rem]">
              The Aura <span className="italic">Glow</span> Facial
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-[0.95rem] leading-[1.95] text-ivory/70">
              A deeply restorative treatment designed to cleanse, hydrate, and revive the skin, leaving you with a
              visibly smoother, fresher, more luminous complexion.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2">
              {details.map((d) => (
                <li key={d} className="border-t border-ivory/15 py-4 text-[0.8rem] tracking-wide text-ivory/85">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={340}>
            <a
              href="#menu"
              className="btn-base mt-12 border border-ivory/40 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-espresso"
            >
              Discover the Treatment
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
