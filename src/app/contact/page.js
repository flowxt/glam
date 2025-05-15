"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
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
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Besoin d&apos;informations ou envie de réserver une prestation ?
          Contactez-moi dès maintenant !
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/30 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">
                Demande de réservation
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-800 rounded-lg text-green-400">
                  Votre message a été envoyé avec succès ! Je vous recontacterai
                  dans les plus brefs délais.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="nom" className="block text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-gray-300 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-300 mb-2"
                    >
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="mariage">
                        Maquillage & Coiffure Mariage
                      </option>
                      <option value="maquillage">Maquillage</option>
                      <option value="coiffure">Coiffure</option>
                      <option value="onglerie">Onglerie</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-300 mb-2">
                    Date souhaitée (si applicable)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/30 p-8 rounded-lg border border-gray-800 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-6">Me contacter</h2>

              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-400">
                    Coordonnées
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-3 text-purple-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-gray-300">
                        glambeautypro38@gmail.com
                      </span>
                    </p>
                    <p className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-3 text-purple-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span className="text-gray-300">06.85.91.48.25</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-400">
                    Horaires
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>9h - 19h</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Samedi</span>
                      <span>Sur rendez-vous</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-400">
                    Zone d&apos;intervention
                  </h3>
                  <p className="text-gray-300">
                    Je me déplace à domicile dans un rayon de 30 km autour de
                    Grenoble. Des frais de déplacement peuvent s&apos;appliquer
                    selon la distance.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                <p className="text-center text-gray-300 italic">
                  &quot;La beauté commence au moment où vous décidez d&apos;être
                  vous-même&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
