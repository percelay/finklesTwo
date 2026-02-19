import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-shell grid min-h-[78vh] grid-cols-1 gap-10 py-20 md:grid-cols-2 md:gap-12">
      <div className="flex flex-col justify-center border-l border-primary/20 pl-6">
        <p className="mb-4 text-xs font-bold tracking-[0.12em] uppercase text-primary/70">
          Since 1994
        </p>
        <h1 className="text-4xl leading-tight text-primary lg:text-6xl">
          Reliable Kitchen and Bath Supply for Everyday Projects.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-main/80">
          Stocked products, straightforward lead times, and contractor-friendly support across
          kitchens, vanities, decorative hardware, and fireplaces.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-primary/30 bg-primary px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-bg rounded-none"
          >
            Request a Quote
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center border border-primary/30 bg-surface px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase rounded-none"
          >
            View Product Categories
          </a>
        </div>
      </div>

      <div className="relative min-h-[420px] border fine-line rounded-none">
        <Image
          src="https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1600&q=80"
          alt="Kitchen showroom with cabinetry and appliances"
          fill
          priority
          className="object-cover fade-only rounded-none"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
