import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { AppContext } from '../../context/AppContext';
import logo from '../../images/logo.png';

function Register({ handleRegister, setAuthErrorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const { name, email, password } = values;
  const { authErrorMessage, isDisabledForm } = React.useContext(AppContext);

  React.useEffect(() => {
    return () => {
      setAuthErrorMessage(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid && handleRegister({ name, email, password });
    resetForm();
  };

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
              value={name || ''}
              onChange={handleChange}
              placeholder=""
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              autoComplete="on"
              disabled={isDisabledForm}
              required
            />
            <span className="auth__input-error">{errors.name}</span>
          </fieldset>
          <fieldset className="auth__form-container">
            <label className="auth__input-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="auth__input"
              value={email || ''}
              onChange={handleChange}
              placeholder=""
              type="email"
              name="email"
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              autoComplete="on"
              disabled={isDisabledForm}
              required
            />
            <span className="auth__input-error">{errors.email}</span>
          </fieldset>
          <fieldset className="auth__form-container">
            <label className="auth__input-label" htmlFor="password">
              Пароль
            </label>
            <input
              className="auth__input"
              value={password || ''}
              onChange={handleChange}
              placeholder=""
              type="password"
              name="password"
              minLength="8"
              autoComplete="on"
              disabled={isDisabledForm}
              required
            />
            <span className="auth__input-error">{errors.password}</span>
            <span className="auth__register-error">
              {authErrorMessage ? `Что пошло не так... ${authErrorMessage}` : ''}
            </span>
          </fieldset>
          <button
            className={`auth__btn btn ${!isValid ? 'auth__btn_type_inactive' : ''}`}
            type="submit"
            disabled={isDisabledForm}>
            Зарегистрироваться
          </button>
        </form>
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
