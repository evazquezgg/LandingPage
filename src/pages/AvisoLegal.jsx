import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Mail, MapPin, User, Lock, Trash2, Bell, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import GalaxyBackground from '../components/GalaxyBackground'

const AvisoLegal = () => {
  const sections = [
    {
      icon: Shield,
      title: '1. Introducción',
      content: `Eduardo Vásquez García ("nosotros", "nuestro" o "desarrollador") respeta tu privacidad y se compromete a proteger tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información cuando utilizas nuestras aplicaciones y servicios.

Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con esta política, por favor no utilices nuestras aplicaciones.`
    },
    {
      icon: User,
      title: '2. Información que Recopilamos',
      content: `Podemos recopilar la siguiente información personal:

• Dirección de correo electrónico: Utilizada para la autenticación, comunicación sobre tu cuenta y notificaciones importantes.
• Información de uso: Datos sobre cómo interactúas con nuestras aplicaciones para mejorar la experiencia del usuario.
• Datos técnicos: Información del dispositivo, dirección IP y cookies para fines de seguridad y análisis.

No recopilamos información sensible sin tu consentimiento explícito.`
    },
    {
      icon: Lock,
      title: '3. Cómo Utilizamos tu Información',
      content: `Utilizamos tu información personal para:

• Proporcionar y mantener nuestros servicios
• Autenticar tu identidad y permitir el acceso a tu cuenta
• Comunicarnos contigo sobre actualizaciones, soporte y cambios en la política
• Mejorar nuestros servicios mediante análisis de uso
• Cumplir con obligaciones legales y regulatorias

No vendemos ni alquilamos tu información personal a terceros.`
    },
    {
      icon: Users,
      title: '4. Compartir Información',
      content: `Podemos compartir tu información en las siguientes circunstancias:

• Con proveedores de servicios que nos ayudan a operar (hosting, análisis, soporte)
• Cuando sea requerido por ley o para proteger nuestros derechos legales
• En caso de fusión, adquisición o venta de activos

Todos los terceros están obligados a mantener la confidencialidad de tu información.`
    },
    {
      icon: Shield,
      title: '5. Seguridad de los Datos',
      content: `Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:

• Encriptación de datos en tránsito (TLS/SSL) y en reposo
• Almacenamiento seguro de credenciales con hash y salt
• Acceso restringido a servidores y bases de datos
• Monitoreo continuo de seguridad y detección de amenazas
• Actualizaciones regulares de seguridad

Sin embargo, ningún método de transmisión por Internet es 100% seguro.`
    },
    {
      icon: User,
      title: '6. Tus Derechos',
      content: `De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México, tienes derecho a:

• Acceder a tus datos personales que tenemos
• Rectificar datos inexactos o incompletos
• Cancelar tu cuenta y solicitar eliminación de datos
• Oponerte al tratamiento de datos para fines específicos
• Revocar tu consentimiento en cualquier momento

Para ejercer estos derechos, contacta a través del correo proporcionado.`
    },
    {
      icon: Trash2,
      title: '7. Eliminación de Datos',
      content: `Puedes solicitar la eliminación completa de tu cuenta y datos en cualquier momento:

• Utiliza la opción "Eliminar cuenta" en la aplicación cuando esté disponible
• Envía una solicitud por correo electrónico

Procesaremos tu solicitud dentro de 30 días hábiles. Algunos datos pueden retenerse por obligaciones legales o para resolver disputas.`
    },
    {
      icon: Bell,
      title: '8. Cambios a esta Política',
      content: `Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios materiales mediante:

• Un aviso prominente en nuestras aplicaciones
• Un correo electrónico a la dirección asociada a tu cuenta
• Actualización de la fecha de vigencia al inicio de esta política

Te recomendamos revisar periódicamente esta política.`
    },
    {
      icon: Users,
      title: '9. Privacidad de Menores',
      content: `Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años.

Si tienes conocimiento de que un menor ha proporcionado información personal, contáctanos inmediatamente para eliminar dicha información.`
    }
  ]

  return (
    <div className="relative min-h-screen bg-tokyo-bg">
      <GalaxyBackground />
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tokyo-blue/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-tokyo-text hover:text-tokyo-cyan transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Política de <span className="gradient-text">Privacidad</span>
            </h1>
            
            <div className="glass rounded-xl p-6 inline-block">
              <p className="text-tokyo-text">
                <strong className="text-white">Fecha de vigencia:</strong> 24 de marzo de 2026
              </p>
              <p className="text-tokyo-text">
                <strong className="text-white">Última actualización:</strong> 24 de marzo de 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-32 relative z-10">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border border-transparent hover:border-tokyo-blue/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-tokyo-blue/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-tokyo-blue" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-display font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-tokyo-text leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="glass rounded-2xl p-8 bg-gradient-to-br from-tokyo-blue/10 to-transparent border-tokyo-blue/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tokyo-blue/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-tokyo-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display font-bold text-white mb-4">
                  10. Contacto
                </h2>
                <p className="text-tokyo-text leading-relaxed mb-4">
                  Si tienes preguntas, inquietudes o deseas ejercer tus derechos relacionados 
                  con esta Política de Privacidad, puedes contactarnos:
                </p>
                <div className="space-y-2 text-tokyo-text-light">
                  <p><strong className="text-white">Responsable:</strong> Eduardo Vásquez García</p>
                  <p>
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:evazquezgg@solucionesedo.com" className="text-tokyo-cyan hover:underline">
                      evazquezgg@solucionesedo.com
                    </a>
                  </p>
                  <p><strong className="text-white">Ubicación:</strong> México</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center text-tokyo-text-dark text-sm"
        >
          <p>© 2026 Eduardo Vásquez García. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default AvisoLegal
