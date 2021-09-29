import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../images/header/logo.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const isMain = useRouteMatch({ path: '/', exact: true });

  return (
    <header className={`header ${isMain ? 'header_color_azure' : ''}`}>
      <img src={logo} alt="логотип" className="logo" />
      <Switch>
        <Route exact path="/">
          <div className="header__auth-container">
            <Link className="header__reg-link link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__auth-link" to="/signin">
              <button className="header__auth-btn btn">Войти</button>
            </Link>
          </div>
        </Route>
        <Route path={['/movies', '/saved-movies']}>
          <Navigation isMenuOpen={isMenuOpen} />
          <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
