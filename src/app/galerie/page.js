"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
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

export default function Galerie() {
  // State pour la galerie modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (index) => {
    if (typeof index === "number") {
      setCurrentImageIndex(index);
      return;
    }
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // Catégories pour le filtrage
  const categories = [
    "Tous",
    "Mariages",
    "Maquillages artistiques",
    "Coiffures",
  ];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [isLoading, setIsLoading] = useState(true);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Définition des images avec leurs catégories
  const galleryImages = [
    // Mariages
    {
      id: 1,
      src: "/photo/mariage.jpeg",
      alt: "Mariée en préparation",
      category: "Mariages",
    },
    {
      id: 2,
      src: "/photo/mariage-5.jpeg",
      alt: "Préparation mariage",
      category: "Mariages",
    },
    {
      id: 3,
      src: "/photo/mariage-BW.jpeg",
      alt: "Mariage en noir et blanc",
      category: "Mariages",
    },
    {
      id: 4,
      src: "/photo/mariage-avec-homme.jpeg",
      alt: "Couple de mariés",
      category: "Mariages",
    },
    {
      id: 5,
      src: "/photo/mariée.jpeg",
      alt: "Portrait de mariée",
      category: "Mariages",
    },
    {
      id: 6,
      src: "/photo/mariée1.jpeg",
      alt: "Mariée élégante",
      category: "Mariages",
    },
    {
      id: 7,
      src: "/photo/mariée4.jpeg",
      alt: "Mariée en robe blanche",
      category: "Mariages",
    },
    {
      id: 8,
      src: "/photo/mariés.jpeg",
      alt: "Couple de mariés heureux",
      category: "Mariages",
    },
    {
      id: 9,
      src: "/photo/mariés1.jpeg",
      alt: "Couple après cérémonie",
      category: "Mariages",
    },
    {
      id: 10,
      src: "/photo/mariés2.jpeg",
      alt: "Mariage élégant",
      category: "Mariages",
    },
    {
      id: 11,
      src: "/photo/photo-mariage.jpeg",
      alt: "Photo de mariage",
      category: "Mariages",
    },
    {
      id: 12,
      src: "/photo/preparation-mariage.jpeg",
      alt: "Préparatifs de mariage",
      category: "Mariages",
    },
    {
      id: 13,
      src: "/photo/preparation-mariage2.jpeg",
      alt: "Mariée en préparation",
      category: "Mariages",
    },
    {
      id: 14,
      src: "/photo/preparation-mariage6.jpeg",
      alt: "Préparation de la mariée",
      category: "Mariages",
    },
    {
      id: 15,
      src: "/photo/preparation-mariage7.jpeg",
      alt: "Maquillage de mariée",
      category: "Mariages",
    },
    {
      id: 16,
      src: "/photo/preparation-mariage8.jpeg",
      alt: "Préparation beauté mariage",
      category: "Mariages",
    },
    {
      id: 17,
      src: "/photo/mariée-maquillage.jpeg",
      alt: "Maquillage de mariée",
      category: "Mariages",
    },
    {
      id: 18,
      src: "/photo/mariée-shooting.jpeg",
      alt: "Shooting photo mariée",
      category: "Mariages",
    },
    {
      id: 19,
      src: "/photo/discours-mariage.jpeg",
      alt: "Discours de mariage",
      category: "Mariages",
    },

    // Maquillages
    {
      id: 20,
      src: "/photo/maquillage.jpeg",
      alt: "Maquillage professionnel",
      category: "Maquillages artistiques",
    },
    {
      id: 21,
      src: "/photo/maquillage-2.jpeg",
      alt: "Maquillage élégant",
      category: "Maquillages artistiques",
    },
    {
      id: 22,
      src: "/photo/maquillage-3.jpeg",
      alt: "Maquillage soirée",
      category: "Maquillages artistiques",
    },
    {
      id: 23,
      src: "/photo/maquillage-en-cours.jpeg",
      alt: "Maquillage en cours",
      category: "Maquillages artistiques",
    },
    {
      id: 24,
      src: "/photo/maquillage-enceinte.jpeg",
      alt: "Maquillage femme enceinte",
      category: "Maquillages artistiques",
    },
    {
      id: 25,
      src: "/photo/maquillage-enceinte1.jpeg",
      alt: "Maquillage grossesse",
      category: "Maquillages artistiques",
    },
    {
      id: 26,
      src: "/photo/maquillage-mariage.jpeg",
      alt: "Maquillage spécial mariage",
      category: "Maquillages artistiques",
    },
    {
      id: 27,
      src: "/photo/maquillage-mariage1.jpeg",
      alt: "Maquillage de mariée",
      category: "Maquillages artistiques",
    },
    {
      id: 28,
      src: "/photo/maquillage-pro.jpeg",
      alt: "Maquillage professionnel",
      category: "Maquillages artistiques",
    },
    {
      id: 29,
      src: "/photo/maquillage-pro1.jpeg",
      alt: "Makeup artist professionnel",
      category: "Maquillages artistiques",
    },
    {
      id: 30,
      src: "/photo/maquillage-pro2.jpeg",
      alt: "Artiste maquillage",
      category: "Maquillages artistiques",
    },
    {
      id: 31,
      src: "/photo/maquillage-pro4.jpeg",
      alt: "Maquillage professionnel",
      category: "Maquillages artistiques",
    },
    {
      id: 32,
      src: "/photo/maquillage-pro5.jpeg",
      alt: "Maquillage beauté",
      category: "Maquillages artistiques",
    },
    {
      id: 33,
      src: "/photo/maquillage-pro6.jpeg",
      alt: "Maquillage expert",
      category: "Maquillages artistiques",
    },
    {
      id: 34,
      src: "/photo/maquillage-terminé.jpeg",
      alt: "Résultat maquillage",
      category: "Maquillages artistiques",
    },
    {
      id: 35,
      src: "/photo/maquillage-visage.jpeg",
      alt: "Maquillage du visage",
      category: "Maquillages artistiques",
    },
    {
      id: 36,
      src: "/photo/preparation-maquillage.jpeg",
      alt: "Préparation maquillage",
      category: "Maquillages artistiques",
    },
    {
      id: 37,
      src: "/photo/jennifer.jpeg",
      alt: "Jennifer makeup artist",
      category: "Maquillages artistiques",
    },
    {
      id: 38,
      src: "/photo/jennifer1.jpeg",
      alt: "Jennifer maquilleuse",
      category: "Maquillages artistiques",
    },

    // Déplacer Halloween dans Maquillages artistiques
    {
      id: 39,
      src: "/photo/maquillage-halloween.jpeg",
      alt: "Maquillage Halloween",
      category: "Maquillages artistiques",
    },
    {
      id: 40,
      src: "/photo/maquillage-halloween1.jpeg",
      alt: "Maquillage Halloween effrayant",
      category: "Maquillages artistiques",
    },
    {
      id: 41,
      src: "/photo/maquillage-halloween2.jpeg",
      alt: "Maquillage Halloween spécial",
      category: "Maquillages artistiques",
    },
    {
      id: 42,
      src: "/photo/maquillage-halloween3.jpeg",
      alt: "Makeup Halloween créatif",
      category: "Maquillages artistiques",
    },
    {
      id: 43,
      src: "/photo/maquillage-halloween4.jpeg",
      alt: "Maquillage Halloween artistique",
      category: "Maquillages artistiques",
    },
    {
      id: 44,
      src: "/photo/maquillage-halloween5.jpeg",
      alt: "Halloween makeup pro",
      category: "Maquillages artistiques",
    },
    {
      id: 45,
      src: "/photo/maquillage-halloween6.jpeg",
      alt: "Maquillage Halloween fantôme",
      category: "Maquillages artistiques",
    },
    {
      id: 46,
      src: "/photo/maquillage-halloween7.jpeg",
      alt: "Maquillage Halloween effets spéciaux",
      category: "Maquillages artistiques",
    },
    {
      id: 47,
      src: "/photo/maquillage-halloween8.jpeg",
      alt: "Maquillage Halloween sorcière",
      category: "Maquillages artistiques",
    },
    {
      id: 48,
      src: "/photo/maquillage-halloween9.jpeg",
      alt: "Halloween makeup monstre",
      category: "Maquillages artistiques",
    },
    {
      id: 49,
      src: "/photo/maquillage-halloween10.jpeg",
      alt: "Maquillage Halloween horreur",
      category: "Maquillages artistiques",
    },
    {
      id: 50,
      src: "/photo/maquillage-halloween11.jpeg",
      alt: "Halloween makeup gore",
      category: "Maquillages artistiques",
    },
    {
      id: 51,
      src: "/photo/maquillage-halloween12.jpeg",
      alt: "Maquillage Halloween citrouille",
      category: "Maquillages artistiques",
    },
    {
      id: 52,
      src: "/photo/maquillage-halloween13.jpeg",
      alt: "Halloween makeup squelette",
      category: "Maquillages artistiques",
    },
    {
      id: 53,
      src: "/photo/maquillage-halloween-14.jpeg",
      alt: "Maquillage Halloween professionnel",
      category: "Maquillages artistiques",
    },

    // Coiffures
    {
      id: 54,
      src: "/photo/coiffure.jpeg",
      alt: "Coiffure élégante",
      category: "Coiffures",
    },
    {
      id: 55,
      src: "/photo/coiffure2.jpeg",
      alt: "Coiffure professionnelle",
      category: "Coiffures",
    },
    {
      id: 56,
      src: "/photo/coiffure-mariage.jpeg",
      alt: "Coiffure de mariage",
      category: "Coiffures",
    },
    {
      id: 57,
      src: "/photo/pose-shooting.jpeg",
      alt: "Pose coiffure",
      category: "Coiffures",
    },
    {
      id: 58,
      src: "/photo/shooting.jpeg",
      alt: "Shooting coiffure",
      category: "Coiffures",
    },
  ];

  // Filtrer les images en fonction de la catégorie sélectionnée
  const filteredImages =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Simule le chargement des images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Animations pour les images
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Composant Modale pour afficher les images en plein écran */}
      <ImageModal
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      <div className="container mx-auto px-6 md:px-10">
        <div ref={titleRef} className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6"
          >
            GALERIE
            <span className="text-2xl md:text-3xl font-light text-white/80 tracking-wide mt-3 block">
              Découvrez mes réalisations
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-white/40 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-white/80 max-w-2xl mx-auto"
          >
            Explorez mon portfolio de maquillages et coiffures pour mariages,
            événements et occasions spéciales
          </motion.p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-transparent border border-white/20 text-white hover:border-white/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Affichage du chargement */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-white/60">Chargement de la galerie...</p>
          </div>
        )}

        {/* Grille d'images */}
        {!isLoading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-light">{image.alt}</h3>
                      <p className="text-white/60 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Aucune image trouvée */}
        {!isLoading && filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">
              Aucune image trouvée pour cette catégorie.
            </p>
          </div>
        )}

        {/* Message de contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-white/80 mb-6">
              Vous aimez mon travail ?
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-white/90 text-black font-light px-8 py-3 tracking-wide transition-all duration-300"
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
