// src/components/Hero/Hero.jsx
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './heroStyle.css'

import minhaFotoImg from '../../assets/rafael-perfil.png'

const TEXTOS = ['Rafael Pontes', 'Front-end Developer']

export function Hero() {
  const [textoAtual, setTextoAtual] = useState('')

  const textoIndexRef = useRef(0)
  const charIndexRef  = useRef(0)
  const apagandoRef   = useRef(false)

  const [, forceRender] = useState(0)
  const tick = () => forceRender((n) => n + 1)

  useEffect(() => {
    const textoCompleto = TEXTOS[textoIndexRef.current]
    const velocidade    = apagandoRef.current ? 50 : 100

    const timer = setTimeout(() => {
      if (!apagandoRef.current) {
        const next = textoCompleto.substring(0, charIndexRef.current + 1)
        setTextoAtual(next)
        charIndexRef.current += 1

        if (charIndexRef.current === textoCompleto.length) {
          setTimeout(() => {
            apagandoRef.current = true
            tick()
          }, 1500)
          return
        }
      } else {
        
        const next = textoCompleto.substring(0, charIndexRef.current - 1)
        setTextoAtual(next)
        charIndexRef.current -= 1

        if (charIndexRef.current === 0) {
          apagandoRef.current = false
          textoIndexRef.current = (textoIndexRef.current + 1) % TEXTOS.length
        }
      }

      tick()
    }, velocidade)

    return () => clearTimeout(timer)
  })

  return (
    <section className="hero-section" aria-label="Apresentação">

      <p className="hero-subtitle">
        <span className="accent">&gt;</span> hello_world
      </p>

      <div className="profile-container">
        <img
          src={minhaFotoImg}
          alt="Foto de perfil de Rafael Pontes"
          className="profile-photo"
          width="180"
          height="180"
        />
      </div>

      <h1 className="hero-title">
        {textoAtual}
        <span className="cursor" aria-hidden="true">|</span>
      </h1>

      <p className="hero-role">
        <span className="accent">&gt;</span> Criando interfaces modernas com React.
      </p>

      <p className="hero-description">
        Construindo aplicações web escaláveis com foco em performance e design intuitivo.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/Rafa-Pontes"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
          aria-label="Ver perfil no GitHub"
        >
          <FaGithub aria-hidden="true" /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/rafael-p-ontes123/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          aria-label="Ver perfil no LinkedIn"
        >
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </a>
      </div>

    </section>
  )
}
