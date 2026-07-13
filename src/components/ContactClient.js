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
    <div className="min-h-screen bg-sable text-ink">
      {/* Hero contact - fond blanc, texte noir (même style que Portfolio/Services) */}
      <div className="bg-white text-ink py-10 md:py-16">
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
            className="text-4xl md:text-6xl font-light tracking-wider mb-4 text-ink uppercase"
          >
            Votre maquilleuse professionnelle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-xl font-semibold tracking-wide text-ink/70 mb-8"
          >
            Grenoble - Rhône-Alpes - France
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-ink/40 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-ink/70 max-w-2xl mx-auto italic"
          >
            Je vous invite à me faire part de votre projet via le formulaire
            ci-dessous. Je reviendrai vers vous afin d&apos;échanger sur vos
            attentes et de vous proposer un accompagnement sur mesure.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-16 md:py-24">
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
            <div className="border border-ink/10 rounded-sm p-8 bg-white">
              <h2 className="text-3xl font-light mb-8 tracking-wide text-ink">
                Demande de réservation
              </h2>

              {submitStatus === "success" && (
                <div className="mb-8 p-4 border border-green-500/20 rounded-sm bg-green-500/5 text-ink">
                  Votre message a été envoyé avec succès ! Je vous recontacterai
                  dans les plus brefs délais.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-4 border border-red-500/20 rounded-sm bg-red-500/5 text-ink">
                  <p>Une erreur est survenue : {errorMessage}</p>
                  <p>
                    Veuillez réessayer ou me contacter directement par
                    téléphone.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Nom <span className="text-ink/40">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Prénom <span className="text-ink/40">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    E-Mail <span className="text-ink/40">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Téléphone <span className="text-ink/40">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="evenement"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Type d&apos;événement{" "}
                    <span className="text-ink/40">*</span>
                  </label>
                  <select
                    id="evenement"
                    name="evenement"
                    value={formData.evenement}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  >
                    <option value="" className="bg-white">
                      Choisir...
                    </option>
                    <option value="Mariage" className="bg-white">
                      Mariage
                    </option>
                    <option value="Shooting" className="bg-white">
                      Shooting
                    </option>
                    <option value="Facepainting" className="bg-white">
                      Facepainting
                    </option>
                    <option value="Autres" className="bg-white">
                      Autres
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Date de l&apos;événement{" "}
                    <span className="text-ink/40">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                    required
                  />
                </div>

                {/* Champs spécifiques au mariage uniquement */}
                {formData.evenement === "Mariage" && (
                  <>
                    <div>
                      <label
                        htmlFor="lieuPreparation"
                        className="block text-ink/70 mb-2 text-sm"
                      >
                        Lieu de votre préparation{" "}
                        <span className="text-ink/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="lieuPreparation"
                        name="lieuPreparation"
                        value={formData.lieuPreparation}
                        onChange={handleChange}
                        placeholder="Adresse ou nom du lieu"
                        className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors placeholder:text-ink/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="heureCeremonie"
                        className="block text-ink/70 mb-2 text-sm"
                      >
                        Heure de cérémonie
                      </label>
                      <input
                        type="time"
                        id="heureCeremonie"
                        name="heureCeremonie"
                        value={formData.heureCeremonie}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="misesEnBeauteProches"
                        className="block text-ink/70 mb-2 text-sm"
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
                        className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors placeholder:text-ink/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nomPhotographe"
                        className="block text-ink/70 mb-2 text-sm"
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
                        className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors placeholder:text-ink/30"
                      />
                    </div>
                  </>
                )}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="commentConnu"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Comment m&apos;avez-vous connu ?
                  </label>
                  <select
                    id="commentConnu"
                    name="commentConnu"
                    value={formData.commentConnu}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors"
                  >
                    <option value="" className="bg-white">
                      Choisir...
                    </option>
                    <option value="Instagram" className="bg-white">
                      Instagram
                    </option>
                    <option value="Google" className="bg-white">
                      Google
                    </option>
                    <option value="Planity" className="bg-white">
                      Planity
                    </option>
                    <option value="Recommandation" className="bg-white">
                      Bouche à oreille / Recommandation
                    </option>
                    <option value="Autre" className="bg-white">
                      Autre
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-ink/70 mb-2 text-sm"
                  >
                    Vos envies maquillages, coiffures, vos attentes, vos
                    habitudes... <span className="text-ink/40">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 bg-transparent border border-ink/20 focus:border-ink/50 rounded-sm focus:outline-none text-ink transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`sm:col-span-2 w-full py-3 rounded-sm font-light tracking-wide text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-ink/40 text-white cursor-not-allowed"
                      : "bg-ink hover:bg-ink/90 text-white"
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Prestataires recommandés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-6">
            Prestataires recommandés
          </h2>
          <p className="text-ink/70 max-w-2xl mx-auto italic">
            Je vous invite à découvrir une sélection de professionnels avec
            lesquels j&apos;ai eu le plaisir de collaborer. Des partenaires de
            confiance, choisis pour leur talent, leur professionnalisme et la
            qualité de leurs prestations.
          </p>
        </motion.div>

        {/* Informations de contact */}
        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 30 }}
          animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="bg-white text-ink rounded-sm divide-y divide-ink/10 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-2">
            {/* Coordonnées */}
            <div className="p-8 md:p-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-ink/70"
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
              <h3 className="text-sm font-normal mb-5 text-ink tracking-[0.2em] uppercase">
                Coordonnées
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:glambeautypro38@gmail.com"
                  className="block text-ink/70 hover:text-ink transition-colors break-words"
                >
                  glambeautypro38@gmail.com
                </a>
                <a
                  href="tel:+33685914825"
                  className="block text-ink/70 hover:text-ink transition-colors"
                >
                  06.85.91.48.25
                </a>
                <p className="text-ink/70">
                  Grenoble - Rhône-Alpes - France
                </p>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="p-8 md:p-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-ink/70"
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
              <h3 className="text-sm font-normal mb-5 text-ink tracking-[0.2em] uppercase">
                Zone d&apos;intervention
              </h3>
              <div className="space-y-3 text-sm text-ink/70 max-w-xs">
                <p>
                  <span className="text-ink">Déplacements :</span> Grenoble,
                  en Rhône-Alpes et partout en France.
                </p>
                <p className="text-ink/50 italic text-xs leading-relaxed">
                  Des frais de déplacement peuvent être appliqués selon le lieu
                  de la prestation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
