import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Ferme de Louareux",
  description: "Pension et prestations équestres dans un cadre calme, verdoyant et historique, au cœur de la campagne, à 15 minutes de R",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation activePage="contact" />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
<div className="min-h-screen bg-[var(--color-parchment)]">

  <section
    data-animate="fade-in"
    className="relative py-20 px-6 text-center bg-[var(--color-cream)] border-b border-[var(--color-mist)]"
  >
    <p className="font-sans text-sm uppercase tracking-widest text-[var(--color-forest)] mb-3">Ferme de Louareux</p>
    <h1 className="font-display text-5xl md:text-6xl text-[var(--color-bark)] mb-4">Contact</h1>
    <div className="w-16 h-px bg-[var(--color-earth-light)] mx-auto"></div>
  </section>

  <section
    data-animate="slide-up"
    className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
  >

    <div className="space-y-10">
      <div>
        <h2 className="font-display text-3xl text-[var(--color-forest-dark)] mb-6">Nous joindre</h2>

        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-cream-dark)] text-[var(--color-forest)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-1">Email</p>
              <a href="mailto:fermedelouareux@gmail.com" className="font-serif text-[var(--color-bark)] hover:text-[var(--color-forest)] transition-colors">fermedelouareux@gmail.com</a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-cream-dark)] text-[var(--color-forest)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-1">Téléphone</p>
              <a href="tel:0687461538" className="font-serif text-[var(--color-bark)] hover:text-[var(--color-forest)] transition-colors">06.87.46.15.38</a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-cream-dark)] text-[var(--color-forest)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-1">Adresse</p>
              <p className="font-serif text-[var(--color-bark)]">45 Ferme de Louareux<br />78120 Sonchamp</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-6">
        <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-forest)] mb-3">Accès</p>
        <p className="font-serif text-[var(--color-bark)] leading-relaxed text-sm">
          La ferme de Louareux est située à <strong>10 min de Rambouillet</strong>, entre Sonchamp et Clairefontaine — 25 min de Dourdan, 45 min de Versailles, 1h de Paris et de Dreux. À 10 min des autoroutes A10 et A28.
        </p>
      </div>
    </div>

    <div data-animate="fade-in" className="bg-[var(--color-cream)] border border-[var(--color-mist)] rounded-sm p-8">
      <h2 className="font-display text-3xl text-[var(--color-forest-dark)] mb-6">Nous écrire</h2>
      <form className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-2">Nom</label>
            <input type="text" className="w-full bg-[var(--color-parchment)] border border-[var(--color-mist)] rounded-sm px-4 py-2 font-serif text-[var(--color-bark)] focus:outline-none focus:border-[var(--color-forest)] transition-colors" />
          </div>
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-2">Prénom</label>
            <input type="text" className="w-full bg-[var(--color-parchment)] border border-[var(--color-mist)] rounded-sm px-4 py-2 font-serif text-[var(--color-bark)] focus:outline-none focus:border-[var(--color-forest)] transition-colors" />
          </div>
        </div>
        <div>
          <label className="block font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-2">Email</label>
          <input type="email" className="w-full bg-[var(--color-parchment)] border border-[var(--color-mist)] rounded-sm px-4 py-2 font-serif text-[var(--color-bark)] focus:outline-none focus:border-[var(--color-forest)] transition-colors" />
        </div>
        <div>
          <label className="block font-sans text-xs uppercase tracking-widest text-[var(--color-earth)] mb-2">Message</label>
          <textarea rows={5} className="w-full bg-[var(--color-parchment)] border border-[var(--color-mist)] rounded-sm px-4 py-2 font-serif text-[var(--color-bark)] focus:outline-none focus:border-[var(--color-forest)] transition-colors resize-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-[var(--color-forest)] hover:bg-[var(--color-forest-dark)] text-[var(--color-cream)] font-sans text-sm uppercase tracking-widest py-3 rounded-sm transition-colors">
          Envoyer
        </button>
      </form>
    </div>

  </section>

</div>
      </section>
      <Footer />
    </main>
  );
}
