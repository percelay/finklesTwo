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
    <section id="brands" className="border-y fine-line py-20">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-primary/70">Brands We Carry</p>
            <h2 className="mt-3 text-3xl text-primary md:text-4xl">In-Stock and Special Order Lines</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-4 pb-2">
            {brands.map((brand) => (
              <div
                key={brand}
                className="fade-only rounded-none border fine-line bg-surface px-8 py-4 text-sm font-semibold text-primary/85"
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
