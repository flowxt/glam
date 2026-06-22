"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    evenement: "",
    date: "",
    lieuPreparation: "",
    heureCeremonie: "",
    misesEnBeauteProches: "",
    nomPhotographe: "",
    commentConnu: "",
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
        prenom: "",
        email: "",
        telephone: "",
        evenement: "",
        date: "",
        lieuPreparation: "",
        heureCeremonie: "",
        misesEnBeauteProches: "",
        nomPhotographe: "",
        commentConnu: "",
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
              className="object-cover "
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Nom <span className="text-white/40">*</span>
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
                    htmlFor="prenom"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Prénom <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
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
                    E-Mail <span className="text-white/40">*</span>
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

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Téléphone <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="evenement"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Type d&apos;événement{" "}
                    <span className="text-white/40">*</span>
                  </label>
                  <select
                    id="evenement"
                    name="evenement"
                    value={formData.evenement}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                    required
                  >
                    <option value="" className="bg-black">
                      Choisir...
                    </option>
                    <option value="Mariage" className="bg-black">
                      Mariage
                    </option>
                    <option value="Shooting" className="bg-black">
                      Shooting
                    </option>
                    <option value="Facepainting" className="bg-black">
                      Facepainting
                    </option>
                    <option value="Autres" className="bg-black">
                      Autres
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Date de l&apos;événement{" "}
                    <span className="text-white/40">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                    required
                  />
                </div>

                {/* Champs spécifiques au mariage uniquement */}
                {formData.evenement === "Mariage" && (
                  <>
                    <div>
                      <label
                        htmlFor="lieuPreparation"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Lieu de votre préparation{" "}
                        <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="lieuPreparation"
                        name="lieuPreparation"
                        value={formData.lieuPreparation}
                        onChange={handleChange}
                        placeholder="Adresse ou nom du lieu"
                        className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="heureCeremonie"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Heure de cérémonie
                      </label>
                      <input
                        type="time"
                        id="heureCeremonie"
                        name="heureCeremonie"
                        value={formData.heureCeremonie}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="misesEnBeauteProches"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Mises en beauté des proches
                      </label>
                      <input
                        type="text"
                        id="misesEnBeauteProches"
                        name="misesEnBeauteProches"
                        value={formData.misesEnBeauteProches}
                        onChange={handleChange}
                        placeholder="Ex : 2 personnes (maman, témoin...)"
                        className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nomPhotographe"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Votre photographe ?
                      </label>
                      <input
                        type="text"
                        id="nomPhotographe"
                        name="nomPhotographe"
                        value={formData.nomPhotographe}
                        onChange={handleChange}
                        placeholder="Ex : @photographe ou nom"
                        className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors placeholder:text-white/30"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label
                    htmlFor="commentConnu"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Comment m&apos;avez-vous connu ?
                  </label>
                  <select
                    id="commentConnu"
                    name="commentConnu"
                    value={formData.commentConnu}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 focus:border-white/40 rounded-sm focus:outline-none text-white transition-colors"
                  >
                    <option value="" className="bg-black">
                      Choisir...
                    </option>
                    <option value="Instagram" className="bg-black">
                      Instagram
                    </option>
                    <option value="Google" className="bg-black">
                      Google
                    </option>
                    <option value="Planity" className="bg-black">
                      Planity
                    </option>
                    <option value="Recommandation" className="bg-black">
                      Bouche à oreille / Recommandation
                    </option>
                    <option value="Autre" className="bg-black">
                      Autre
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 mb-2 text-sm"
                  >
                    Vos envies maquillages, coiffures, vos attentes, vos
                    habitudes... <span className="text-white/40">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
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
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
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
          <div className="border border-white/10 rounded-sm bg-white/[0.02] divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-3">
            {/* Coordonnées */}
            <div className="p-8 md:p-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-normal mb-5 text-white tracking-[0.2em] uppercase">
                Coordonnées
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:glambeautypro38@gmail.com"
                  className="block text-white/70 hover:text-white transition-colors break-words"
                >
                  glambeautypro38@gmail.com
                </a>
                <a
                  href="tel:+33685914825"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  06.85.91.48.25
                </a>
                <p className="text-white/70">
                  Saint-Égrève, Grenoble et alentours
                </p>
              </div>
            </div>

            {/* Horaires */}
            <div className="p-8 md:p-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-normal mb-5 text-white tracking-[0.2em] uppercase">
                Horaires
              </h3>
              <div className="w-full max-w-[240px] space-y-2.5 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-white/70">Lun – Ven</span>
                  <span className="text-white font-light whitespace-nowrap">
                    9h – 19h
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-white/70">Samedi</span>
                  <span className="text-white font-light whitespace-nowrap">
                    Sur événement
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-white/70">Dimanche</span>
                  <span className="text-white font-light whitespace-nowrap">
                    Sur événement
                  </span>
                </div>
                <p className="pt-3 mt-2 border-t border-white/10 text-xs text-white/50 italic leading-relaxed">
                  Onglerie non disponible le dimanche.
                </p>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="p-8 md:p-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              </div>
              <h3 className="text-sm font-normal mb-5 text-white tracking-[0.2em] uppercase">
                Zone d&apos;intervention
              </h3>
              <div className="space-y-3 text-sm text-white/70 max-w-xs">
                <p>
                  <span className="text-white">Déplacement offert</span> sur
                  Saint-Égrève, Fontanil et Saint-Martin-le-Vinoux.
                </p>
                <p>
                  Également dans toute la région Rhône-Alpes (supplément selon la
                  distance).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
