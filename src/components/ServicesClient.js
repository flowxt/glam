"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// Données des deux univers de services
const univers = {
  mariees: {
    label: "Mariées & Particuliers",
    sections: [
      {
        id: "univers-mariee",
        title: "L'Univers Mariée",
        image: "/photo/mariée.jpeg",
        imagePosition: "object-[center_20%]",
        intro:
          "Une mise en beauté entièrement personnalisée pour sublimer l'un des plus beaux jours de votre vie. Chaque prestation est imaginée avec soin afin d'assurer une harmonie parfaite entre votre personnalité, votre robe et l'atmosphère de votre mariage.",
        blocks: [
          {
            subtitle: "Collection Essentielle",
            items: [
              "Essai coiffure ou maquillage personnalisé",
              "Coiffure ou maquillage le Jour J",
            ],
          },
          {
            subtitle: "Collection Signature",
            items: [
              "Essai coiffure & maquillage",
              "Coiffure & maquillage le Jour J",
            ],
          },
          {
            subtitle: "Collection Privilège",
            items: [
              "Essai coiffure & maquillage",
              "Coiffure & maquillage le Jour J",
              "Bridal Box exclusive",
            ],
            note: "L'expérience la plus complète pour une préparation sereine et raffinée.",
          },
          {
            subtitle: "Options complémentaires",
            items: ["Manucure", "Renforcement ou pose de gel"],
          },
        ],
        cta: { label: "Réserver", href: "/contact" },
      },
      {
        id: "proches-invites",
        title: "Vos Proches & Invités",
        image: "/photo/preparation-mariage.jpeg",
        imagePosition: "object-[center_22%]",
        intro: "Parce que chaque détail compte.",
        blocks: [
          {
            subtitle: "Formule Prestige",
            items: [
              "Coiffure & maquillage",
              "Faux cils ou bouquet de cils inclus",
            ],
          },
          {
            subtitle: "Ou prestation à la carte",
            items: ["Maquillage", "Coiffure"],
          },
        ],
      },
      {
        id: "atelier-auto-maquillage",
        title: "Atelier d'Auto-Maquillage",
        image: "/photo/maquillage-en-cours.jpeg",
        imagePosition: "object-[center_30%]",
        intro:
          "Apprenez à maîtriser les gestes essentiels grâce à un accompagnement sur mesure. Conseils personnalisés selon votre peau, votre morphologie et vos habitudes. Seule ou en groupe. Pinceaux fournis et produits professionnels mis à disposition.",
        blocks: [
          {
            subtitle: "Les formats",
            items: [
              "L'Essentiel — 1h",
              "Le Perfectionnement — 1h30",
              "La Masterclass — 2h",
            ],
          },
        ],
      },
      {
        id: "seances-photo",
        title: "Séances Photo",
        image: "/photo/maquillage-enceinte.jpeg",
        imagePosition: "object-[center_28%]",
        intro:
          "Une mise en beauté naturelle et lumineuse, pensée pour sublimer vos souvenirs et révéler votre authenticité.",
        blocks: [
          {
            items: ["Couple", "Grossesse", "Famille"],
          },
        ],
      },
    ],
  },
  pros: {
    label: "Professionnels & Créations",
    sections: [
      {
        id: "editorial-creation",
        title: "Éditorial & Création",
        image: "/photo/shooting-8.jpeg",
        imagePosition: "object-[center_25%]",
        intro: "",
        blocks: [
          {
            items: [
              "Shooting éditorial",
              "Campagnes",
              "Projets artistiques",
              "Collaborations créatives",
            ],
          },
        ],
      },
      {
        id: "image-de-marque",
        title: "Image de Marque",
        image: "/photo/maquillage-pro2.jpeg",
        imagePosition: "object-[center_22%]",
        intro: "",
        blocks: [
          {
            items: [
              "Portrait corporate",
              "Branding personnel",
              "LinkedIn",
              "Communication professionnelle",
            ],
          },
        ],
      },
      {
        id: "evenements-prives",
        title: "Événements Privés & Entreprises",
        image: "/photo/shooting-11.jpeg",
        imagePosition: "object-[center_22%]",
        intro: "",
        blocks: [
          {
            items: [
              "Galas",
              "Soirées",
              "Lancements de produits",
              "Événements d'entreprise",
              "Arbres de Noël",
            ],
          },
        ],
      },
      {
        id: "associations-collectivites",
        title: "Associations & Collectivités",
        image: "/photo/maquillage-halloween.jpeg",
        imagePosition: "object-[center_30%]",
        intro: "",
        blocks: [
          {
            items: [
              "Événements publics",
              "Carnavals",
              "Kermesses",
              "Manifestations festives",
            ],
          },
        ],
      },
    ],
  },
};

