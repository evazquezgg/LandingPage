import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const GalaxyBackground = () => {
  const [stars, setStars] = useState([])
  const [shootingStars, setShootingStars] = useState([])

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }))
    setStars(generatedStars)

    // Generate shooting stars periodically
    const interval = setInterval(() => {
      const newShootingStar = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        duration: Math.random() * 1 + 0.5,
      }
      setShootingStars(prev => [...prev.slice(-2), newShootingStar])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
      
      {/* Nebula effects */}
      <div className="absolute inset-0">
        {/* Cyan nebula */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(122,162,247,0.15) 0%, rgba(122,162,247,0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Purple nebula */}
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(187,154,247,0.12) 0%, rgba(187,154,247,0.04) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Blue nebula */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(125,207,255,0.08) 0%, rgba(125,207,255,0.02) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              backgroundColor: star.size > 2 ? '#bb9af7' : '#c0caf5',
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px #bb9af7` : 'none',
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-[2px] w-[100px]"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            background: 'linear-gradient(90deg, transparent, #7aa2f7, #bb9af7)',
            boxShadow: '0 0 10px #7aa2f7, 0 0 20px #bb9af7',
          }}
          initial={{ opacity: 0, x: 0, y: 0, rotate: -45 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 300],
            y: [0, 300],
          }}
          transition={{
            duration: star.duration,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Galaxy spiral arms */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <motion.div
          className="w-[1200px] h-[1200px]"
          style={{
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(122,162,247,0.1) 60deg,
                transparent 120deg,
                rgba(187,154,247,0.1) 180deg,
                transparent 240deg,
                rgba(125,207,255,0.1) 300deg,
                transparent 360deg
              )
            `,
            borderRadius: '50%',
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.line
          x1="10%" y1="20%" x2="25%" y2="35%"
          stroke="#7aa2f7"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="25%" y1="35%" x2="40%" y2="25%"
          stroke="#7aa2f7"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.line
          x1="60%" y1="60%" x2="75%" y2="45%"
          stroke="#bb9af7"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="75%" y1="45%" x2="85%" y2="55%"
          stroke="#bb9af7"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </svg>

      {/* Distant galaxies */}
      <motion.div
        className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 30% 30%, #ff9e64 0%, #bb9af7 30%, transparent 70%)',
          filter: 'blur(2px)',
          opacity: 0.6,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, #7dcfff 0%, #7aa2f7 40%, transparent 70%)',
          filter: 'blur(2px)',
          opacity: 0.5,
        }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Black hole effect at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, #000 0%, #0a0a0f 30%, rgba(122,162,247,0.2) 60%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 w-64 h-64 rounded-full border border-[#7aa2f7]/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
    </div>
  )
}

export default GalaxyBackground
