import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/aura/Nav";
import { Hero } from "@/components/aura/Hero";
import { Intro } from "@/components/aura/Intro";
import { Treatments } from "@/components/aura/Treatments";
import { Editorial } from "@/components/aura/Editorial";
import { WhyAura } from "@/components/aura/WhyAura";
import { Featured } from "@/components/aura/Featured";
import { Results } from "@/components/aura/Results";
import { TreatmentMenu } from "@/components/aura/TreatmentMenu";
import { Testimonials } from "@/components/aura/Testimonials";
import { About } from "@/components/aura/About";
import { ConsultationCta } from "@/components/aura/ConsultationCta";
import { Contact } from "@/components/aura/Contact";
import { Footer } from "@/components/aura/Footer";

const title = "Aura Aesthetics — Modern Aesthetics & Skin Clinic, Dubai";
const description =
  "Personalized aesthetics and advanced skincare in Dubai. Injectables, skin treatments and signature facials designed to enhance your natural beauty.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Treatments />
        <Editorial />
        <WhyAura />
        <Featured />
        <Results />
        <TreatmentMenu />
        <Testimonials />
        <About />
        <ConsultationCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
