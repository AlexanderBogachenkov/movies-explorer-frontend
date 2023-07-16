// компонент, который отвечает за меню навигации на сайте.
import './Navigation.css';
import '../Header/HeaderMovies.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useLocation } from 'react-router-dom';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (

    <nav className="nav">
      <ul className="nav__links">
        <li><Link className={`${pathname === "/movies" ? 'nav__link nav__link_active' : 'nav__link'}`} to="/movies">
          Фильмы
        </Link></li>
        <li><Link className={`${pathname === "/saved-movies" ? 'nav__link nav__link_active' : 'nav__link'}`} to="/saved-movies">
          Сохраненные фильмы
        </Link></li>
      </ul>
      <button className="nav__button-profile" onClick={() => navigate("/profile")}>Аккаунт</button>
      {isOpen ? (
        <BurgerMenu isOpen={toggleBurger} onClose={toggleBurger} />
      ) : (
        <button className="nav__burger-menu" onClick={toggleBurger}></button>
      )}
    </nav>

  )
}


export default Navigation;