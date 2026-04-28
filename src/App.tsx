import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import SkillsRadar from './components/SkillsRadar'
import AnimatedCounter from './components/AnimatedCounter'
import ExperienceTimeline from './components/ExperienceTimeline'
import LiveProjects from './components/LiveProjects'
import TechnicalHighlights from './components/TechnicalHighlights'
import SGCCaseStudy from './components/SGCCaseStudy'
import Demos from './components/Demos'

function App() {
  return (
    <LanguageProvider>
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
                <AnimatedCounter />
                <LiveProjects />
                <TechnicalHighlights />
                <ExperienceTimeline />
                <Demos />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/projects/sgc-case-study" element={
              <>
                <SGCCaseStudy />
                <Contact />
              </>
            } />
          </Routes>
          <Footer />
        </div>
        <SpeedInsights />
      </Router>
    </LanguageProvider>
  )
}

export default App
