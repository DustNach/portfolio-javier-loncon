import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
