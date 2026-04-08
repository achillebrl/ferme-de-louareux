import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ferme de Louareux — Pension Équestre & Campagne",
  description:
    "Pension et prestations équestres dans un cadre calme, verdoyant et historique, au cœur de la campagne, à 15 minutes de Rambouillet. Ann & Christophe LEBOUCQ vous accueillent au manoir de Louareux.",
  keywords: "pension équestre, Rambouillet, Sonchamp, chevaux, cueillette pommes, foin, manoir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${ebGaramond.variable} ${jost.variable}`}>
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}