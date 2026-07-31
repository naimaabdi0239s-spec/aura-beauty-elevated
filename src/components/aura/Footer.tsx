export function Footer() {
  return (
    <footer className="bg-espresso text-ivory overflow-hidden">
      {/* Oversized wordmark */}
      <div className="border-b border-ivory/10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1560px]">
          <p
            className="font-display leading-none text-ivory/90 select-none"
            style={{ fontSize: "clamp(4rem, 18vw, 18rem)", letterSpacing: "-0.04em" }}
          >
            AURA
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/45">
            Beauty, with intention. A modern aesthetics and skin clinic in Dubai, designed for those who seek refinement without excess.
          </p>
        </div>
      </div>

      {/* Links grid — all left-aligned */}
      <div className="mx-auto max-w-[1560px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="rule-label text-ivory/30 mb-4">Location</p>
            <p className="text-sm leading-relaxed text-ivory/60">
              Dubai, United Arab Emirates
            </p>
          </div>

          <div>
            <p className="rule-label text-ivory/30 mb-4">Explore</p>
            <ul className="space-y-3 text-sm text-ivory/70">
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
            <p className="rule-label text-ivory/30 mb-4">Social</p>
            <ul className="space-y-3 text-sm text-ivory/70">
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
            <p className="rule-label text-ivory/30 mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-ivory/70">
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
        <div className="mt-12 flex flex-wrap items-end gap-6 border-t border-ivory/10 pt-6">
          <p className="text-xs tracking-widest text-ivory/30 uppercase">© 2026 Aura Aesthetics. All rights reserved.</p>
          <p className="font-display text-lg italic text-ivory/25">Beauty, with intention.</p>
        </div>
      </div>
    </footer>
  );
}
