import { useEffect, useRef, useState } from 'react'
import { Instagram, Mail, ArrowDown, Download, Sparkles } from 'lucide-react'

const WORDS = ['Creator', 'Storyteller', 'UGC Expert', 'Trendsetter', 'Collaborator']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(false)
  const bgRef = useRef(null)

  useEffect(() => {
    setVisible(true)
    const interval = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!bgRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      <div ref={bgRef} className="absolute inset-0 transition-transform duration-700 ease-out">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blush/40 dark:bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gold/20 dark:bg-gold/8 blur-[120px]" />
      </div>

      {/* Side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/40" />
        <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer"
          className="text-charcoal/40 dark:text-cream/40 hover:text-gold transition-colors rotate-90 text-[10px] font-body tracking-[3px] uppercase my-4">
          @whatever.shivi
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
              <Sparkles size={12} className="text-gold" />
              <span className="text-[11px] font-body font-medium tracking-[2px] uppercase text-gold">Fashion & Lifestyle Creator</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6">
              <span className="block text-charcoal dark:text-cream">Shivangi</span>
              <span className="block italic text-gold">Singh</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <div className="h-7 overflow-hidden relative w-40">
                {WORDS.map((word, i) => (
                  <div key={word}
                    className={`font-body text-sm font-medium tracking-[3px] uppercase text-charcoal/60 dark:text-cream/60 transition-all duration-500 ${i === wordIdx ? 'opacity-100 translate-y-0' : 'opacity-0 absolute top-0'}`}>
                    {word}
                  </div>
                ))}
              </div>
            </div>

            <p className="font-body text-charcoal/60 dark:text-cream/50 text-base leading-relaxed max-w-md mb-8">
              Documenting coffee breaks, cute fits, and curiosity — creating content that feels authentic, performs organically, and helps brands connect with the right audience.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold hover:bg-gold-light text-charcoal font-body text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
                View Portfolio
              </button>
              <a href="mailto:Shivangiisingh2508@gmail.com?subject=Media Kit Request"
                className="border border-gold/40 hover:border-gold text-charcoal dark:text-cream font-body text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-gold/5 flex items-center gap-2">
                <Download size={14} /> Media Kit
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="border border-charcoal/20 dark:border-cream/20 hover:border-gold text-charcoal dark:text-cream font-body text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-gold/5">
                Let's Collaborate
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-charcoal/50 dark:text-cream/50 hover:text-gold transition-colors text-sm font-body">
                <Instagram size={16} /><span>@whatever.shivi</span>
              </a>
              <div className="w-px h-4 bg-charcoal/20 dark:bg-cream/20" />
              <a href="mailto:Shivangiisingh2508@gmail.com"
                className="flex items-center gap-2 text-charcoal/50 dark:text-cream/50 hover:text-gold transition-colors text-sm font-body">
                <Mail size={16} /><span>Email me</span>
              </a>
            </div>
          </div>

          {/* Right — REAL PHOTO (mirror selfie) */}
          <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mx-auto max-w-sm">
              {/* Decorative frames */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/10" />
              <div className="absolute -inset-8 rounded-3xl border border-gold/5" />

              {/* Photo card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-blush dark:bg-dark-card shadow-2xl shadow-gold/10">
                <img
                  src="/images/shivangi-hero.png"
                  alt="Shivangi Singh — Fashion & Lifestyle Creator"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-light dark:glass-dark rounded-xl px-4 py-3">
                    <p className="font-display text-base font-medium text-charcoal dark:text-cream italic">Fashion & Lifestyle</p>
                    <p className="font-body text-[10px] text-charcoal/60 dark:text-cream/60 tracking-widest uppercase mt-0.5">Since October 2025</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — followers */}
              <div className="float-anim absolute -right-6 top-10 glass-light dark:glass-dark rounded-2xl px-5 py-4 shadow-xl shadow-gold/10">
                <div className="font-display text-2xl font-semibold text-gold">22K+</div>
                <div className="font-body text-[10px] text-charcoal/60 dark:text-cream/60 uppercase tracking-[2px] mt-0.5">Followers</div>
              </div>

              {/* Floating badge — brands */}
              <div className="float-anim absolute -left-6 bottom-24 glass-light dark:glass-dark rounded-2xl px-5 py-4 shadow-xl shadow-gold/10" style={{ animationDelay: '1.5s' }}>
                <div className="font-display text-2xl font-semibold text-gold">16+</div>
                <div className="font-body text-[10px] text-charcoal/60 dark:text-cream/60 uppercase tracking-[2px] mt-0.5">Brands</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-charcoal/30 dark:text-cream/30 hover:text-gold transition-colors">
            <ArrowDown size={20} />
          </button>
          <span className="font-body text-[10px] text-charcoal/30 dark:text-cream/30 tracking-[3px] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
