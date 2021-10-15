import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ onSearchMovie, onDeleteSavedMovie, onFilterShortMovies }) {
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
