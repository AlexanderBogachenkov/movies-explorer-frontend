// компонент одной карточки фильма
import './MoviesCard.css';

import { initialMovies } from "./InitialMovies";


const MoviesCard = ({ isSavedMovies }) => {
  return (
    isSavedMovies ? initialMovies.filter(movie => movie.movieIsSaved).map((movie) => <li className="movie" key={movie.movieName}>
      <img className="movie__pic" src={movie.moviePicture} alt="Заглавная картинка для фильма" />
      <div className="movie__content">
        <h2 className="movie__title">{movie.movieName}</h2>
        <span className="movie__duration">{movie.movieDuration}</span>
      </div>
      <button className="movie__delete-button" type="button" ></button>
    </li>)
      :
      initialMovies.map((movie) => <li className="movie" key={movie.movieName}>
        <img className="movie__pic" src={movie.moviePicture} alt="Заглавная картинка для фильма" />
        <div className="movie__content">
          <h2 className="movie__title">{movie.movieName}</h2>
          <span className="movie__duration">{movie.movieDuration}</span>
        </div>
        <button className=
          {
            movie.movieIsLiked ? `movie__like-button_active` : `movie__like-button`
          } type="button" ></button>
      </li>)

  )
}

export default MoviesCard;