import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <div className="section-title-wrap">
        <h2 className="section-title">Технологии</h2>
        <div className="decor-title"></div>
      </div>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__container">
        <li className="techs__cell">
          <p className="techs__heading">HTML</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">CSS</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">JS</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">React</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">Git</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">Express.js</p>
        </li>
        <li className="techs__cell">
          <p className="techs__heading">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
