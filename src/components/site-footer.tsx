const quickLinks = ["Services", "Brands", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Accessibility", "Licenses"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary py-16 text-bg">
      <div className="section-shell grid grid-cols-1 gap-10 border-t border-bg/20 pt-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">Finkles Supply Co.</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bg/80">
            Practical product support for contractors, installers, and homeowners across the Northeast.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-bg/70">Contact</h3>
          <p className="mt-4 text-sm text-bg/85">(555) 014-6721</p>
          <p className="mt-1 text-sm text-bg/85">sales@finklessupply.com</p>
          <p className="mt-1 text-sm text-bg/85">Mon-Fri, 8:00 AM to 5:30 PM</p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-bg/70">Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/85">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-bg/70">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/75">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-bg/60">© 2026 Finkles Supply Co.</p>
        </div>
      </div>
    </footer>
  );
}
