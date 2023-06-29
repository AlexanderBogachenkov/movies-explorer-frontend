// компонент, который отрисовывает шапку сайта на страницу
import './HeaderMovies.css';
import { Link } from "react-router-dom";
import logo from "../../images/logo_3.svg";
import Navigation from '../Navigation/Navigation';



const Header = () => {
    return (
        <header className="header-movies">
            <Link to="/" >
                <img
                    className="header__logo"
                    alt="Логотип проекта"
                    src={logo}
                /></Link>
            <Navigation />
        </header>

    )
}

export default Header;