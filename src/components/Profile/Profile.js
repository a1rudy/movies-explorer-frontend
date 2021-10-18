import React from 'react';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AppContext } from '../../context/AppContext';

function Profile({ onUpdateUser, onSignOut, setUpdateMessage, setUpdateErrorMessage }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormWithValidation();
  const { name, email } = values;
  const [isButtonValid, setIsButtonValid] = React.useState(true);
  const currentUser = React.useContext(CurrentUserContext);
  const { updateMessage, updateErrorMessage, isDisabledForm } = React.useContext(AppContext);

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

  React.useEffect(() => {
    if (isValid && (name !== currentUser.name || email !== currentUser.email)) {
      setIsButtonValid(true);
    } else {
      setIsButtonValid(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  React.useEffect(() => {
    return () => {
      setUpdateMessage(null)
      setUpdateErrorMessage(null);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                disabled={isDisabledForm}
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
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                disabled={isDisabledForm}
                required
              />
              <span className="profile__input-error profile__input-error_type_email">
                {errors.email}
              </span>
              <span className={`profile__update-message ${updateErrorMessage ? 'profile__update-message_type_error' : ''}`}>
                {updateMessage ? `${updateMessage}` : '' || updateErrorMessage ? `Что пошло не так... ${updateErrorMessage}` : ''}
              </span>
            </fieldset>
            <button
              className={`profile__edit-btn btn ${
                isButtonValid ? '' : 'profile__edit-btn_type_inactive'
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
