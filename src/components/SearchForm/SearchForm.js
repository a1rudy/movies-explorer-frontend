import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovie }) {
  const [nameMovie, setNameMovie] = React.useState('');

  function handleChangeNameMovie(evt) {
    setNameMovie(evt.target.value);
  }

  function onSearchMovie(data) {
    console.log(data);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onSearchMovie({
      nameMovie: nameMovie,
    });
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} name="search-form">
        <div className="search-form__input-wrap">
          <input
            className="search-form__input"
            onChange={handleChangeNameMovie}
            value={nameMovie}
            type="text"
            placeholder="Фильмы"
            name="nameMovie"
            minLength="1"
            maxLength="100"
            required
          />
          <button className="search-form__btn btn" type="submit"></button>
        </div>
      </form>
      <FilterCheckbox />
      <div className="search-form__decor-line"></div>
    </section>
  );
}

export default SearchForm;
