"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/90"></div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/photo/preparation-mariage8.jpeg"
          alt="Fond beauté mariage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-20 grayscale"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-10 text-center relative z-10 pt-16 md:pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex justify-center mb-2 md:mb-4"
          >
            <Image
              src="/logos/logo-sans-fond.png"
              alt="Logo GlamBeauty"
              width={160}
              height={160}
              priority
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </motion.div>
          <h1 className="mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider"
            >
              <span className="inline-block">
                GLAM BEAUTY
                <div className="mt-6 mx-[0.65em]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                    className="h-1 bg-white"
                  />
                </div>
              </span>
            </motion.div>
            <div className="font-sans text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-normal md:tracking-wider mt-8 leading-relaxed uppercase whitespace-nowrap">
              MAKEUP &amp; HAIR SIGNATURE
            </div>
            <div className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold tracking-normal md:tracking-wide mt-4 whitespace-nowrap">
              Grenoble • Rhône-Alpes • France
            </div>
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto mb-10 md:mb-14 text-gray-300 italic">
            « Le détail, signature de l&apos;exception »
          </p>
        </motion.div>
      </motion.div>

      {/* Séparateur de section avec dégradé */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
