import Bijoutier from "../assets/images/Bijoutier.jpg";
import Boucher from "../assets/images/Boucher.jpg";
import Boulanger from "../assets/images/Boulanger.jpg";
import Chauffagiste from "../assets/images/Chauffagiste.jpg";
import Chocolatier from "../assets/images/Chocolatier.jpg";
import Coiffeur from "../assets/images/Coiffeur.jpg";
import Couturier from "../assets/images/Couturier.jpg";
import Webdesign from "../assets/images/Developpeur.jpg";
import Electricien from "../assets/images/Electricien.jpg";
import Ferronier from "../assets/images/Ferronier.jpg";
import Fleuriste from "../assets/images/Fleuriste.jpg";
import Menuisier from "../assets/images/Menuisier.jpg";
import Plombier from "../assets/images/Plombier.jpg";
import Toiletteur from "../assets/images/Toiletteur.jpg";
import Traiteur from "../assets/images/Traiteur.jpg";

const imagesParSpecialite = {
  Bijoutier,
  Boucher,
  Boulanger,
  Chauffagiste,
  Chocolatier,
  Coiffeur,
  Couturier,
  Electricien,
  Ferronier,
  Fleuriste,
  Menuisier,
  Plombier,
  Toiletteur,
  Traiteur,
  Webdesign,
};

const ImageCard = ({ specialite, size = "" }) => {
  if (!specialite) return null;

  // Normalisation du nom pour correspondre à la clé
  const key =
    specialite.charAt(0).toUpperCase() + specialite.slice(1).toLowerCase();
  const image = imagesParSpecialite[key];

  if (!image) {
    console.warn(`Pas d'image trouvée pour : ${key}`);
    return null;
  }

  return <img src={image} alt={key} className={`imgCard imgCard--${size}`} />;
};

export default ImageCard;
