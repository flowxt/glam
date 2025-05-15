"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
      className={`fixed top-4 left-0 right-0 z-50 w-[95%] md:w-[90%] max-w-7xl mx-auto px-6 md:px-10 rounded-2xl ${
        scrolled
          ? "py-4 md:py-5 bg-black/30 backdrop-blur-xl shadow-lg shadow-purple-900/20"
          : "py-6 md:py-7 bg-black/20 backdrop-blur-md"
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
              {/* Espace réservé pour le futur logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 mr-3 flex items-center justify-center">
                <span className="text-white/80 text-xs">Logo</span>
              </div>

              <div>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                  GlamBeauty
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500/50 to-purple-500/50 rounded-full"
                />
              </div>
            </div>
          </motion.div>
          <div className="absolute -inset-1 rounded-lg blur-md group-hover:blur-xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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
                className={`relative px-5 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeItem === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {activeItem === item.href && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20"
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
              className="ml-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium hover:from-pink-600 hover:to-purple-600 shadow-lg shadow-purple-900/20 transition-all duration-300"
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
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20">
            <svg
              className="w-5 h-5 text-white"
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

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-black/95 to-purple-950/95 backdrop-blur-md mt-3 rounded-xl overflow-hidden shadow-xl border border-gray-800/30"
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
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white"
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
                  className="block text-center py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-medium shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  Réserver maintenant
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
