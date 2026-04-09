# Eduardo Vásquez - Freelance Developer Landing Page

Landing page moderna y minimalista para mostrar servicios de desarrollo de software freelance.

## 🚀 Características

- **Diseño Moderno y Minimalista**: Interfaz limpia con colores oscuros y acentos en gradientes
- **Animaciones de Fondo**: Efectos visuales con blobs animados, partículas flotantes y patrones de cuadrícula
- **Totalmente Responsiva**: Adaptada para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Página Legal**: Ruta dedicada `/legal` con política de privacidad completa

## 📁 Estructura del Proyecto

```
freelance-landing/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx  # Fondo animado con blobs y partículas
│   │   ├── Navbar.jsx              # Navegación responsive
│   │   ├── Hero.jsx                # Sección principal
│   │   ├── Services.jsx            # Servicios ofrecidos
│   │   ├── About.jsx               # Información sobre mí
│   │   ├── Tech.jsx                # Stack tecnológico
│   │   ├── Projects.jsx            # Portafolio de proyectos
│   │   ├── Contact.jsx             # Formulario de contacto
│   │   └── Footer.jsx              # Pie de página
│   ├── pages/
│   │   ├── LandingPage.jsx         # Página principal
│   │   └── AvisoLegal.jsx          # Página de aviso legal/privacidad
│   ├── styles/
│   │   └── index.css               # Estilos globales y Tailwind
│   ├── App.jsx                     # Configuración de rutas
│   └── main.jsx                    # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool rápido
- **React Router DOM** - Navegación
- **Framer Motion** - Animaciones fluidas
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos modernos

## 🚀 Cómo ejecutar

### Instalación

```bash
cd freelance-landing
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 📱 Secciones de la Landing Page

1. **Hero**: Presentación principal con estadísticas
2. **Servicios**: Web, Escritorio y Móvil
3. **Sobre Mí**: Experiencia y habilidades
4. **Tecnologías**: Stack tecnológico
5. **Proyectos**: Portafolio de trabajos
6. **Contacto**: Formulario e información

## 🔗 Rutas

- `/` - Landing page principal
- `/legal` - Política de privacidad

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  'dark': {
    900: '#0a0a0a',
    800: '#121212',
    700: '#1a1a1a',
  },
  'accent': {
    primary: '#6366f1',
    secondary: '#8b5cf6',
  }
}
```

### Fuentes
- **Display**: Syne (títulos)
- **Body**: Space Grotesk (contenido)

## 📄 Licencia

© 2026 Eduardo Vásquez García. Todos los derechos reservados.
