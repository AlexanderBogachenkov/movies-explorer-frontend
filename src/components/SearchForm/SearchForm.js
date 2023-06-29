// форма поиска, куда пользователь будет вводить запрос
import './SearchForm.css';


const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search-form" >
          <input className="search-form__input" placeholder="Фильм" required />
          <button className="search-form__button" type="submit"></button>
        </form></div>
      <div className="checkbox">
        <label className="checkbox__label">
          <input type="checkbox" className="checkbox__input" value="no" />
          Короткометражки
        </label>
      </div>

    </section>
  )
}

export default SearchForm;