import { experiences } from '../../data/experience'
import './experience.css'

export default function Experience() {
  return (
    <section id="experiencia" className="experience-section">

      <h2 className="section-title">
        <span className="accent">03.</span> Experiência
      </h2>

      <div className="timeline-centered">
        {experiences.map((exp, index) => {
          const sideClass = index % 2 === 0 ? 'left' : 'right'

          return (
            <div key={exp.id} className={`timeline-item ${sideClass}`}>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}