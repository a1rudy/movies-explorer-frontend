import React from 'react';
import arrow from '../../images/portfolio/portfolio__link-arrow.png'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link portfolio__link_type_underline link"
            href="https://a1rudy.github.io/how-to-learn"
            target="_blank"
            rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link-arrow" src={arrow} alt="значок ссылки" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link portfolio__link_type_underline link"
            href="https://a1rudy.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__link-arrow" src={arrow} alt="значок ссылки" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link link"
            href="https://project-mesto-by-a1rudy.nomoredomains.monster/main"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__link-arrow" src={arrow} alt="значок ссылки" />
          </a>
        </li>

      </ul>
    </section>
  );
}

export default Portfolio;
