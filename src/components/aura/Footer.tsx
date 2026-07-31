export function Footer() {
  return (
    <footer className="bg-espresso text-ivory overflow-hidden">
      {/* Editorial footer header */}
      <div className="border-b border-ivory/10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1560px]">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_2fr] lg:items-end">
            
            {/* Oversized wordmark */}
            <div>
              <p
                className="font-display leading-none text-ivory/90 select-none"
                style={{
                  fontSize: "clamp(4rem, 15vw, 15rem)",
                  letterSpacing: "-0.06em",
                }}
              >
                AURA
              </p>
            </div>

            {/* Footer navigation */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
              
              {/* Location */}
              <div>
                <p className="rule-label mb-4 text-ivory/30">
                  Location
                </p>
                <p className="text-sm leading-relaxed text-ivory/60">
                  Dubai,
                  <br />
                  United Arab Emirates
                </p>
              </div>

              {/* Explore */}
              <div>
                <p className="rule-label mb-4 text-ivory/30">
                  Explore
                </p>

                <ul className="space-y-3 text-sm text-ivory/70">
                  {[
                    ["Treatments", "#treatments"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="link-underline transition-colors duration-500 hover:text-ivory"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="rule-label mb-4 text-ivory/30">
                  Social
                </p>

                <ul className="space-y-3 text-sm text-ivory/70">
                  {["Instagram", "TikTok"].map((social) => (
                    <li key={social}>
                      <a
                        href="#contact"
                        className="link-underline transition-colors duration-500 hover:text-ivory"
                      >
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="rule-label mb-4 text-ivory/30">
                  Legal
                </p>

                <ul className="space-y-3 text-sm text-ivory/70">
                  {["Privacy Policy", "Terms & Conditions"].map((item) => (
                    <li key={item}>
                      <a
                        href="#contact"
                        className="link-underline transition-colors duration-500 hover:text-ivory"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[1560px] px-6 py-6 md:px-12">
        <p className="text-xs uppercase tracking-widest text-ivory/30">
          © 2026 Aura Aesthetics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
