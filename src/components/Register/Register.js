// компонент страницы регистрации
import "./Register.css";
import logo from "../../images/logo_3.svg";
import { Link } from "react-router-dom";



const Register = () => {
  return (
    <section className="register">
      <div className="register__wrapper">

        <Link to="/" >
          <img
            className="header__logo register__logo"
            alt="Логотип проекта"
            src={logo}
          /></Link>

        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="register__container" name="register">
        <fieldset className="register__inputs">
          <label className="register__label" htmlFor="name-input">Имя</label>
          <input className="register__input" id="name-input"
            type="name"
            placeholder="Александр"
            // defaultValue="Александр"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="error name-input-error"></span>
          <label className="register__label" htmlFor="email-input">E-mail</label>
          <input className="register__input" id="email-input"
            type="Email"
            placeholder="pochta@yandex.ru"
            // defaultValue="pochta@yandex.ru"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="error email-input-error"></span>
          <label className="register__label" htmlFor="password-input">Пароль</label>
          <input className="register__input" id="password-input"
            type="password"
            defaultValue="abracadabra"
            minLength="2"
            maxLength="40"
            required
          // onChange={() => { }}
          />
          <span className="error password-input-error">Что-то пошло не так...</span>
          <button
            className="register__submit-button"
            type="submit"
            aria-label="Зарегистрироваться"
          >Зарегистрироваться
          </button>
        </fieldset>
      </form>
      <div className="register__signin">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__signin-link">Войти</Link>
      </div>
    </section>
  )
}

export default Register;