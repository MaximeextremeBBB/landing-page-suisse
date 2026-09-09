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
      cycle,
    } = req.body;


    /*
      Vérification des champs
    */

    if (!prenom || !email || !cycle) {

      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });

    }


    /*
      Vérification basique de l'adresse email
    */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email.trim())) {

      return res.status(400).json({
        success: false,
        message: "Adresse email invalide.",
      });

    }


    /*
      Seules ces trois valeurs sont autorisées.
      Ça empêche quelqu'un d'envoyer
      n'importe quelle valeur depuis une requête bricolée.
    */

    const cyclesAutorises = [
      "SECONDAIRE_I",
      "SECONDAIRE_II",
      "AUTRE",
    ];


    if (!cyclesAutorises.includes(cycle)) {

      return res.status(400).json({
        success: false,
        message: "Cycle invalide.",
      });

    }


    /*
      Vérification de la configuration Brevo
    */

    if (
      !process.env.BREVO_API_KEY ||
      !process.env.BREVO_LIST_ID
    ) {

      console.error(
        "Configuration Brevo manquante."
      );


      return res.status(500).json({
        success: false,
        message:
          "Erreur de configuration du serveur.",
      });

    }


    /*
      Création / mise à jour du contact Brevo
    */

    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {

        method: "POST",

        headers: {

          accept: "application/json",

          "Content-Type":
            "application/json",

          "api-key":
            process.env.BREVO_API_KEY,

        },

        body: JSON.stringify({

          email:
            email.trim().toLowerCase(),

          attributes: {

            PRENOM:
              prenom.trim(),

            CYCLE:
              cycle,

          },

          listIds: [
            Number(
              process.env.BREVO_LIST_ID
            ),
          ],

          /*
            Si l'adresse existe déjà,
            Brevo met à jour le contact
            au lieu de créer un doublon.
          */

          updateEnabled: true,

        }),

      }
    );


    /*
      Gestion d'une erreur renvoyée par Brevo
    */

    if (!brevoResponse.ok) {

      let brevoError = {};

      try {

        brevoError =
          await brevoResponse.json();

      } catch {

        brevoError = {
          message:
            "Réponse Brevo impossible à lire.",
        };

      }


      console.error("Erreur Brevo :", {

        status:
          brevoResponse.status,

        message:
          brevoError.message,

      });


      return res.status(502).json({

        success: false,

        message:
          "Impossible d'enregistrer votre demande pour le moment.",

      });

    }


    /*
      Aucun prénom ou email dans les logs.
    */

    console.log(
      "Nouvelle inscription aux diagnostics",
      {
        cycle,
        success: true,
      }
    );


    return res.status(200).json({

      success: true,

      message:
        "Accès aux diagnostics autorisé.",

    });


  } catch (error) {

    console.error(
      "Erreur serveur :",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Erreur serveur.",

    });

  }

}