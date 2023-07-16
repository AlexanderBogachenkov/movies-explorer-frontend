// компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем, 
// за исключением шапки навигации.
import './Main.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";


const Main = () => {
  return (
    <div className="landing-page">
      <Header />
      {<main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>}
      <Footer />
    </div>
  )
}

export default Main;