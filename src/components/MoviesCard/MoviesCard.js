import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function MoviesCard({ isSaved, image }) {
  const isSavedMoviesRoute = useRouteMatch({ path: '/saved-movies', exact: false });
  return (
    <>
      <article className="movies-card">
        <div className="movies-card__info-wrap">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">27 минут</p>
        </div>
        <div className="movies-card__image-wrap">
          <img
            className="movies-card__image"
            src={image}
            alt="Тут должен быть постер фильма, похоже что-то пошло не так."
          />
        </div>
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
// {imageMoviesCard[1].image}
export default MoviesCard;
