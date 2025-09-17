// Relations entre les différents modèles

// Import des modèles
const Categorie = require("./categorie.model");
const Specialite = require("./specialite.model");
const Artisan = require("./artisan.model");

// Relation : Une catégorie peut avoir plusieurs spécialités (1 vers N)
Categorie.hasMany(Specialite, {
  foreignKey: "id_categorie", // Clé étrangère dans la table Specialite
  as: "specialites", // Alias pour accéder aux spécialités d'une catégorie
});

// Relation inverse : Une spécialité appartient à une seule catégorie (N vers 1)
Specialite.belongsTo(Categorie, {
  foreignKey: "id_categorie", // Clé étrangère dans la table Specialite
  as: "categorie", // Alias pour accéder à la catégorie d'une spécialité
});

// Relation : Une spécialité peut avoir plusieurs artisans (1 vers N)
Specialite.hasMany(Artisan, {
  foreignKey: "id_specialite", // Clé étrangère dans la table Artisan
  as: "artisans", // Alias pour accéder aux artisans d'une spécialité
});

// Relation inverse : Un artisan appartient à une seule spécialité (N vers 1)
Artisan.belongsTo(Specialite, {
  foreignKey: "id_specialite", // Clé étrangère dans la table Artisan
  as: "specialite", // Alias pour accéder à la spécialité d'un artisan
});

// Export de tous les modèles avec leurs relations configurées
module.exports = {
  Categorie,
  Specialite,
  Artisan,
};
