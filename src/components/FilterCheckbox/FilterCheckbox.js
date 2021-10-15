import React from 'react';

function FilterCheckbox({ onFilterShortMovies }) {
  function handleFilterShortMovies() {
    const element = document.querySelector('input[type=checkbox]');
    const isChecked = element.checked;
    onFilterShortMovies(isChecked);
  }

  return (
    <div className="short-film">
      <input
        className="short-film__checkbox"
        id="filter-checkbox"
        type="checkbox"
        onClick={handleFilterShortMovies}
      />
      <label className="short-film__label" htmlFor="filter-checkbox">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
