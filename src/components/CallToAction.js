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
    <section className="py-16 md:py-20 relative overflow-hidden bg-sable">
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ink/20 to-transparent"></div>

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
            className="bg-white p-6 md:p-8 rounded-sm border border-ink/10 shadow-xl text-center"
          >
            <h2 className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-ink font-semibold mb-4">
              Shooting ou événement
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[1px] bg-ink/30 mx-auto mb-5"
            ></motion.div>
            <p className="font-sans text-base md:text-lg text-ink/90 mb-3 leading-relaxed">
              Vous avez un projet personnel ou professionnel ?
            </p>
            <p className="font-sans text-sm md:text-base text-ink/75 mb-8 leading-relaxed">
              Je vous accompagne dans sa réalisation avec une approche sur
              mesure.
            </p>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-block bg-ink hover:bg-ink/80 text-white font-light px-6 py-2.5 md:px-8 md:py-3 rounded-full transition-all duration-300 text-xs md:text-sm tracking-wide"
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
