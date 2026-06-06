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

      <div className="container mx-auto py-16 md:py-20 px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
          {/* Liens utiles */}
          <div>
            <h3 className="text-lg md:text-xl font-normal tracking-[0.12em] uppercase mb-8 text-white">
              Liens utiles
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/onglerie"
                  className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors"
                >
                  Onglerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-normal tracking-[0.12em] uppercase mb-8 text-white">
              Contact
            </h3>
            <div className="space-y-5">
              <a
                href="mailto:glambeautypro38@gmail.com"
                className="flex items-center group"
              >
                <svg
                  className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0"
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
                <span className="text-sm font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  glambeautypro38@gmail.com
                </span>
              </a>
              <a href="tel:+33685914825" className="flex items-center group">
                <svg
                  className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0"
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
                <span className="text-sm font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  06.85.91.48.25
                </span>
              </a>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0"
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
                <span className="text-sm font-light tracking-wide text-gray-400">
                  38120 Saint-Égrève
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0"
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
                <span className="text-sm font-light tracking-wide text-gray-400">
                  Lun-Ven : 9h - 19h
                </span>
              </div>
              <a
                href="https://www.instagram.com/glam_beauty_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <svg
                  className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0"
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
                <span className="text-sm font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  @glam_beauty_pro
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="h-px w-full max-w-4xl mx-auto bg-gray-800 my-12" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs font-light tracking-wide text-gray-500">
            © {currentYear} GlamBeauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
