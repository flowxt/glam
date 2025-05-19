"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  // Détecter le scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Identifier la page active
    const setActivePath = () => {
      const path = window.location.pathname;
      setActiveItem(path);
    };

    setActivePath();
    window.addEventListener("scroll", handleScroll);

    // Mettre à jour la page active lors des changements de route
    window.addEventListener("popstate", setActivePath);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", setActivePath);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Accueil", href: "/" },
    { name: "Galerie", href: "/galerie" },
    { name: "Onglerie", href: "/onglerie" },
    { name: "Contact", href: "/contact" },
  ];

  // Animations pour les liens du menu
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Barre de navigation élégante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          w-full mx-auto 
          ${
            scrolled
              ? "py-3 bg-black/60 backdrop-blur-md shadow-md shadow-black/10"
              : "py-4 bg-black backdrop-blur-sm"
          }
          transition-all duration-300 border-b border-white/10
        `}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo avec effet de brillance */}
            <Link href="/" className="group">
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 flex items-center"
                >
                  <div className="relative w-28 h-12 flex items-center py-1">
                    <Image
                      src="/logos/logo-sans-fond.png"
                      alt="GlamBeauty Logo"
                      width={180}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur-sm bg-gradient-radial from-white/20 to-transparent transition-all duration-700 ease-out"></div>
              </div>
            </Link>

            {/* Menu desktop - élégant et minimaliste */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 overflow-hidden group`}
                  >
                    <span
                      className={`relative z-10 ${
                        activeItem === item.href
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Effet de surlignage élégant */}
                    {activeItem === item.href && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 via-white/80 to-white/40"
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Effet de survol subtil */}
                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
              ))}

              {/* Bouton Réserver avec effet de brillance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="ml-3"
              >
                <Link
                  href="/contact"
                  className="relative px-6 py-2 bg-white text-black rounded-sm text-sm font-medium overflow-hidden group"
                >
                  <span className="relative z-10">Réserver</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </div>

            {/* Bouton menu mobile - élégant et minimal */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="md:hidden relative focus:outline-none group"
              onClick={toggleMenu}
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <div className="relative w-6 flex flex-col items-center justify-center gap-1.5">
                  <span
                    className={`block h-[1.5px] bg-white transition-all duration-300 ease-out ${
                      isOpen ? "w-5 translate-y-[3px] rotate-45" : "w-6"
                    }`}
                  ></span>
                  <span
                    className={`block h-[1.5px] bg-white transition-all duration-300 ease-out ${
                      isOpen ? "opacity-0" : "w-4 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-[1.5px] bg-white transition-all duration-300 ease-out ${
                      isOpen ? "w-5 -translate-y-[3px] -rotate-45" : "w-5"
                    }`}
                  ></span>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Menu mobile avec animation fluide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <div className="py-4 space-y-0.5">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 ${
                        activeItem === item.href
                          ? "text-white bg-white/5 border-l-2 border-white/80"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      } transition-colors duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 pb-2 px-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Réserver maintenant
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
