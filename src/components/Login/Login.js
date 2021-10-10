import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { AppContext } from '../../context/AppContext';
import logo from '../../images/logo.png';

function Login({ handleLogin, setAuthErrorMessage }) {
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  const { email, password } = values;
  const { authErrorMessage } = React.useContext(AppContext);

  React.useEffect(() => {
    return () => {
      setAuthErrorMessage(null);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    isValid &&
      handleLogin({ email, password }, () => {
        setValues({});
      });
  };

  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__title-wrap">
          <Link to="/">
            <img src={logo} alt="логотип" className="logo" />
          </Link>
          <h2 className="auth__title">Рады видеть!</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth__form">
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
              autoComplete="on"
              required
            />
            <span className="auth__input-error auth__input_type_error">{errors.email}</span>
          </fieldset>
          <fieldset className="auth__form-container auth__form-container_type_login">
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
              required
            />
            <span className="auth__input-error">{errors.password}</span>
            <span className="auth__register-error">
              {authErrorMessage ? `Что пошло не так... ${authErrorMessage}` : ''}
            </span>
          </fieldset>
          <button
            className={`auth__btn btn ${!isValid ? 'auth__btn_type_inactive' : ''}`}
            type="submit">
            Войти
          </button>
        </form>
        <div className="auth__signin">
          <p className="auth__reg-question">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__login-link link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
