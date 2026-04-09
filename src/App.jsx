import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AvisoLegal from './pages/AvisoLegal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/legal" element={<AvisoLegal />} />
    </Routes>
  )
}

export default App
