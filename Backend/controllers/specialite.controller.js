// Import du modèle Specialite
const { Specialite } = require("../models");

// Récupère toutes les spécialités
exports.getAllSpecialites = async (req, res) => {
  try {
    // Recherche toutes les spécialités dans la base de données
    const specialites = await Specialite.findAll();

    // Retourne la liste des spécialités en JSON
    res.json(specialites);
  } catch (err) {
    // Affiche l'erreur dans la console pour le debug
    console.error("Erreur lors de la récupération des spécialités :", err);

    // Retourne une erreur 500 avec un message d'erreur
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des spécialités.",
    });
  }
};

// Récupère les spécialités d'une catégorie spécifique
exports.getSpecialitesByCategory = async (req, res) => {
  try {
    // Récupère l'ID de la catégorie depuis les paramètres de l'URL
    const { id_categorie } = req.params;

    // Cherche toutes les spécialités qui appartiennent à cette catégorie
    const specialites = await Specialite.findAll({
      where: { id_categorie: id_categorie },
    });

    // Si aucune spécialité n'est trouvée pour cette catégorie
    if (specialites.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune spécialité trouvée pour cette catégorie." });
    }

    // Retourne les spécialités trouvées
    res.json(specialites);
  } catch (error) {
    // Affiche l'erreur dans la console pour le debug
    console.error(
      "Erreur lors de la récupération des spécialités par catégorie :",
      error
    );

    // Retourne une erreur 500 avec un message d'erreur
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des spécialités.",
    });
  }
};
