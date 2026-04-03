// src/components/Projects/ProjectModal.jsx
import { useEffect, useRef } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import './projectsStyle.css'

export function ProjectModal({ project, onClose }) {
  const modalRef   = useRef(null)
  const closeBtnRef = useRef(null)

=  useEffect(() => {
    closeBtnRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!project) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
    >
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        // Impede que o clique dentro feche o modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          ref={closeBtnRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <FaTimes aria-hidden="true" />
        </button>

        <img
          src={project.img}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
        />

        <h2 id="modal-title">{project.title}</h2>

        <p>{project.description}</p>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="modal-github-link"
          aria-label={`Ver ${project.title} no GitHub`}
        >
          <FaGithub aria-hidden="true" /> Ver no GitHub
        </a>
      </div>
    </div>
  )
}
