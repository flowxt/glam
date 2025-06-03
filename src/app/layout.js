import { Raleway } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css"; // Import du fichier de polices personnalisées
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.glambeauty-pro.fr"),
  title: {
    default:
      "GlamBeauty | Maquilleuse, Coiffeuse et Prothésiste Ongulaire Professionnelle à Saint-Égrève",
    template: "%s | GlamBeauty - Saint-Égrève",
  },
  description:
    "Services professionnels de maquillage, coiffure et prothèse ongulaire à Saint-Égrève (38120). Maquilleuse et coiffeuse experte pour mariages, événements spéciaux. Onglerie avec nail art, gainage, vernis semi-permanent. Réservation en ligne disponible.",
  keywords: [
    "maquilleuse professionnelle Saint-Égrève",
    "coiffeuse mariage Grenoble",
    "prothésiste ongulaire 38120",
    "maquillage mariage Isère",
    "coiffure mariée Saint-Égrève",
    "onglerie Grenoble",
    "nail art Saint-Égrève",
    "vernis semi-permanent",
    "gainage ongles",
    "manucure russe",
    "maquilleuse Grenoble",
    "beauté Saint-Égrève",
    "esthétique Isère",
    "GlamBeauty",
    "Jennifer maquilleuse",
    "maquillage professionnel",
    "coiffure événementiel",
  ],
  authors: [{ name: "Jennifer - GlamBeauty" }],
  creator: "GlamBeauty",
  publisher: "GlamBeauty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.glambeauty-pro.fr",
    siteName: "GlamBeauty",
    title:
      "GlamBeauty | Maquilleuse, Coiffeuse et Prothésiste Ongulaire à Saint-Égrève",
    description:
      "Services professionnels de maquillage, coiffure et prothèse ongulaire à Saint-Égrève. Maquilleuse experte pour mariages et événements. Onglerie avec nail art et soins des ongles.",
    images: [
      {
        url: "/photo/maquillage-pro4.jpeg",
        width: 1200,
        height: 630,
        alt: "GlamBeauty - Maquilleuse et Coiffeuse Professionnelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlamBeauty | Maquilleuse, Coiffeuse et Prothésiste Ongulaire",
    description:
      "Services professionnels de beauté à Saint-Égrève. Maquillage, coiffure, onglerie pour tous vos événements.",
    images: ["/photo/maquillage-pro4.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://www.glambeauty-pro.fr",
  },
  verification: {
    // Ajoutez vos codes de vérification Google, Bing, etc. quand vous les aurez
    // google: 'votre-code-google',
    // bing: 'votre-code-bing',
  },
  category: "Beauty & Personal Care",
  classification: "Business",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "GlamBeauty",
              description:
                "Services professionnels de maquillage, coiffure et prothèse ongulaire à Saint-Égrève",
              url: "https://www.glambeauty-pro.fr",
              telephone: "+33", // Ajoutez le vrai numéro quand vous l'aurez
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saint-Égrève", // Ajoutez l'adresse complète
                addressLocality: "Saint-Égrève",
                postalCode: "38120",
                addressRegion: "Isère",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.2317", // Coordonnées approximatives de Saint-Égrève
                longitude: "5.6847",
              },
              openingHours: [
                "Mo-Sa 09:00-19:00", // Ajustez selon vos vraies heures
              ],
              priceRange: "€€",
              image: "https://www.glambeauty-pro.fr/photo/maquillage-pro4.jpeg",
              sameAs: [
                "https://www.planity.com/glambeauty-prothesiste-ongulaire-maquilleuse-38120-saint-egreve",
              ],
              serviceType: [
                "Maquillage professionnel",
                "Coiffure",
                "Prothèse ongulaire",
                "Nail art",
                "Maquillage mariage",
              ],
              founder: {
                "@type": "Person",
                name: "Jennifer",
                jobTitle: "Maquilleuse et Coiffeuse Professionnelle",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
