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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className={`fixed top-2 left-0 right-0 z-50 w-[95%] md:w-[90%] max-w-7xl mx-auto px-6 md:px-8 rounded-full ${
          scrolled
            ? "py-2 md:py-3 bg-black/50 backdrop-blur-xl shadow-lg shadow-black/20"
            : "py-3 md:py-4 bg-black/30 backdrop-blur-md"
        } transition-all duration-300 border border-gray-800/20`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center">
                {/* Logo */}
                <div className="relative w-20 h-9 md:w-28 md:h-9 flex items-center justify-center">
                  <Image
                    src="/logos/logo-sans-fond.png"
                    alt="GlamBeauty Logo"
                    width={180}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            <div className="absolute -inset-1 rounded-lg blur-md group-hover:blur-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block"></div>
          </Link>

          {/* Menu pour desktop */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeItem === item.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeItem === item.href && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="ml-2 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 shadow-lg shadow-white/10 transition-all duration-300"
              >
                Réserver
              </Link>
            </motion.div>
          </div>

          {/* Bouton menu mobile */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden relative z-20 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Menu mobile - Séparé de la navbar pour éviter l'effet de blur */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-[calc(2rem+3rem)] left-0 right-0 z-40 w-[95%] md:w-[90%] max-w-7xl mx-auto px-0">
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-gray-800/30"
            >
              <div className="flex flex-col space-y-1 py-4 px-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg ${
                        activeItem === item.href
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5"
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
                  className="pt-3"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center py-3 bg-white text-black rounded-lg font-medium shadow-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    Réserver maintenant
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
