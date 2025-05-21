"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AppleCardsDemo } from "@/components/AppleCardsDemo";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// Composant de galerie modale pour afficher les images en plein écran
const ImageModal = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  // Pour fermer la modale avec la touche Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Empêcher le défilement du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          {/* Conteneur de l'image avec les boutons de navigation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton précédent */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white transition-all hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
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
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Image actuelle */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={`/photo/onglerie/${images[currentIndex]}`}
                  alt={`Réalisation onglerie ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            </div>

            {/* Bouton suivant */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white transition-all hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
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
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Bouton fermer */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white transition-all hover:bg-white/20"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Indicateur de position */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext(idx);
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Onglerie() {
  // State pour la galerie modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images de la galerie
  const galleryImages = [
    "ongles5.jpeg",
    "ongles6.jpeg",
    "ongles7.jpeg",
    "ongles8.jpeg",
    "ongles9.jpeg",
    "ongles10.jpeg",
    "ongles12.jpeg",
    "ongles13.jpeg",
    "ongles14.jpeg",
    "ongles15.jpeg",
    "ongles16.jpeg",
    "ongles17.jpeg",
    "ongles18.jpeg",
  ];

  // Gérer la navigation dans la modale
  const handleOpenModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (index) => {
    if (typeof index === "number") {
      setCurrentImageIndex(index);
      return;
    }
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Animation hooks pour chaque section
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [section1Ref, section1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [section2Ref, section2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [section3Ref, section3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation des éléments qui apparaissent
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Services design Apple-style
  const serviceCards = [
    {
      id: 1,
      title: "Vernis Semi-Permanent",
      description:
        "Un vernis longue durée pour une finition parfaite jusqu'à 3 semaines",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-pink-500/90 to-purple-600/90",
    },
    {
      id: 2,
      title: "Pose Gel",
      description:
        "Extension et renforcement avec une finition naturelle et durable",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-blue-500/90 to-indigo-600/90",
    },
    {
      id: 3,
      title: "Nail Art",
      description:
        "Designs personnalisés pour sublimer vos ongles avec créativité",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-purple-500/90 to-pink-600/90",
    },
  ];

  // Liste des services d'onglerie détaillés
  const services = [
    {
      title: "Pose complète gel",
      description:
        "Extension d&apos;ongles avec gel UV pour plus de longueur et de solidité.",
      features: [
        "Préparation des ongles",
        "Pose de capsules",
        "Application du gel",
        "Limage et façonnage",
        "Finition soignée",
      ],
      color: "purple",
    },
    {
      title: "Remplissage",
      description: "Entretien de votre pose de gel existante.",
      features: [
        "Nettoyage de la repousse",
        "Application de gel",
        "Correction de forme si nécessaire",
        "Finition soignée",
      ],
      color: "pink",
    },
    {
      title: "Vernis semi-permanent",
      description:
        "Pose de vernis longue durée qui tient jusqu&apos;à 3 semaines.",
      features: [
        "Préparation des ongles",
        "Application du vernis",
        "Séchage sous lampe UV",
        "Couche de finition",
      ],
      color: "blue",
    },
    {
      title: "Nail Art",
      description: "Décorations artistiques pour sublimer vos ongles.",
      features: [
        "Motifs personnalisés",
        "Strass et paillettes",
        "Effets marbrés",
        "Designs tendance",
      ],
      color: "purple",
    },
  ];

  const getGradient = (color) => {
    switch (color) {
      case "purple":
        return "from-purple-600 to-indigo-600";
      case "pink":
        return "from-pink-500 to-rose-500";
      case "blue":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-purple-600 to-indigo-600";
    }
  };

  const tarifsBase = [
    { service: "Forfait mains + pieds + couleur", prix: "75€" },
    { service: "Rallongement Poppit", prix: "65€" },
    { service: "Gainage sur ongles naturels", prix: "45€" },
    { service: "Remplissage", prix: "45€" },
    { service: "Beauté des pieds russe + semi-permanent", prix: "40€" },
    { service: "Manucure russe seule", prix: "30€" },
    { service: "Dépose seule", prix: "25€" },
  ];

  const tarifsNailArt = [
    {
      niveau: "Décorations Niveau 1",
      prix: "0,5€",
      details:
        "French, baby-boomer, lignes fines, feuilles d&apos;or, effet sucre, cat eyes",
    },
    {
      niveau: "Décorations Niveau 2",
      prix: "1€",
      details:
        "Superposition de deux motifs, foils, effet chrome, effet pull, stickers, cutiglitter, effet léopard, zèbres, camaïeu 4 ou 5 couleurs",
    },
    {
      niveau: "Décorations Niveau 3",
      prix: "1,50€",
      details: "Bijoux, dessins 3D, superposition de 3 motifs",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Composant Modale pour afficher les images en plein écran */}
      <ImageModal
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Hero Section - Reprise du style du Hero principal */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center py-24 md:py-0">
        {/* Séparateur supérieur */}
        <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/80"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/photo/onglerie/ongles10.jpeg"
            alt="Fond onglerie"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 grayscale"
          />
        </div>

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
                ONGLERIE
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                  className="h-1 bg-white mx-auto mt-10"
                  style={{ originX: 0.5 }}
                ></motion.div>
              </motion.div>
              <div className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light tracking-wider mt-8 leading-relaxed">
                Prothésiste ongulaire certifiée
              </div>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-14 text-gray-300">
              Mettez en valeur vos mains avec des prestations sur-mesure et
              durables
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
                <a
                  href="#tarifs"
                  className="bg-transparent border border-white text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base inline-block"
                >
                  Voir les tarifs
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Séparateur inférieur */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </section>

      {/* Présentation */}
      <section className="py-24 bg-gradient-to-b from-black via-black/90 to-black text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-10">
          {/* En-tête de la section */}
          <div ref={titleRef} className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-wider mb-6"
            >
              L&apos;ART DE L&apos;ONGLERIE
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-white mx-auto"
            ></motion.div>
          </div>

          {/* Section 1 - Présentation */}
          <motion.div
            ref={section1Ref}
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-32"
          >
            <div className="order-2 md:order-1 bg-white/5 p-8 rounded-sm border border-white/20 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-3xl font-light tracking-wide mb-3">
                  Une passion pour vos mains
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={section1InView ? { width: "120px" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-[1px] bg-white mb-6"
                ></motion.div>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Prothésiste ongulaire certifiée depuis 2023, je mets mon
                  savoir-faire à votre service pour sublimer vos mains et vos
                  pieds. Ma philosophie : allier esthétique et durabilité pour
                  des ongles parfaits qui vous accompagnent au quotidien.
                </p>
                <p>
                  Passionnée par l&apos;art et le design, je m&apos;inspire des
                  dernières tendances tout en restant à l&apos;écoute de vos
                  envies. Chaque prestation est personnalisée pour refléter
                  votre style et votre personnalité.
                </p>
                <p>
                  Précision, minutie et attention aux détails sont les
                  maîtres-mots de mon travail. J&apos;utilise des produits de
                  qualité professionnelle pour garantir un résultat impeccable
                  et une tenue optimale.
                </p>
                <p>
                  Du simple gainage à la pose la plus artistique, je vous
                  accompagne dans le choix de la prestation idéale pour vos
                  mains, adaptée à votre mode de vie et à vos besoins.
                </p>
              </div>
            </div>
            <motion.div
              className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm order-1 md:order-2 border border-white/20"
              variants={fadeInUp}
            >
              <Image
                src="/photo/onglerie/jennifer-ongle.jpeg"
                alt="Prothésiste ongulaire professionnelle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Section 2 - Gallerie */}
          <motion.div
            ref={section2Ref}
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-32"
          >
            <div className="mb-16 text-center">
              <h3 className="text-3xl font-light tracking-wide mb-3">
                Créations & Réalisations
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section2InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-white mx-auto mb-6"
              ></motion.div>
              <p className="max-w-3xl mx-auto text-white/80">
                Découvrez un aperçu de mes réalisations, alliant technique et
                créativité. Cliquez sur les images pour les voir en détail.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    section2InView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden border border-white/20 rounded-sm cursor-pointer group"
                  onClick={() => handleOpenModal(index)}
                >
                  <Image
                    src={`/photo/onglerie/${img}`}
                    alt={`Réalisation onglerie ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3 - Tarifs */}
          <motion.div
            id="tarifs"
            ref={section3Ref}
            initial="hidden"
            animate={section3InView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light tracking-wide mb-3">
                PRESTATIONS
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section3InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-white mx-auto mb-6"
              ></motion.div>
              <h4 className="text-2xl md:text-4xl font-light text-white/80 tracking-widest font-[Cormorant_Garamond,serif]">
                Onglerie
              </h4>
            </div>

            {/* Image de fond avec paillettes */}

            {/* Tarifs de base */}
            <div className="bg-gradient-to-r from-gray-900/60 via-black/40 to-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-gray-500/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {tarifsBase.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        section3InView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex justify-between items-center border-b border-white/10 pb-4"
                    >
                      <span className="text-xl font-light text-white">
                        {item.service}
                      </span>
                      <span className="text-2xl font-light text-white">
                        {item.prix}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Note importante sur les ongles rongés */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-8 pt-6 border-t border-white/20"
                >
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white/90 text-center">
                      <span className="text-white font-medium">Important</span>{" "}
                      : Les prestations d&apos;onglerie ne sont pas disponibles
                      pour les ongles rongés.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Titre décorations */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light tracking-wide mb-3">
                DÉCORATIONS
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section3InView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[1px] bg-white mx-auto mb-6"
              ></motion.div>
            </div>

            {/* Tarifs nail art */}
            <div className="bg-gradient-to-r from-gray-900/60 via-black/40 to-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-gray-500/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-10">
                  {tarifsNailArt.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        section3InView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-light text-white">
                          {item.niveau}
                        </span>
                        <span className="text-2xl font-light text-white">
                          {item.prix}
                        </span>
                      </div>
                      <p className="text-white/70 italic text-sm">
                        {item.details}
                      </p>
                      {index < tarifsNailArt.length - 1 && (
                        <div className="h-[1px] w-full bg-white/10 mt-8"></div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 text-center">
                  <p className="text-white/80 italic">
                    Toutes les prestations comprennent la manucure russe.
                  </p>
                  <p className="text-white/80 italic mt-2">
                    Nail art, décorations à partir de 0,5€ à 2€
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center max-w-2xl mx-auto px-4"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Prête à sublimer vos mains ?
          </h3>
          <div className="h-[1px] w-20 bg-white/40 mx-auto mb-8"></div>
          <p className="text-white/80 mb-8">
            Prenez rendez-vous dès aujourd&apos;hui pour une prestation
            d&apos;onglerie sur-mesure qui mettra en valeur vos mains.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center px-12 py-4 overflow-hidden text-lg bg-gradient-to-r from-gray-100 to-white text-black font-medium rounded-full group hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <span className="absolute left-0 w-full h-0 transition-all bg-gradient-to-r from-gray-200 to-white opacity-20 group-hover:h-full top-0 duration-300"></span>
              <span className="relative flex items-center">
                Réserver ma séance
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Séparateur inférieur */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>
    </div>
  );
}
