"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  // Animation hooks pour chaque section
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-black to-white/5 text-white overflow-hidden relative">
      {/* Séparateur supérieur - délimitation avec Hero */}
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Titre principal avec trait animé */}
          <div ref={titleRef} className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-wider mb-6"
            >
              À PROPOS
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-white mx-auto"
            ></motion.div>
          </div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm bg-white/5 border border-white/20">
              <Image
                src="/photo/jennifer1.jpeg"
                alt="Jennifer - Maquilleuse et Coiffeuse professionnelle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/20">
              <div className="space-y-5 text-white/90 leading-relaxed">
                <p>
                  Coiffeuse et maquilleuse professionnelle diplômée depuis 2010,
                  je propose un service de qualité et des prestations
                  personnalisées. J&apos;utilise mes compétences, ma passion et
                  mon oeil artistique pour mettre en valeur votre beauté
                  naturelle.
                </p>

                <p>
                  Vous pouvez compter sur mon expérience pour une mise en beauté
                  glamour, bohème ou sophistiquée selon vos préférences. Je suis
                  capable de réaliser des coiffures élégantes et raffinées,
                  offrant un résultat remarquable.
                </p>

                <p>
                  En matière de maquillage, j&apos;écoute vos souhaits tout en
                  vous conseillant pour une mise en beauté parfaite, en harmonie
                  avec votre morphologie, la couleur de votre peau et votre
                  tenue.
                </p>

                <p>
                  Je mets un point d&apos;honneur à magnifier les mariées et les
                  invitées avec soin et précision, en accord avec leurs goûts.
                </p>

                <p>
                  N&apos;hésitez pas à me contacter pour plus
                  d&apos;informations ou demandes particulières.
                </p>

                <p className="text-2xl text-white font-light italic tracking-wide pt-4">
                  Jennifer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Séparateur inférieur - délimitation avec WeddingStory */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
