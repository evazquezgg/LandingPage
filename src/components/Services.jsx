import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Monitor, Smartphone, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Aplicaciones Web',
    description: 'Desarrollo de aplicaciones web modernas y escalables utilizando React, Next.js, Node.js y las últimas tecnologías del mercado.',
    features: ['React / Next.js', 'Node.js / Express', 'APIs RESTful', 'Progressive Web Apps'],
    gradient: 'from-tokyo-cyan to-tokyo-blue',
    glow: 'hover:shadow-tokyo-cyan/20',
  },
  {
    icon: Monitor,
    title: 'Aplicaciones de Escritorio',
    description: 'Soluciones de escritorio robustas y eficientes para Windows, macOS y Linux con tecnologías multiplataforma.',
    features: ['Electron.js', 'Tauri', 'Python / PyQt', 'C# / .NET'],
    gradient: 'from-tokyo-purple to-tokyo-magenta',
    glow: 'hover:shadow-tokyo-purple/20',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma para iOS y Android que ofrecen experiencias fluidas y de alto rendimiento.',
    features: ['React Native', 'Flutter', 'iOS / Android Nativo', 'App Store / Play Store'],
    gradient: 'from-tokyo-orange to-tokyo-yellow',
    glow: 'hover:shadow-tokyo-orange/20',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 relative">
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
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Soluciones a tu medida
          </h2>
          <p className="text-tokyo-text text-lg max-w-2xl mx-auto">
            Ofrezco servicios de desarrollo de software completos, desde la concepción 
            hasta el despliegue y mantenimiento de tu aplicación.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl glass overflow-hidden h-full transition-all duration-500 ${service.glow} hover:shadow-2xl`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-tokyo-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-tokyo-text mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-tokyo-text-light">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-tokyo-cyan font-medium group/btn"
                >
                  <span>Saber más</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
