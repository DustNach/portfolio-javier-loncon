import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import BentoGrid from './components/BentoGrid'
import SkillsRadar from './components/SkillsRadar'
import AnimatedCounter from './components/AnimatedCounter'
import ExperienceTimeline from './components/ExperienceTimeline'
import LiveProjects from './components/LiveProjects'
import Demos from './components/Demos'

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
              <SkillsRadar />
              <BentoGrid />
              <AnimatedCounter />
              <LiveProjects />
              <ExperienceTimeline />
              <Demos />
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
