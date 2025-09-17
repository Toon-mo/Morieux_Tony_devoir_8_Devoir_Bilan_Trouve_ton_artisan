import { Link } from "react-router-dom";
import "../styles/components/_menuCard.scss";
import ImageCard from "./ImageCard";

const MenuCard = ({ artisan }) => {
  if (!artisan) return null;

  return (
    <Link className="card MenuCard" to={`/artisan/${artisan.id_artisan}`}>
      <div className="header-card d-flex flex-row MenuHeaderCard">
        <div className="name me-3 mt-2 text-color6">{artisan.nom_artisan}</div>
        <div className="note mt-2 text-color2 ms-2">
          Note: {artisan.note} / 5
        </div>
      </div>

      <div className="main-card d-flex flex-row">
        <div className="container-left mt-3 ms-4">
          <ImageCard
            specialite={artisan.specialite?.nom_specialite}
            size="medium"
          />
        </div>

        <div className="container-right mt-3 ms-5">
          <div className="specialite text-color2">Spécialité :</div>
          <p className="text-color4">
            {artisan.specialite.nom_specialite
              ? artisan.specialite.nom_specialite
              : "N/A"}
          </p>

          <div className="localisation text-color2">Localisation :</div>
          <p className="text-color4">{artisan.ville}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
