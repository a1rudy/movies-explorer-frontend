import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ onSearchMovie }) {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm onSearchMovie={onSearchMovie} />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
