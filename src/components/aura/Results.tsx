import { useCallback, useRef, useState } from "react";
import skinBefore from "@/assets/ba-skin-before.jpg";
import skinAfter from "@/assets/ba-skin-after.jpg";
import lipBefore from "@/assets/ba-lip-before.jpg";
import lipAfter from "@/assets/ba-lip-after.jpg";
import faceBefore from "@/assets/ba-face-before.jpg";
import faceAfter from "@/assets/ba-face-after.jpg";
import { Reveal } from "./Reveal";

type Result = {
  category: string;
  title: string;
  note: string;
  before: string;
  after: string;
};

const results: Result[] = [
  {
    category: "Skin",
    title: "Texture & Clarity",
    note: "Three sessions of microneedling",
    before: skinBefore,
    after: skinAfter,
  },
  {
    category: "Injectables",
    title: "Lip Enhancement",
    note: "0.5ml, single session",
    before: lipBefore,
    after: lipAfter,
  },
  {
    category: "Facial Balancing",
    title: "Midface Refresh",
    note: "Considered, staged treatment",
    before: faceBefore,
    after: faceAfter,
  },
];

function Slider({ item }: { item: Result }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden bg-secondary"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={item.after}
          alt={`${item.title} — after treatment`}
          loading="lazy"
          width={800}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={item.before}
            alt={`${item.title} — before treatment`}
            loading="lazy"
            width={800}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: ref.current ? `${ref.current.offsetWidth}px` : "100%", maxWidth: "none" }}
          />
        </div>

        <span className="rule-label absolute left-4 top-4 bg-background/85 px-3 py-1 text-foreground">Before</span>
        <span className="rule-label absolute right-4 top-4 bg-espresso/85 px-3 py-1 text-ivory">After</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="h-full w-px bg-ivory/90" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/90 bg-background/90 px-3 py-2">
            <span className="block h-px w-6 bg-foreground" />
          </div>
        </div>

        <label className="sr-only" htmlFor={`slider-${item.title}`}>
          Reveal before and after for {item.title}
        </label>
        <input
          id={`slider-${item.title}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
        <div>
          <h3 className="font-display text-xl">{item.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
        </div>
        <span className="rule-label text-taupe">{item.category}</span>
      </figcaption>
    </figure>
  );
}

export function Results() {
  return (
    <section id="results" className="border-t border-border">
      <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">The Results</p>
            <h2 className="mt-7 font-display text-4xl md:text-[3.6rem]">
              Real results. <span className="italic">Real confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm leading-[1.9] text-muted-foreground lg:pb-3">
              Every treatment is designed with your individual features and goals in mind. Drag to compare.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {results.map((r, i) => (
            <Reveal key={r.title} delay={i * 140} className={i === 1 ? "lg:mt-14" : ""}>
              <Slider item={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
