import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()
  const isLandingPage = location.pathname === '/'
  const scrollAnimationRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa
      const sections = ['hero', 'services', 'about', 'tech', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current)
      }
    }
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Servicios', href: '#services', id: 'services' },
    { name: 'Sobre Mí', href: '#about', id: 'about' },
    { name: 'Tecnologías', href: '#tech', id: 'tech' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ]

  // Función de easing para scroll suave (easeInOutCubic)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80 // Altura del navbar + margen
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const targetPosition = elementPosition - navbarHeight
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500 // Duración en ms (1.5 segundos para scroll más lento)
      let startTime = null

      // Cancelar animación anterior si existe
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current)
      }

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        
        // Aplicar easing
        const ease = easeInOutCubic(progress)
        
        window.scrollTo(0, startPosition + distance * ease)
        
        if (progress < 1) {
          scrollAnimationRef.current = requestAnimationFrame(animateScroll)
        }
      }

      scrollAnimationRef.current = requestAnimationFrame(animateScroll)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-display font-bold gradient-text"
              >
                EV
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            {isLandingPage && (
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm transition-colors relative group ${
                      activeSection === link.id 
                        ? 'text-tokyo-cyan' 
                        : 'text-tokyo-text hover:text-tokyo-cyan'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-tokyo-blue to-tokyo-purple transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </motion.button>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="hidden md:block">
              {isLandingPage ? (
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-tokyo-blue to-tokyo-purple text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-tokyo-blue/30 transition-all"
                >
                  Hablemos
                </motion.button>
              ) : (
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-gradient-to-r from-tokyo-blue to-tokyo-purple text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-tokyo-blue/30 transition-all"
                  >
                    Volver al inicio
                  </motion.button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-tokyo-text hover:text-tokyo-cyan p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isLandingPage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-display text-left transition-colors ${
                    activeSection === link.id 
                      ? 'text-tokyo-cyan' 
                      : 'text-tokyo-text hover:text-tokyo-cyan'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeMobile"
                      className="h-0.5 w-12 bg-gradient-to-r from-tokyo-blue to-tokyo-purple mt-2"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
