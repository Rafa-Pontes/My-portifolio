// src/components/Projects/Projects.jsx
import { useState } from 'react' // Importamos useState aqui
import { FaGithub, FaExpand, FaUndo, FaPlay } from 'react-icons/fa' // Ícones novos
import { myProjects } from '../../data/projects'
import './projectsStyle.css'

export function Projects() {
  const [flippedCardId, setFlippedCardId] = useState(null)

  return (
    <section id="projetos" className="projects-section">

      <h2 className="section-title">
        <span className="accent">04.</span> Meus Projetos
      </h2>

      <div className="projects-grid">
        {myProjects.map((project) => (
          /* O Container Principal com Perspectiva 3D */
          <article 
            key={project.id} 
            className={`project-card-container ${flippedCardId === project.id ? 'is-flipped' : ''}`}
          >
            {/* O Flipper: a div que realmente gira */}
            <div className="project-card-flipper">
              
              {/* FACE FRONTAL (A visualização atual) */}
              <div className="project-card-front">
                <div className="project-image-wrap">
                  <img src={project.img} alt={`Projeto ${project.title}`} loading="lazy" />
                  <div className="project-image-overlay"></div>
                </div>

                <div className="project-info-clean">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-techs">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-link">
                      <FaGithub /> GitHub
                    </a>
                    {/* Botão Gira o cartão */}
                    <button onClick={() => setFlippedCardId(project.id)} className="btn-link">
                      <FaExpand /> Detalhes
                    </button>
                  </div>
                </div>
              </div>

              {/* FACE TRASEIRA (O visual novo com as features) */}
              <div className="project-card-back">
                <div className="project-info-back">
                  <h3>Recursos &amp; Detalhes</h3>
                  <ul className="project-features-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="project-actions-back">
                    
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-demo">
                        <FaPlay /> Testar Demo
                      </a>
                    )}
                    {/* Botão Volta o cartão */}
                    <button onClick={() => setFlippedCardId(null)} className="btn-undo">
                      <FaUndo /> Voltar
                    </button>
                  </div>
                </div>
              </div>

            </div> {/* Fim do Flipper */}
          </article> /* Fim do Container */
        ))}
      </div>

    </section>
  )
}