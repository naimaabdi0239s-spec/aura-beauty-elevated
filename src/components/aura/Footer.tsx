export function Footer() {
  return (
    <footer className="bg-espresso text-ivory overflow-hidden">
      {/* Oversized wordmark */}
      <div className="border-b border-ivory/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1560px]">
          <p
            className="font-display leading-none text-ivory/90 select-none"
            style={{ fontSize: "clamp(4rem, 18vw, 18rem)", letterSpacing: "-0.04em" }}
          >
            AURA
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/45 md:mt-8">
            Beauty, with intention. A modern aesthetics and skin clinic in Dubai, designed for those who seek refinement without excess.
          </p>
        </div>
      </div>

      {/* Links grid */}
      <div className="mx-auto max-w-[1560px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="rule-label text-ivory/30 mb-6">Location</p>
            <p className="text-sm leading-relaxed text-ivory/60">
              Dubai, United Arab Emirates
            </p>
          </div>

          <div>
            <p className="rule-label text-ivory/30 mb-6">Explore</p>
            <ul className="space-y-4 text-sm text-ivory/70">
              {[
                ["Treatments", "#treatments"],
                ["About", "#about"],
                ["Results", "#results"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="link-underline transition-colors duration-500 hover:text-ivory">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="rule-label text-ivory/30 mb-6">Social</p>
            <ul className="space-y-4 text-sm text-ivory/70">
              {["Instagram", "TikTok"].map((s) => (
                <li key={s}>
                  <a href="#contact" className="link-underline transition-colors duration-500 hover:text-ivory">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="rule-label text-ivory/30 mb-6">Legal</p>
            <ul className="space-y-4 text-sm text-ivory/70">
              {["Privacy Policy", "Terms & Conditions"].map((s) => (
                <li key={s}>
                  <a href="#contact" className="link-underline transition-colors duration-500 hover:text-ivory">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-ivory/10 pt-8">
          <p className="text-xs tracking-widest text-ivory/30 uppercase">© 2026 Aura Aesthetics. All rights reserved.</p>
          <p className="font-display text-lg italic text-ivory/25">Beauty, with intention.</p>
        </div>
      </div>
    </footer>
  );
}
