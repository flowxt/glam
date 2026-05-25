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
    <section className="py-24 bg-white text-black overflow-hidden relative">
      {/* Séparateur supérieur - délimitation avec Hero */}
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>

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
              className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-black"
            >
              PRÉSENTATION
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-black mx-auto"
            ></motion.div>
          </div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
          >
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-sm bg-black/5 border border-black/10">
              <Image
                src="/photo/jennifer1.jpeg"
                alt="Jennifer - Maquilleuse et Coiffeuse professionnelle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Filigrane subtil */}
              <div className="absolute bottom-3 right-3 bg-white/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-black/70 font-light tracking-wide pointer-events-none">
                © GlamBeauty
              </div>
            </div>

            <div className="bg-black/[0.02] p-8 rounded-sm border border-black/10 h-full flex flex-col justify-center">
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
                  <span className="text-base text-black/70 not-italic tracking-widest">
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
                className="relative inline-flex items-center bg-black text-white font-light px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 shadow-xl text-sm md:text-base tracking-widest uppercase border border-black"
              >
                <span className="mr-2 text-amber-300">✦</span>
                Demande privée
                <span className="ml-2 text-amber-300">✦</span>
              </Link>
            </motion.div>

            {/* Bouton secondaire - Explorer l'univers */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/galerie"
                className="inline-block bg-transparent border border-black/40 hover:border-black text-black font-light px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 text-sm md:text-base tracking-widest uppercase hover:bg-black/5"
              >
                Explorer l&apos;univers
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Séparateur inférieur - délimitation avec WeddingStory */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
    </section>
  );
}
