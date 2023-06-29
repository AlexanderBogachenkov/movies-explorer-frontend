// компонент с информацией о студенте.
import './AboutMe.css';
import photo from "../../images/colombia_2.jpg";



const AboutMe = () => {
  return (
    <section className="about-me" id="about-me" >
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__wrapper">
          <h3 className="about-me__name">Александр</h3>
          <p className="about-me__profession">Веб-разработчик, 44 года</p>
          <p className="about-me__description">Живу в Москве. </p>
          <a href="https://github.com/AlexanderBogachenkov" className="about-me__github-link" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img alt="моя фотография" src={photo} className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe;