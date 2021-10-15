import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ onSearchMovie, onSaveMovie, onDeleteMovie, onFilterShortMovies }) {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm onSearchMovie={onSearchMovie} onFilterShortMovies={onFilterShortMovies} />
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
