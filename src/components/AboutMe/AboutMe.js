import React from 'react';
import './AboutMe.css';
import photo from '../../images/about-me/about-me__photo.jpg';
import { profession, firstName, description, biography, instagramLink, githubLink } from '../../utils/constants';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="section-title-wrap">
        <h2 className="section-title">{profession}</h2>
        <div className="decor-title"></div>
      </div>

      <div className="about-me__student-wrap">
        <img src={photo} alt="фото Алексея" className="about-me__photo" />
        <div className="about-me__description-wrap">
          <article className="about-me__container">
            <h3 className="about-me__name">{firstName}</h3>
            <p className="about-me__description">{description}</p>
            <p className="about-me__biography">{biography}</p>
          </article>

          <ul className="about-me__social-links">
            <li>
              <a
                className="about-me__social-link about-me__social-link_type_margin link"
                href={instagramLink}
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a
                className="about-me__social-link link"
                href={githubLink}
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
