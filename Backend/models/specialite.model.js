// Import des types de données Sequelize
const { DataTypes } = require("sequelize");
// Import de la connexion à la base de données
const { sequelize } = require("../config/db");

// Définition du modèle Specialite
const Specialite = sequelize.define(
  "Specialite", // Nom du modèle
  {
    // ID unique de la spécialité
    id_specialite: {
      type: DataTypes.INTEGER, // Nombre entier
      primaryKey: true, // Clé primaire pour rendre la colonne unique
      autoIncrement: true, // Incrémente à chaque nouvelle entrée
      field: "id_specialite", // Nom de la colonne dans la table
    },
    // Nom de la spécialité
    nom_specialite: {
      type: DataTypes.STRING(50), // Texte de 50 caractères max
      allowNull: false, // Champ obligatoire
      field: "specialite", // Nom de la colonne dans la table
    },
    // ID de la catégorie parent (relation)
    id_categorie: {
      type: DataTypes.INTEGER, // Nombre entier
      allowNull: false, // Champ obligatoire
      field: "id_categorie", // Nom de la colonne dans la table (clé étrangère)
    },
  },
  {
    tableName: "tab_specialite", // Nom de la table dans la base
    timestamps: false, // Pas de colonnes created_at/updated_at
  }
);

// Export du modèle pour l'utiliser ailleurs
module.exports = Specialite;
