import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const handleSubmit = (e) => {
  e.preventDefault();
};

function Register() {
  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__title-wrap">
          <Link to="/">
            <img src={logo} alt="логотип" className="logo" />
          </Link>
          <h2 className="auth__title">Добро пожаловать!</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth__form">
          <fieldset className="auth__form-container">
            <label className="auth__input-label" htmlFor="name">
              Имя
            </label>
            <input
              className="auth__input"
              // onChange={}
              value={'Алексей'}
              id="email-input"
              placeholder=""
              type="text"
              name="name"
              minLength="2"
              maxLength="200"
              autoComplete="on"
              required
            />
            <span className="auth__input-error"></span>
          </fieldset>
          <fieldset className="auth__form-container">
            <label className="auth__input-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="auth__input"
              // onChange={}
              value={'pochta@yandex.ru'}
              placeholder=""
              type="email"
              name="email"
              minLength="2"
              maxLength="200"
              autoComplete="on"
              required
            />
            <span className="auth__input-error auth__input_type_error"></span>
          </fieldset>
          <fieldset className="auth__form-container">
            <label className="auth__input-label" htmlFor="password">
              Пароль
            </label>
            <input
              className="auth__input"
              // onChange={}
              // value={}
              placeholder=""
              type="password"
              name="password"
              minLength="2"
              maxLength="200"
              autoComplete="on"
              required
            />
            <span className="auth__input-error">Что-то пошло не так...</span>
          </fieldset>
        </form>
        <button className="auth__btn btn" type="submit">
          Зарегистрироваться
        </button>
        <div className="auth__signin">
          <p className="auth__reg-question">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__login-link link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
