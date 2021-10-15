import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowSize from '../../hooks/useWindowSize';
import { AppContext } from '../../context/AppContext';

function MoviesCardList({ onSaveMovie, onDeleteMovie, onDeleteSavedMovie }) {
  const isSavedMoviesRoute = useRouteMatch({ path: '/saved-movies', exact: false });
  const isMoviesRoute = useRouteMatch({ path: '/movies', exact: false });
  const { moviesCards, isCardsLoading, errorMessageMovies, errorMessageSavedMovies, savedMovies } =
    React.useContext(AppContext);
  const width = useWindowSize();

  const [cards, setCards] = React.useState(0);
  const [moreCards, setMoreCards] = React.useState(0);

  React.useEffect(() => {
    function getCards() {
      if (width > 1200) {
        setCards(12);
        setMoreCards(3);
      } else if (width <= 1200 && width > 750) {
        setCards(8);
        setMoreCards(2);
      } else if (width <= 750) {
        setCards(5);
        setMoreCards(1);
      }
    }
    getCards();
  }, [width]);

  function getMoreCards() {
    setCards(cards + moreCards);
  }

  return (
    <section className="movies-card-list">
      {isSavedMoviesRoute && (
        <>
          <div className="movies-card-list__loader-container">
            {errorMessageSavedMovies && (
              <p className="movies-card-list__error-message">{errorMessageSavedMovies}</p>
            )}
            {isCardsLoading && <Preloader />}
          </div>
          <div className="movies-card-list__container">
            {savedMovies.map((card) => (
              <MoviesCard
                key={card._id}
                card={card}
                onSaveMovie={onSaveMovie}
                onDeleteSavedMovie={onDeleteSavedMovie}
              />
            ))}
          </div>
        </>
      )}
      {isMoviesRoute && (
        <>
          <div className="movies-card-list__loader-container">
            {errorMessageMovies && (
              <p className="movies-card-list__error-message">{errorMessageMovies}</p>
            )}
            {isCardsLoading && <Preloader />}
          </div>
          <div className="movies-card-list__container">
            {moviesCards.slice(0, cards).map((card) => (
              <MoviesCard
                key={card.id}
                card={card}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
          </div>
          <div
            className={`more-movies-card ${
              moviesCards.length >= cards ? 'more-movies-card_type_active' : ''
            }`}>
            <button className="more-movies-card__btn btn" type="button" onClick={getMoreCards}>
              Ещё
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
