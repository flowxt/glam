"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10">
      <div className="container mx-auto py-10 px-6 md:px-10">
        {/* Navigation - 1ère ligne */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-[0.15em] uppercase">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/galerie" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="/mentions-legales"
            className="hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
        </nav>

        {/* Contact - 2nde ligne */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <a
            href="tel:+33685914825"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>📞</span>
            <span>06.85.91.48.25</span>
          </a>
          <a
            href="mailto:glambeautypro38@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>✉️</span>
            <span>glambeautypro38@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/glam_beauty_pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>📸</span>
            <span>@glam_beauty_pro</span>
          </a>
        </div>

        {/* Bas de footer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-[11px] text-gray-600 text-center">
          <span>📍 Saint-Égrève (38120) · 🕘 Lun – Ven : 9h – 19h</span>
          <span>© {currentYear} GlamBeauty. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
