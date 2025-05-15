"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsDemo() {
  const serviceCards = [
    {
      category: "Services",
      title: "Vernis Semi-Permanent",
      src: "/images/vernis.jpg",
      content: <DummyContent 
        title="Vernis Semi-Permanent"
        description="Le vernis semi-permanent offre une tenue exceptionnelle jusqu'à 3 semaines. Sa formule spéciale permet un rendu brillant qui ne s'écaille pas et protège vos ongles naturels."
      />,
    },
    {
      category: "Services",
      title: "Extension et Gel",
      src: "/images/vernis.jpg",
      content: <DummyContent 
        title="Extension et Gel"
        description="Les extensions d'ongles en gel permettent d'obtenir la longueur et la forme désirées. Cette technique renforce vos ongles naturels tout en offrant un résultat esthétique et durable."
      />,
    },
    {
      category: "Créations",
      title: "Nail Art",
      src: "/images/vernis.jpg",
      content: <DummyContent 
        title="Nail Art Personnalisé"
        description="Laissez libre cours à votre imagination avec nos designs nail art sur-mesure. Strass, paillettes, motifs géométriques ou floraux, nous réalisons toutes vos envies pour des ongles uniques."
      />,
    }
  ];

  const cards = serviceCards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-white mb-4">
        Découvrez nos prestations d&apos;onglerie.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, description }) => {
  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-800 p-6 md:p-10 rounded-2xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-800 dark:text-white text-lg md:text-2xl block mb-4">
            {title}
          </span>
          {description}
        </p>
        
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-xl flex-1">
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Durée</h3>
            <p className="text-neutral-600 dark:text-neutral-300">45 - 60 minutes</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-xl flex-1">
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Entretien</h3>
            <p className="text-neutral-600 dark:text-neutral-300">Toutes les 3 semaines</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-xl flex-1">
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Qualité</h3>
            <p className="text-neutral-600 dark:text-neutral-300">Produits professionnels</p>
          </div>
        </div>
      </div>
    </>
  );
}; 