// src/components/About/About.jsx
import './aboutStyle.css'

export function About() {
  const skills = [
    {
      num: '01',
      name: 'Front-End',
      tags: 'React · JS ES6+\nHTML5 · CSS3 · Vite',
    },
    {
      num: '02',
      name: 'Ferramentas',
      tags: 'Git · GitHub · Azure\nFigma · Blender',
    },
    {
      num: '03',
      name: 'Extras',
      tags: 'Java · C++\nArduino · ESP',
    },
  ]

  // FIX: Parágrafos separados em array para renderizar corretamente
  const paragraphs = [
    'E aí, tudo bem?',
    'Sou estudante de Análise e Desenvolvimento de Sistemas, em formação como desenvolvedor front-end.',
    'Tenho experiência prática com HTML, CSS e JavaScript, desenvolvendo projetos acadêmicos e pessoais, além de trabalhos com Arduino e automação.',
    'Busco uma oportunidade de estágio onde eu possa aplicar meus conhecimentos na prática, evoluir tecnicamente e contribuir com soluções eficientes e bem estruturadas.',
    'Gosto de transformar ideias em interfaces funcionais e estou expandindo meus estudos para o back-end, com foco em me tornar um desenvolvedor full stack.',
  ]

  return (
    <section id="sobre" className="about-section">

      <div className="about-label">
        <span className="about-label-num">01. </span>
        Sobre Mim
      </div>

      <div className="about-hero">
        <h2 className="about-headline">
          Desenvolvedor <em>front-end</em><br />
          focado em JavaScript<span className="about-cursor" />
        </h2>

        {/* FIX: Cada parágrafo em seu próprio <p> para espaçamento correto */}
        <div className="about-sub">
          {paragraphs.map((text, i) => (
            <p key={i} style={{ marginBottom: i < paragraphs.length - 1 ? '1rem' : 0 }}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="about-divider" />

      <div className="about-skills-row" aria-label="Áreas de conhecimento">
        {skills.map((skill) => (
          <div className="about-skill" key={skill.num}>
            <span className="about-skill-num">{skill.num}</span>
            <h3 className="about-skill-name">{skill.name}</h3>
            <p className="about-skill-tags">
              {skill.tags.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}