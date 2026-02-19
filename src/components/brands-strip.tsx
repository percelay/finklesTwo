const brands = [
  "Sub-Zero",
  "Wolf",
  "Miele",
  "Kohler",
  "Brizo",
  "Waterworks",
  "Bertazzoni",
  "Viking"
];

export function BrandsStrip() {
  return (
    <section id="brands" className="border-y fine-line py-32">
      <div className="section-shell">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary/70">Brands & Product Lines</p>
            <h2 className="mt-3 font-heading text-4xl text-primary md:text-5xl">Trusted by Design Studios</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-4 pb-2">
            {brands.map((brand) => (
              <div
                key={brand}
                className="fade-only rounded-none border fine-line bg-surface px-10 py-6 text-xs tracking-[0.14em] uppercase text-primary/85"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

