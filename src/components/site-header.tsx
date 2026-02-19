const navItems = ["Services", "Brands", "Portfolio", "Contact"];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b fine-line bg-bg/80 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#" className="font-heading text-xl tracking-[0.12em] uppercase">
          Finkles Atelier
        </a>
        <nav className="hidden gap-8 text-sm tracking-[0.1em] uppercase md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

