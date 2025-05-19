"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Galerie() {
  // Catégories pour le filtrage
  const categories = [
    "Tous",
    "Mariages",
    "Maquillages",
    "Halloween",
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
      category: "Maquillages",
    },
    {
      id: 21,
      src: "/photo/maquillage-2.jpeg",
      alt: "Maquillage élégant",
      category: "Maquillages",
    },
    {
      id: 22,
      src: "/photo/maquillage-3.jpeg",
      alt: "Maquillage soirée",
      category: "Maquillages",
    },
    {
      id: 23,
      src: "/photo/maquillage-en-cours.jpeg",
      alt: "Maquillage en cours",
      category: "Maquillages",
    },
    {
      id: 24,
      src: "/photo/maquillage-enceinte.jpeg",
      alt: "Maquillage femme enceinte",
      category: "Maquillages",
    },
    {
      id: 25,
      src: "/photo/maquillage-enceinte1.jpeg",
      alt: "Maquillage grossesse",
      category: "Maquillages",
    },
    {
      id: 26,
      src: "/photo/maquillage-mariage.jpeg",
      alt: "Maquillage spécial mariage",
      category: "Maquillages",
    },
    {
      id: 27,
      src: "/photo/maquillage-mariage1.jpeg",
      alt: "Maquillage de mariée",
      category: "Maquillages",
    },
    {
      id: 28,
      src: "/photo/maquillage-pro.jpeg",
      alt: "Maquillage professionnel",
      category: "Maquillages",
    },
    {
      id: 29,
      src: "/photo/maquillage-pro1.jpeg",
      alt: "Makeup artist professionnel",
      category: "Maquillages",
    },
    {
      id: 30,
      src: "/photo/maquillage-pro2.jpeg",
      alt: "Artiste maquillage",
      category: "Maquillages",
    },
    {
      id: 31,
      src: "/photo/maquillage-pro4.jpeg",
      alt: "Maquillage professionnel",
      category: "Maquillages",
    },
    {
      id: 32,
      src: "/photo/maquillage-pro5.jpeg",
      alt: "Maquillage beauté",
      category: "Maquillages",
    },
    {
      id: 33,
      src: "/photo/maquillage-pro6.jpeg",
      alt: "Maquillage expert",
      category: "Maquillages",
    },
    {
      id: 34,
      src: "/photo/maquillage-terminé.jpeg",
      alt: "Résultat maquillage",
      category: "Maquillages",
    },
    {
      id: 35,
      src: "/photo/maquillage-visage.jpeg",
      alt: "Maquillage du visage",
      category: "Maquillages",
    },
    {
      id: 36,
      src: "/photo/preparation-maquillage.jpeg",
      alt: "Préparation maquillage",
      category: "Maquillages",
    },
    {
      id: 37,
      src: "/photo/jennifer.jpeg",
      alt: "Jennifer makeup artist",
      category: "Maquillages",
    },
    {
      id: 38,
      src: "/photo/jennifer1.jpeg",
      alt: "Jennifer maquilleuse",
      category: "Maquillages",
    },

    // Halloween
    {
      id: 39,
      src: "/photo/maquillage-halloween.jpeg",
      alt: "Maquillage Halloween",
      category: "Halloween",
    },
    {
      id: 40,
      src: "/photo/maquillage-halloween1.jpeg",
      alt: "Maquillage Halloween effrayant",
      category: "Halloween",
    },
    {
      id: 41,
      src: "/photo/maquillage-halloween2.jpeg",
      alt: "Maquillage Halloween spécial",
      category: "Halloween",
    },
    {
      id: 42,
      src: "/photo/maquillage-halloween3.jpeg",
      alt: "Makeup Halloween créatif",
      category: "Halloween",
    },
    {
      id: 43,
      src: "/photo/maquillage-halloween4.jpeg",
      alt: "Maquillage Halloween artistique",
      category: "Halloween",
    },
    {
      id: 44,
      src: "/photo/maquillage-halloween5.jpeg",
      alt: "Halloween makeup pro",
      category: "Halloween",
    },
    {
      id: 45,
      src: "/photo/maquillage-halloween6.jpeg",
      alt: "Maquillage Halloween fantôme",
      category: "Halloween",
    },
    {
      id: 46,
      src: "/photo/maquillage-halloween7.jpeg",
      alt: "Maquillage Halloween effets spéciaux",
      category: "Halloween",
    },
    {
      id: 47,
      src: "/photo/maquillage-halloween8.jpeg",
      alt: "Maquillage Halloween sorcière",
      category: "Halloween",
    },
    {
      id: 48,
      src: "/photo/maquillage-halloween9.jpeg",
      alt: "Halloween makeup monstre",
      category: "Halloween",
    },
    {
      id: 49,
      src: "/photo/maquillage-halloween10.jpeg",
      alt: "Maquillage Halloween horreur",
      category: "Halloween",
    },
    {
      id: 50,
      src: "/photo/maquillage-halloween11.jpeg",
      alt: "Halloween makeup gore",
      category: "Halloween",
    },
    {
      id: 51,
      src: "/photo/maquillage-halloween12.jpeg",
      alt: "Maquillage Halloween citrouille",
      category: "Halloween",
    },
    {
      id: 52,
      src: "/photo/maquillage-halloween13.jpeg",
      alt: "Halloween makeup squelette",
      category: "Halloween",
    },
    {
      id: 53,
      src: "/photo/maquillage-halloween-14.jpeg",
      alt: "Maquillage Halloween professionnel",
      category: "Halloween",
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
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden"
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
