// компонент страницы с сохранёнными карточками фильмов

import '../Movies/Movies.css';
import '../MoviesCard/MoviesCard.css';
import '../MoviesCardList/MoviesCardList.css';


import HeaderMovies from "../Header/HeaderMovies";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = ({ isSavedMovies }) => {
  return (
    <div className="movies">
      <HeaderMovies isSavedMovies={isSavedMovies} />
      <main>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList isSavedMovies={isSavedMovies} />
      </main>
      <Footer />
    </div>

  )
}

export default Movies;