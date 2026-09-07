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

    console.log("Nouvelle inscription au diagnostic", {
      success: true,
    });

    return res.status(200).json({
      success: true,
      message: "Inscription reçue.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur.",
    });
  }
}