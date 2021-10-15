import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovie, onFilterShortMovies }) {
  const [movieName, setMovieName] = React.useState('');

  function handleChangeMovieName(evt) {
    setMovieName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onSearchMovie({
      movieName: movieName,
    });
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} name="search-form">
        <div className="search-form__input-wrap">
          <input
            className="search-form__input"
            onChange={handleChangeMovieName}
            value={movieName}
            type="text"
            placeholder="Фильмы"
            name="movieName"
            minLength="1"
            maxLength="100"
            required
          />
          <button className="search-form__btn btn" type="submit"></button>
        </div>
      </form>
      <FilterCheckbox onFilterShortMovies={onFilterShortMovies} />
      <div className="search-form__decor-line"></div>
    </section>
  );
}

export default SearchForm;
