import React from 'react';

function Profile() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <main className="content">
      <section className="profile">
        <h2 className="profile__title">Привет, {'Алексей'}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} name="profile-form">
          <fieldset className="profile__input-container">
            <label className="profile__input-label" htmlFor="name-user">
              Имя
            </label>
            <input
              className="profile__input"
              // onChange={}
              value={'Алексей'}
              placeholder="Имя"
              type="text"
              name="name-user"
              minLength="1"
              maxLength="100"
              required
            />
          </fieldset>
          <fieldset className="profile__input-container">
            <label className="profile__input-label" htmlFor="name-user">
              E-mail
            </label>
            <input
              className="profile__input"
              // onChange={}
              value={'pochta@yandex.ru'}
              placeholder="E-mail"
              type="email"
              name="name-user"
              minLength="1"
              maxLength="100"
              required
            />
          </fieldset>
        </form>
        <button className="profile__edit-btn btn" type="submit">
          Редактировать
        </button>
        <button className="profile__sign-out-btn btn" type="button">Выйти из аккаунта</button>
      </section>
    </main>
  );
}

export default Profile;
