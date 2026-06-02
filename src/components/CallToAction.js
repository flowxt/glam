"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 md:p-8 rounded-sm border border-white/10 shadow-xl text-center"
          >
            <h2 className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-black font-semibold mb-4">
              Shooting ou événement
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[1px] bg-black/30 mx-auto mb-5"
            ></motion.div>
            <p className="font-sans text-base md:text-lg text-black/90 mb-3 leading-relaxed">
              Vous avez un projet personnel ou professionnel ?
            </p>
            <p className="font-sans text-sm md:text-base text-black/75 mb-8 leading-relaxed">
              Je vous accompagne dans sa réalisation avec une approche sur
              mesure.
            </p>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-block bg-black hover:bg-black/80 text-white font-light px-8 py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base tracking-widest uppercase"
              >
                Soumettre ma demande
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
