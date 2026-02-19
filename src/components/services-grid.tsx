import { Bath, Flame, Hammer, House } from "lucide-react";

const services = [
  {
    title: "Kitchens",
    copy: "Cabinet boxes, door styles, sinks, faucets, and appliance-ready components for remodels and new builds.",
    icon: House,
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Bath Vanities",
    copy: "Single and double vanity lines, tops, mirrors, and matching plumbing fixtures with standard sizing.",
    icon: Bath,
    className: ""
  },
  {
    title: "Decorative Hardware",
    copy: "Knobs, pulls, hinges, and latches in stocked finishes for quick replacement and full project orders.",
    icon: Hammer,
    className: "md:row-span-2"
  },
  {
    title: "Fireplaces",
    copy: "Gas, electric, and vented fireplace options plus surrounds and core accessories from trusted brands.",
    icon: Flame,
    className: "md:col-span-2"
  }
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="section-shell py-20">
      <div className="mb-10 border-b fine-line pb-6">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-primary/70">Product Categories</p>
        <h2 className="mt-3 text-3xl text-primary md:text-4xl">What We Supply</h2>
      </div>

      <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
        {services.map(({ title, copy, icon: Icon, className }) => (
          <article
            key={title}
            className={`rounded-none border fine-line bg-surface p-6 fade-only ${className}`}
          >
            <Icon size={20} strokeWidth={1.5} className="text-primary/80" />
            <h3 className="mt-6 text-2xl font-bold text-primary">{title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-main/80">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
