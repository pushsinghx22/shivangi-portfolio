import { Instagram, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (e, href) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <footer className="relative bg-charcoal dark:bg-dark-bg text-cream/60 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-3xl text-cream mb-3">
              <span className="italic text-gold">whatever</span><span className="text-gold/60">.</span><span>shivi</span>
            </div>
            <p className="font-body text-sm text-cream/40 leading-relaxed max-w-xs">Documenting coffee breaks, cute fits, and curiosity — creating content that feels real.</p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"><Instagram size={14} /></a>
              <a href="mailto:Shivangiisingh2508@gmail.com"
                className="w-9 h-9 rounded-full border border-cream/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"><Mail size={14} /></a>
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-[3px] uppercase text-gold/70 mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => handleNav(e, l.href)}
                    className="font-body text-sm text-cream/50 hover:text-gold hover-underline transition-colors duration-300">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-[3px] uppercase text-gold/70 mb-5">Contact</p>
            <div className="space-y-3">
              <div>
                <p className="font-body text-xs text-cream/30 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:Shivangiisingh2508@gmail.com" className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300 break-all">Shivangiisingh2508@gmail.com</a>
              </div>
              <div>
                <p className="font-body text-xs text-cream/30 uppercase tracking-wider mb-1">Instagram</p>
                <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer" className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300">@whatever.shivi</a>
              </div>
              <div>
                <p className="font-body text-xs text-cream/30 uppercase tracking-wider mb-1">Niche</p>
                <p className="font-body text-sm text-cream/60">Fashion & Lifestyle · UGC</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gold/10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/30">© {new Date().getFullYear()} Shivangi Singh · All rights reserved · @whatever.shivi</p>
          <p className="font-body text-xs text-cream/20">Fashion & Lifestyle Creator · UGC Creator · Digital Creator</p>
          <button onClick={scrollTop} className="flex items-center gap-2 text-cream/30 hover:text-gold font-body text-xs tracking-wider uppercase transition-colors duration-300 group">
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-cream/10 group-hover:border-gold flex items-center justify-center transition-all duration-300"><ArrowUp size={12} /></div>
          </button>
        </div>
      </div>
    </footer>
  )
}
