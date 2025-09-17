-- Configuration MySQL de base
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; -- Permet d'insérer 0 dans les champs AUTO_INCREMENT
SET time_zone = "+00:00"; -- Définit le fuseau horaire UTC

-- Désactive temporairement la vérification des clés étrangères
SET FOREIGN_KEY_CHECKS = 0; -- Permet de supprimer/créer les tables dans n'importe quel ordre

--
-- Base de données : `trouvetonartisanapi`

-- Création de la table des catégories
--

-- Supprime la table si elle existe déjà
DROP TABLE IF EXISTS `tab_categorie`;
-- Crée la table des catégories
CREATE TABLE IF NOT EXISTS `tab_categorie` (
  `id_categorie` int NOT NULL AUTO_INCREMENT, -- ID unique auto-généré
  `categorie` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, -- Nom de la catégorie
  PRIMARY KEY (`id_categorie`) -- Clé primaire
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Création de la table des spécialités
--

-- Supprime la table si elle existe déjà
DROP TABLE IF EXISTS `tab_specialite`;
-- Crée la table des spécialités
CREATE TABLE IF NOT EXISTS `tab_specialite` (
  `id_specialite` int NOT NULL AUTO_INCREMENT, -- ID unique auto-généré
  `specialite` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, -- Nom de la spécialité
  `id_categorie` int NOT NULL, -- ID de la catégorie parent (clé étrangère)
  PRIMARY KEY (`id_specialite`), -- Clé primaire
  KEY `idx_id_categorie_specialite` (`id_categorie`), -- Index pour optimiser les recherches
  CONSTRAINT `fk_specialite_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `tab_categorie` (`id_categorie`) ON DELETE CASCADE ON UPDATE CASCADE -- Relation avec catégorie
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Création de la table des artisans
--

-- Supprime la table si elle existe déjà
DROP TABLE IF EXISTS `tab_artisan`;
-- Crée la table des artisans
CREATE TABLE IF NOT EXISTS `tab_artisan` (
  `id_artisan` int NOT NULL AUTO_INCREMENT, -- ID unique auto-généré
  `nom_artisan` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL UNIQUE, -- Nom unique de l'artisan
  `note` decimal(5,1) NOT NULL, -- Note sur 5 (ex: 4.5)
  `ville` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, -- Ville de l'artisan
  `a_propos` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, -- Description de l'artisan
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL UNIQUE, -- Email unique
  `site_web` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL, -- Site web (optionnel)
  `top` tinyint(1) NOT NULL DEFAULT 0, -- Artisan dans le top 3 (0=non, 1=oui)
  `id_specialite` int NOT NULL, -- ID de la spécialité (clé étrangère)
  PRIMARY KEY (`id_artisan`), -- Clé primaire
  KEY `idx_id_specialite_artisan` (`id_specialite`), -- Index pour optimiser les recherches
  CONSTRAINT `fk_artisan_specialite` FOREIGN KEY (`id_specialite`) REFERENCES `tab_specialite` (`id_specialite`) ON DELETE CASCADE ON UPDATE CASCADE -- Relation avec spécialité
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Réactive la vérification des clés étrangères
SET FOREIGN_KEY_CHECKS = 1; -- Remet la vérification normale des relations