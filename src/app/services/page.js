import ServicesClient from "@/components/ServicesClient";

export const metadata = {
  title: "Services - Maquillage et Coiffure Mariée, Shooting, Événements | GlamBeauty",
  description:
    "Découvrez les services GlamBeauty : mise en beauté mariée (Collections Essentielle, Signature, Privilège), proches et invités, ateliers d'auto-maquillage, séances photo, face painting, shootings éditoriaux et événements professionnels à Grenoble et en Rhône-Alpes.",
  keywords: [
    "maquilleuse mariée Grenoble",
    "coiffeuse mariage Rhône-Alpes",
    "mise en beauté mariée Saint-Égrève",
    "forfait mariage maquillage coiffure",
    "atelier auto-maquillage Grenoble",
    "maquillage séance photo grossesse",
    "face painting anniversaire enfant",
    "maquilleuse professionnelle shooting",
    "maquillage corporate Grenoble",
    "maquilleuse événement entreprise Isère",
    "bridal artist Grenoble",
    "maquillage éditorial Rhône-Alpes",
  ],
  openGraph: {
    title: "Services GlamBeauty - Mariées, Particuliers et Professionnels",
    description:
      "Mise en beauté mariée sur mesure, ateliers d'auto-maquillage, séances photo, face painting et prestations professionnelles à Grenoble et en Rhône-Alpes.",
    images: [
      {
        url: "/photo/mariée.jpeg",
        width: 1200,
        height: 630,
        alt: "Services de maquillage et coiffure GlamBeauty",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services GlamBeauty - Mariées, Particuliers et Professionnels",
    description:
      "Mise en beauté mariée sur mesure, ateliers d'auto-maquillage, séances photo et prestations professionnelles à Grenoble.",
    images: ["/photo/mariée.jpeg"],
  },
  alternates: {
    canonical: "https://www.glambeauty-pro.fr/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
