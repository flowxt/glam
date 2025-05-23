"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Animation hooks pour chaque section
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Une erreur est survenue lors de l'envoi du message"
        );
      }

      setSubmitStatus("success");
      // Réinitialiser le formulaire
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        service: "",
        date: "",
        message: "",
      });

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-10">
        {/* En-tête avec titre et trait animé */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6"
          >
            VOTRE MAQUILLEUSE PROFESSIONNELLE
            <br />
            <span className="text-2xl md:text-3xl font-bold text-white/80 tracking-wide mt-3 block">
              Saint-Égrève, Grenoble et alentours
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-white/40 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-white/80 max-w-2xl mx-auto"
          >
            Pour toute demande d&apos;information ou réservation, n&apos;hésitez
            pas à me contacter. Je vous répondrai dans les plus brefs délais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image */}
          <motion.div
            className="lg:col-span-2 relative h-[500px] md:h-[600px] overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={formRef}
          >
            <Image
              src="/photo/jennifer.jpeg"
              alt="Maquillage professionnel à Saint-Égrève et Grenoble - Jennifer, maquilleuse et coiffeuse"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="border border-white/10 rounded-sm p-8 bg-black/80">
              <h2 className="text-3xl font-light mb-8 tracking-wide">
                Demande de réservation
              </h2>

              {submitStatus === "success" && (
                <div className="mb-8 p-4 border border-green-500/20 rounded-sm bg-green-500/5 text-white">
                  Votre message a été envoyé avec succès ! Je vous recontacterai
                  dans les plus brefs délais.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-4 border border-red-500/20 rounded-sm bg-red-500/5 text-white">
                  <p>Une erreur est survenue : {errorMessage}</p>
                  <p>
                    Veuillez réessayer ou me contacter directement par
                    téléphone.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                      required
                    >
                      <option value="" className="bg-black">
                        Sélectionnez un service
                      </option>
                      <option value="mariage" className="bg-black">
                        Maquillage & Coiffure Mariage
                      </option>
                      <option value="maquillage" className="bg-black">
                        Maquillage
                      </option>
                      <option value="coiffure" className="bg-black">
                        Coiffure
                      </option>

                      <option value="autre" className="bg-black">
                        Autre
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Date souhaitée (optionnel)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 border border-white/40 rounded-sm font-light tracking-wide text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-white/10 text-white/50 cursor-not-allowed"
                      : "bg-transparent hover:bg-white/10 text-white"
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Informations de contact */}
        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 30 }}
          animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-sm p-6 bg-black/80">
              <h3 className="text-2xl font-light mb-4 text-white tracking-wide">
                Coordonnées
              </h3>
              <div className="space-y-4 text-white/80">
                <p className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/60 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>glambeautypro38@gmail.com</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/60 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>06.85.91.48.25</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/60 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Saint-Égrève, Grenoble et alentours</span>
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-sm p-6 bg-black/80">
              <h3 className="text-2xl font-light mb-4 text-white tracking-wide">
                Horaires
              </h3>
              <div className="space-y-3 text-white/80">
                <p className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 19h</span>
                </p>
                <p className="flex justify-between">
                  <span>Samedi</span>
                  <span>Événement uniquement</span>
                </p>
                <p className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Événements uniquement</span>
                </p>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <p className="text-sm text-white/60 italic">
                    Les prestations d&apos;onglerie ne sont pas disponibles le
                    dimanche.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-sm p-6 bg-black/80">
              <h3 className="text-2xl font-light  mb-4 text-white tracking-wide">
                Zone d&apos;intervention
              </h3>
              <p className="text-white/80">
                Je me déplace à domicile dans tout le Rhônes Alpes. Des frais de
                déplacement peuvent s&apos;appliquer selon la distance.
              </p>
              <p className="mt-4 text-white/60 text-sm italic">
                &quot;La beauté commence au moment où vous décidez d&apos;être
                vous-même&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
