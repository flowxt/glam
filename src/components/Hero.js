"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black"></div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-10 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="mb-8 md:mb-12">
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                GlamBeauty
              </span>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              Maquilleuse & Coiffeuse Professionnelle
            </div>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-14 text-gray-300">
            Sublimez votre beauté pour vos moments les plus précieux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
              >
                Réserver maintenant
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link
                href="/galerie"
                className="bg-transparent border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Voir la galerie
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 md:mt-24 flex justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              3+
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Années d&apos;expérience
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              100%
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Satisfaction client
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              500+
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Clientes satisfaites
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
