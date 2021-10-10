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

import { notFoundError, serverError } from '../../utils/constants';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

function App() {
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [authErrorMessage, setAuthErrorMessage] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  function onSearchMovie(movie) {
    setErrorMessage(null);
    setIsCardsLoading(true);
    setMoviesCards([]);
    moviesApi
      .getMoviesCards()
      .then((data) => {
        const filterMovies = data.filter((item) => {
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
        console.log(filterMovies);
        if (filterMovies[0]) {
          setMoviesCards(filterMovies);
        } else {
          setErrorMessage(notFoundError);
          setMoviesCards([]);
        }
      })
      .catch(() => {
        setErrorMessage(serverError);
        setMoviesCards([]);
      })
      .finally(() => setIsCardsLoading(false));
  }

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
        const { email, password } = user;
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

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getUser(jwt)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch((error) => {
          localStorage.removeItem('jwt');
          console.log(error);
        });
    }
  }

  React.useEffect(() => {
    checkToken();
    if (loggedIn) {
      history.push('/movies');
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider
        value={{
          moviesCards: moviesCards,
          isCardsLoading: isCardsLoading,
          errorMessage: errorMessage,
          authErrorMessage: authErrorMessage,
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
                onSearchMovie={onSearchMovie}></ProtectedRoute>
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                loggedIn={loggedIn}></ProtectedRoute>
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
