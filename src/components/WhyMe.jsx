import { useReveal } from '../hooks/useReveal'
import { Heart, Palette, Eye, Target, Zap, Clock } from 'lucide-react'

const reasons = [
  { icon: Heart, title: 'Authentic Storytelling', desc: 'Every piece of content I create comes from a real place. Audiences can feel the difference between genuine and performative — I always choose genuine.' },
  { icon: Palette, title: 'Aesthetic Content Production', desc: 'A strong visual identity built on intentional color, composition, and lighting. Your brand will always look its best through my lens.' },
  { icon: Eye, title: 'Strong Creator Perspective', desc: "I don't just execute briefs — I bring creative direction, cultural context, and an audience-first mindset to every collaboration." },
  { icon: Target, title: 'Understanding Brand Objectives', desc: "I've worked with brands across fashion, beauty, entertainment, and F&B — I know how to align content goals with your business KPIs." },
  { icon: Zap, title: 'Trend-Driven Concepts', desc: "I stay plugged into what's performing on Instagram in real time — so your campaign rides trends instead of chasing them." },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Responsive communication, clear timelines, and on-time delivery. Working with me is seamless from first message to final file.' },
]

export default function WhyMe() {
  const { ref, visible } = useReveal()
  return (
    <section className="relative py-28 overflow-hidden">
      <span className="section-number text-charcoal dark:text-cream">04</span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blush/30 dark:bg-gold/4 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">The Difference</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal dark:text-cream mb-4">
            Why work <span className="italic text-gold">with me?</span>
          </h2>
          <p className="font-body text-charcoal/60 dark:text-cream/50 text-sm max-w-md mx-auto leading-relaxed">
            Beyond follower counts and content formats — here's what makes collaborating with me genuinely different.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={r.title} className={`card-hover group relative rounded-2xl p-8 bg-beige/50 dark:bg-dark-card/60 border border-gold/10 hover:border-gold/30 transition-all duration-700 overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="absolute top-4 right-6 font-display text-6xl text-gold/5 font-light">0{i + 1}</span>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center shrink-0 transition-colors duration-300 mt-1">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-charcoal dark:text-cream mb-2 group-hover:text-gold transition-colors duration-300">{r.title}</h3>
                    <p className="font-body text-sm text-charcoal/60 dark:text-cream/50 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
