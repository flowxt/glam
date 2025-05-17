"use client";
import { useState, useRef, useContext, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Context pour le carousel
const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

// Hook pour détecter les clics à l'extérieur
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// Composant d'image sans effet de flou
const PackageImage = ({ src, alt, className, ...props }) => {
  return (
    <div className="absolute inset-0 z-10">
      <Image
        src={src}
        alt={alt || "Image forfait mariage"}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
};

// Composant Card simplifié
const PackageCard = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-black p-4 font-sans md:p-10 border border-gray-800"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-800"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-white" />
              </button>
              <motion.p className="text-base font-medium text-white">
                {card.category}
              </motion.p>
              <motion.p className="mt-4 text-2xl font-semibold text-white md:text-5xl">
                {card.title}
              </motion.p>
              <div className="py-10">
                <div className="bg-neutral-800 p-6 md:p-10 rounded-2xl mb-4">
                  <div className="space-y-3 mb-6 max-w-md mx-auto">
                    {card.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-gray-300"
                      >
                        <span>{item.name}</span>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  {card.note && (
                    <p className="text-sm text-center text-gray-400 mt-4">
                      {card.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-between overflow-hidden rounded-3xl md:h-96 md:w-72 bg-gradient-to-b from-gray-800 to-black border border-gray-700 p-8 transition-all duration-300 hover:border-white"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        <div className="relative z-20">
          <motion.p className="text-left font-sans text-sm font-medium text-gray-400 md:text-base">
            {card.category}
          </motion.p>
          <motion.p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <div className="relative z-20 self-end">
          <span className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-medium">
            Sur devis
          </span>
        </div>
      </motion.button>
    </>
  );
};

// Import du useEffect
import { useEffect } from "react";

export default function WeddingPackages() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
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

  // Section hooks pour animations basées sur le scroll
  const [titreRef, titreInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [marieesRef, marieesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [invitesRef, invitesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [essaisRef, essaisInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [notesRef, notesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Forfaits pour les invitées
  const guestPackages = [
    {
      category: "Forfait Invitées",
      title: "PACK SAPHIR",
      items: [
        { name: "Maquillage & coiffure", price: "100€" },
        { name: "Maquillage", price: "60€" },
        { name: "Coiffure", price: "50€" },
      ],
      note: "*FAUX CILS INCLUS POUR CHAQUE PRESTATION",
    },
  ];

  // Forfaits pour les mariées
  const bridePackages = [
    {
      category: "Forfait Mariées",
      title: "PACK ARGENT",
      items: [
        { name: "Essai coiffure", price: "Sur devis" },
        { name: "Coiffure Jour J", price: "Sur devis" },
      ],
      note: null,
    },
    {
      category: "Forfait Mariées",
      title: "PACK GOLD",
      items: [
        { name: "Essai maquillage", price: "Sur devis" },
        { name: "Maquillage Jour J", price: "Sur devis" },
      ],
      note: "UN KIT DE RETOUCHE OFFERT",
    },
    {
      category: "Forfait Mariées",
      title: "PACK DIAMANT",
      items: [
        { name: "Essai maquillage & coiffure", price: "Sur devis" },
        { name: "Maquillage & coiffure Jour J", price: "Sur devis" },
      ],
      note: "UN KIT DE RETOUCHE OFFERT",
    },
    {
      category: "Forfait Mariées",
      title: "PACK PLATINE",
      items: [
        { name: "Essai maquillage & coiffure", price: "Sur devis" },
        { name: "Maquillage & coiffure Jour J", price: "Sur devis" },
        { name: "Onglerie complète", price: "Sur devis" },
      ],
      note: "UN KIT DE RETOUCHE OFFERT",
    },
  ];

  // Création des éléments de carte
  const guestCards = guestPackages.map((pack, index) => (
    <PackageCard key={pack.title} card={pack} index={index} />
  ));

  const brideCards = bridePackages.map((pack, index) => (
    <PackageCard key={pack.title} card={pack} index={index} />
  ));

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Arrière-plan stylisé */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/photo/preparation-mariage8.jpeg')] bg-cover bg-center grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* Effet de particules dorées (optionnel) */}
      <div className="absolute top-[25%] right-[15%] w-64 h-64 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[35%] left-[10%] w-40 h-40 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Titre principal */}
        <motion.div
          ref={titreRef}
          variants={containerVariants}
          initial="hidden"
          animate={titreInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-7xl font-light mb-2"
          >
            PRESTATIONS
          </motion.h2>
          <motion.h3
            variants={titleVariants}
            className="text-2xl md:text-3xl font-light text-white/80"
          >
            Mariage
          </motion.h3>
        </motion.div>

        {/* Section MARIÉES */}
        <motion.div
          ref={marieesRef}
          variants={containerVariants}
          initial="hidden"
          animate={marieesInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={titleVariants}
            className="text-3xl md:text-5xl font-light mb-8 md:mb-12"
          >
            MARIÉES
          </motion.h3>

          <motion.div
            variants={sectionVariants}
            className="border border-white/30 rounded-lg p-8 backdrop-blur-sm bg-black/30"
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center gap-3 md:w-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Formule argent</span>
                </div>
                <div className="text-white/80 ml-5 md:ml-0">
                  Essai coiffure et jour-j
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center gap-3 md:w-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Formule gold</span>
                </div>
                <div className="text-white/80 ml-5 md:ml-0">
                  Essai maquillage et jour-j
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center gap-3 md:w-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Formule diamant</span>
                </div>
                <div className="text-white/80 ml-5 md:ml-0">
                  Essai maquillage + coiffure et jour-j
                </div>
              </div>

              <div className="text-sm text-white/60 text-right pt-2">
                (Possibilité de rajouter une prestation onglerie)
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section INVITÉS */}
        <motion.div
          ref={invitesRef}
          variants={containerVariants}
          initial="hidden"
          animate={invitesInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={titleVariants}
            className="text-3xl md:text-5xl font-light mb-8 md:mb-12"
          >
            INVITÉS
          </motion.h3>

          <motion.div
            variants={sectionVariants}
            className="border border-white/30 rounded-lg p-8 backdrop-blur-sm bg-black/30"
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Formule Saphir</span>
                </div>
                <div className="text-white/80 ml-5 md:ml-0">
                  Maquillage + coiffure
                </div>
                <div className="text-xl md:text-2xl font-light ml-auto">
                  110€
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Maquillage</span>
                </div>
                <div className="text-xl md:text-2xl font-light ml-auto">
                  60€
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Coiffure</span>
                </div>
                <div className="text-xl md:text-2xl font-light ml-auto">
                  60€
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section ESSAIS */}
        <motion.div
          ref={essaisRef}
          variants={containerVariants}
          initial="hidden"
          animate={essaisInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={titleVariants}
            className="text-3xl md:text-5xl font-light mb-8 md:mb-12"
          >
            ESSAIS
          </motion.h3>

          <motion.div
            variants={sectionVariants}
            className="border border-white/30 rounded-lg p-8 backdrop-blur-sm bg-black/30"
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Coiffure</span>
                </div>
                <div className="text-xl md:text-2xl font-light ml-auto">
                  70€
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl font-light">Maquillage</span>
                </div>
                <div className="text-xl md:text-2xl font-light ml-auto">
                  80€
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Notes */}
        <motion.div
          ref={notesRef}
          variants={containerVariants}
          initial="hidden"
          animate={notesInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p variants={sectionVariants} className="text-white/80 mb-3">
            Location d&apos;extension de cheveux possible
          </motion.p>
          <motion.p variants={sectionVariants} className="text-white/80 mb-3">
            Les faux cils sont inclus pour chaque prestation
          </motion.p>
          <motion.p variants={sectionVariants} className="text-white/80">
            Les indispensables mariée sont offerts pour les packs gold/diamant
          </motion.p>
        </motion.div>

        {/* Élément décoratif en bas */}
        <div className="mt-24 border-t border-white/20 w-full h-1"></div>
      </div>
    </section>
  );
}
