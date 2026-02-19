import Image from "next/image";

const navItems = ["Services", "Brands", "Contact"];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b fine-line bg-bg/80 backdrop-blur-md">
      <div className="section-shell flex h-24 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/Group%2048.png"
            alt="Finkles Supply Co. logo"
            width={370}
            height={85}
            priority
            className="h-20 w-auto"
          />
          <span className="sr-only">Finkles Supply Co.</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
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
