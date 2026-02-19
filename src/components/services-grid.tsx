import { Bath, Flame, Hammer, House } from "lucide-react";

const services = [
  {
    title: "Kitchens",
    copy: "Custom layouts, cabinetry direction, appliance integration, and finish schedules tailored to architectural context.",
    icon: House,
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Bath Vanities",
    copy: "Balanced proportions, premium surfaces, and moisture-smart detailing for daily function with permanence.",
    icon: Bath,
    className: ""
  },
  {
    title: "Decorative Hardware",
    copy: "Curated pulls, knobs, and metal finishes that anchor each room with subtle character.",
    icon: Hammer,
    className: ""
  },
  {
    title: "Fireplaces",
    copy: "Mantel composition and hearth systems that frame gathering spaces with warmth and architectural calm.",
    icon: Flame,
    className: "md:col-span-2"
  }
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="section-shell py-32">
      <div className="mb-14 border-b fine-line pb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-primary/70">Core Services</p>
        <h2 className="mt-3 font-heading text-4xl text-primary md:text-5xl">Designed for Enduring Use</h2>
      </div>

      <div className="grid auto-rows-[14rem] grid-cols-1 gap-4 md:grid-cols-3">
        {services.map(({ title, copy, icon: Icon, className }) => (
          <article
            key={title}
            className={`rounded-none border fine-line bg-surface p-8 fade-only ${className}`}
          >
            <Icon size={20} strokeWidth={1.5} className="text-primary/80" />
            <h3 className="mt-8 font-heading text-2xl text-primary">{title}</h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-main/80">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

