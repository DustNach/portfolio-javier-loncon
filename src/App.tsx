import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Demos from './components/Demos'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import ThemeToggle from './components/ThemeToggle'
import BentoGrid from './components/BentoGrid'
import SkillsRadar from './components/SkillsRadar'
import AnimatedCounter from './components/AnimatedCounter'
import ExperienceTimeline from './components/ExperienceTimeline'
import ChatbotDemo from './components/ChatbotDemo'
import SGCMockup from './components/SGCMockup'

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
              <ExperienceTimeline />
              <ChatbotDemo />
              <SGCMockup />
              <Projects />
              <Demos />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  )
}

export default App
