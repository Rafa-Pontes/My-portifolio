import { Header } from './components/Header/header'
import { Hero } from './components/Hero/hero'
import { About } from './components/About/about'
import { Skills } from './components/Skills/skills'
import Experience from './components/Experience/Experience'
import { Projects } from './components/Projects/index'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default App
