import { CTASection } from "@/components/sections/home/cta-section";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { HeroSection } from "@/components/sections/home/hero-section";
import { MetricsSection } from "@/components/sections/home/metrics-section";
import { PhilosophySection } from "@/components/sections/home/philosophy-section";

export default function Home() {
  return (
    <main className="space-y-24 pb-16 pt-24 sm:pt-32">
      <HeroSection />
      <MetricsSection />
      <FeaturedProjects />
      <PhilosophySection />
      <CTASection />
    </main>
  );
}