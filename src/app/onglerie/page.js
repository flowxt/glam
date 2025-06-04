import OnglerieClient from "@/components/OnglerieClient";

export const metadata = {
  title: "Onglerie et Prothèse Ongulaire à Saint-Égrève | GlamBeauty",
  description:
    "Prothésiste ongulaire certifiée à Saint-Égrève (38120). Pose gel, gainage, nail art, manucure russe, pédicure spa. Découvrez nos prestations d'onglerie professionnelles avec des produits de qualité. Réservation en ligne.",
  keywords: [
    "prothésiste ongulaire Saint-Égrève",
    "onglerie Grenoble",
    "pose gel ongles 38120",
    "nail art Saint-Égrève",
    "manucure russe Isère",
    "gainage ongles naturels",
    "rallongement ongles Grenoble",
    "pédicure russe Saint-Égrève",
    "vernis semi-permanent 38120",
    "remplissage ongles Grenoble",
    "beauté des pieds Saint-Égrève",
    "décorations ongles Isère",
    "soins ongles professionnels",
    "onglerie près Grenoble",
    "prothèse ongulaire Rhône-Alpes",
  ],
  openGraph: {
    title: "Onglerie et Prothèse Ongulaire à Saint-Égrève | GlamBeauty",
    description:
      "Prothésiste ongulaire certifiée. Pose gel, gainage, nail art, manucure russe. Prestations professionnelles à Saint-Égrève avec des produits de qualité.",
    images: [
      {
        url: "/photo/onglerie/ongles10.jpeg",
        width: 1200,
        height: 630,
        alt: "Prothésiste ongulaire professionnelle GlamBeauty Saint-Égrève",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onglerie et Prothèse Ongulaire à Saint-Égrève | GlamBeauty",
    description:
      "Prothésiste ongulaire certifiée. Pose gel, gainage, nail art, manucure russe à Saint-Égrève.",
    images: ["/photo/onglerie/ongles10.jpeg"],
  },
  alternates: {
    canonical: "https://www.glambeauty-pro.fr/onglerie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OnglerieePage() {
  return <OnglerieClient />;
}
