import { Routes, Route } from 'react-router-dom'
import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <GradientBackground />
      <div className="min-h-screen flex flex-col relative z-0">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
