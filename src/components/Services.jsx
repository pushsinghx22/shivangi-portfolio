import { useReveal } from '../hooks/useReveal'
import { Video, Camera, Star, BookOpen, Lightbulb, TrendingUp, MessageSquare, Image, Play, Share2 } from 'lucide-react'

const services = [
  { icon: Play, title: 'Sponsored Instagram Reels', desc: 'High-retention short-form videos crafted to integrate your brand seamlessly into compelling lifestyle narratives.' },
  { icon: Video, title: 'UGC Video Creation', desc: 'Raw, authentic user-generated content that feels real — perfect for paid ads and organic campaigns.' },
  { icon: Star, title: 'Product Reviews', desc: 'Genuine, detailed reviews that build consumer trust and drive purchasing decisions through authentic storytelling.' },
  { icon: Camera, title: 'Lifestyle Photography', desc: 'Aesthetic editorial shots that showcase your product in aspirational real-life contexts your audience craves.' },
  { icon: Share2, title: 'Story Promotions', desc: 'Story campaigns with polls, countdowns, and CTAs that drive direct engagement and conversions.' },
  { icon: BookOpen, title: 'Script Writing', desc: 'Compelling scripts for brand videos — hooks that retain, narratives that convert, and CTAs that click.' },
  { icon: Lightbulb, title: 'Content Ideation', desc: 'Fresh, trend-aware content concepts tailored to your campaign goals, audience, and platform algorithm.' },
  { icon: TrendingUp, title: 'Trend Research', desc: 'Real-time trend analysis to keep your brand culturally relevant and timely.' },
  { icon: MessageSquare, title: 'Brand Collaborations', desc: 'Full end-to-end partnership — from brief interpretation to final delivery — aligned with your brand identity.' },
  { icon: Image, title: 'Organic Social Content', desc: 'Long-term content strategies that build community, improve reach, and nurture authentic brand love.' },
]

export default function Services() {
  const { ref, visible } = useReveal()
  return (
    <section id="services" className="relative py-28 overflow-hidden noise-bg">
      <span className="section-number text-charcoal dark:text-cream">03</span>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">What I Offer</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
            <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal dark:text-cream leading-tight">
              Services &<br /><span className="italic text-gold">Deliverables</span>
            </h2>
            <p className="font-body text-charcoal/60 dark:text-cream/50 text-sm max-w-sm leading-relaxed md:mb-2">
              Every service is delivered with creative precision, strategic thinking, and an obsessive attention to quality.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className={`card-hover group glass-light dark:glass-dark rounded-2xl p-6 border border-gold/0 hover:border-gold/20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-10 h-10 rounded-full bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={16} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-medium text-charcoal dark:text-cream mb-2 group-hover:text-gold transition-colors duration-300 leading-snug">{s.title}</h3>
                <p className="font-body text-xs text-charcoal/55 dark:text-cream/45 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal font-body text-sm font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
