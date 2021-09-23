import React from 'react';
import './AboutMe.css';
import photo from '../../images/about-me/about-me__photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="section-title-wrap">
        <h2 className="section-title">Студент</h2>
        <div className="decor-title"></div>
      </div>

      <div className="about-me__student-wrap">
        <img src={photo} alt="фото Алексея" className="about-me__photo" />
        <div className="about-me__description-wrap">
          <article className="about-me__container">
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__description">Фронтенд-разработчик, 27 лет</p>
            <p className="about-me__biography">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и
              дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
              работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </article>

          <ul className="about-me__social-links">
            <li>
              <a
                className="about-me__social-link about-me__social-link_type_margin link"
                href="https://www.instagram.com/rudoyao/"
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a
                className="about-me__social-link link"
                href="https://github.com/a1rudy"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
