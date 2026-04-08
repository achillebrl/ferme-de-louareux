import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a0e] text-[#faf7f2] relative overflow-hidden">
      {/* Top ornament line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#5a7a4a] to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-[#5a7a4a]/10 pointer-events-none" />
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-[#5a7a4a]/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-r border-t border-[#c4a882]/5 pointer-events-none" />

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Ferme de Louareux"
                  fill
                  className="object-contain brightness-150"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="font-[var(--font-cormorant)] text-xl font-light text-[#faf7f2]">
                  Ferme de Louareux
                </span>
                <div className="font-[var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#a8c494]">
                  Pension équestre · Sonchamp
                </div>
              </div>
            </div>
            <p className="text-[#c4a882]/70 font-[var(--font-eb-garamond)] text-base leading-relaxed max-w-xs italic">
              Un manoir du XIXème siècle transformé en ferme vivante — un lieu où la nature, le cheval et l&apos;histoire se rencontrent.
            </p>
            <div className="pt-2">
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.25em] uppercase text-[#5a7a4a] mb-2">Ann &amp; Christophe LEBOUCQ</p>
              <p className="text-[#c4a882]/50 font-[var(--font-eb-garamond)] text-sm">
                45 Ferme de Louareux<br/>78120 Sonchamp, Yvelines
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#5a7a4a] mb-5">
              Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "À propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-[var(--font-eb-garamond)] text-[#faf7f2]/60 hover:text-[#a8c494] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-[var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#5a7a4a] mb-5">
              Contact
            </h4>
            <div className="space-y-4 text-[#faf7f2]/60 font-[var(--font-eb-garamond)] text-sm">
              <div className="flex items-start gap-2.5">
                <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0 text-base">📞</span>
                <a href="tel:0687461538" className="hover:text-[#a8c494] transition-colors leading-relaxed">
                  06.87.46.15.38
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0 text-base">📍</span>
                <span className="leading-relaxed">
                  45 Ferme de Louareux<br/>78120 Sonchamp
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0 text-base">🕓</span>
                <span className="leading-relaxed">
                  15 min de Rambouillet
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:0687461538"
                className="inline-block bg-[#5a7a4a] text-[#faf7f2] px-5 py-2.5 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase hover:bg-[#3d5533] transition-colors duration-300"
              >
                Nous appeler →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#5a7a4a]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#faf7f2]/30 font-[var(--font-jost)] text-[10px] tracking-[0.2em] uppercase">
            © {currentYear} Ferme de Louareux — Tous droits réservés
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#5a7a4a] text-xs">✦</span>
            <p className="text-[#faf7f2]/20 font-[var(--font-jost)] text-[10px] tracking-[0.15em] uppercase">
              Sonchamp, 78120 Yvelines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}