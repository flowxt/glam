"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function WeddingStory() {
  // Animation hooks pour chaque section
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

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-black/90 to-white/5 text-white overflow-hidden relative">
      {/* Séparateur supérieur - délimitation avec AboutSection */}
      <div className="absolute top-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6"
          >
            VOTRE MARIAGE
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-white mx-auto"
          ></motion.div>
        </div>

        {/* Section 1 */}
        <motion.div
          ref={section1Ref}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-32"
        >
          <div className="order-2 lg:order-1 bg-white p-8 rounded-sm border border-white/10 shadow-xl h-full flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold tracking-wide mb-3 text-black">
                Tout commence par un oui
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section1InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-black mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-black/85 leading-relaxed">
              <p>
                Une promesse.
                <br />
                Une émotion.
                <br />
                Le début d&apos;une histoire unique.
              </p>
              <p>
                Puis vient l&apos;envie de créer un mariage qui vous ressemble
                jusque dans les moindres attentions.
              </p>
              <p>
                Vous recherchez bien plus qu&apos;une mise en beauté.
                <br />
                Vous recherchez une présence rassurante, une expertise, un
                regard capable de comprendre ce qui vous met réellement en
                valeur.
              </p>
              <p>
                Je vous accompagne à travers une approche entièrement
                personnalisée, pensée pour vous offrir une expérience fluide,
                raffinée et profondément humaine.
              </p>
              <p>
                L&apos;objectif n&apos;est jamais de vous transformer, mais de
                révéler avec justesse celle que vous êtes déjà…
              </p>
            </div>
          </div>
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-sm order-1 lg:order-2 border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/mariés2.jpeg"
              alt="Maquillage de mariée"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          ref={section2Ref}
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-32"
        >
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-sm border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/maquillage-en-cours.jpeg"
              alt="Essai maquillage mariée"
              fill
              className="object-cover "
            />

            {/* Filigrane subtil */}
            <div className="absolute bottom-3 right-3 bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 font-light tracking-wide pointer-events-none">
              © GlamBeauty
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
          <div className="bg-white p-8 rounded-sm border border-white/10 shadow-xl h-full flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold tracking-wide mb-3 text-black">
                Avant le grand jour
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section2InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-black mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-black/85 leading-relaxed">
              <p>
                Chaque échange permet de construire cette confiance essentielle.
              </p>
              <p>
                Tout commence par un premier contact, un moment de partage pour
                comprendre vos envies, votre univers et l&apos;atmosphère de
                votre mariage.
              </p>
              <p>Puis vient l&apos;essai.</p>
              <p>
                Un instant privilégié où l&apos;on affine ensemble la mise en
                beauté idéale : celle qui s&apos;accordera parfaitement à vos
                traits, votre robe, votre coiffure et à l&apos;énergie de cette
                journée unique.
              </p>
              <p>
                Teint, lumière, équilibre, tenue…
                <br />
                Rien n&apos;est laissé au hasard afin de créer un résultat
                harmonieux, lumineux et fidèle à vous-même.
              </p>
              <p>
                Vous avancez sereinement, avec la certitude d&apos;être
                accompagnée avec attention et maîtrise…
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          ref={section3Ref}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
        >
          <div className="order-2 lg:order-1 bg-white p-8 rounded-sm border border-white/10 shadow-xl h-full flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold tracking-wide mb-3 text-black">
                Le jour J
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section3InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-black mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-black/85 leading-relaxed">
              <p>
                Le temps ralentit.
                <br />
                L&apos;émotion s&apos;installe.
              </p>
              <p>
                Dans le calme des préparatifs, chaque geste est réalisé avec
                précision, délicatesse et savoir-faire.
              </p>
              <p>
                Votre mise en beauté prend vie naturellement, dans une élégance
                subtile et intemporelle, pensée pour vous accompagner du premier
                regard jusqu&apos;aux derniers instants de cette journée.
              </p>
              <p>
                Tout est maîtrisé pour que vous puissiez simplement profiter,
                respirer et vivre pleinement chaque émotion.
              </p>
              <p className="text-black font-medium">
                Vous êtes prête…
                <br />
                Lumineuse…
                <br />
                Sereine…
              </p>
            </div>
          </div>
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-sm order-1 lg:order-2 border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/preparation-mariage2.jpeg"
              alt="Mariée prête pour le grand jour"
              fill
              className="object-cover "
            />

            {/* Filigrane subtil */}
            <div className="absolute bottom-3 right-3 bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 font-light tracking-wide pointer-events-none">
              © GlamBeauty
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24 text-center max-w-2xl mx-auto px-4"
      >
        <h3 className="text-2xl md:text-4xl font-light italic mb-6">
          &ldquo;Le détail fait l&apos;exception&rdquo;
        </h3>
        <div className="h-[1px] w-20 bg-white/40 mx-auto mb-8"></div>
        <p className="text-white/80 mb-8">Et si tout commençait ici ?</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <a
            href="/contact"
            className="relative inline-flex items-center px-12 py-4 overflow-hidden text-lg bg-gradient-to-r from-gray-100 to-white text-black font-medium rounded-full group hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <span className="absolute left-0 w-full h-0 transition-all bg-gradient-to-r from-gray-200 to-white opacity-20 group-hover:h-full top-0 duration-300"></span>
            <span className="relative flex items-center">
              Réserver mon expérience
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
          </a>
        </motion.div>
      </motion.div>

      {/* Séparateur de section avec dégradé */}
      <div className="relative mt-24">
        <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
