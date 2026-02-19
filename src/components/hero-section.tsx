import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-shell grid min-h-[90vh] grid-cols-1 gap-12 py-32 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col justify-center border-l border-primary/20 pl-8">
        <p className="mb-6 text-xs tracking-[0.22em] uppercase text-primary/70">
          Timeless Interior Craftsmanship
        </p>
        <h1 className="font-heading text-5xl leading-tight text-primary lg:text-7xl">
          Quiet Luxury for Kitchens and Living Spaces.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-main/80">
          We design and source enduring cabinetry, hardware, and hearth pieces with uncompromising
          material quality and refined restraint.
        </p>
        <div className="mt-10">
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-primary/30 bg-surface px-8 py-4 text-xs tracking-[0.18em] uppercase rounded-none"
          >
            Explore Services
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <div className="relative min-h-[460px] border fine-line rounded-none">
        <Image
          src="https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1600&q=80"
          alt="Modern kitchen interior with muted tones and clean lines"
          fill
          priority
          className="object-cover fade-only rounded-none"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}

