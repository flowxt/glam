"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Galerie() {
  // Types de galeries disponibles
  const categories = [
    "Tous",
    "Mariages",
    "Maquillages",
    "Coiffures",
    "Événements",
  ];
  const [activeCategory, setActiveCategory] = useState("Tous");

  // À l'avenir, ces données proviendront des images réelles
  // Pour le moment, nous utilisons des espaces réservés
  const placeholderImages = [
    {
      id: 1,
      src: "/images/placeholder-1.jpg",
      alt: "Maquillage mariage",
      category: "Mariages",
    },
    {
      id: 2,
      src: "/images/placeholder-2.jpg",
      alt: "Coiffure mariée",
      category: "Mariages",
    },
    {
      id: 3,
      src: "/images/placeholder-3.jpg",
      alt: "Maquillage soirée",
      category: "Maquillages",
    },
    {
      id: 4,
      src: "/images/placeholder-4.jpg",
      alt: "Coiffure événement",
      category: "Coiffures",
    },
    {
      id: 5,
      src: "/images/placeholder-5.jpg",
      alt: "Mise en beauté mariage",
      category: "Mariages",
    },
    {
      id: 6,
      src: "/images/placeholder-6.jpg",
      alt: "Maquillage naturel",
      category: "Maquillages",
    },
    {
      id: 7,
      src: "/images/placeholder-7.jpg",
      alt: "Coiffure tressée",
      category: "Coiffures",
    },
    {
      id: 8,
      src: "/images/placeholder-8.jpg",
      alt: "Maquillage Halloween",
      category: "Événements",
    },
  ];

  // Filtrer les images en fonction de la catégorie sélectionnée
  const filteredImages =
    activeCategory === "Tous"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === activeCategory);

  // Animations pour les images
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Galerie
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Découvrez mes réalisations en maquillage et coiffure pour mariages et
          événements
        </motion.p>

        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Placeholder pour indiquer qu'il n'y a pas encore d'images */}
        <div className="text-center mb-8 text-gray-400">
          <p>Les photos seront disponibles prochainement</p>
        </div>

        {/* Grille d'images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-900 border border-gray-800"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-medium">
                  Emplacement image {image.id}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-semibold">{image.alt}</h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message de contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-4">Vous aimez mon travail ?</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
          >
            Contactez-moi pour votre événement
          </a>
        </motion.div>
      </div>
    </div>
  );
}
