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

                {/* Filigrane pour la modale */}
                <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-2 rounded text-sm text-white/70 font-light tracking-wide pointer-events-none">
                  © GlamBeauty
                </div>
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

export default function GalerieClient() {
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
    "Mariages",
    "Éditorial & Corporate",
    "Facepainting - Artistique",
  ];

  const [activeCategory, setActiveCategory] = useState("Mariages");
  const [isLoading, setIsLoading] = useState(true);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Définition des images avec leurs catégories
  const galleryImages = [
    // Mariages
    {
      id: 2,
      src: "/photo/mariage-5.jpeg",
      alt: "Préparation mariage",
      category: "Mariages",
    },
    {
      id: 90,
      src: "/photo/portfolio-nysa.jpg",
      alt: "Couple de mariés dans un escalier",
      category: "Mariages",
    },
    {
      id: 11,
      src: "/photo/photo-mariage.jpeg",
      alt: "Photo de mariage",
      category: "Mariages",
    },
    {
      id: 94,
      src: "/photo/portfolio-chlo.jpg",
      alt: "Portrait de mariée en robe de dentelle",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 16,
      src: "/photo/preparation-mariage8.jpeg",
      alt: "Préparation beauté mariage",
      category: "Mariages",
    },
    {
      id: 92,
      src: "/photo/portfolio-1258.JPG",
      alt: "Mariés enlacés devant une bâtisse en pierre",
      category: "Mariages",
    },
    {
      id: 5,
      src: "/photo/mariée.jpeg",
      alt: "Portrait de mariée",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 99,
      src: "/photo/portfolio-7977.JPG",
      alt: "Mariée en peignoir avant la préparation",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 40,
      src: "/photo/preparation-maquillage.jpeg",
      alt: "Préparation maquillage artistique",
      category: "Mariages",
    },
    {
      id: 93,
      src: "/photo/portfolio-lu.jpg",
      alt: "Portrait de mariée au bouquet devant une fenêtre",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 30,
      src: "/photo/maquillage-mariage.jpeg",
      alt: "Maquillage créatif mariage",
      category: "Mariages",
      position: "object-[center_20%]",
    },
    {
      id: 91,
      src: "/photo/portfolio-2560.jpeg",
      alt: "Portrait de mariée sous une colonnade",
      category: "Mariages",
    },
    {
      id: 98,
      src: "/photo/portfolio-8290.JPG",
      alt: "Mariés enlacés devant une fontaine",
      category: "Mariages",
    },
    {
      id: 100,
      src: "/photo/portfolio-9062.jpg",
      alt: "Mariée souriante lors du lancer du bouquet",
      category: "Mariages",
    },
    {
      id: 95,
      src: "/photo/portfolio-0352.JPG",
      alt: "Mariés front contre front en extérieur",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 97,
      src: "/photo/portfolio-2554.jpeg",
      alt: "Portrait de mariée sous son voile en dentelle",
      category: "Mariages",
      position: "object-top",
    },
    {
      id: 96,
      src: "/photo/portfolio-chlo1.jpg",
      alt: "Marié portant sa mariée, photo noir et blanc",
      category: "Mariages",
    },
    {
      id: 101,
      src: "/photo/portfolio-7983.JPG",
      alt: "Mariée entourée de ses demoiselles d'honneur",
      category: "Mariages",
      position: "object-top",
    },

    // Shooting - corporate
    {
      id: 21,
      src: "/photo/shooting.jpeg",
      alt: "Shooting photo professionnel",
      category: "Éditorial & Corporate",
    },
    {
      id: 28,
      src: "/photo/maquillage-enceinte.jpeg",
      alt: "Maquillage artistique femme enceinte",
      category: "Éditorial & Corporate",
    },
    {
      id: 29,
      src: "/photo/maquillage-enceinte1.png",
      alt: "Maquillage artistique grossesse",
      category: "Éditorial & Corporate",
    },
    {
      id: 34,
      src: "/photo/maquillage-pro2.jpeg",
      alt: "Artiste maquillage créations",
      category: "Éditorial & Corporate",
    },
    {
      id: 70,
      src: "/photo/shooting-1.png",
      alt: "Artiste maquillage créations",
      category: "Éditorial & Corporate",
    },
    {
      id: 39,
      src: "/photo/maquillage-visage.jpeg",
      alt: "Maquillage artistique du visage",
      category: "Éditorial & Corporate",
    },
    {
      id: 74,
      src: "/photo/shooting-5.png",
      alt: "Artiste maquillage créations",
      category: "Éditorial & Corporate",
    },
    {
      id: 78,
      src: "/photo/shooting-11.jpeg",
      alt: "Artiste maquillage créations",
      category: "Éditorial & Corporate",
    },
    {
      id: 79,
      src: "/photo/shooting-12.jpeg",
      alt: "Artiste maquillage créations",
      category: "Éditorial & Corporate",
    },

    // Maquillage artistique (Halloween)
    {
      id: 43,
      src: "/photo/maquillage-halloween.jpeg",
      alt: "Maquillage Halloween",
      category: "Facepainting - Artistique",
    },
    {
      id: 44,
      src: "/photo/maquillage-halloween1.jpeg",
      alt: "Maquillage Halloween effrayant",
      category: "Facepainting - Artistique",
    },
    {
      id: 45,
      src: "/photo/maquillage-halloween2.jpeg",
      alt: "Maquillage Halloween spécial",
      category: "Facepainting - Artistique",
    },
    {
      id: 46,
      src: "/photo/maquillage-halloween3.jpeg",
      alt: "Makeup Halloween créatif",
      category: "Facepainting - Artistique",
    },
    {
      id: 47,
      src: "/photo/maquillage-halloween4.jpeg",
      alt: "Maquillage Halloween artistique",
      category: "Facepainting - Artistique",
    },
    {
      id: 48,
      src: "/photo/maquillage-halloween5.jpeg",
      alt: "Halloween makeup pro",
      category: "Facepainting - Artistique",
    },
    {
      id: 49,
      src: "/photo/maquillage-halloween6.jpeg",
      alt: "Maquillage Halloween fantôme",
      category: "Facepainting - Artistique",
    },
    {
      id: 50,
      src: "/photo/maquillage-halloween7.jpeg",
      alt: "Maquillage Halloween effets spéciaux",
      category: "Facepainting - Artistique",
    },
    {
      id: 51,
      src: "/photo/maquillage-halloween8.jpeg",
      alt: "Maquillage Halloween sorcière",
      category: "Facepainting - Artistique",
    },
    {
      id: 52,
      src: "/photo/maquillage-halloween9.jpeg",
      alt: "Halloween makeup monstre",
      category: "Facepainting - Artistique",
    },
    {
      id: 53,
      src: "/photo/maquillage-halloween10.jpeg",
      alt: "Maquillage Halloween horreur",
      category: "Facepainting - Artistique",
    },
    {
      id: 54,
      src: "/photo/maquillage-halloween11.jpeg",
      alt: "Halloween makeup gore",
      category: "Facepainting - Artistique",
    },
    {
      id: 55,
      src: "/photo/maquillage-halloween12.jpeg",
      alt: "Maquillage Halloween citrouille",
      category: "Facepainting - Artistique",
    },
    {
      id: 56,
      src: "/photo/maquillage-halloween13.jpeg",
      alt: "Halloween makeup squelette",
      category: "Facepainting - Artistique",
    },
    {
      id: 57,
      src: "/photo/maquillage-halloween-14.jpeg",
      alt: "Maquillage Halloween professionnel",
      category: "Facepainting - Artistique",
    },
    {
      id: 85,
      src: "/photo/artistique-1.png",
      alt: "Maquillage Halloween professionnel",
      category: "Facepainting - Artistique",
    },
    {
      id: 86,
      src: "/photo/artistique-3.png",
      alt: "Maquillage Halloween",
      category: "Facepainting - Artistique",
    },
  ];

  // Filtrer les images en fonction de la catégorie sélectionnée
  const filteredImages = galleryImages.filter(
    (img) => img.category === activeCategory
  );

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
    <div className="min-h-screen bg-sable text-ink">
      {/* Composant Modale pour afficher les images en plein écran */}
      <ImageModal
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Hero portfolio - fond blanc, texte noir */}
      <div className="bg-white text-ink py-10 md:py-16">
        <div
          ref={titleRef}
          className="container mx-auto px-6 md:px-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-ink"
          >
            PORTFOLIO
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-ink/40 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-ink/70 max-w-2xl mx-auto italic"
          >
            L&apos;art de sublimer les instants les plus précieux.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-16">
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-ink text-white"
                  : "bg-white border border-ink/20 text-ink hover:border-ink/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Affichage du chargement */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-ink border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-ink/60">Chargement de la galerie...</p>
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
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                      image.position || "object-center"
                    }`}
                  />

                  {/* Filigrane subtil */}
                  <div className="absolute bottom-2 right-2 bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 font-light tracking-wide pointer-events-none">
                    © GlamBeauty
                  </div>

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
            <p className="text-ink/60">
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
          <div className="max-w-2xl mx-auto bg-white border border-ink/10 p-8 md:p-12 rounded-sm shadow-xl text-left">
            <p className="text-ink/85 leading-relaxed mb-5">
              Après la découverte de mon univers, je vous invite à prolonger
              cette expérience en me confiant votre projet.
            </p>
            <div className="h-[1px] w-24 bg-ink/30 mb-5"></div>
            <p className="text-ink/85 leading-relaxed mb-5">
              Mariage, événement privé ou séance photo : chaque création est
              pensée sur mesure, au service de votre élégance et de
              l&apos;instant.
            </p>
            <p className="text-ink/85 leading-relaxed mb-8">
              J&apos;accorde une attention particulière à chaque détail, afin de
              créer une expérience intime, cohérente et fidèle à votre
              singularité.
            </p>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center bg-ink hover:bg-ink/80 text-white font-light px-8 py-3 tracking-widest uppercase text-sm transition-all duration-300 rounded-full"
                >
                  <span>Votre projet sur mesure</span>
                  <svg
                    className="w-4 h-4 ml-2"
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
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
