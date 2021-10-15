import React from 'react';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ onUpdateUser, onSignOut }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation();
  const { name, email } = values;
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    isValid &&
      onUpdateUser({ name, email }, () => {
        setValues({});
      });
  }

  return (
    <>
      <Header />
      <main className="content">
        <section className="profile">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit} name="profile-form">
            <fieldset className="profile__input-container">
              <label className="profile__input-label" htmlFor="name-user">
                Имя
              </label>
              <input
                className="profile__input"
                value={name || ''}
                onChange={handleChange}
                placeholder="Имя"
                type="text"
                name="name"
                minLength="1"
                maxLength="100"
                required
              />
              <span className="profile__input-error">{errors.name}</span>
            </fieldset>
            <fieldset className="profile__input-container">
              <label className="profile__input-label" htmlFor="name-user">
                E-mail
              </label>
              <input
                className="profile__input"
                value={email || ''}
                onChange={handleChange}
                placeholder="E-mail"
                type="email"
                name="email"
                minLength="1"
                maxLength="100"
                required
              />
              <span className="profile__input-error profile__input-error_type_email">{errors.email}</span>
            </fieldset>
            <button
              className={`profile__edit-btn btn ${
                !isValid ? 'profile__edit-btn_type_inactive' : ''
              }`}
              type="submit">
              Редактировать
            </button>
          </form>
          <button className="profile__sign-out-btn btn" onClick={onSignOut} type="button">
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
