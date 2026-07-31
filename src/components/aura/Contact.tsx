import { Reveal } from "./Reveal";

const details = [
  { label: "Address", lines: ["Aura Aesthetics", "Jumeirah, Dubai", "United Arab Emirates"] },
  { label: "Hours", lines: ["Monday — Saturday", "9:00 AM — 7:00 PM", "Sunday by appointment"] },
  { label: "Contact", lines: ["hello@auraaesthetics.com", "+971 4 555 0142"] },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Visit Aura</p>
              <h2 className="mt-7 font-display text-4xl md:text-[3.4rem]">Come and see us</h2>
            </Reveal>

            <div className="mt-12">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 120} className="grid gap-3 border-t border-border py-7 sm:grid-cols-[140px_1fr]">
                  <span className="rule-label text-taupe">{d.label}</span>
                  <div className="space-y-1.5 text-sm leading-relaxed">
                    {d.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
              <Reveal delay={360} className="grid gap-3 border-y border-border py-7 sm:grid-cols-[140px_1fr]">
                <span className="rule-label text-taupe">Follow</span>
                <div className="flex flex-wrap gap-6">
                  {["Instagram", "WhatsApp", "Email"].map((s) => (
                    <a key={s} href="#contact" className="link-underline text-sm">
                      {s}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={420}>
              <a href="#contact" className="btn-base btn-solid mt-12">
                Book an Appointment
              </a>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative flex h-full min-h-[380px] items-center justify-center overflow-hidden bg-secondary">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute left-[18%] top-[42%] h-px w-[64%] bg-taupe/60 rotate-[14deg]"
              />
              <div className="relative text-center">
                <span className="mx-auto block h-3 w-3 rounded-full border border-espresso bg-background" />
                <p className="mt-5 font-display text-2xl">Jumeirah, Dubai</p>
                <p className="eyebrow mt-3">25.2048° N, 55.2708° E</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
