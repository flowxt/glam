import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Extraire les données du formulaire
    const formData = await request.json();
    const { nom, email, telephone, service, date, message } = formData;

    // Vérification des données requises
    if (!nom || !email || !service || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Construire le corps de l'email
    const emailContent = `
      <h2>Nouvelle demande de contact - GlamBeauty</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${telephone || "Non spécifié"}</p>
      <p><strong>Service demandé:</strong> ${service}</p>
      ${date ? `<p><strong>Date souhaitée:</strong> ${date}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    // Envoi de l'email
    const data = await resend.emails.send({
      from: "GlamBeauty <contact@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande - ${service}`,
      html: emailContent,
      reply_to: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
