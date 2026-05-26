"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    <section className="py-24 bg-gradient-to-b from-black via-black to-black/95 text-white overflow-hidden relative">
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
              className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-white"
            >
              PRÉSENTATION
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
          >
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-sm bg-white/5 border border-white/20">
              <Image
                src="/photo/jennifer1.jpeg"
                alt="Jennifer - Maquilleuse et Coiffeuse professionnelle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Filigrane subtil */}
              <div className="absolute bottom-3 right-3 bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 font-light tracking-wide pointer-events-none">
                © GlamBeauty
              </div>
            </div>

            {/* Encadré texte fond blanc, écriture noire */}
            <div className="bg-white p-8 rounded-sm border border-white/10 h-full flex flex-col justify-center shadow-xl">
              <div className="space-y-5 text-black/85 leading-relaxed">
                <p>
                  Derrière Glam Beauty, il y a bien plus qu&apos;une mise en
                  beauté.
                  <br />
                  Il y a une vision, une exigence, une signature.
                </p>

                <p>
                  Bridal Artist spécialisée dans l&apos;univers du mariage,
                  j&apos;accompagne chaque mariée à travers une approche
                  profondément personnalisée, pensée pour révéler une présence,
                  une allure, une émotion.
                </p>

                <p>
                  Experte en maquillage et coiffure professionnelle, je crée des
                  mises en beauté où chaque détail trouve naturellement sa place
                  — en harmonie avec votre personnalité, votre robe, votre
                  énergie et l&apos;atmosphère de cette journée unique.
                </p>

                <p>
                  Chaque rendez-vous est conçu comme une expérience intime, haut
                  de gamme et sur-mesure.
                  <br />
                  Un moment suspendu, guidé par l&apos;écoute, la précision, la
                  douceur et l&apos;exigence du détail.
                </p>

                <p>
                  Mon rôle : vous accompagner avec sensibilité pour que, le jour
                  de votre mariage, vous vous sentiez pleinement vous-même —
                  sublimée, naturelle et pleinement assumée.
                </p>

                <p className="text-xl text-black font-light italic tracking-wide pt-2">
                  « Le détail fait l&apos;exception. »
                </p>

                <p className="text-2xl text-black font-light italic tracking-wide pt-2">
                  — Jennifer
                  <br />
                  <span className="text-base text-black/60 not-italic tracking-widest">
                    Glam Beauty
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Boutons d'appel à l'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            {/* Bouton premium - Demande privée */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <Link
                href="/contact"
                className="relative inline-flex items-center bg-white text-black font-light px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 shadow-xl text-sm md:text-base tracking-widest uppercase border border-white/20"
              >
                <span className="mr-2 text-amber-500">✦</span>
                Demande privée
                <span className="ml-2 text-amber-500">✦</span>
              </Link>
            </motion.div>

            {/* Bouton secondaire - Explorer l'univers */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/galerie"
                className="inline-block bg-transparent border border-white/40 hover:border-white text-white font-light px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 text-sm md:text-base tracking-widest uppercase hover:bg-white/5"
              >
                Explorer l&apos;univers
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Séparateur inférieur - délimitation avec WeddingStory */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
