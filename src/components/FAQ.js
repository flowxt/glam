"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Animation hook pour le titre
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Questions fréquentes
  const faqItems = [
    {
      question: "Le déplacement est-il compris dans la prestation ?",
      answer:
        "Le déplacement est inclus dans un rayon de 30km autour de Grenoble. Au-delà, des frais kilométriques peuvent s'appliquer selon la distance. Je me déplace avec plaisir dans toute la région Rhône-Alpes pour vous accompagner dans vos moments précieux.",
    },
    {
      question: "Vous déplacez-vous le jour J ?",
      answer:
        "Absolument, je me déplace toujours le jour de votre mariage. Je viens directement sur votre lieu de préparation avec tout mon matériel professionnel pour vous offrir une expérience sereine et sans stress. Je m'adapte à votre planning et veille à respecter le timing de votre journée.",
    },
    {
      question: "Où se déroulent les essais ?",
      answer:
        "Les essais se déroulent à votre domicile pour plus de confort et d'intimité. Cette approche vous permet de vous préparer dans votre environnement familier, d'éviter les déplacements et de profiter pleinement de ce moment d'échange et de création de votre mise en beauté idéale.",
    },
    {
      question: "Quelles sont vos qualifications ?",
      answer:
        "Je suis titulaire d'un diplôme de maquilleuse professionnelle, d'un diplôme de coiffure et d'une certification de prothésiste ongulaire. Je me forme régulièrement aux nouvelles techniques et tendances pour vous offrir un service d'excellence et personnalisé, adapté à chaque occasion et à votre style unique.",
    },
    {
      question:
        "Pourquoi n'y a-t-il pas de prix fixes pour les packs mariées ?",
      answer:
        "Chaque mariage est unique, tout comme chaque mariée. Je propose des devis personnalisés pour m'adapter précisément à vos besoins spécifiques. Cela me permet de prendre en compte la complexité des prestations souhaitées, le nombre de personnes à maquiller/coiffer, vos attentes esthétiques particulières et les éventuels déplacements. Cette approche sur-mesure garantit une tarification juste et transparente.",
    },
  ];

  // Gestion de l'ouverture/fermeture des questions
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      {/* Séparateur supérieur */}
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

      {/* Lignes décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-[20%]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent absolute top-[60%]"></div>
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent absolute left-[20%]"></div>
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500/20 to-transparent absolute left-[80%]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Titre avec trait animé */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white"
          >
            QUESTIONS FRÉQUENTES
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-gradient-to-r from-white/20 via-white/80 to-white/20 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/80 text-lg"
          >
            Retrouvez les réponses aux questions les plus fréquentes concernant
            mes prestations
          </motion.p>
        </div>

        {/* Questions et réponses */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <motion.button
                onClick={() => toggleQuestion(index)}
                className={`w-full p-6 flex items-center justify-between text-left rounded-xl border ${
                  openIndex === index
                    ? "bg-gradient-to-r from-gray-900/60 via-black/40 to-gray-900/60 border-gray-500/50"
                    : "bg-gradient-to-r from-gray-900/30 via-black/20 to-gray-900/30 border-gray-800/30 hover:border-gray-500/30"
                } backdrop-blur-sm transition-all duration-300`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-xl font-light text-white">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 flex items-center justify-center text-white/80"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gradient-to-r from-gray-900/40 to-black/40 backdrop-blur-sm rounded-b-xl border-b border-x border-gray-800/30">
                      <p className="text-white/80 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Séparateur inférieur */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
