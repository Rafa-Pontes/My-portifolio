// src/components/Header/Header.jsx
import { useState, useEffect } from 'react'
import './headerStyle.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Trava o scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="main-header">
        <div className="logo">
          <span className="accent">&gt;_ </span>
          rafael.dev
        </div>

        {/* Botão hamburguer (só aparece no mobile via CSS) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
          <a href="#sobre"       onClick={closeMenu}><span className="accent">//</span> Sobre</a>
          <a href="#habilidades" onClick={closeMenu}><span className="accent">//</span> Tecnologias</a>
          <a href="#projetos"    onClick={closeMenu}><span className="accent">//</span> Projetos</a>
          <a href="#contato"     onClick={closeMenu}><span className="accent">//</span> Contato</a>
        </nav>
      </header>

      {/* Overlay clicável fecha o menu */}
      <div
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}