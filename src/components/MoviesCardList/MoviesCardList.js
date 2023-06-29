// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ isSavedMovies }) => {
  return (
    <section className="films">
      <ul className="movies-list">
        <MoviesCard isSavedMovies={isSavedMovies} />
      </ul>
      {isSavedMovies ? `` : <button className="films__button" type="button">Ещё</button>}
    </section>
  )
}

export default MoviesCardList;