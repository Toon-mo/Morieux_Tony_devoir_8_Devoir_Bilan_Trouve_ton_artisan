const db = require("../models"); // Importe tous les modèles (pour accéder à Artisan)

// Traite l'envoi du formulaire de contact
exports.submitContactForm = async (req, res) => {
  try {
    // Récupère les données du formulaire
    const { name, email, subject, message, artisanId } = req.body;

    // Vérifie que tous les champs sont remplis
    if (!name || !email || !subject || !message || !artisanId) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // Vérifie le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "L'adresse email est invalide." });
    }

    // Cherche l'artisan dans la base de données
    const artisan = await db.Artisan.findByPk(artisanId);
    if (!artisan) {
      return res
        .status(404)
        .json({ message: "Artisan cible non trouvé pour le contact." });
    }

    // Affiche le message dans la console (simulation d'envoi)
    console.log(`
        Nouveau message pour : ${artisan.nom_artisan}
        Email de : ${artisan.email}
        De: ${name} <${email}>
        Objet: ${subject}
        Message: ${message}  
    `);

    // Confirme l'envoi au client
    res.status(200).json({
      message:
        "Votre message a été envoyé avec succès. Une réponse sera apportée sous 48h.",
    });
  } catch (error) {
    // Affiche l'erreur dans la console
    console.error(
      "Erreur lors du traitement du formulaire de contact :",
      error
    );
    // Retourne une erreur serveur
    res
      .status(500)
      .json({ message: "Erreur serveur lors de l'envoi du message." });
  }
};
