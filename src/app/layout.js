import { Raleway } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css"; // Import du fichier de polices personnalisées
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GlamBeauty | Maquilleuse et Coiffeuse Professionnelle",
  description:
    "Services professionnels de maquillage et coiffure pour mariages, ainsi que prothèse ongulaire par Jennifer depuis 2021.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${raleway.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
