import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Brands from './components/Brands'
import Services from './components/Services'
import WhyMe from './components/WhyMe'
import AgencyValue from './components/AgencyValue'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="bg-cream dark:bg-dark-bg text-charcoal dark:text-cream transition-colors duration-500 min-h-screen">
      {loading && <Loading />}
      <Cursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Brands />
        <Services />
        <WhyMe />
        <AgencyValue />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