// Avantages inclus dans toutes les formules Mariée
const inclusFormulesMariee = [
  "Disponibilité 7j/7 tout au long de vos préparatifs",
  "Conseils personnalisés à chaque étape",
  "Planning beauté créé et coordonné par mes soins",
  "Accueil dans un studio privé, pour une expérience exclusive",
  "Questionnaire sur mesure pour une prestation parfaitement adaptée à vos envies",
];

// Section alternée : image d'un côté, encart texte de l'autre (alignés comme Votre mariage)
const ServiceSection = ({ section, reversed }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
    >
      {/* Photo — même hauteur que l'encart texte */}
      <div
        className={`relative h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden rounded-sm order-1 ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={section.image}
          alt={section.title}
          fill
          className={`object-cover ${section.imagePosition || "object-[center_22%]"}`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Encart texte - fond blanc, écriture noire */}
      <div
        className={`bg-white text-black rounded-sm p-6 md:p-8 h-full flex flex-col justify-center order-2 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase">
            {section.title}
          </h2>
          <div className="h-[1px] w-16 bg-black/40 mt-4 mb-6"></div>

          {section.intro && (
            <p className="text-black/70 leading-relaxed mb-6">
              {section.intro}
            </p>
          )}

          <div className="space-y-6">
            {section.blocks.map((block, i) => (
              <div key={i}>
                {block.subtitle && (
                  <h3 className="text-base md:text-lg font-semibold tracking-widest uppercase mb-3">
                    {block.subtitle}
                  </h3>
                )}
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start text-black/70 text-sm md:text-base"
                    >
                      <span className="mr-2 mt-[2px] text-black/40 text-[10px] md:text-xs">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {block.note && (
                  <p className="text-black/50 italic text-sm mt-3">
                    {block.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {section.cta && (
            <div className="mt-8">
              <Link
                href={section.cta.href}
                className="inline-flex items-center bg-black hover:bg-black/80 text-white px-6 py-3 rounded-sm text-sm tracking-wide uppercase transition-colors"
              >
                {section.cta.label}
              </Link>
            </div>
          )}
      </div>
    </motion.div>
  );
};

// Encart "Inclus dans chacune des formules Mariée"
const InclusFormules = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-white text-black rounded-sm p-6 md:p-10 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase">
        Inclus dans chacune des formules Mariée
      </h2>
      <p className="mt-4 text-black/70 italic">
        Un accompagnement d&apos;exception jusqu&apos;au grand jour
      </p>
      <div className="h-[1px] w-16 bg-black/40 mx-auto mt-6 mb-8"></div>
      <ul className="max-w-2xl mx-auto space-y-3 text-left">
        {inclusFormulesMariee.map((item, i) => (
          <li
            key={i}
            className="flex items-start text-black/70 text-sm md:text-base"
          >
            <span className="mr-2 mt-[2px] text-black/40 text-[10px] md:text-xs">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ServicesClient() {
  const [activeUniverse, setActiveUniverse] = useState("mariees");
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const current = univers[activeUniverse];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero services - fond blanc, texte noir (même style que Portfolio) */}
      <div className="bg-white text-black py-16 md:py-24">
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
            className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-black"
          >
            SERVICES
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-black/40 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-black/70 max-w-2xl mx-auto italic"
          >
            Une mise en beauté pensée pour révéler l&apos;éclat de vos
            instants précieux, où le détail fait l&apos;exception.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-16">
        {/* Choix de l'univers (même style que les filtres du Portfolio) */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(univers).map(([key, u]) => (
            <button
              key={key}
              onClick={() => setActiveUniverse(key)}
              className={`px-5 py-2 rounded-sm transition-all duration-300 uppercase tracking-wide text-sm ${
                activeUniverse === key
                  ? "bg-white text-black"
                  : "bg-transparent border border-white/20 text-white hover:border-white/60"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Sections alternées image / texte */}
        <div className="mt-16 space-y-16 md:space-y-24">
          {current.sections.map((section, index) => (
            <div key={section.id}>
              <ServiceSection section={section} reversed={index % 2 === 1} />
              {/* Encart "Inclus dans les formules Mariée" juste après l'Univers Mariée */}
              {section.id === "univers-mariee" && (
                <div className="mt-16 md:mt-24">
                  <InclusFormules />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion + CTA (univers professionnels) */}
        {activeUniverse === "pros" && (
          <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto">
            <p className="text-white/70 leading-relaxed">
              Chaque projet est une rencontre entre votre univers et mon
              expertise, pour créer une mise en beauté harmonieuse, adaptée à
              chaque instant de votre vie.
            </p>
            <p className="text-white/70 mt-4 italic">
              Je serai ravie d&apos;échanger avec vous.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-8 bg-white hover:bg-white/90 text-black px-8 py-3 rounded-sm text-sm tracking-wide uppercase transition-colors"
            >
              Demande privée
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
