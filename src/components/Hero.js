"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/90"></div>
      <div className="absolute inset-0 bg-[url('/photo/preparation-mariage8.jpeg')] bg-cover bg-top md:bg-center opacity-40 grayscale"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-10 text-center relative z-10 pt-16 md:pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider"
            >
              GLAM BEAUTY
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                className="h-1 bg-white mx-auto mt-10"
                style={{ originX: 0.5 }}
              ></motion.div>
            </motion.div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light tracking-wider mt-8 leading-relaxed">
              Maquilleuse & Coiffeuse Professionnelle
            </div>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-14 text-gray-300">
            Sublimez votre beauté pour vos moments les plus précieux
          </p>
          <div className="flex flex-row gap-4 md:gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-lg text-sm md:text-base inline-block"
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
                className="bg-transparent border border-white text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base inline-block"
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
            <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
            <p className="text-gray-300 text-sm md:text-base">
              Années d&apos;expérience
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
            <p className="text-gray-300 text-sm md:text-base">
              Satisfaction client
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p className="text-gray-300 text-sm md:text-base">
              Clientes satisfaites
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
