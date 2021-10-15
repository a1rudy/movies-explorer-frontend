import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { notFoundError, serverError, shortMovie } from '../../utils/constants';
import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

function App() {
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);
  const [errorMessageMovies, setErrorMessageMovies] = React.useState(null);
  const [errorMessageSavedMovies, setErrorMessageSavedMovies] = React.useState(null);
  const [authErrorMessage, setAuthErrorMessage] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  function handleSearchMovie(movie) {
    setErrorMessageMovies(null);
    setIsCardsLoading(true);
    setMoviesCards([]);
    moviesApi
      .getMoviesCards()
      .then((data) => {
        const searchMovies = data.filter((item) => {
          const nameEN = item.nameEN ? item.nameEN : item.nameRU;
          const movieNameEN = nameEN.toLowerCase();
          const movieNameRU = item.nameRU.toLowerCase();
          const movieDescription = item.description.toLowerCase();
          const searchMovieName = movie.movieName.toLowerCase();
          const searchMovies =
            movieNameRU.includes(searchMovieName) ||
            movieNameEN.includes(searchMovieName) ||
            movieDescription.includes(searchMovieName);
          return searchMovies;
        });
        localStorage.setItem('lastSearchMovies', JSON.stringify(searchMovies));
        if (searchMovies[0]) {
          setMoviesCards(searchMovies);
        } else {
          setErrorMessageMovies(notFoundError);
          setMoviesCards([]);
        }
      })
      .catch(() => {
        setErrorMessageMovies(serverError);
        setMoviesCards([]);
      })
      .finally(() => setIsCardsLoading(false));
  }

  function handleSearchSavedMovie(movie) {
    setErrorMessageSavedMovies(null);
    setIsCardsLoading(true);
    setSavedMovies([]);
    const filterMovies = savedMovies.filter((item) => {
      const nameEN = item.nameEN ? item.nameEN : item.nameRU;
      const movieNameEN = nameEN.toLowerCase();
      const movieNameRU = item.nameRU.toLowerCase();
      const movieDescription = item.description.toLowerCase();
      const searchMovieName = movie.movieName.toLowerCase();
      const filterMovies =
        movieNameRU.includes(searchMovieName) ||
        movieNameEN.includes(searchMovieName) ||
        movieDescription.includes(searchMovieName);
      return filterMovies;
    });
    if (filterMovies[0]) {
      setSavedMovies(filterMovies);
      setIsCardsLoading(false);
    } else {
      setErrorMessageSavedMovies(notFoundError);
      setIsCardsLoading(false);
    }
  }

  function handleFilterShortMovies(isChecked) {
    if (isChecked) {
      const shortMoviesCards = moviesCards.filter((item) => item.duration <= shortMovie);
      setMoviesCards(shortMoviesCards);
    } else {
      const lastSearchMovies = JSON.parse(localStorage.getItem('lastSearchMovies'));
      setMoviesCards(lastSearchMovies);
    }
  }

  function handleFilterShortSavedMovies(isChecked) {
    if (isChecked) {
      const shortMoviesCards = savedMovies.filter((item) => item.duration <= shortMovie);
      setSavedMovies(shortMoviesCards);
    } else {
      const lastSavedMovies = JSON.parse(localStorage.getItem('lastSavedMovies'));
      setSavedMovies(lastSavedMovies);
    }
  }

  function handleMovieForDelete(data) {
    const movieForDelete = savedMovies.filter((item) => item.movieId === data.id);
    handleDeleteMovie(movieForDelete[0]);
  }

  function handleDeleteMovie(movieForDelete) {
    mainApi
      .removeMovie(movieForDelete._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (item) => item.movieId !== movieForDelete.movieId,
        );
        setSavedMovies(newSavedMovies);
        localStorage.setItem('lastSavedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCreateMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((data) => {
        const newSavedMovies = [data, ...savedMovies];
        setSavedMovies(newSavedMovies);
        localStorage.setItem('lastSavedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    checkToken();
    if (loggedIn) {
      history.push('/movies');
      Promise.all([mainApi.getUser(), mainApi.getMovies()])
        .then(([user, data]) => {
          setCurrentUser(user);
          setSavedMovies(data);
          localStorage.setItem('lastSavedMovies', JSON.stringify(data));
        })
        .catch((error) => {
          handleLogout();
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, isCardsLoading]);

  function handleUpdateUser(data) {
    mainApi
      .updateUser(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleRegister({ name, email, password }) {
    auth
      .register(name, email, password)
      .then((user) => {
        console.log(user);
        handleLogin({ email, password });
      })
      .catch((error) => {
        setAuthErrorMessage(error);
        console.log(error);
      });
  }

  function handleLogin({ email, password }) {
    auth
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        checkToken();
      })
      .catch((error) => {
        setAuthErrorMessage(error);
        console.log(error);
      });
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearchMovies');
    localStorage.removeItem('lastSavedMovies');
    setLoggedIn(false);
    setMoviesCards([]);
    setSavedMovies([]);
    setCurrentUser({});
    setErrorMessageMovies(null);
    setErrorMessageSavedMovies(null);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider
        value={{
          moviesCards: moviesCards,
          isCardsLoading: isCardsLoading,
          errorMessageMovies: errorMessageMovies,
          errorMessageSavedMovies: errorMessageSavedMovies,
          authErrorMessage: authErrorMessage,
          savedMovies: savedMovies,
        }}>
        <div className="body">
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Header />
                <Main />
                <Footer />
              </Route>
              <ProtectedRoute
                path="/movies"
                component={Movies}
                loggedIn={loggedIn}
                onSearchMovie={handleSearchMovie}
                onSaveMovie={handleCreateMovie}
                onDeleteMovie={handleMovieForDelete}
                onFilterShortMovies={handleFilterShortMovies}></ProtectedRoute>
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                loggedIn={loggedIn}
                onSearchMovie={handleSearchSavedMovie}
                onDeleteSavedMovie={handleDeleteMovie}
                onFilterShortMovies={handleFilterShortSavedMovies}></ProtectedRoute>
              <ProtectedRoute
                path="/profile"
                component={Profile}
                loggedIn={loggedIn}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleLogout}></ProtectedRoute>
              <Route path="/signin">
                <Login handleLogin={handleLogin} setAuthErrorMessage={setAuthErrorMessage} />
                {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
              </Route>
              <Route path="/signup">
                <Register
                  handleRegister={handleRegister}
                  setAuthErrorMessage={setAuthErrorMessage}
                />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </AppContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
