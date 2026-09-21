import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import FeaturedProject from './components/FeaturedProject.jsx'
import Projects from './components/Projects.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Services from './components/Services.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject onViewDetails={setActiveProject} />
        <Projects onViewDetails={setActiveProject} />
        <Experience />
        <Education />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
