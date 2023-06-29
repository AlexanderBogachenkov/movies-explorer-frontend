// компонент с описанием дипломного проекта
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>


      <div className="progress-bar">
        <div className="one-week">1 неделя</div>
        <div className="four-week">4 недели</div>
        <div className="back-end">Back-end</div>
        <div className="front-end">Front-end</div>
      </div>
    </section>
  )
}


export default AboutProject;