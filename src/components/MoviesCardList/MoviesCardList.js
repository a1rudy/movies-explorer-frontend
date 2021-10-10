import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowSize from '../../hooks/useWindowSize';
import { AppContext } from '../../context/AppContext';

function MoviesCardList() {
  const { moviesCards, isCardsLoading, errorMessage } = React.useContext(AppContext);
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
      <div className="movies-card-list__loader-container">
        {errorMessage && <p className="movies-card-list__error-message">{errorMessage}</p>}
        {isCardsLoading && <Preloader />}
      </div>
      <div className="movies-card-list__container">
        {moviesCards.slice(0, cards).map((card) => (
          <MoviesCard key={card.id} card={card} isSaved={false} />
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
    </section>
  );
}

export default MoviesCardList;
