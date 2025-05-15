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

// Composant Carousel
const WeddingCarousel = ({ items, title }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
        {title}
      </h3>
      <CarouselContext.Provider
        value={{ onCardClose: handleCardClose, currentIndex }}
      >
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none]"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div
              className={cn(
                "flex flex-row justify-start gap-4 pl-4",
                "mx-auto max-w-7xl"
              )}
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                    },
                  }}
                  key={"card" + index}
                  className="rounded-3xl last:pr-[5%] md:last:pr-[20%]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mr-10 flex justify-end gap-2 mt-4">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 disabled:opacity-50 text-white"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-300" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 disabled:opacity-50 text-white"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </CarouselContext.Provider>
    </div>
  );
};

// Composant Card
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
  }, [open]);

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
        className={`relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl md:h-96 md:w-72 ${card.gradientClass}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </motion.p>
          <motion.p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <PackageImage src={card.src} alt={card.title} />
      </motion.button>
    </>
  );
};

// Import du useEffect
import { useEffect } from "react";

export default function WeddingPackages() {
  // Forfaits pour les invitées
  const guestPackages = [
    {
      category: "Forfait Invitées",
      title: "PACK SAPHIR",
      src: "/images/forfait.jpg",
      gradientClass:
        "bg-gradient-to-b from-blue-900/30 to-black border border-blue-800/50 hover:border-blue-600 transition-all duration-300",
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
      src: "/images/forfait.jpg",
      gradientClass:
        "bg-gradient-to-b from-gray-800/30 to-black border border-gray-700/50 hover:border-gray-500 transition-all duration-300",
      items: [
        { name: "Essai coiffure", price: "Sur devis" },
        { name: "Coiffure Jour J", price: "Sur devis" },
      ],
      note: null,
    },
    {
      category: "Forfait Mariées",
      title: "PACK GOLD",
      src: "/images/forfait.jpg",
      gradientClass:
        "bg-gradient-to-b from-yellow-900/30 to-black border border-yellow-800/50 hover:border-yellow-600 transition-all duration-300",
      items: [
        { name: "Essai maquillage", price: "Sur devis" },
        { name: "Maquillage Jour J", price: "Sur devis" },
      ],
      note: "UN KIT DE RETOUCHE OFFERT",
    },
    {
      category: "Forfait Mariées",
      title: "PACK DIAMANT",
      src: "/images/forfait.jpg",
      gradientClass:
        "bg-gradient-to-b from-purple-900/30 to-black border border-purple-800/50 hover:border-purple-600 transition-all duration-300",
      items: [
        { name: "Essai maquillage & coiffure", price: "Sur devis" },
        { name: "Maquillage & coiffure Jour J", price: "Sur devis" },
      ],
      note: "UN KIT DE RETOUCHE OFFERT",
    },
    {
      category: "Forfait Mariées",
      title: "PACK PLATINE",
      src: "/images/forfait.jpg",
      gradientClass:
        "bg-gradient-to-b from-pink-900/30 to-black border border-pink-800/50 hover:border-pink-600 transition-all duration-300",
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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          FORFAITS MARIAGES
        </h2>

        {/* Carousel pour invitées */}
        <WeddingCarousel items={guestCards} title="Invitées" />

        {/* Carousel pour mariées */}
        <WeddingCarousel items={brideCards} title="Futures Mariées" />

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            POSSIBILITÉ DE LOCATION D&apos;EXTENSION À PARTIR DE 50€. UN CHÈQUE
            DE CAUTION DE 100€ SERA DEMANDÉ
          </p>
        </div>
      </div>
    </section>
  );
}
