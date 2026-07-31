export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1560px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.3em]">AURA</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Beauty, with intention. A modern aesthetics and skin clinic in Dubai.
            </p>
          </div>

          <div>
            <p className="rule-label text-ivory/45">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              {[
                ["Treatments", "#treatments"],
                ["About", "#about"],
                ["Results", "#results"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors duration-500 hover:text-ivory">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="rule-label text-ivory/45">Social</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              {["Instagram", "TikTok"].map((s) => (
                <li key={s}>
                  <a href="#contact" className="transition-colors duration-500 hover:text-ivory">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="rule-label text-ivory/45">Legal</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              {["Privacy Policy", "Terms & Conditions"].map((s) => (
                <li key={s}>
                  <a href="#contact" className="transition-colors duration-500 hover:text-ivory">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/15 pt-6">
          <p className="text-xs text-ivory/50">© 2026 Aura Aesthetics. All rights reserved.</p>
          <p className="rule-label text-ivory/40">Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
