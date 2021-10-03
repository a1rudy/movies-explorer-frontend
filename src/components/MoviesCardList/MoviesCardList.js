import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../images/movies-card/movies-card-1.png';
import image2 from '../../images/movies-card/movies-card-2.png';
import image3 from '../../images/movies-card/movies-card-3.png';
import image4 from '../../images/movies-card/movies-card-4.png';
import image5 from '../../images/movies-card/movies-card-5.png';
import image6 from '../../images/movies-card/movies-card-6.png';
import image7 from '../../images/movies-card/movies-card-7.png';
import image8 from '../../images/movies-card/movies-card-8.png';
import image9 from '../../images/movies-card/movies-card-9.png';
import image10 from '../../images/movies-card/movies-card-10.png';
import image11 from '../../images/movies-card/movies-card-11.png';
import image12 from '../../images/movies-card/movies-card-12.png';


function MoviesCardList() {
  return (
    <section className="movies-card-list">
      {/* <Preloader /> */}
      <div className="movies-card-list__container">
        <MoviesCard isSaved={true} image={image1} />
        <MoviesCard isSaved={true} image={image2} />
        <MoviesCard isSaved={false} image={image3} />
        <MoviesCard isSaved={false} image={image4} />
        <MoviesCard isSaved={false} image={image5} />
        <MoviesCard isSaved={true} image={image6} />
        <MoviesCard isSaved={true} image={image7} />
        <MoviesCard isSaved={false} image={image8} />
        <MoviesCard isSaved={false} image={image9} />
        <MoviesCard isSaved={false} image={image10} />
        <MoviesCard isSaved={true} image={image11} />
        <MoviesCard isSaved={false} image={image12} />
      </div>
      <div className="more-movies-card">
        <button className="more-movies-card__btn btn" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
