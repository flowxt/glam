"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">À PROPOS...</h2>
          <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg border border-gray-800">
            <p className="text-gray-300 mb-4">
              Coiffeuse et maquilleuse professionnelle diplômée, avec plusieurs
              années d&apos;expérience à mon actif, je peux aujourd&apos;hui
              vous proposer un service de qualité et une prestation
              personnalisée à votre profil. Je mobilise mes compétences, ma
              passion et mon œil artistique pour mettre en valeur votre beauté
              naturelle.
            </p>
            <p className="text-gray-300 mb-4">
              Mon expertise et mon perfectionnisme garantissent un résultat
              remarquable pour chaque occasion…
            </p>
            <p className="text-gray-300">
              Je propose également des maquillages enfants, arbre de Noël, mais
              aussi des shooting photo, spectacles ….
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
