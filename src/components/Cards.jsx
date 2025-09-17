import { Link } from "react-router-dom";
import "../styles/components/_card.scss";
import "../styles/_settings.scss";
import ImageCard from "./ImageCard";

const Cards = ({ artisan }) => {
  if (!artisan) return null;

  return (
    <Link
      className="container-flex flex-column basicCard"
      to={`/artisan/${artisan.id_artisan}`}
      id={`card-${artisan.id_artisan}`}
    >
      <div className="container d-flex flex-row HeaderCard">
        <div className="name ms-1 me-2 me-xl-4 mt-2 fs- text-color6">
          {artisan.nom_artisan}
        </div>
        <div className="note mt-2 text-color2 ms-2">
          Note: {artisan.note} / 5
        </div>
      </div>

      <div className="container d-flex flex-row MainCard">
        <div className="containerLeft-flex ms-2 mt-3 me-5">
          <ImageCard
            specialite={artisan.specialite?.nom_specialite}
            size={"medium"}
          />
        </div>

        <div className="container-right-flex mt-5">
          <div className="specialite text-color2">Spécialité :</div>
          <p className="text-color4 ms-1">
            {artisan.specialite?.nom_specialite || "N/A"}
          </p>

          <div className="localisation text-color2">Localisation :</div>
          <p className="text-color4 ms-1">{artisan.ville}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
