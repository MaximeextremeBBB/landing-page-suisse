export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée",
    });
  }

  try {
    const {
      prenom,
      email,
      niveau,
      diagnostic,
    } = req.body;

    // Vérification des champs obligatoires
    if (!prenom || !email || !niveau || !diagnostic) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

    // Vérification basique de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Adresse email invalide.",
      });
    }

    // On n'accepte que les diagnostics prévus
    const diagnosticsAutorises = [
      "SECONDAIRE_I",
      "SECONDAIRE_II",
    ];

    if (!diagnosticsAutorises.includes(diagnostic)) {
      return res.status(400).json({
        success: false,
        message: "Type de diagnostic invalide.",
      });
    }

    // Vérification de la configuration serveur
    if (
      !process.env.BREVO_API_KEY ||
      !process.env.BREVO_LIST_ID
    ) {
      console.error("Configuration Brevo manquante.");

      return res.status(500).json({
        success: false,
        message: "Erreur de configuration du serveur.",
      });
    }

    // Envoi du contact vers Brevo
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },

        body: JSON.stringify({
          email: email.trim().toLowerCase(),

          attributes: {
            PRENOM: prenom.trim(),
            NIVEAU: niveau.trim(),
            DIAGNOSTIC: diagnostic,
          },

          listIds: [
            Number(process.env.BREVO_LIST_ID),
          ],

          updateEnabled: true,
        }),
      }
    );

    // Si Brevo refuse la requête
    if (!brevoResponse.ok) {
      let brevoError = {};

      try {
        brevoError = await brevoResponse.json();
      } catch {
        brevoError = {
          message: "Réponse Brevo impossible à lire.",
        };
      }

      console.error("Erreur Brevo :", {
        status: brevoResponse.status,
        message: brevoError.message,
      });

      return res.status(502).json({
        success: false,
        message:
          "Impossible d'enregistrer votre demande pour le moment.",
      });
    }

    // Pas de prénom/email dans les logs
    console.log("Nouvelle inscription au diagnostic", {
      diagnostic,
      success: true,
    });

    return res.status(200).json({
      success: true,
      message:
        "Votre mini-diagnostic va vous être envoyé par email.",
    });
  } catch (error) {
    console.error("Erreur serveur :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur.",
    });
  }
}