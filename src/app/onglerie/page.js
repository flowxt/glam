"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AppleCardsDemo } from "@/components/AppleCardsDemo";

export default function Onglerie() {
  // Animation des éléments qui apparaissent
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Services design Apple-style
  const serviceCards = [
    {
      id: 1,
      title: "Vernis Semi-Permanent",
      description:
        "Un vernis longue durée pour une finition parfaite jusqu'à 3 semaines",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-pink-500/90 to-purple-600/90",
    },
    {
      id: 2,
      title: "Pose Gel",
      description:
        "Extension et renforcement avec une finition naturelle et durable",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-blue-500/90 to-indigo-600/90",
    },
    {
      id: 3,
      title: "Nail Art",
      description:
        "Designs personnalisés pour sublimer vos ongles avec créativité",
      image: "/images/vernis.jpg",
      color: "bg-gradient-to-br from-purple-500/90 to-pink-600/90",
    },
  ];

  // Liste des services d'onglerie détaillés
  const services = [
    {
      title: "Pose complète gel",
      description:
        "Extension d&apos;ongles avec gel UV pour plus de longueur et de solidité.",
      features: [
        "Préparation des ongles",
        "Pose de capsules",
        "Application du gel",
        "Limage et façonnage",
        "Finition soignée",
      ],
      color: "purple",
    },
    {
      title: "Remplissage",
      description: "Entretien de votre pose de gel existante.",
      features: [
        "Nettoyage de la repousse",
        "Application de gel",
        "Correction de forme si nécessaire",
        "Finition soignée",
      ],
      color: "pink",
    },
    {
      title: "Vernis semi-permanent",
      description:
        "Pose de vernis longue durée qui tient jusqu&apos;à 3 semaines.",
      features: [
        "Préparation des ongles",
        "Application du vernis",
        "Séchage sous lampe UV",
        "Couche de finition",
      ],
      color: "blue",
    },
    {
      title: "Nail Art",
      description: "Décorations artistiques pour sublimer vos ongles.",
      features: [
        "Motifs personnalisés",
        "Strass et paillettes",
        "Effets marbrés",
        "Designs tendance",
      ],
      color: "purple",
    },
  ];

  const getGradient = (color) => {
    switch (color) {
      case "purple":
        return "from-purple-600 to-indigo-600";
      case "pink":
        return "from-pink-500 to-rose-500";
      case "blue":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-purple-600 to-indigo-600";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* Hero Section amélioré */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/vernis.jpg')] bg-cover bg-center opacity-40"></div>

          <div className="relative z-20 py-20 px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 text-left mb-10 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                      Art d&apos;Onglerie
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <p className="text-xl md:text-2xl font-light text-gray-100 mb-8 max-w-xl">
                      Prothésiste ongulaire depuis 2023, je sublime vos mains
                      avec des prestations élégantes et durables.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="#services"
                        className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-900/30"
                      >
                        Découvrir nos prestations
                      </Link>
                      <Link
                        href="/contact"
                        className="px-8 py-3 bg-transparent border border-white/30 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
                      >
                        Prendre rendez-vous
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="md:w-1/3"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-600/40 blur-xl"></div>
                    <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/20">
                      <Image
                        src="/images/vernis.jpg"
                        alt="Onglerie professionnelle"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 flex justify-center gap-8 md:gap-16"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                    3+
                  </p>
                  <p className="text-gray-300 text-sm">
                    Années d&apos;expérience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                    100%
                  </p>
                  <p className="text-gray-300 text-sm">Satisfaction client</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                    10+
                  </p>
                  <p className="text-gray-300 text-sm">Designs uniques</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Apple Cards Carousel */}
        <motion.section
          id="services"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <AppleCardsDemo />
        </motion.section>

        {/* Section présentation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="bg-gradient-to-b from-purple-900/30 to-black p-8 rounded-lg border border-purple-800/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Un art au bout des doigts
              </h2>
              <p className="text-gray-300 mb-4">
                Passionnée par l&apos;art de la beauté des mains, je mets mon
                expertise à votre service pour vous offrir des prestations
                d&apos;onglerie personnalisées et de qualité. Que ce soit pour
                une occasion spéciale ou pour prendre soin de vous au quotidien,
                je m&apos;adapte à vos envies.
              </p>
              <p className="text-gray-300">
                Formée aux dernières techniques et utilisant des produits de
                qualité professionnelle, je vous garantis un résultat impeccable
                et durable. Chaque prestation est réalisée avec soin et
                précision pour mettre en valeur vos mains.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section services détaillés */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Détails des prestations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
                className="bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800"
              >
                <div
                  className={`h-3 bg-gradient-to-r ${getGradient(
                    service.color
                  )}`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-5">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`inline-block w-2 h-2 mt-1.5 mr-2 rounded-full bg-gradient-to-r ${getGradient(
                            service.color
                          )}`}
                        ></span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section conseils d'entretien */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="bg-gradient-to-b from-black to-gray-900/40 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Conseils d&apos;entretien
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-pink-400">
                  Pour vos ongles en gel
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Évitez les chocs et les pressions excessives</li>
                  <li>• Utilisez des gants pour les tâches ménagères</li>
                  <li>• Hydratez vos cuticules régulièrement</li>
                  <li>• Prévoyez un remplissage toutes les 3 semaines</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">
                  Pour votre vernis semi-permanent
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Appliquez de l&apos;huile à cuticules quotidiennement
                  </li>
                  <li>
                    • Évitez l&apos;exposition prolongée à l&apos;eau chaude
                  </li>
                  <li>• N&apos;utilisez pas vos ongles comme outils</li>
                  <li>• Renouvelez votre pose toutes les 2-3 semaines</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prête à sublimer vos mains ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Que ce soit pour une occasion spéciale ou pour vous faire plaisir,
              prenez rendez-vous dès maintenant !
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
