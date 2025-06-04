import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact - Réservation Maquilleuse et Coiffeuse Professionnelle",
  description:
    "Contactez Jennifer, maquilleuse et coiffeuse professionnelle à Saint-Égrève. Réservation en ligne pour maquillage mariage, coiffure, onglerie. Déplacement Grenoble et Rhône-Alpes.",
  keywords: [
    "contact maquilleuse Saint-Égrève",
    "réservation maquillage mariage Grenoble",
    "contact coiffeuse Rhône-Alpes",
    "rendez-vous onglerie Saint-Égrève",
    "maquilleuse Grenoble contact",
    "Jennifer maquilleuse téléphone",
    "glambeautypro38@gmail.com",
    "06.85.91.48.25",
  ],
  openGraph: {
    title: "Contact GlamBeauty - Maquilleuse et Coiffeuse Professionnelle",
    description:
      "Prenez rendez-vous avec Jennifer, votre maquilleuse et coiffeuse professionnelle à Saint-Égrève. Services pour mariages, événements et onglerie.",
    url: "https://www.glambeauty-pro.fr/contact",
  },
  alternates: {
    canonical: "https://www.glambeauty-pro.fr/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
