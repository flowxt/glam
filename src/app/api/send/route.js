import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request) {
  try {
    const formData = await request.json();
    const {
      nom,
      prenom,
      email,
      telephone,
      evenement,
      service, // compatibilité ancienne version
      date,
      lieuPreparation,
      heureCeremonie,
      misesEnBeauteProches,
      nomPhotographe,
      commentConnu,
      message,
    } = formData;

    const typeEvenement = evenement || service;
    const nomComplet = [prenom, nom].filter(Boolean).join(" ") || nom;

    if (!nom || !email || !typeEvenement || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    const safeNom = escapeHtml(nomComplet);
    const safeEmail = escapeHtml(email);
    const safeTelephone = escapeHtml(telephone || "Non spécifié");
    const safeEvenement = escapeHtml(typeEvenement);
    const safeDate = escapeHtml(date || "");
    const safeHeureCeremonie = escapeHtml(heureCeremonie || "");
    const safeNomPhotographe = escapeHtml(nomPhotographe || "");
    const safeLieuPreparation = escapeHtml(lieuPreparation || "");
    const safeMisesEnBeauteProches = escapeHtml(misesEnBeauteProches || "");
    const safeCommentConnu = escapeHtml(commentConnu || "");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // Sujet de l'email - pré-rempli pour la réponse
    const subject = `[GlamBeauty] Nouvelle demande - ${typeEvenement} - ${nomComplet}`;
    const replySubject = `Re: Votre demande Glam Beauty - ${typeEvenement}`;
    const replyBody = `Bonjour ${
      prenom || nom
    },%0D%0A%0D%0AMerci pour votre demande concernant votre ${typeEvenement.toLowerCase()}.%0D%0A%0D%0A`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      replySubject
    )}&body=${replyBody}`;

    // Bloc détails événement
    const detailsBlock = `
        <tr>
          <td style="padding-top:16px;">
            <div style="background:#f8f5f0;border-left:3px solid #c9a87a;padding:16px 20px;border-radius:4px;">
              <p style="margin:0 0 12px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8a7458;font-weight:600;">Détails de l'événement</p>
              <p style="margin:6px 0;color:#2a2a2a;font-size:14px;"><strong>Lieu de préparation :</strong> ${
                safeLieuPreparation || "Non précisé"
              }</p>
              <p style="margin:6px 0;color:#2a2a2a;font-size:14px;"><strong>Heure de cérémonie :</strong> ${
                safeHeureCeremonie || "Non précisée"
              }</p>
              <p style="margin:6px 0;color:#2a2a2a;font-size:14px;"><strong>Photographe :</strong> ${
                safeNomPhotographe || "Non précisé"
              }</p>
              <p style="margin:6px 0;color:#2a2a2a;font-size:14px;"><strong>Mises en beauté des proches :</strong> ${
                safeMisesEnBeauteProches || "Non précisé"
              }</p>
              <p style="margin:6px 0;color:#2a2a2a;font-size:14px;"><strong>Comment connu :</strong> ${
                safeCommentConnu || "Non précisé"
              }</p>
            </div>
          </td>
        </tr>`;

    const emailContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Nouvelle demande Glam Beauty</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;color:#2a2a2a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f4f4;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#000000;padding:32px 28px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-weight:300;letter-spacing:6px;font-size:22px;">GLAM BEAUTY</h1>
              <p style="margin:8px 0 0;color:#c9a87a;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Nouvelle demande de contact</p>
            </td>
          </tr>

          <!-- CTA Répondre direct -->
          <tr>
            <td style="padding:28px 28px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="${mailtoLink}" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:30px;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:500;">✦ Répondre à ${safeNom} ✦</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:10px;">
                    <p style="margin:0;font-size:11px;color:#888;">Ou utilise simplement le bouton "Répondre" de ta messagerie</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Infos client -->
          <tr>
            <td style="padding:24px 28px 8px;">
              <h2 style="margin:0 0 14px;font-size:13px;color:#8a7458;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Coordonnées</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;color:#2a2a2a;">
                <tr><td style="padding:6px 0;width:140px;color:#666;">Nom</td><td style="padding:6px 0;font-weight:500;">${safeNom}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${safeEmail}" style="color:#000;text-decoration:underline;">${safeEmail}</a></td></tr>
                <tr><td style="padding:6px 0;color:#666;">Téléphone</td><td style="padding:6px 0;">${safeTelephone}</td></tr>
              </table>
            </td>
          </tr>

          <!-- Infos événement -->
          <tr>
            <td style="padding:16px 28px 8px;">
              <h2 style="margin:0 0 14px;font-size:13px;color:#8a7458;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Événement</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;color:#2a2a2a;">
                <tr><td style="padding:6px 0;width:140px;color:#666;">Type</td><td style="padding:6px 0;font-weight:500;">${safeEvenement}</td></tr>
                ${
                  safeDate
                    ? `<tr><td style="padding:6px 0;color:#666;">Date souhaitée</td><td style="padding:6px 0;">${safeDate}</td></tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          ${detailsBlock}

          <!-- Message -->
          <tr>
            <td style="padding:24px 28px 8px;">
              <h2 style="margin:0 0 14px;font-size:13px;color:#8a7458;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Message</h2>
              <div style="background:#f8f5f0;padding:18px 20px;border-radius:4px;font-size:14px;line-height:1.6;color:#2a2a2a;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px;text-align:center;border-top:1px solid #eee;margin-top:20px;">
              <p style="margin:0;font-size:11px;color:#aaa;letter-spacing:1px;">Email envoyé depuis glambeauty-pro.fr</p>
              <p style="margin:6px 0 0;font-size:11px;color:#aaa;">« Le détail, signature de l'exception »</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const data = await resend.emails.send({
      from: "GlamBeauty <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject,
      html: emailContent,
      replyTo: email,
      headers: {
        "X-Entity-Ref-ID": `glambeauty-${Date.now()}`,
      },
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
