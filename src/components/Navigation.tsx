"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faf7f2]/97 backdrop-blur-md shadow-sm border-b border-[#5a7a4a]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-10">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Ferme de Louareux"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-[var(--font-cormorant)] text-lg font-medium leading-tight transition-colors duration-300 ${
                  scrolled ? "text-[#2c2416]" : "text-[#faf7f2]"
                }`}
              >
                Ferme de Louareux
              </span>
              <span
                className={`font-[var(--font-jost)] text-[8px] tracking-[0.3em] uppercase leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#5a7a4a]" : "text-[#a8c494]"
                }`}
              >
                Sonchamp — Yvelines
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activePage === link.label
                    ? scrolled
                      ? "text-[#5a7a4a] active"
                      : "text-[#a8c494] active"
                    : scrolled
                    ? "text-[#2c2416]/70 hover:text-[#5a7a4a]"
                    : "text-[#faf7f2]/80 hover:text-[#a8c494]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0687461538"
              className={`ml-2 flex items-center gap-2 font-[var(--font-jost)] text-xs tracking-[0.15em] uppercase border px-4 py-2.5 transition-all duration-300 ${
                scrolled
                  ? "border-[#5a7a4a] text-[#5a7a4a] hover:bg-[#5a7a4a] hover:text-[#faf7f2]"
                  : "border-[#a8c494]/60 text-[#faf7f2]/90 hover:border-[#a8c494] hover:text-[#a8c494]"
              }`}
            >
              📞 06.87.46.15.38
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden z-10 flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-[#2c2416]"
                  : scrolled
                  ? "bg-[#2c2416]"
                  : "bg-[#faf7f2]"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-[#2c2416]"
                  : "bg-[#faf7f2]"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-[#2c2416]"
                  : scrolled
                  ? "bg-[#2c2416]"
                  : "bg-[#faf7f2]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[#faf7f2] flex flex-col justify-center px-10 ${
          menuOpen ? "open" : "closed"
        }`}
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#5a7a4a]/5" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c4a882]/10" />

        <nav className="relative z-10 space-y-2">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-[var(--font-cormorant)] text-5xl text-[#2c2416] hover:text-[#5a7a4a] transition-colors duration-300 leading-tight py-2 border-b border-[#2c2416]/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 mt-12 space-y-3">
          <a
            href="tel:0687461538"
            className="flex items-center gap-3 text-[#5a7a4a] font-[var(--font-jost)] text-sm tracking-widest uppercase"
          >
            <span>📞</span> 06.87.46.15.38
          </a>
          <p className="text-[#2c2416]/50 font-[var(--font-eb-garamond)] text-sm italic">
            45 Ferme de Louareux, 78120 Sonchamp
          </p>
        </div>
      </div>
    </>
  );
}