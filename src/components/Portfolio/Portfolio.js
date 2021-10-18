import React from 'react';
import arrow from '../../images/portfolio/portfolio__link-arrow.png'
import { landing, adaptive, application } from '../../utils/constants';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link portfolio__link_type_underline link"
            href={landing}
            target="_blank"
            rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link-arrow" src={arrow} alt="значок ссылки" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link portfolio__link_type_underline link"
            href={adaptive}
            target="_blank"
            rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__link-arrow" src={arrow} alt="значок ссылки" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link link"
            href={application}
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
