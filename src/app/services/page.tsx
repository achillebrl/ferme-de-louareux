import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Ferme de Louareux",
  description: "Pension et prestations équestres dans un cadre calme, verdoyant et historique, au cœur de la campagne, à 15 minutes de R",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation activePage="services" />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
<div className="min-h-screen bg-[var(--color-parchment)]">

  {/* Hero Section */}
  <section
    data-animate="fade-in"
    className="relative bg-[var(--color-forest-dark)] py-20 px-6 text-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-[var(--color-bark)] opacity-30" />
    <div className="relative z-10 max-w-3xl mx-auto">
      <p className="font-sans text-[var(--color-earth-light)] uppercase tracking-widest text-sm mb-4">
        Ferme de Louareux
      </p>
      <h1 className="font-display text-5xl md:text-6xl text-[var(--color-cream)] leading-tight mb-6">
        Nos Services
      </h1>
      <div className="w-16 h-px bg-[var(--color-earth-light)] mx-auto" />
    </div>
  </section>

  {/* Pension Équestre */}
  <section data-animate="slide-up" className="py-20 px-6 max-w-5xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="font-display text-4xl text-[var(--color-forest-dark)] mb-4">
        Pension & Prestations Équestres
      </h2>
      <p className="font-serif text-lg text-[var(--color-earth)] max-w-2xl mx-auto">
        Hébergement et services pour chevaux dans un cadre calme et verdoyant. 20 hectares de pâtures, boxes rénovés en 2015, et une équipe compétente à votre service.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {/* Card 1 */}
      <div className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-8 flex flex-col">
        <h3 className="font-display text-2xl text-[var(--color-forest-dark)] mb-3">Pension Pré Stabulation</h3>
        <ul className="font-sans text-sm text-[var(--color-earth)] space-y-2 mb-6 flex-grow list-disc list-inside">
          <li>Au pré à l'année</li>
          <li>Rentré la nuit en stabulation l'hiver</li>
          <li>Foin à volonté</li>
          <li>Hors soins vétérinaires</li>
        </ul>
        <p className="font-display text-3xl text-[var(--color-forest)]">350€<span className="text-base text-[var(--color-earth)] font-sans">/mois</span></p>
      </div>

      {/* Card 2 */}
      <div className="bg-[var(--color-cream)] border border-[var(--color-forest-light)] rounded-sm p-8 flex flex-col shadow-md">
        <h3 className="font-display text-2xl text-[var(--color-forest-dark)] mb-3">Pension Boxe Paddock</h3>
        <ul className="font-sans text-sm text-[var(--color-earth)] space-y-2 mb-6 flex-grow list-disc list-inside">
          <li>Sur paille ou copeaux</li>
          <li>Sortie quotidienne paddock individuel</li>
          <li>2 repas de céréales / jour</li>
          <li>Foin à volonté</li>
        </ul>
        <p className="font-display text-3xl text-[var(--color-forest)]">550€<span className="text-base text-[var(--color-earth)] font-sans">/mois</span></p>
      </div>

      {/* Card 3 */}
      <div className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-8 flex flex-col">
        <h3 className="font-display text-2xl text-[var(--color-forest-dark)] mb-3">Pension Soins & Convalescence</h3>
        <ul className="font-sans text-sm text-[var(--color-earth)] space-y-2 mb-6 flex-grow list-disc list-inside">
          <li>Sur paille ou copeaux</li>
          <li>Foin à volonté</li>
          <li>Suivi personnalisé</li>
          <li>Devis vétérinaire sur demande</li>
        </ul>
        <p className="font-display text-3xl text-[var(--color-forest)]">20€<span className="text-base text-[var(--color-earth)] font-sans">/jour</span></p>
      </div>
    </div>

    {/* Infrastructures */}
    <div className="bg-[var(--color-cream-dark)] rounded-sm p-8 text-center">
      <h3 className="font-display text-2xl text-[var(--color-forest-dark)] mb-4">Infrastructures</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-sans text-sm text-[var(--color-earth)]">
        {["Rond de longe 20×30m","Carrière 50×70m","Manège 41×24m","Boxes 4×4","Douche & aire de pansage","Paddocks individuels"].map((item) => (
          <div key={item} className="flex items-center gap-2 justify-center">
            <span className="w-2 h-2 rounded-full bg-[var(--color-forest-light)] flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Divider */}
  <div className="w-full h-px bg-[var(--color-mist)] max-w-5xl mx-auto" />

  {/* Cueillette de pommes */}
  <section data-animate="slide-up" className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="font-sans text-[var(--color-forest-light)] uppercase tracking-widest text-xs mb-3">Saison</p>
      <h2 className="font-display text-4xl text-[var(--color-forest-dark)] mb-4">Cueillette de Pommes</h2>
      <p className="font-serif text-lg text-[var(--color-earth)] leading-relaxed">
        Profitez de notre domaine pour cueillir des pommes fraîches en pleine nature. Une expérience authentique et familiale au cœur de la campagne de Sonchamp.
      </p>
    </div>
    <div className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-8 text-center">
      <span className="text-5xl mb-4 block">🍎</span>
      <p className="font-sans text-sm text-[var(--color-earth)] uppercase tracking-widest">Accessible sur le domaine</p>
      <p className="font-serif text-[var(--color-forest-dark)] mt-3">Renseignez-vous pour les disponibilités saisonnières.</p>
    </div>
  </section>

  {/* Divider */}
  <div className="w-full h-px bg-[var(--color-mist)] max-w-5xl mx-auto" />

  {/* Vente de foin */}
  <section data-animate="slide-up" className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-8 text-center md:order-last">
      <span className="text-5xl mb-4 block">🌾</span>
      <p className="font-sans text-sm text-[var(--color-earth)] uppercase tracking-widest">Vente directe à la ferme</p>
      <p className="font-serif text-[var(--color-forest-dark)] mt-3">Contactez-nous pour connaître nos tarifs et disponibilités.</p>
    </div>
    <div>
      <p className="font-sans text-[var(--color-forest-light)] uppercase tracking-widest text-xs mb-3">Circuit court</p>
      <h2 className="font-display text-4xl text-[var(--color-forest-dark)] mb-4">Vente de Foin</h2>
      <p className="font-serif text-lg text-[var(--color-earth)] leading-relaxed">
        Nous proposons du foin de qualité, vendu directement à la ferme. Un approvisionnement local et naturel pour vos animaux, sans intermédiaire.
      </p>
    </div>
  </section>

  {/* CTA Contact */}
  <section data-animate="fade-in" className="bg-[var(--color-forest-dark)] py-16 px-6 text-center mt-8">
    <h2 className="font-display text-4xl text-[var(--color-cream)] mb-4">Une question ? Contactez-nous</h2>
    <p className="font-serif text-[var(--color-earth-light)] mb-8 text-lg">45 Ferme de Louareux — 78120 Sonchamp</p>
    <a
      href="tel:0687461538"
      className="inline-block font-sans text-sm uppercase tracking-widest bg-[var(--color-earth)] text-[var(--color-cream)] px-10 py-4 hover:bg-[var(--color-earth-light)] transition-colors duration-300"
    >
      06 87 46 15 38
    </a>
  </section>

</div>
      </section>
      <Footer />
    </main>
  );
}
