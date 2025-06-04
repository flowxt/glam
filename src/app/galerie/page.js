import GalerieClient from "@/components/GalerieClient";

export const metadata = {
  title: "Galerie - Portfolio Maquillage et Coiffure Professionnelle",
  description:
    "Découvrez le portfolio de Jennifer, maquilleuse et coiffeuse professionnelle. Galerie photos de maquillages mariages, shootings, nail art et créations artistiques à Saint-Égrève et Grenoble.",
  keywords: [
    "galerie maquillage mariage",
    "portfolio coiffure Saint-Égrève",
    "photos maquillage professionnel Grenoble",
    "réalisations maquilleuse Rhône-Alpes",
    "galerie coiffure mariée",
    "portfolio Jennifer maquilleuse",
    "photos avant-après maquillage",
    "créations artistiques maquillage",
  ],
  openGraph: {
    title: "Galerie GlamBeauty - Portfolio Maquillage et Coiffure",
    description:
      "Explorez les créations de Jennifer : maquillages de mariées, coiffures élégantes, nail art et maquillages artistiques. Portfolio professionnel à Saint-Égrève.",
    url: "https://www.glambeauty-pro.fr/galerie",
  },
  alternates: {
    canonical: "https://www.glambeauty-pro.fr/galerie",
  },
};

export default function Galerie() {
  return <GalerieClient />;
}
