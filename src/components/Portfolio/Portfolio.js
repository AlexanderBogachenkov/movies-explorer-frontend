// компонент со ссылками на другие проекты.
import './Portfolio.css';
import arrow from "../../images/arrow_top_left.svg";


const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://alexanderbogachenkov.github.io/mesto/" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Статичный сайт</p>
            <img href="https://github.com/AlexanderBogachenkov" alt="ссылка на работу" src={arrow} className="portfolio__icon" target="_blank" rel="noreferrer" />
          </a>
        </li>

        <li className="portfolio__item">
          <a href="https://alexanderbogachenkov.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Адаптивный сайт</p>
            <img href="https://github.com/AlexanderBogachenkov" alt="ссылка на работу" src={arrow} className="portfolio__icon" target="_blank" rel="noreferrer" />
          </a>
        </li>

        <li className="portfolio__item">
          <a href="https://github.com/AlexanderBogachenkov/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Одностраничное приложение</p>
            <img href="https://github.com/AlexanderBogachenkov" alt="ссылка на работу" src={arrow} className="portfolio__icon" target="_blank" rel="noreferrer" />
          </a>
        </li>


      </ul>
    </section>
  )
}

export default Portfolio;