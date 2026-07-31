import heroImg from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-beige">
      <img
        src={heroImg}
        alt="Close-up editorial portrait of glowing, naturally radiant skin"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-espresso/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-espresso/10" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-20">
        <div className="max-w-2xl">
          <p
            className="eyebrow !text-ivory/75 animate-[fade-in_1.2s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: "150ms" }}
          >
            Modern Aesthetics • Personalized Care
          </p>
          <h1
            className="mt-7 font-display text-[3.4rem] leading-[0.92] text-ivory animate-[fade-in_1.4s_cubic-bezier(0.16,1,0.3,1)_both] sm:text-7xl lg:text-[6.2rem]"
            style={{ animationDelay: "280ms" }}
          >
            Your skin,
            <br />
            <span className="italic">elevated.</span>
          </h1>
          <p
            className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-ivory/80 animate-[fade-in_1.4s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: "430ms" }}
          >
            Personalized aesthetics and advanced skincare designed to enhance your natural beauty.
          </p>
          <div
            className="mt-11 flex flex-wrap items-center gap-4 animate-[fade-in_1.4s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: "560ms" }}
          >
            <a href="#contact" className="btn-base bg-ivory text-espresso border border-ivory transition-colors duration-500 hover:bg-transparent hover:text-ivory">
              Book Your Consultation
            </a>
            <a
              href="#treatments"
              className="btn-base border border-ivory/40 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-espresso"
            >
              Explore Treatments
            </a>
          </div>
        </div>

        <div
          className="mt-16 hidden items-end justify-between border-t border-ivory/20 pt-6 md:flex animate-[fade-in_1.6s_cubic-bezier(0.16,1,0.3,1)_both]"
          style={{ animationDelay: "700ms" }}
        >
          <span className="rule-label text-ivory/60">Dubai, United Arab Emirates</span>
          <span className="rule-label text-ivory/60">Beauty, with intention</span>
        </div>
      </div>
    </section>
  );
}
