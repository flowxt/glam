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
          className="object-cover object-top md:object-center opacity-20 grayscale"
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
          <h1 className="mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider"
            >
              GLAM BEAUTY
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                className="h-1 bg-white mx-auto mt-10"
                style={{ originX: 0.5 }}
              ></motion.div>
            </motion.div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light tracking-wider mt-8 leading-relaxed">
              Makeup & Hair Signature
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light tracking-widest mt-4">
              Grenoble • Rhône-Alpes • France
            </div>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-14 text-gray-300 italic">
            « Le détail, signature de l&apos;exception »
          </p>
        </motion.div>
      </motion.div>

      {/* Séparateur de section avec dégradé */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </section>
  );
}
