import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TestimonialHero } from "@/components/TestimonialHero";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Solution } from "@/components/Solution";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Tutorials } from "@/components/Tutorials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TestimonialHero />
        <Process />
        <Work />
        <Benefits />
        <Features />
        <Solution />
        <Pricing />
        <FAQ />
        <Tutorials />
        <Footer />
      </main>
    </>
  );
}
