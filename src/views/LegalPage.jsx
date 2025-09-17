import React from "react";
import useDocumentHead from "../hooks/useDocumentHead";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/_settings.scss";

const pageTitles = {
  "mentions-legales": "Mentions légales",
  "donnees-personnelles": "Données personnelles",
  accessibilite: "Accessibilité",
  cookies: "Politique de cookies",
  presse: "Espace Presse",
  contacts: "Nous contacter",
  "page-legale-generique": "Page légale",
};

// Le composant reçoit `pageType` en tant que prop
const LegalPage = ({ pageType }) => {
  // Récupère le titre exact depuis le mapping, ou un titre par défaut si non trouvé
  const displayTitle = pageTitles[pageType] || pageTitles["Page légale"];

  // Fonction utilitaire pour mettre la première lettre en majuscule et remplacer les tirets
  const formatPageName = (str) => {
    if (!str) return "Page légale";
    const words = str.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return capitalizedWords.join(" ");
  };

  const formattedTitle = formatPageName(pageType); // Ex: "mentions-legales" devient "Mentions Légales"

  // Hook, définit le titre et la méta-description
  useDocumentHead(
    ` ${formattedTitle} | Trouve ton artisan !`,
    `Pages ${formattedTitle}, en cours de construction.`
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <div className="main flex-grow-1">
        <h1 className="text-center f1 mt-5 mb-5 text-color6">{displayTitle}</h1>
        <p className="text-center">Page en construction...</p>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPage;
