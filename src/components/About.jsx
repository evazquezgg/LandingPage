import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Lightbulb, Users, Zap, Award, Coffee } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Código Limpio', value: 'Arquitectura escalable' },
  { icon: Lightbulb, label: 'Soluciones Creativas', value: 'Pensamiento innovador' },
  { icon: Users, label: 'Comunicación', value: 'Trabajo colaborativo' },
  { icon: Zap, label: 'Rendimiento', value: 'Optimización constante' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-tokyo-blue/5 rounded-r-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tokyo-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
              Sobre Mí
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Apasionado por crear{' '}
              <span className="gradient-text">experiencias digitales</span>
            </h2>
            <div className="space-y-4 text-tokyo-text text-lg leading-relaxed">
              <p>
                Soy un desarrollador de software freelance con más de 5 años de experiencia 
                creando soluciones tecnológicas para empresas y emprendedores. Me especializo 
                en transformar ideas complejas en aplicaciones intuitivas y de alto rendimiento.
              </p>
              <p>
                Mi enfoque combina las mejores prácticas de desarrollo con un diseño centrado 
                en el usuario, garantizando que cada proyecto no solo funcione perfectamente, 
                sino que también ofrezca una experiencia excepcional.
              </p>
              <p>
                He trabajado con clientes de diversas industrias, desde startups hasta empresas 
                establecidas, ayudándoles a digitalizar sus procesos y alcanzar sus objetivos 
                de negocio mediante tecnología de vanguardia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: Award, value: '100%', label: 'Proyectos entregados' },
                { icon: Coffee, value: '∞', label: 'Tazas de café' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-tokyo-blue/10 flex items-center justify-center group-hover:bg-tokyo-blue/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-tokyo-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-tokyo-text-dark">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl glass group cursor-default hover:border-tokyo-blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-tokyo-blue/10 flex items-center justify-center mb-4 group-hover:bg-tokyo-blue/20 transition-colors">
                  <item.icon className="w-6 h-6 text-tokyo-blue" />
                </div>
                <h3 className="text-white font-display font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-tokyo-text-dark">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
