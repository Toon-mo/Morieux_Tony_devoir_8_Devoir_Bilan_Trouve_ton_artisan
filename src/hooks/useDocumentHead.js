// Création d’un hook dédié à la génération dynamique de balises titre et méta description pour assurer la conformité SEO. »

import { useEffect } from "react";

const useDocumentHead = (title, description) => {
  useEffect(() => {
    // Met à jour le titre de la page
    document.title = title;

    // Met à jour ou crée la méta-description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.setAttribute("name", "description");
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute("content", description);
  }, [title, description]); // Re-exécute l'effet si le titre ou la description changent
};

export default useDocumentHead;
