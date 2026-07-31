import { Reveal } from "./Reveal";

const dominantResult = {
  image: "/pexels-cottonbro-7581078.jpg",
  category: "Injectables",
  title: "Lip Enhancement",
  note: "Natural volume, beautifully defined",
  alt: "Lip enhancement before and after — natural volume treatment",
};

const supportingResults = [
  {
    image: "/2.jpeg",
    category: "Skin",
    title: "Clarity & Texture",
    note: "Microneedling — three sessions",
    alt: "Skin clarity before and after — microneedling treatment",
  },
  {
    image: "/33.jpeg",
    category: "Facials",
    title: "Facial Balancing",
    note: "Considered, personalised treatment",
    alt: "Facial balancing before and after — personalised injectable treatment",
  },
];

export function Results() {
  return (
    <section id="results" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-32 md:px-12 md:py-44">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end mb-20">
          <Reveal>
            <p className="eyebrow">The Results</p>
            <h2 className="mt-7 font-display text-5xl md:text-[3.8rem] leading-[0.92]">
              Real results.<br /><span className="italic">Real confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm leading-[1.9] text-muted-foreground lg:pb-2">
              Every treatment is designed with your individual features and goals in mind. The results speak for themselves.
            </p>
          </Reveal>
        </div>

        {/* Dominant centerpiece */}
        <Reveal>
          <figure className="mb-8">
            <div className="overflow-hidden">
              <img
                src={dominantResult.image}
                alt={dominantResult.alt}
                loading="lazy"
                width={1400}
                height={700}
                className="w-full object-cover object-center"
                style={{ maxHeight: "72vh" }}
              />
            </div>
            <figcaption className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-5">
              <div>
                <h3 className="font-display text-2xl">{dominantResult.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{dominantResult.note}</p>
              </div>
              <span className="rule-label text-taupe">{dominantResult.category}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Supporting examples */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {supportingResults.map((r, i) => (
            <Reveal key={r.title} delay={i * 120}>
              <figure>
                <div className="overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.alt}
                    loading="lazy"
                    width={700}
                    height={560}
                    className="aspect-[5/4] w-full object-cover object-center"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <div>
                    <h3 className="font-display text-xl">{r.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>
                  </div>
                  <span className="rule-label text-taupe">{r.category}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
