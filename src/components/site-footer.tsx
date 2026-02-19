const quickLinks = ["Services", "Brands", "Portfolio", "Journal", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Accessibility", "Licenses"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary py-24 text-bg">
      <div className="section-shell grid grid-cols-1 gap-12 border-t border-bg/20 pt-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl tracking-[0.08em] uppercase">Finkles Atelier</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bg/80">
            Bespoke interiors and finish curation for residential spaces across the Northeast.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.18em] uppercase text-bg/70">Newsletter</h3>
          <p className="mt-4 text-sm text-bg/80">Monthly notes on materials, care, and new collections.</p>
          <form className="mt-6 space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-none border border-bg/30 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-bg/50"
            />
            <button
              type="button"
              className="w-full rounded-none border border-bg/40 px-4 py-3 text-xs tracking-[0.15em] uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.18em] uppercase text-bg/70">Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/85">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.18em] uppercase text-bg/70">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/75">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs tracking-[0.12em] uppercase text-bg/60">© 2026 Finkles Atelier</p>
        </div>
      </div>
    </footer>
  );
}

