import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contacto@ejemplo.com', href: 'mailto:contacto@ejemplo.com' },
    { icon: MapPin, label: 'Ubicación', value: 'México', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ]

  return (
    <section id="contact" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tokyo-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-tokyo-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Hagamos realidad tu proyecto
          </h2>
          <p className="text-tokyo-text text-lg max-w-2xl mx-auto">
            ¿Tienes una idea en mente? Hablemos sobre cómo puedo ayudarte 
            a convertirla en una solución digital exitosa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              Información de contacto
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-tokyo-blue/10 flex items-center justify-center group-hover:bg-tokyo-blue/20 transition-colors">
                    <item.icon className="w-5 h-5 text-tokyo-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-tokyo-text-dark">{item.label}</p>
                    <p className="text-white group-hover:text-tokyo-cyan transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-tokyo-text-dark mb-4">Sígueme en</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-tokyo-text hover:text-tokyo-cyan hover:border-tokyo-blue/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-tokyo-text-dark mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-tokyo-bg-light border border-tokyo-blue/20 text-white placeholder-tokyo-text-dark focus:outline-none focus:border-tokyo-blue transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-tokyo-text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-tokyo-bg-light border border-tokyo-blue/20 text-white placeholder-tokyo-text-dark focus:outline-none focus:border-tokyo-blue transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-tokyo-text-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-tokyo-bg-light border border-tokyo-blue/20 text-white placeholder-tokyo-text-dark focus:outline-none focus:border-tokyo-blue transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-tokyo-green text-white'
                    : 'bg-gradient-to-r from-tokyo-blue to-tokyo-purple text-white hover:shadow-lg hover:shadow-tokyo-blue/30'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
