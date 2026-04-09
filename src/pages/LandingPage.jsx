import GalaxyBackground from '../components/GalaxyBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-tokyo-bg">
      <GalaxyBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
