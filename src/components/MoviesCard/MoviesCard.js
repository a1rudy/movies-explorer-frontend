import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { moviesApiUrl } from '../../utils/constants';

function MoviesCard({ isSaved, card }) {
  const isSavedMoviesRoute = useRouteMatch({ path: '/saved-movies', exact: false });

  return (
    <>
      <article className="movies-card">
        <div className="movies-card__info-wrap">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{`${card.duration} минут`}</p>
        </div>

        <a
          className="movies-card__trailer-link"
          href={card.trailerLink}
          target="_blank"
          alt="ссылка на трейлер фильма"
          rel="noreferrer">
          <img
            className="movies-card__image"
            src={`${moviesApiUrl}${card.image.url}`}
            alt={card.nameRU}
          />
        </a>
        <button
          className={`btn movies-card__btn ${isSaved ? 'movies-card__btn_type_saved' : ''} ${
            isSavedMoviesRoute ? 'movies-card__btn_type_remove' : ''
          }`}
          type="button">
          {`${isSaved || isSavedMoviesRoute ? '' : 'Сохранить'}`}
        </button>
      </article>
    </>
  );
}

export default MoviesCard;
