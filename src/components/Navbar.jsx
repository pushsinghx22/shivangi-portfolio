import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Instagram, Mail } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault(); setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className={`glass-light dark:glass-dark rounded-full px-5 py-2 ${scrolled ? 'shadow-lg shadow-gold/10' : ''}`}>
            <a href="/" className="font-display text-lg font-medium tracking-wide text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors">
              <span className="italic">whatever</span><span className="text-gold">.</span><span>shivi</span>
            </a>
          </div>

          <nav className={`hidden md:flex items-center gap-8 glass-light dark:glass-dark rounded-full px-8 py-3 ${scrolled ? 'shadow-lg shadow-gold/10' : ''}`}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}
                className="nav-link text-charcoal/70 dark:text-cream/70 hover:text-gold dark:hover:text-gold">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer"
              className="glass-light dark:glass-dark rounded-full p-2.5 text-charcoal/60 dark:text-cream/60 hover:text-gold dark:hover:text-gold transition-colors hidden md:flex">
              <Instagram size={14} />
            </a>
            <button onClick={() => setDarkMode(!darkMode)}
              className="glass-light dark:glass-dark rounded-full p-2.5 text-charcoal/60 dark:text-cream/60 hover:text-gold transition-colors">
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button onClick={() => setMenuOpen(true)}
              className="md:hidden glass-light dark:glass-dark rounded-full p-2.5 text-charcoal/60 dark:text-cream/60 hover:text-gold transition-colors">
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-charcoal/60 dark:text-cream/60 hover:text-gold transition-colors">
            <X size={24} />
          </button>
          <div className="font-display text-4xl italic text-gold mb-4">whatever.shivi</div>
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}
              className="font-display text-3xl font-light tracking-wide text-charcoal dark:text-cream hover:text-gold transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}>{l.label}</a>
          ))}
          <div className="gold-divider w-16 my-4" />
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer"
              className="text-charcoal/60 dark:text-cream/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="mailto:Shivangiisingh2508@gmail.com"
              className="text-charcoal/60 dark:text-cream/60 hover:text-gold transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </>
  )
}
