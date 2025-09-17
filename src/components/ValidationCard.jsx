import React from "react";

const ValidationCard = () => {
  return (
    <div className="container d-flex">
      <div className="card d-flex" id="ValidationCard">
        <p className="validCard">
          Votre <br /> message <br /> a été envoyé <br /> avec succès ! <br />{" "}
          Réponse sous <br /> 48H
        </p>
      </div>
    </div>
  );
};

export default ValidationCard;
