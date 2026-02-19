import { BrandsStrip } from "@/components/brands-strip";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <main className="bg-bg text-text-main">
      <SiteHeader />
      <div className="pt-16">
        <HeroSection />
        <ServicesGrid />
        <BrandsStrip />
      </div>
      <SiteFooter />
    </main>
  );
}
