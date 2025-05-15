"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aude Paris",
      date: "il y a 3 mois",
      text: "Jennifer est une super professionnelle, elle a su me conseiller et me rassurer avant et pendant mon mariage. La coiffure et le maquillage était splendide et sophistiqué. Je la recommande à 100% les yeux fermés !!! Merci encore pour ta gentillesse et ton sourire qui fait du bien 😊",
      services: "Coiffure pour mariage, Maquillage occasions spéciales",
      rating: 5,
    },
    {
      name: "Clara Tirone",
      date: "il y a une semaine",
      text: "Le maquillage et la coiffure qu'elle m'a faits, m'ont fait me sentir la plus belle des mariées. Tous les invités m'ont fait des compliments. Elle a réussi à capter ma demande de simplicité et de naturel. Merci Jennifer !",
      services: "",
      rating: 5,
      isNew: true,
    },
    {
      name: "Benedicte Rocchia",
      date: "il y a 4 mois",
      text: "Superbes expériences pour l'essai et le jour J! Une coiffure qui a tenu jusqu'à 5h du matin, un maquillage magnifique qui me ressemble, que demander de plus! Un sans faute de notre premier contact (12 mois avant le mariage) au jour J où il a fallut faire 3 maquillages et 3 coiffures. Une vraie machine mais tellement gentille et professionnelle, je recommande les yeux fermés, merci bcp!!!!",
      services: "",
      rating: 5,
    },
    {
      name: "marjorie parigot",
      date: "il y a 11 mois",
      text: "Je ne la connaissais pas et depuis décembre j'y vais tous les mois pour mes mains et pieds. Semi permanent. J'en suis très contente. Minutieuse. Professionnelle. A l'écoute. De très bons conseils. Je la recommande vivement !",
      services: "",
      rating: 5,
    },
    {
      name: "Ariane PUENTE-GARCIA",
      date: "il y a 7 mois",
      text: "Jennifer a su me mettre en confiance, à écouté mes demandes et a su me sublimer pour mon mariage, manucure impeccable et maquillage incroyable. On a changé de coiffure au dernier moment d'un commun accord et tout était absolument parfait ! Elle est gentille, professionnelle et d'une grande simplicité, sans chichi ce qui nous a beaucoup plu, en quelques minutes avec mes invités à la maison elle s'est complètement intégrée. Je la recommande + +",
      services:
        "Coiffure pour mariage, Maquillage pour mariage, Manucures au gel",
      rating: 5,
    },
    {
      name: "Angie B. Photographies",
      date: "il y a 4 mois",
      text: "Jennifer est super, elle intervient au studio pour des prestations de shooting que je fais. Personne très professionnelle, avenante, adorable, elle fait du travail de qualité, et surtout le rendu est juste magnifique. Je ne peux que l'a recommander en ++++++",
      services: "Maquillage",
      rating: 5,
    },
    {
      name: "Sofie 974",
      date: "il y a 5 mois",
      text: "Jennifer m'a coiffé et maquillée pour mon mariage. Prestations parfaite aussi bien le jour j que l'essai. Je n'ai peut être pas était une cliente facile dans le choix de ma coiffure mais j'ai été ravie du résultat. C'est une vraie pro. Petite mention car elle a redonné le sourire à ma maman pour sa coiffure 😉❤️ elle était heureuse et celà grâce à toi. Je recommande les yeux fermés.",
      services: "",
      rating: 5,
    },
    {
      name: "karen leger",
      date: "il y a 2 mois",
      text: "Jennifer est vraiment Top, elle est à l'écoute et donne de très bon conseil. Elle travaille super bien, elle m'a fait un rallongement des ongles et le résultat est comme je l'espérais. C'est un plaisir de revenir chaque mois.",
      services: "",
      rating: 5,
    },
    {
      name: "stephanie caputo",
      date: "il y a 7 mois",
      text: "Jennifer est une maquilleuse et coiffeuse talentueuse. Elle a su cerner très rapidement le style de maquillage et les couleurs à utiliser. Elle est très organisée et réactive. Le maquillage et la coiffure réalisés le jour de mon mariage ont incroyablement bien tenus malgrè, le stress, les danses et le vent. C'était impeccable même à 3h du matin. Je la recommande sans hésitation et la remercie encore de m'avoir embelli pour le plus beau jour de ma vie.",
      services: "Maquillage",
      rating: 5,
    },
    {
      name: "Cindy BROCCO",
      date: "il y a 7 mois",
      text: "Jennifer m'a coiffée et maquillée pour mon mariage et cela a été parfait ! C'était magnifique et ça a très bien tenu toute la journée et soirée. Mon mari a été subjugué par le résultat. Même pendant l'essai, ses conseils ont été précieux. Elle a également coiffé et maquillé mes témoins et ma mère qui ont beaucoup aimé son travail. Je la recommande à 1000% et je re ferais appel à elle les yeux fermés !",
      services: "Coiffure pour mariage, Maquillage pour mariage, Manucure",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Gestion du défilement automatique
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change de témoignage toutes les 5 secondes
    };

    if (isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Pause le défilement au survol
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation manuelle
  const handleNext = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(true);
  };

  const handlePrev = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(true);
  };

  // Variants d'animation pour les témoignages
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -15 : 15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        rotateY: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? -15 : 15,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        rotateY: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  };

  // Rendre les étoiles de notation
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CE QUE DISENT NOS CLIENTES
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="https://g.co/kgs/HkoUeFV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-lg font-medium">
                <span className="text-yellow-400">54</span> avis 5 étoiles sur
                Google
              </span>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="relative max-w-5xl mx-auto perspective-1000"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Fond décoratif */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl blur-3xl -z-10 transform -rotate-1"></div>

          {/* Container pour le carousel */}
          <div className="relative overflow-hidden rounded-3xl h-[500px] md:h-[400px] perspective">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full h-full p-4 md:p-8">
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 shadow-xl transform-style-3d h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {renderStars(testimonials[currentIndex].rating)}
                          {testimonials[currentIndex].isNew && (
                            <span className="bg-pink-600 text-xs text-white px-2 py-0.5 rounded-full">
                              NOUVEAU
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {testimonials[currentIndex].date}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {testimonials[currentIndex].name.substring(0, 1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow overflow-y-auto text-sm md:text-base scrollbar-thin">
                      <p className="italic text-gray-300">
                        &quot;{testimonials[currentIndex].text}&quot;
                      </p>
                    </div>

                    {testimonials[currentIndex].services && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <p className="text-sm text-gray-400">
                          <span className="text-pink-400 font-medium">
                            Services :{" "}
                          </span>
                          {testimonials[currentIndex].services}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Contrôles du carousel */}
            <div className="absolute bottom-4 right-4 flex items-center gap-4 z-50">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-gray-700 hover:bg-black/70 transition-colors"
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
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-gray-700 hover:bg-black/70 transition-colors"
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
              </button>
            </div>
          </div>

          {/* Indicateur de pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-pink-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Voir l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://g.co/kgs/HkoUeFV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-white font-medium px-8 py-3 rounded-full hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 border border-purple-500/30"
          >
            Voir tous les avis Google
          </Link>
        </div>
      </div>
    </section>
  );
}
