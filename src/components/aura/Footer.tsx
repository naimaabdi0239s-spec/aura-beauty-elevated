export function Footer() {
  return (
    <footer className="bg-espresso text-ivory overflow-hidden">
      {/* Oversized wordmark */}
      <div className="border-b border-ivory/10 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1560px]">
       <div className="border-b border-ivory/10 px-6 py-16 md:px-12 md:py-20">
  <div className="mx-auto max-w-[1560px] flex flex-col lg:flex-row justify-between items-start gap-20">

    <p
      className="font-display leading-none text-ivory/90 shrink-0"
      style={{
        fontSize: "clamp(4rem,18vw,18rem)",
        letterSpacing: "-0.04em",
      }}
    >
      AURA
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1">

      <div>
        <p className="rule-label text-ivory/30 mb-4">Location</p>
        <p className="text-sm text-ivory/60">
          Dubai<br />
          United Arab Emirates
        </p>
      </div>

      <div>
        <p className="rule-label text-ivory/30 mb-4">Explore</p>
        ...
      </div>

      <div>
        <p className="rule-label text-ivory/30 mb-4">Social</p>
        ...
      </div>

      <div>
        <p className="rule-label text-ivory/30 mb-4">Legal</p>
        ...
      </div>

    </div>

  </div>
</div>

        {/* Closing line */}
        <div className="mt-12 flex flex-wrap items-end gap-6 border-t border-ivory/10 pt-6">
          <p className="text-xs tracking-widest text-ivory/30 uppercase">© 2026 Aura Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
