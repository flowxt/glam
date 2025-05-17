"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-95j0">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            À PROPOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/photo/jennifer1.jpeg"
                  alt="Jennifer - Maquilleuse et Coiffeuse professionnelle"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 space-y-4">
                <p className="text-gray-300">
                  Coiffeuse et maquilleuse professionnelle diplômée depuis 2010,
                  je propose un service de qualité et des prestations
                  personnalisées. J&apos;utilise mes compétences, ma passion et
                  mon oeil artistique pour mettre en valeur votre beauté
                  naturelle.
                </p>

                <p className="text-gray-300">
                  Vous pouvez compter sur mon expérience pour une mise en beauté
                  glamour, bohème ou sophistiquée selon vos préférences. Je suis
                  capable de réaliser des coiffures élégantes et raffinées,
                  offrant un résultat remarquable.
                </p>

                <p className="text-gray-300">
                  En matière de maquillage, j&apos;écoute vos souhaits tout en
                  vous conseillant pour une mise en beauté parfaite, en harmonie
                  avec votre morphologie, la couleur de votre peau et votre
                  tenue.
                </p>

                <p className="text-gray-300">
                  Je mets un point d&apos;honneur à magnifier les mariées et les
                  invitées avec soin et précision, en accord avec leurs goûts.
                </p>

                <p className="text-gray-300">
                  N&apos;hésitez pas à me contacter pour plus
                  d&apos;informations ou demandes particulières.
                </p>

                <p className="text-xl text-white font-medium text-right italic">
                  Jennifer
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
