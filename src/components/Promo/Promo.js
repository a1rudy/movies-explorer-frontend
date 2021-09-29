import React from 'react';
import promoLogo from '../../images/promo/promo__logo.png';

function Promo() {
  return (
    <section className="promo">
      <img src={promoLogo} alt="логотип планеты" className="promo__logo" />
      <div className="promo__text-container">
        <h1 className="promo__title">Учебный проект студента факультета  Веб-разработки.</h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
          <a href="#about-project" className="promo__link">
            <button className='promo__btn btn'>Узнать больше</button>
          </a>
        </div>
    </section>
  );
}

export default Promo;
