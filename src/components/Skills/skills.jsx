import { mySkills } from '../../data/skills'
import './skillsStyle.css'

export function Skills() {
  return (
    <section id="habilidades" className="skills-section">

      <h2 className="section-title">
        <span className="accent">02.</span> Minhas Skills
      </h2>

      <div className="skills-grid" role="list" aria-label="Lista de tecnologias">
        {mySkills.map((skill) => {
          const IconComponent = skill.icon

          return (
            <div
              key={skill.id}
              className="skill-card-clean"
              role="listitem"
              title={skill.name}
              style={{ '--brand-color': skill.color }}
            >
              <div className="skill-icon-wrap" aria-hidden="true">
                <IconComponent />
              </div>
              <span className="skill-name-clean">{skill.name}</span>
            </div>
          )
        })}
      </div>

    </section>
  )
}