export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée",
    });
  }

  try {
    const { prenom, email, niveau } = req.body;

    if (!prenom || !email || !niveau) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Adresse email invalide.",
      });
    }

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
          email: email.trim(),

          attributes: {
            PRENOM: prenom.trim(),
            NIVEAU: niveau.trim(),
          },

          listIds: [
            Number(process.env.BREVO_LIST_ID),
          ],

          updateEnabled: true,
        }),
      }
    );

    if (!brevoResponse.ok) {
      const brevoError = await brevoResponse.json();

      console.error("Erreur Brevo :", {
        status: brevoResponse.status,
        message: brevoError.message,
      });

      return res.status(502).json({
        success: false,
        message: "Impossible d'enregistrer l'inscription.",
      });
    }

    console.log("Nouvelle inscription au diagnostic", {
      success: true,
    });

    return res.status(200).json({
      success: true,
      message: "Inscription reçue.",
    });

  } catch (error) {
    console.error("Erreur serveur :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur.",
    });
  }
}