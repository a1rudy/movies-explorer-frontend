import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  setSavedMovies,
  onSearchMovie,
  onDeleteSavedMovie,
  onFilterShortMovies,
  setErrorMessageSavedMovies,
}) {
  React.useEffect(() => {
    return () => {
      setErrorMessageSavedMovies(null);
      const lastSavedMovies = JSON.parse(localStorage.getItem('lastSavedMovies'));
      setSavedMovies(lastSavedMovies);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="content">
        <SearchForm onSearchMovie={onSearchMovie} onFilterShortMovies={onFilterShortMovies} />
        <MoviesCardList onDeleteSavedMovie={onDeleteSavedMovie} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
