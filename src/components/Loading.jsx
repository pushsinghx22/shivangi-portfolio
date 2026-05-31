import { useEffect, useState } from 'react'

export default function Loading() {
  const [fade, setFade] = useState(false)
  useEffect(() => { const t = setTimeout(() => setFade(true), 1800); return () => clearTimeout(t) }, [])
  return (
    <div className={`fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '1.5s' }} />
        <div className="absolute inset-2 rounded-full border border-gold/40 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
        <div className="absolute inset-4 rounded-full border border-gold/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl text-gold font-light italic">S</span>
        </div>
      </div>
      <p className="shimmer-text font-display text-xl font-light tracking-[6px] uppercase">whatever.shivi</p>
      <p className="text-cream/30 text-xs tracking-[3px] uppercase mt-2 font-body">Loading portfolio</p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-12 h-px bg-gold/30" />
        <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" />
        <div className="w-12 h-px bg-gold/30" />
      </div>
    </div>
  )
}
