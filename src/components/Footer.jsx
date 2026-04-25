import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useRef } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const scrollAnimationRef = useRef(null)

  const footerLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  // Función de easing para scroll suave (easeInOutCubic)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const targetPosition = elementPosition - navbarHeight
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500 // 1.5 segundos
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
  }

  return (
    <footer className="py-12 border-t border-tokyo-blue/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-display font-bold gradient-text"
          >
            EV
          </motion.div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-tokyo-text-dark hover:text-tokyo-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Legal link */}
          <Link
            to="/legal"
            className="text-sm text-tokyo-text-dark hover:text-tokyo-cyan transition-colors"
          >
            Política de Privacidad
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-tokyo-blue/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-tokyo-text-dark">
            © {currentYear} Todos los derechos reservados.
          </p>
          <p className="text-sm text-tokyo-text-dark flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-tokyo-red fill-tokyo-red" /> en México
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer