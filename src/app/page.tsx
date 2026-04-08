import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="Accueil" />

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Ferme de Louareux — vue du domaine"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-layered overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a0e]/70 via-[#2c2416]/30 to-[#1a2210]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2210]/50 via-transparent to-transparent" />
        </div>

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5a7a4a] to-transparent z-20" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24">
          {/* Estate badge — top right */}
          <div
            className="absolute top-32 right-8 md:right-16 w-28 h-28 md:w-36 md:h-36 hidden md:flex flex-col items-center justify-center rounded-full border"
            style={{ borderColor: "rgba(196, 168, 130, 0.6)" }}
          >
            <span className="font-[var(--font-jost)] text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#c4a882] px-3 text-center leading-relaxed">
              XIXème
              <br />
              siècle
            </span>
          </div>

          {/* Kicker line */}
          <p className="font-[var(--font-jost)] text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#a8c494] mb-5 md:mb-6 opacity-0 animate-[fadeInUp_0.8s_0.3s_ease_forwards]">
            ✦ Sonchamp, Yvelines ✦ à 15 min de Rambouillet
          </p>

          {/* Main heading */}
          <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] text-[#faf7f2] leading-[0.95] font-[var(--font-cormorant)] font-light mb-2 opacity-0 animate-[fadeInUp_0.9s_0.5s_ease_forwards]">
            Ferme de
          </h1>
          <h1
            className="text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.95] font-[var(--font-cormorant)] font-light mb-6 md:mb-8 opacity-0 animate-[fadeInUp_0.9s_0.7s_ease_forwards]"
            style={{ color: "#a8c494" }}
          >
            Louareux
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-[fadeInUp_0.7s_0.9s_ease_forwards]">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#5a7a4a]" />
            <span className="text-[#c4a882] text-sm font-[var(--font-jost)] tracking-[0.2em] uppercase">
              Pension équestre
            </span>
            <div className="h-px w-8 bg-[#5a7a4a]/40" />
          </div>

          {/* Tagline */}
          <p className="text-[#e8e0d0]/90 text-lg md:text-xl font-[var(--font-eb-garamond)] italic max-w-lg leading-relaxed mb-10 opacity-0 animate-[fadeInUp_0.8s_1.1s_ease_forwards]">
            Un lieu historique au cœur de la campagne — où la nature, le cheval
            et l&apos;histoire se rencontrent.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.7s_1.3s_ease_forwards]">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-[#5a7a4a] text-[#faf7f2] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#3d5533] transition-colors duration-300"
            >
              Nos services
              <span className="text-lg">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#c4a882]/60 text-[#e8e0d0] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#faf7f2]/10 transition-colors duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeInUp_0.6s_2s_ease_forwards] z-10">
          <span className="font-[var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#a8c494]/70">
            Défiler
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#5a7a4a] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── INTRO BANNER ─── */}
      <section className="bg-[#5a7a4a] py-6 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-[var(--font-jost)] text-xs tracking-[0.3em] uppercase text-[#c4dbb8] inline-flex items-center gap-6"
            >
              Pension Équestre{" "}
              <span className="text-[#a8c494]">✦</span> Cueillette de Pommes{" "}
              <span className="text-[#a8c494]">✦</span> Vente de Foin{" "}
              <span className="text-[#a8c494]">✦</span> Manoir XIXème Siècle
            </span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative" data-animate="fade-left">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/assets/about.jpg"
                alt="Le manoir de Louareux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#5a7a4a]/30 -z-10" />
              <div className="absolute -bottom-10 -right-10 w-3/4 h-3/4 border border-[#c4a882]/20 -z-20" />
            </div>
            {/* Floating label */}
            <div className="absolute -top-6 -left-4 md:-left-8 bg-[#2c2416] text-[#c4a882] px-5 py-3">
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.25em] uppercase">
                Fondé au
              </p>
              <p className="font-[var(--font-cormorant)] text-3xl font-light">
                XIXème
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div data-animate data-delay="100">
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a] mb-4">
                ✦ Notre histoire
              </p>
              <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-[var(--font-cormorant)] font-light text-[#2c2416] leading-tight mb-6">
                Un manoir transformé en ferme vivante
              </h2>
            </div>

            <div
              data-animate
              data-delay="200"
              className="space-y-5 text-[#3d3020]/80 text-base md:text-lg leading-relaxed font-[var(--font-eb-garamond)]"
            >
              <p>
                Le manoir de Louareux est transformé en ferme au XIXè siècle.
                Des traces des douves qui l&apos;entouraient restent visibles,
                témoignant de son passé seigneurial.
              </p>
              <p>
                La seule tour conservée avait été transformée en colombier. La
                toiture, couverte en tuiles plates en écailles, est couronnée
                d&apos;un épi de faîtage en terre cuite vernissée — un détail
                architectural rare et précieux.
              </p>
            </div>

            <div data-animate data-delay="300" className="pt-4">
              <div className="h-px bg-gradient-to-r from-[#5a7a4a]/40 to-transparent mb-6" />
              <p className="text-[#2c2416]/90 text-lg md:text-xl font-[var(--font-cormorant)] italic leading-relaxed">
                &ldquo;Ann &amp; Christophe LEBOUCQ vous accueillent dans ce
                lieu historique proposant pensions équestres, cueillette de
                pommes et vente de foin.&rdquo;
              </p>
            </div>

            <div
              data-animate
              data-delay="400"
              className="flex items-center gap-4 pt-2"
            >
              <div className="w-10 h-10 rounded-full bg-[#5a7a4a]/10 flex items-center justify-center">
                <span className="text-[#5a7a4a] text-lg">✉</span>
              </div>
              <div>
                <p className="font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase text-[#5a7a4a]">
                  Ann &amp; Christophe LEBOUCQ
                </p>
                <p className="font-[var(--font-eb-garamond)] text-[#2c2416]/60 text-sm">
                  Propriétaires — 45 Ferme de Louareux, 78120 Sonchamp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="py-24 md:py-36 bg-[#f0ebe0] relative overflow-hidden">
        {/* Decorative large text background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-[var(--font-cormorant)] text-[#5a7a4a]/[0.04] whitespace-nowrap select-none pointer-events-none uppercase tracking-widest">
          Louareux
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20" data-animate>
            <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a] mb-4">
              ✦ Ce que nous proposons
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] font-[var(--font-cormorant)] font-light text-[#2c2416] mb-6">
              Nos Services
            </h2>
            <div className="flex items-center justify-center">
              <span className="text-[#5a7a4a] text-xl">✦</span>
            </div>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 — Pension équestre */}
            <div
              className="bg-[#faf7f2] p-8 md:p-10 border border-[#c4dbb8]/50 relative group"
              data-animate
              data-delay="100"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#5a7a4a] group-hover:h-full transition-all duration-500" />
              <div className="mb-6">
                <span className="text-4xl">🐴</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-[var(--font-cormorant)] text-[#2c2416] mb-4 leading-tight">
                Pension &amp; Prestations
                <br />
                Équestres
              </h3>
              <p className="text-[#3d3020]/70 font-[var(--font-eb-garamond)] text-base leading-relaxed mb-6">
                Hébergement et services pour chevaux dans un cadre calme et
                verdoyant. Un environnement naturel exceptionnel pour le
                bien-être de vos équidés.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase text-[#5a7a4a] hover:gap-4 transition-all duration-300"
              >
                En savoir plus <span>→</span>
              </a>
            </div>

            {/* Service 2 — Cueillette */}
            <div
              className="bg-[#2c2416] p-8 md:p-10 relative group md:mt-8"
              data-animate
              data-delay="250"
            >
              <div className="absolute inset-0 bg-[#5a7a4a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-4xl">🍎</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-[var(--font-cormorant)] text-[#faf7f2] mb-4 leading-tight">
                  Cueillette
                  <br />
                  de Pommes
                </h3>
                <p className="text-[#c4a882]/80 font-[var(--font-eb-garamond)] text-base leading-relaxed mb-6">
                  Cueillette de pommes accessible sur le domaine, au fil des
                  saisons. Une expérience authentique en plein air pour petits
                  et grands.
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase text-[#a8c494] hover:gap-4 transition-all duration-300"
                >
                  En savoir plus <span>→</span>
                </a>
              </div>
            </div>

            {/* Service 3 — Foin */}
            <div
              className="bg-[#faf7f2] p-8 md:p-10 border border-[#c4dbb8]/50 relative group"
              data-animate
              data-delay="400"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#c4a882] group-hover:h-full transition-all duration-500" />
              <div className="mb-6">
                <span className="text-4xl">🌾</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-[var(--font-cormorant)] text-[#2c2416] mb-4 leading-tight">
                Vente
                <br />
                de Foin
              </h3>
              <p className="text-[#3d3020]/70 font-[var(--font-eb-garamond)] text-base leading-relaxed mb-6">
                Vente de foin directement à la ferme. Production locale et de
                qualité, disponible pour les propriétaires de chevaux de la
                région.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase text-[#5a7a4a] hover:gap-4 transition-all duration-300"
              >
                En savoir plus <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USPs ─── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-32">
            {/* Left: heading */}
            <div className="md:sticky md:top-24 self-start" data-animate="fade-left">
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a] mb-5">
                ✦ Pourquoi nous choisir
              </p>
              <h2 className="text-[clamp(2.5rem,4vw,3.8rem)] font-[var(--font-cormorant)] font-light text-[#2c2416] leading-tight mb-8">
                Un cadre unique,
                <br />
                une expérience
                <br />
                <em>authentique</em>
              </h2>
              <p className="text-[#3d3020]/70 font-[var(--font-eb-garamond)] text-base md:text-lg leading-relaxed max-w-sm">
                À seulement 15 minutes de Rambouillet, la Ferme de Louareux
                offre un refuge d&apos;exception pour vous et vos chevaux.
              </p>
              <div className="mt-8">
                <a
                  href="/a-propos"
                  className="inline-flex items-center gap-3 bg-[#5a7a4a] text-[#faf7f2] px-7 py-3.5 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase hover:bg-[#3d5533] transition-colors duration-300"
                >
                  Notre histoire →
                </a>
              </div>
            </div>

            {/* Right: USP list */}
            <div className="space-y-8">
              {[
                {
                  icon: "🏰",
                  title: "Cadre historique exceptionnel",
                  text: "Manoir du XIXème siècle avec douves, colombier et toiture traditionnelle en tuiles plates vernissées.",
                },
                {
                  icon: "🌿",
                  title: "Environnement naturel",
                  text: "Calme, verdoyant et préservé au cœur de la campagne — idéal pour le bien-être des équidés.",
                },
                {
                  icon: "📍",
                  title: "Proche de Rambouillet",
                  text: "Situé à seulement 15 minutes de Rambouillet (78), facilement accessible depuis la région parisienne.",
                },
                {
                  icon: "🤝",
                  title: "Accueil personnalisé",
                  text: "Ann & Christophe LEBOUCQ vous reçoivent avec soin et vous font vivre une expérience authentique à la ferme.",
                },
              ].map((usp, i) => (
                <div
                  key={i}
                  className="flex gap-5 group"
                  data-animate
                  data-delay={String(i * 100 + 100)}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#f0ebe0] group-hover:bg-[#5a7a4a]/10 transition-colors duration-300 text-xl">
                    {usp.icon}
                  </div>
                  <div>
                    <h4 className="font-[var(--font-cormorant)] text-xl text-[#2c2416] mb-1.5 group-hover:text-[#5a7a4a] transition-colors duration-300">
                      {usp.title}
                    </h4>
                    <p className="text-[#3d3020]/65 font-[var(--font-eb-garamond)] text-sm leading-relaxed">
                      {usp.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH QUOTE BAND ─── */}
      <section
        className="bg-[#3d5533] py-20 md:py-28 px-8 relative overflow-hidden"
        data-animate="scale"
      >
        {/* Decorative circles */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#5a7a4a] opacity-20" />
        <div className="absolute -right-16 top-1/4 w-56 h-56 rounded-full border border-[#5a7a4a] opacity-10" />
        <div className="absolute right-32 bottom-4 w-32 h-32 rounded-full border border-[#c4a882]/20" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#a8c494] text-5xl font-[var(--font-cormorant)]">
            &ldquo;
          </span>
          <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-[var(--font-cormorant)] font-light text-[#faf7f2] leading-tight mt-2 mb-4 italic">
            Pension équestre, cueillette de pommes et vente de foin — un même
            domaine, une vie à la ferme authentique.
          </p>
          <span className="text-[#a8c494] text-5xl font-[var(--font-cormorant)]">
            &rdquo;
          </span>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#a8c494]/40" />
            <span className="font-[var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#a8c494]">
              Ann &amp; Christophe LEBOUCQ
            </span>
            <div className="h-px w-12 bg-[#a8c494]/40" />
          </div>
        </div>
      </section>

      {/* ─── LOCATION / CTA ─── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#f0ebe0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Map placeholder / address block */}
            <div className="lg:col-span-2" data-animate="fade-left">
              <div className="bg-[#2c2416] p-8 md:p-10 text-[#faf7f2] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5a7a4a]/20 rounded-bl-full" />
                <p className="font-[var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#a8c494] mb-6">
                  Nous trouver
                </p>
                <h3 className="font-[var(--font-cormorant)] text-3xl mb-6 text-[#faf7f2] leading-tight">
                  Au cœur de la
                  <br />
                  Haute-Vallée de la Rémarde
                </h3>
                <div className="space-y-4 text-[#c4a882]/80 font-[var(--font-eb-garamond)]">
                  <p className="flex items-start gap-3">
                    <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0">
                      📍
                    </span>
                    45 Ferme de Louareux
                    <br />
                    78120 Sonchamp
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0">
                      📞
                    </span>
                    <a
                      href="tel:0687461538"
                      className="hover:text-[#a8c494] transition-colors"
                    >
                      06.87.46.15.38
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#5a7a4a] mt-0.5 flex-shrink-0">
                      🕓
                    </span>
                    À 15 minutes de Rambouillet
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-[#5a7a4a]/30">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-[var(--font-jost)] text-xs tracking-[0.2em] uppercase text-[#a8c494] hover:gap-4 transition-all duration-300"
                  >
                    Nous contacter <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: big CTA */}
            <div
              className="lg:col-span-3 space-y-8"
              data-animate="fade-right"
            >
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a]">
                ✦ Prendre contact
              </p>
              <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-[var(--font-cormorant)] font-light text-[#2c2416] leading-tight">
                Venez découvrir
                <br />
                la Ferme de Louareux
              </h2>
              <p className="text-[#3d3020]/70 font-[var(--font-eb-garamond)] text-base md:text-lg leading-relaxed max-w-lg">
                Que vous soyez propriétaire de chevaux cherchant une pension de
                qualité, ou simplement curieux de visiter ce lieu historique
                exceptionnel, nous vous accueillons chaleureusement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:0687461538"
                  className="inline-flex items-center justify-center gap-3 bg-[#5a7a4a] text-[#faf7f2] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#3d5533] transition-colors duration-300"
                >
                  📞 Appeler
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-[#2c2416]/30 text-[#2c2416] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#2c2416]/5 transition-colors duration-300"
                >
                  Message →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
