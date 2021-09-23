import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../../images/header/logo.png';

function Header() {
  return (
    <header className="header header_color_azure">
      <img src={logo} alt="логотип" className="logo" />
      <Switch>
        <Route exact path="/">
          <div className="header__auth-container">
            <Link className="header__reg-link link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__auth-link" to="/signin">
              <button className="header__btn">Войти</button>
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
