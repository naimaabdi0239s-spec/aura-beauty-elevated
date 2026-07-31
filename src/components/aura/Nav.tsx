import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-700 ${
        scrolled || open
          ? "border-b border-border bg-background/95 py-4 backdrop-blur-[2px]"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-12">
        <nav className="hidden min-w-0 items-center gap-9 lg:flex">
          {links.slice(0, 3).map((l) => (
            <a key={l.label} href={l.href} className="rule-label text-foreground/70 transition-colors duration-500 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-fit flex-col gap-[5px] justify-self-start lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-foreground transition-opacity duration-500 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-500 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>

        <a
          href="#top"
          className="justify-self-center font-display text-2xl leading-none tracking-[0.32em] text-foreground md:text-[1.7rem]"
        >
          AURA
        </a>

        <div className="flex min-w-0 items-center justify-end gap-9">
          {links.slice(3).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rule-label hidden text-foreground/70 transition-colors duration-500 hover:text-foreground lg:inline"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-base btn-solid hidden !px-6 !py-3 md:inline-flex">
            Book Appointment
          </a>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-700 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 pb-10 pt-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl leading-none text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-base btn-solid mt-4 self-start">
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
