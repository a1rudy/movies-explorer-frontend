import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { searchError } from '../../utils/constants';

function SearchForm({ onSearchMovie, onFilterShortMovies }) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  const { name } = values;
  const [searchErrorMessage, setSearchErrorMessage] = React.useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid && name !== '') {
      onSearchMovie({
        movieName: name,
      });
      setSearchErrorMessage(null)
    } else {
      setSearchErrorMessage(searchError);
    }
  }

  React.useEffect(() => {
    return () => {
      setSearchErrorMessage(null)
      resetForm();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} name="search-form">
        <div className="search-form__input-wrap">
          <input
            className="search-form__input"
            onChange={handleChange}
            value={name || ''}
            type="text"
            placeholder="Фильмы"
            name="name"
            minLength="1"
            maxLength="100"
          />
          <button className="search-form__btn btn" type="submit"></button>
        </div>
        <span className="search-form__search-error">
          {searchErrorMessage ? `${searchErrorMessage}` : ''}
        </span>
      </form>
      <FilterCheckbox onFilterShortMovies={onFilterShortMovies} />
      <div className="search-form__decor-line"></div>
    </section>
  );
}

export default SearchForm;
