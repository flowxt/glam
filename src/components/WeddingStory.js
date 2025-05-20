"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  IconPhone,
  IconHeart,
  IconDiamond,
  IconRings,
  IconWand,
  IconBrush,
  IconMoodSmile,
} from "@tabler/icons-react";

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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-32"
        >
          <div className="order-2 md:order-1 bg-white/5 p-8 rounded-sm border border-white/20 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-light tracking-wide mb-3 flex items-center gap-3">
                <IconRings className="w-6 h-6 text-white" stroke={1.5} />
                Tout commence par une belle histoire
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section1InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-white mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p className="flex items-start gap-2">
                <IconWand
                  className="w-5 h-5 text-white mt-1 flex-shrink-0"
                  stroke={1.5}
                />
                <span>
                  Tout commence par une belle histoire… et un &apos;oui&apos;
                  qui change tout ! Vous êtes en train de préparer le grand jour
                  : votre mariage ! Félicitations ! Si vous êtes ici, c&apos;est
                  sûrement que vous cherchez quelqu&apos;un pour prendre soin de
                  vous ce jour-là — et je suis ravie que le hasard (ou pas !)
                  vous ait menées jusqu&apos;à moi.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <IconBrush
                  className="w-5 h-5 text-white mt-1 flex-shrink-0"
                  stroke={1.5}
                />
                <span>
                  Je suis maquilleuse professionnelle depuis 5 ans, passionnée,
                  à l&apos;écoute, un brin rigolote (oui, je dédramatise souvent
                  les petits stress du jour J !), mais surtout minutieuse,
                  douce, et toujours là pour vous mettre à l&apos;aise. Mon but
                  : que vous vous sentiez belle, sereine, et surtout vous-même,
                  avec une mise en beauté qui vous sublime tout en restant
                  fidèle à votre style.
                </span>
              </p>
              <p>
                Le moment de la préparation, c&apos;est plus qu&apos;un simple
                maquillage ou une coiffure. C&apos;est un instant suspendu,
                souvent rempli d&apos;émotions, où je vous aide à vous détendre,
                à souffler… et à vous sentir bien entourée. On échange, on
                rigole, je vous glisse mes meilleurs conseils pour que tout se
                passe au mieux — et je m&apos;occupe de créer, avec vous, le
                look qui vous mettra en valeur, tout en finesse et en naturel.
              </p>
              <p>
                Mon approche : un maquillage élégant, soigné, avec une touche de
                glamour, sans jamais en faire trop. Je vous accompagne avec
                bienveillance et je prends toujours le temps de comprendre ce
                qui vous fera vous sentir bien dans votre peau, ce jour-là.
              </p>
              <p className="flex items-start gap-2">
                <IconMoodSmile
                  className="w-5 h-5 text-white mt-1 flex-shrink-0"
                  stroke={1.5}
                />
                <span>
                  Mon petit conseil : restez vous-même. Faites confiance à votre
                  feeling, et laissez-moi prendre soin de vous, tout simplement.
                </span>
              </p>
            </div>
          </div>
          <motion.div
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm order-1 md:order-2 border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/mariés2.jpeg"
              alt="Maquillage de mariée"
              fill
              className="object-cover grayscale"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-32"
        >
          <motion.div
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/maquillage-en-cours.jpeg"
              alt="Essai maquillage mariée"
              fill
              className="object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
          <div className="bg-white/5 p-8 rounded-sm border border-white/20 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-light tracking-wide mb-3">
                Avant le grand jour
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section2InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-white mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <div className="mb-8">
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                  <IconPhone className="w-5 h-5 text-white" stroke={1.5} />
                  Un moment d&apos;échange avant tout
                </h4>
                <p>
                  Avant notre première rencontre, j&apos;aime prendre le temps
                  de discuter avec vous au téléphone, une fois le formulaire
                  rempli.
                </p>
                <p>
                  Ce moment est précieux : il me permet de mieux comprendre
                  votre projet, de cerner vos envies et de répondre à vos
                  premières questions. C&apos;est aussi l&apos;occasion de poser
                  les bases d&apos;une relation de confiance, essentielle pour
                  une collaboration fluide et sereine.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                  <IconHeart className="w-5 h-5 text-white" stroke={1.5} />
                  Le jour de l&apos;essai
                </h4>
                <p>
                  C&apos;est lors de l&apos;essai qu&apos;on se rencontre
                  vraiment et que votre mise en beauté commence à prendre forme.
                </p>
                <p>
                  Vous me partagez vos idées, vos inspirations, votre style,
                  peut-être une photo de votre robe… Et ensemble, on définit le
                  look qui vous ressemble.
                </p>
                <p>
                  Je prends en compte chaque détail : votre visage, votre peau,
                  vos cheveux, votre morphologie, la saison de votre mariage, et
                  l&apos;ambiance du jour J.
                </p>
                <p>
                  L&apos;objectif ? Qu&apos;on crée ensemble, dans la bonne
                  humeur, un maquillage et une coiffure à votre image,
                  jusqu&apos;à obtenir le résultat qui vous fait vibrer. Je
                  guette toujours ce petit &quot;wow&quot; devant le miroir –
                  c&apos;est mon moment préféré !
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          ref={section3Ref}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <div className="order-2 md:order-1 bg-white/5 p-8 rounded-sm border border-white/20 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-light tracking-wide mb-3">
                Le grand jour
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={section3InView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[1px] bg-white mb-6"
              ></motion.div>
            </div>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <div>
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                  <IconDiamond className="w-5 h-5 text-white" stroke={1.5} />
                  Le jour J
                </h4>
                <p>
                  Le grand jour est enfin là, et je suis tellement heureuse de
                  faire partie de ce moment inoubliable avec vous. Je prends le
                  temps de m&apos;installer sereinement sur le lieu de
                  préparation, pour m&apos;assurer que tout soit parfait pour
                  vous et vos proches.
                </p>
                <p>
                  Je commence souvent par chouchouter vos invités, pour que vous
                  puissiez vraiment profiter de votre matinée, et vous avez
                  ensuite toute mon attention pour le meilleur moment : vous.
                </p>
                <p>
                  Vous êtes ma priorité, et je vous invite à savourer ces
                  instants de complicité avec vos proches. Puis, pendant que je
                  prends soin de vous, accordez-vous un petit moment de sérénité
                  pour souffler avant le grand moment.
                </p>
                <p>
                  Je reste présente tout au long de votre préparation,
                  jusqu&apos;à votre départ, pour ajuster vos accessoires et
                  bijoux, et m&apos;assurer que vous êtes resplendissante et
                  prête à vivre ce jour exceptionnel.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm order-1 md:order-2 border border-white/20"
            variants={imageVariant}
          >
            <Image
              src="/photo/preparation-mariage2.jpeg"
              alt="Mariée prête pour le grand jour"
              fill
              className="object-cover grayscale"
            />
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
        <h3 className="text-2xl md:text-4xl font-bold mb-6">
          Prête à vivre votre plus belle journée ?
        </h3>
        <div className="h-[1px] w-20 bg-white/40 mx-auto mb-8"></div>
        <p className="text-white/80 mb-8">
          Discutons ensemble de votre vision et créons une mise en beauté qui
          vous ressemble pour ce jour exceptionnel.
        </p>
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
              Réserver ma date
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
