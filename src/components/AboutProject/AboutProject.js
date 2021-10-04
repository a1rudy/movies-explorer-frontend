import React from 'react';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="section-title-wrap">
        <h2 className="section-title">О проекте</h2>
        <div className="decor-title decor-title_type_about"></div>
      </div>

      <article className="description">
        <div className="description__column">
          <h3 className="description__brief">Дипломный проект включал 5 этапов</h3>
          <p className="description__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="description__column">
          <h3 className="description__brief">На выполнение диплома ушло 5 недель</h3>
          <p className="description__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </article>

      <div className="time">
        <div className="time__back-week-wrap">
          <div className="time__back-week">
            <p className="time__week-text">1 неделя</p>
          </div>
          <p className="time__caption">Back-end</p>
        </div>
        <div className="time__front-week-wrap">
          <div className="time__front-week">
            <p className="time__week-text">4 недели</p>
          </div>
          <p className="time__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
