import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { moviesApiUrl } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

function MoviesCard({ card, onSaveMovie, onDeleteMovie, onDeleteSavedMovie }) {
  const isSavedMoviesRoute = useRouteMatch({ path: '/saved-movies', exact: false });
  const isMoviesRoute = useRouteMatch({ path: '/movies', exact: false });
  const { savedMovies } = React.useContext(AppContext);

  const isSavedMovies = savedMovies.some((item) => item.movieId === card.id);

  const movieImage = isSavedMoviesRoute ? card.image : `${moviesApiUrl}${card.image.url}`;
  const movieTrailer = isSavedMoviesRoute ? card.trailer : card.trailerLink;

  function handleSaveMovie() {
    if (isSavedMovies) {
      onDeleteMovie(card);
    } else {
      onSaveMovie(card);
    }
  }

  function handleDeleteMovie() {
    onDeleteSavedMovie(card);
  }

  return (
    <>
      <article className="movies-card">
        <div className="movies-card__info-wrap">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{`${card.duration} минут`}</p>
        </div>
        <a
          className="movies-card__trailer-link"
          href={movieTrailer}
          target="_blank"
          alt="ссылка на трейлер фильма"
          rel="noreferrer">
          <img className="movies-card__image" src={movieImage} alt={card.nameRU} />
        </a>
        {isSavedMoviesRoute && (
          <button
            onClick={handleDeleteMovie}
            className="btn movies-card__btn 
            movies-card__btn_type_remove"
            type="button"></button>
        )}
        {isMoviesRoute && (
          <button
            onClick={handleSaveMovie}
            className={`movies-card__btn btn ${isSavedMovies ? 'movies-card__btn_type_saved' : ''}`}
            type="button">
            {`${isSavedMovies ? '' : 'Сохранить'}`}
          </button>
        )}
      </article>
    </>
  );
}

export default MoviesCard;
