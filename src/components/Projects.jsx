import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Flextime',
    description: 'Aplicación móvil para gestión de tiempo y productividad personal. Desarrollada con React Native y backend en Node.js.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    gradient: 'from-tokyo-cyan to-tokyo-blue',
  },
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-tokyo-purple to-tokyo-magenta',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de análisis de datos en tiempo real con visualizaciones interactivas y reportes automatizados.',
    tags: ['React', 'D3.js', 'Python'],
    gradient: 'from-tokyo-orange to-tokyo-yellow',
  },
  {
    title: 'App de Gestión',
    description: 'Sistema de gestión empresarial con módulos de CRM, facturación y seguimiento de proyectos.',
    tags: ['Electron', 'React', 'SQLite'],
    gradient: 'from-tokyo-green to-tokyo-cyan',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-tokyo-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Proyectos Recientes
          </h2>
          <p className="text-tokyo-text text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia 
            en diferentes tecnologías y sectores.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass border border-transparent hover:border-tokyo-blue/20 transition-all">
                {/* Project image placeholder with gradient */}
                <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-tokyo-bg/20" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-tokyo-bg via-transparent to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                  />
                  
                  {/* Project icon/placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-display font-bold text-white/20">
                      {project.title[0]}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-tokyo-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-tokyo-text mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-tokyo-blue/10 text-tokyo-text-light border border-tokyo-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass text-white rounded-full font-medium hover:bg-tokyo-blue/10 transition-all border border-tokyo-blue/20"
          >
            Ver todos los proyectos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects