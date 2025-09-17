-- Insertion des données dans la table des artisans
--

INSERT INTO `tab_artisan` (`id_artisan`, `nom_artisan`, `note`, `ville`, `a_propos`, `email`, `site_web`, `top`, `id_specialite`) VALUES
-- Artisans de l'alimentation
(1, 'Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', '', 0, 1), -- Boucher
(2, 'Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', '', 1, 2), -- Boulanger (TOP)
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 3), -- Chocolatier (TOP)
(4, 'Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 4), -- Traiteur

-- Artisans du bâtiment
(5, 'Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', '', 1, 5), -- Chauffagiste (TOP)
(6, 'Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 6), -- Electricien
(7, 'Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 7), -- Menuisier
(8, 'Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 8), -- Plombier

-- Artisans de fabrication
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', '', 0, 9), -- Bijoutier
(10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 10), -- Couturier
(11, 'Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', '', 0, 11), -- Ferronier

-- Artisans de services
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', '', 0, 12), -- Coiffeur
(13, 'Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, 12), -- Coiffeur
(14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 12), -- Coiffeur
(15, 'Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 13), -- Fleuriste
(16, 'Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', '', 0, 14), -- Toiletteur
(17, 'CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 15); -- Webdesign

--
-- Insertion des données dans la table des catégories
--

INSERT INTO `tab_categorie` (`id_categorie`, `categorie`) VALUES
(1, 'Bâtiment'),    -- Métiers de la construction et rénovation
(2, 'Services'),    -- Métiers de service à la personne
(3, 'Fabrication'), -- Métiers de création et fabrication artisanale
(4, 'Alimentation');-- Métiers de bouche et restauration

--
-- Insertion des données dans la table des spécialités
--

INSERT INTO `tab_specialite` (`id_specialite`, `specialite`, `id_categorie`) VALUES
-- Spécialités alimentation (catégorie 4)
(1, 'Boucher', 4),     -- Vente de viande
(2, 'Boulanger', 4),   -- Fabrication de pain
(3, 'Chocolatier', 4), -- Création de chocolats
(4, 'Traiteur', 4),    -- Service de restauration

-- Spécialités bâtiment (catégorie 1)
(5, 'Chauffagiste', 1), -- Installation de chauffage
(6, 'Electricien', 1),  -- Installation électrique
(7, 'Menuisier', 1),    -- Travail du bois
(8, 'Plombier', 1),     -- Installation sanitaire

-- Spécialités fabrication (catégorie 3)
(9, 'Bijoutier', 3),   -- Création de bijoux
(10, 'Couturier', 3),  -- Confection de vêtements
(11, 'Ferronier', 3),  -- Travail du métal

-- Spécialités services (catégorie 2)
(12, 'Coiffeur', 2),   -- Coupe et soin des cheveux
(13, 'Fleuriste', 2),  -- Arrangement floral
(14, 'Toiletteur', 2), -- Soin des animaux
(15, 'Webdesign', 2);  -- Création de sites web

COMMIT; -- Valide toutes les insertions