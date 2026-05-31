import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        let start = 0
        const duration = 1800
        const step = (ts) => {
          if (!step.t) step.t = ts
          const progress = Math.min((ts - step.t) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(target)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, started])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-light text-gold">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 22000, suffix: '+', label: 'Instagram Followers', sub: 'Organic & Engaged' },
  { value: 16, suffix: '+', label: 'Brand Collaborations', sub: 'Premium Partners' },
  { value: 6, suffix: ' Mo', label: 'To 22K Followers', sub: 'Since Oct 2025' },
  { value: 100, suffix: '%', label: 'Authentic Content', sub: 'No Ghost Followers' },
]

export default function Stats() {
  const { ref, visible } = useReveal()
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-blush/40 dark:bg-dark-card/60" />
      <div className="absolute inset-0 noise-bg" />
      <div className="gold-divider absolute top-0 left-0 right-0" />
      <div className="gold-divider absolute bottom-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="w-12 h-px bg-gold/40" />
          <span className="font-body text-xs font-medium tracking-[4px] uppercase text-gold/80">By The Numbers</span>
          <div className="w-12 h-px bg-gold/40" />
        </div>

        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 rounded-2xl overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {stats.map((s, i) => (
            <div key={s.label} className="bg-cream dark:bg-dark-bg flex flex-col items-center justify-center py-12 px-6 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="font-body text-sm font-medium text-charcoal dark:text-cream mt-3 tracking-wide">{s.label}</p>
              <p className="font-body text-xs text-charcoal/40 dark:text-cream/40 tracking-wider uppercase mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 glass-light dark:glass-dark rounded-full px-6 py-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-sm text-charcoal/70 dark:text-cream/70">
              Niche: <strong className="text-gold font-medium">Fashion & Lifestyle</strong>
            </span>
            <span className="w-px h-4 bg-gold/20" />
            <span className="font-body text-sm text-charcoal/70 dark:text-cream/70">
              Platform: <strong className="text-charcoal dark:text-cream font-medium">Instagram</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
