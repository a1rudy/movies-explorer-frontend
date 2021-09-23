import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__links-container">
        <p className="footer__copyright-year">&copy; 2021</p>
        <ul className="footer__links">
          <li>
            <a
              className="footer__link footer__link_type_margin link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link footer__link_type_margin link"
              href="https://github.com/a1rudy"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="footer__link link"
              href="https://www.instagram.com/rudoyao/"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
