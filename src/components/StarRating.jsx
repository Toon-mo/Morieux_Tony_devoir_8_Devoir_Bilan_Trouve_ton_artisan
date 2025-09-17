import React from "react";
import "../styles/components/_starRating.scss";

const StarRating = ({ note }) => {
  // Assure que la note est un nombre entre 0 et 5, avec une valeur par défaut de 0 si invalide
  const rating = Math.min(Math.max(parseFloat(note), 0), 5) || 0;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starId = `star-${i}-${Math.random().toString(36).substring(7)}`; // Clé unique pour chaque étoile

    if (i <= rating) {
      // Étoile complètement remplie
      stars.push(
        <span key={starId} className="star-icon full-star">
          ★
        </span>
      );
    } else if (i - 1 < rating && rating < i) {
      // Étoile partiellement remplie
      const percentage = (rating - (i - 1)) * 100;
      stars.push(
        <span key={starId} className="star-icon partial-star-container">
          <span
            className="partial-star-fill"
            style={{ width: `${percentage}%` }}
          >
            ★
          </span>
          <span className="empty-star-background">☆</span>
        </span>
      );
    } else {
      // Étoile vide
      stars.push(
        <span key={starId} className="star-icon empty-star">
          ☆
        </span>
      );
    }
  }

  return (
    <div className="star-rating-container d-flex flex-column align-items-center bg-custom-1">
      <div
        className="star-rating d-flex justify-content-center align-items-center"
        aria-label={`Note de ${rating.toFixed(1)} sur 5 étoiles`}
      >
        {stars}
      </div>
    </div>
  );
};

export default StarRating;
