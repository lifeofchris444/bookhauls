import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Steps />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
