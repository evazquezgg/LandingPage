import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'React', category: 'Frontend', color: '#7dcfff' },
  { name: 'Next.js', category: 'Frontend', color: '#c0caf5' },
  { name: 'TypeScript', category: 'Lenguaje', color: '#7aa2f7' },
  { name: 'Node.js', category: 'Backend', color: '#9ece6a' },
  { name: 'Python', category: 'Lenguaje', color: '#e0af68' },
  { name: 'PostgreSQL', category: 'Base de Datos', color: '#bb9af7' },
  { name: 'MongoDB', category: 'Base de Datos', color: '#9ece6a' },
  { name: 'Docker', category: 'DevOps', color: '#7aa2f7' },
  { name: 'AWS', category: 'Cloud', color: '#ff9e64' },
  { name: 'Git', category: 'Herramientas', color: '#f7768e' },
  { name: 'Figma', category: 'Diseño', color: '#ff9e64' },
  { name: 'React Native', category: 'Mobile', color: '#7dcfff' },
]

const Tech = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-tokyo-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-tokyo-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Tecnologías
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-tokyo-text text-lg max-w-2xl mx-auto">
            Utilizo las tecnologías más modernas y robustas para construir 
            aplicaciones escalables y de alto rendimiento.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl glass text-center hover:bg-tokyo-blue/5 transition-all cursor-default border border-transparent hover:border-tokyo-blue/20">
                {/* Tech name */}
                <h3 className="text-white font-display font-semibold mb-1 group-hover:text-tokyo-cyan transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-tokyo-text-dark">{tech.category}</p>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl -z-10"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-tokyo-text-dark">
            ¿Tienes un stack específico en mente?{' '}
            <span className="text-tokyo-cyan">Me adapto a tus necesidades</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Tech
