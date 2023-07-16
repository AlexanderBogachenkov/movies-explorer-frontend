// компонент страницы изменения профиля
import './Profile.css';
import { Link } from "react-router-dom";
import HeaderMovies from "../Header/HeaderMovies";

const Profile = () => {
  return (
    <>
      <HeaderMovies />
      <div className="profile">
        <form
          name="profile"
          className="profile__container"
        >
          <h2 className="profile__title">Привет, Александр!</h2>
          <fieldset className="profile__inputs">
            <div className="profile__wrapper">
              <label className="profile__label" htmlFor="name-input">
                Имя</label>
              <input
                className="profile__input profile__input_type_name"
                type="name"
                id="name-input"
                placeholder="Александр"
                // defaultValue="Александр"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
            <div className="profile__wrapper">
              <label className="profile__label" htmlFor="email-input">
                E-mail</label>
              <input
                className="profile__input profile__input_type_email"
                id="email-input"
                type="Email"
                placeholder="pochta@yandex.ru"
                // defaultValue="pochta@yandex.ru"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
            <button
              className="profile__submit-button"
              type="submit"
              aria-label="Редактировать"
            >Редактировать
            </button>
            <Link to="/signin" className="profile__signout-link">Выйти из аккаунта</Link>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Profile;