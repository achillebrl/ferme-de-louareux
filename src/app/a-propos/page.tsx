import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "À propos | Ferme de Louareux",
  description:
    "Découvrez l'histoire du manoir de Louareux, transformé en ferme au XIXème siècle. Ann & Christophe LEBOUCQ vous accueillent au cœur de la campagne de Sonchamp, à 15 minutes de Rambouillet.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <Navigation activePage="À propos" />

      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-40 pb-24 px-8 md:px-16 lg:px-24 bg-[#2c2416] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/about.jpg"
            alt="Le manoir de Louareux"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c2416]/60 to-[#2c2416]" />
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5a7a4a] to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#a8c494] mb-5">
            ✦ Notre histoire
          </p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-[var(--font-cormorant)] font-light text-[#faf7f2] leading-[0.95] mb-6">
            À propos de la<br />
            <span style={{ color: "#a8c494" }}>Ferme de Louareux</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#5a7a4a]" />
            <span className="text-[#c4a882] text-sm font-[var(--font-jost)] tracking-[0.2em] uppercase">
              Sonchamp, Yvelines
            </span>
          </div>
        </div>
      </section>

      {/* ─── HISTORY SECTION ─── */}
      <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/assets/about.jpg"
                alt="Le manoir historique de Louareux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
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

          {/* Text */}
          <div className="space-y-8 pt-8 lg:pt-0">
            <div>
              <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a] mb-4">
                ✦ Un lieu chargé d&apos;histoire
              </p>
              <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-[var(--font-cormorant)] font-light text-[#2c2416] leading-tight mb-6">
                Un manoir transformé<br />en ferme vivante
              </h2>
            </div>

            <div className="space-y-5 text-[#3d3020]/80 text-base md:text-lg leading-relaxed font-[var(--font-eb-garamond)]">
              <p>
                Le manoir de Louareux est transformé en ferme au XIXème siècle.
                Des traces des douves qui l&apos;entouraient restent visibles,
                témoignant de son passé seigneurial et de l&apos;histoire
                profonde de ce lieu d&apos;exception.
              </p>
              <p>
                La seule tour conservée avait été transformée en colombier. La
                toiture, couverte en tuiles plates en écailles, est couronnée
                d&apos;un épi de faîtage en terre cuite vernissée — un détail
                architectural rare et précieux, héritage vivant d&apos;un
                artisanat disparu.
              </p>
              <p>
                Aujourd&apos;hui, Ann &amp; Christophe LEBOUCQ perpétuent la
                tradition agricole de ce domaine en proposant des pensions
                équestres, la vente de foin et la cueillette de pommes. Un lieu
                où passé et présent coexistent harmonieusement, au cœur de la
                campagne de l&apos;Yvelines.
              </p>
            </div>

            <div className="pt-2">
              <div className="h-px bg-gradient-to-r from-[#5a7a4a]/40 to-transparent mb-6" />
              <p className="text-[#2c2416]/90 text-lg md:text-xl font-[var(--font-cormorant)] italic leading-relaxed">
                &ldquo;Un lieu où la nature, le cheval et l&apos;histoire se
                rencontrent — loin de l&apos;agitation, proche de
                l&apos;essentiel.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OWNERS SECTION ─── */}
      <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 bg-[#f0ebe0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#5a7a4a] mb-4">
              ✦ Vos hôtes
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-[var(--font-cormorant)] font-light text-[#2c2416]">
              Ann &amp; Christophe LEBOUCQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🐴",
                title: "Passion équestre",
                text: "Passionnés par les chevaux et leur bien-être, ils mettent tout en œuvre pour offrir un cadre idéal à vos équidés.",
              },
              {
                icon: "🌿",
                title: "Amour de la nature",
                text: "Le domaine de 20 hectares est géré avec soin pour préserver son caractère naturel et sa biodiversité.",
              },
              {
                icon: "🤝",
                title: "Accueil chaleureux",
                text: "Vous êtes reçus comme des amis — avec disponibilité, bienveillance et le souci du détail qui fait la différence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#faf7f2] p-8 border border-[#c4dbb8]/50 text-center"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-[var(--font-cormorant)] text-xl text-[#2c2416] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#3d3020]/70 font-[var(--font-eb-garamond)] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FACTS ─── */}
      <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "XIXème", label: "Siècle de fondation" },
              { value: "20 ha", label: "De pâtures et prairies" },
              { value: "15 min", label: "De Rambouillet" },
              { value: "3", label: "Services proposés" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="font-[var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#5a7a4a]">
                  {stat.value}
                </p>
                <div className="h-px w-8 bg-[#5a7a4a]/30 mx-auto" />
                <p className="font-[var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[#3d3020]/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="bg-[#3d5533] py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#5a7a4a] opacity-20 pointer-events-none" />
        <div className="absolute -right-16 top-1/4 w-56 h-56 rounded-full border border-[#5a7a4a] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <p className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase text-[#a8c494]">
            ✦ Venez nous rendre visite
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[var(--font-cormorant)] font-light text-[#faf7f2] leading-tight">
            Découvrez la Ferme de Louareux
          </h2>
          <p className="text-[#c4dbb8]/80 font-[var(--font-eb-garamond)] text-base md:text-lg leading-relaxed">
            45 Ferme de Louareux — 78120 Sonchamp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="tel:0687461538"
              className="inline-flex items-center justify-center gap-3 bg-[#5a7a4a] text-[#faf7f2] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#4a6840] transition-colors duration-300"
            >
              📞 06.87.46.15.38
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-[#a8c494]/60 text-[#e8e0d0] px-8 py-4 font-[var(--font-jost)] text-sm tracking-[0.15em] uppercase hover:bg-[#faf7f2]/10 transition-colors duration-300"
            >
              Nous écrire →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
