import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  { text: "Shivangi delivered beyond our expectations. The reel she created for our campaign had one of the highest engagement rates we've seen from any creator partnership this quarter. Her storytelling felt genuinely authentic.", name: "Brand Manager", company: "Mcaffeine", role: "Marketing Team" },
  { text: "Working with Shivangi was seamless from start to finish. She understood the brief immediately, asked the right clarifying questions, and delivered polished content well ahead of the deadline. Will absolutely collaborate again.", name: "Campaign Lead", company: "Dot & Key", role: "Influencer Partnerships" },
  { text: "Her content for our campaign drove real results — strong click-through and genuine audience curiosity. She has a rare talent for making branded content feel like organic recommendations.", name: "Digital Strategy", company: "Prime Video", role: "Content Partnerships" },
  { text: "Shivangi's UGC content was exactly what we needed for our paid ads funnel. The raw, authentic feel she brought made it convert much better than studio-produced content. She's a great strategic partner.", name: "Growth Team", company: "Inde Wild", role: "Performance Marketing" },
]

export default function Testimonials() {
  const { ref, visible } = useReveal()
  const [active, setActive] = useState(0)
  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  return (
    <section className="relative py-28 overflow-hidden bg-beige/50 dark:bg-dark-card/40">
      <span className="section-number text-charcoal dark:text-cream">07</span>
      <div className="gold-divider absolute top-0 left-0 right-0" />
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
      <div className="absolute inset-0 noise-bg" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`text-center mb-14 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">Kind Words</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal dark:text-cream">
            What brands <span className="italic text-gold">say</span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative glass-light dark:glass-dark rounded-3xl p-8 md:p-12 border border-gold/10 text-center">
            <div className="absolute top-6 left-8 opacity-20"><Quote size={40} className="text-gold" /></div>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-lg">★</span>)}
            </div>
            <p className="font-display text-xl md:text-2xl font-light text-charcoal dark:text-cream leading-relaxed italic mb-8">
              "{testimonials[active].text}"
            </p>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
                <span className="font-display text-base font-semibold text-gold">{testimonials[active].company[0]}</span>
              </div>
              <p className="font-body text-sm font-medium text-charcoal dark:text-cream">{testimonials[active].name}</p>
              <p className="font-body text-xs text-gold">{testimonials[active].company}</p>
              <p className="font-body text-xs text-charcoal/40 dark:text-cream/40">{testimonials[active].role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-charcoal/60 dark:text-cream/60 hover:text-gold transition-all duration-300"><ChevronLeft size={16} /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-gold/30 hover:bg-gold/60'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-charcoal/60 dark:text-cream/60 hover:text-gold transition-all duration-300"><ChevronRight size={16} /></button>
          </div>
          <p className="text-center font-body text-xs text-charcoal/30 dark:text-cream/25 mt-6 italic">
            * Representative testimonials based on brand collaboration experience.
          </p>
        </div>
      </div>
    </section>
  )
}
