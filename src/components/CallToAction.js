"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CallToAction() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Suivi de la position de la souris pour créer un effet interactif
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Animation du blob en fonction de la position de la souris
  const variants = {
    default: {
      x: mousePosition.x - 250,
      y: mousePosition.y - 650,
      transition: {
        type: "spring",
        mass: 2,
        stiffness: 30,
        damping: 20,
      },
    },
  };

  // Animations pour les éléments du CTA
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Arrière-plan décoratif avec effet de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      {/* Blob interactif qui suit la souris */}
      <motion.div
        className="hidden md:block absolute -z-10 top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent blur-[100px]"
        variants={variants}
        animate="default"
      />

      {/* Lignes décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/20 to-transparent absolute top-[20%]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent absolute top-[60%]"></div>
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-pink-500/20 to-transparent absolute left-[20%]"></div>
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent absolute left-[80%]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-900/60 via-purple-950/40 to-gray-900/60 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-3xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <motion.div className="text-center" variants={itemVariants}>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-sm font-medium text-pink-300 mb-4 backdrop-blur-md border border-pink-500/20">
                Prête pour un moment de beauté ?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
                Sublimez votre beauté
              </h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Experte en mise en beauté mariée depuis 2021 et prothésiste
                ongulaire depuis 2023, je combine talent artistique et
                perfection technique pour révéler votre beauté naturelle.
              </motion.p>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8">
                <motion.div
                  className="flex items-center p-3 gap-3 bg-gradient-to-r from-pink-900/10 to-purple-900/10 rounded-xl backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">Rendez-vous rapides</span>
                </motion.div>

                <motion.div
                  className="flex items-center p-3 gap-3 bg-gradient-to-r from-pink-900/10 to-purple-900/10 rounded-xl backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">Satisfaction garantie</span>
                </motion.div>

                <motion.div
                  className="flex items-center p-3 gap-3 bg-gradient-to-r from-pink-900/10 to-purple-900/10 rounded-xl backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">Tarifs adaptés</span>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="relative z-20 mt-10"
              >
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative inline-block"
                >
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-purple-700/80 opacity-0 group-hover:opacity-100 duration-300 z-10"></span>
                    <span className="relative z-20">Prendre rendez-vous</span>
                    <svg
                      className="w-6 h-6 ml-2 relative z-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
