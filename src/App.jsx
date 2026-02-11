import { useEffect, useState, useRef } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  const [activeItem, setActiveItem] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, label: "Home" },
        { ref: aboutRef, label: "About" },
        { ref: skillsRef, label: "Skills" },
        { ref: projectsRef, label: "Projects" },
        { ref: contactRef, label: "Contact" },
      ]

      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()


          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveItem(section.label)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item) => {
    setActiveItem(item)

    const sectionMap = {
      Home: heroRef,
      About: aboutRef,
      Skills: skillsRef,
      Projects: projectsRef,
      Contact: contactRef,
    }

    const ref = sectionMap[item]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <div style={{ display: 'flex', backgroundColor: '#EBEBEB', minHeight: '100vh', margin: 0, padding: 0 }}>

      <Sidebar
        activeItem={activeItem}
        setActiveItem={handleNavClick}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main style={{
        width: '100%',
        backgroundColor: '#EBEBEB',
        marginLeft: isMobile ? 0 : '25px',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        padding: 0,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }}>
        <section ref={heroRef}>
          <Hero />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App