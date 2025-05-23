"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300">
      {/* Effet de fond décoratif subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Séparateur élégant */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="container mx-auto py-16 px-6 md:px-10 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo et information */}
          <div className="lg:w-1/3 flex flex-col">
            <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
              Expertise en mise en beauté pour mariages et événements spéciaux.
              Maquilleuse, coiffeuse et prothésiste ongulaire professionnelle à
              votre service pour sublimer votre beauté.
            </p>

            {/* Bouton Planity */}
            <div>
              <Link
                href="https://www.planity.com/glambeauty-prothesiste-ongulaire-maquilleuse-38120-saint-egreve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-200 rounded-lg text-black text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Réserver sur Planity
              </Link>
            </div>
          </div>

          {/* Navigation et Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-2/3">
            {/* Services */}
            <div>
              <h3 className="text-lg font-medium mb-5 text-white border-b border-gray-800 pb-2">
                Nos Services
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-400 hover:text-white transition-colors">
                  Maquillage mariage
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-colors">
                  Coiffure événementielle
                </li>
                <li className="text-sm text-gray-400 hover:text-white transition-colors">
                  Onglerie professionnelle
                </li>

                <li className="text-sm text-gray-400 hover:text-white transition-colors">
                  Forfaits mariées
                </li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="text-lg font-medium mb-5 text-white border-b border-gray-800 pb-2">
                Liens utiles
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galerie"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/onglerie"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Onglerie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-medium mb-5 text-white border-b border-gray-800 pb-2">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">
                    glambeautypro38@gmail.com
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">06.85.91.48.25</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">
                    42 rue saint Robert, 38120 Saint-Egrève
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">
                    Lun-Ven: 9h-19h00
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <a
                    href="https://www.instagram.com/glam_beauty_38?igsh=NzJvNXVqZGpuczgy&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    @glam_beauty_38
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="h-px w-full bg-gray-800 my-10" />

        {/* Copyright et certifications */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {currentYear} GlamBeauty. Tous droits réservés.
          </p>

          <div className="flex space-x-8">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              <span className="text-xs text-gray-400">Produits de qualité</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              <span className="text-xs text-gray-400">Service 5 étoiles</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
