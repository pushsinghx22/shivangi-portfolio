import { useReveal } from '../hooks/useReveal'
import { BarChart2, FileText, Users, RefreshCw, CheckCircle, Briefcase } from 'lucide-react'

const pillars = [
  { icon: Users, title: 'Dual Perspective', desc: 'I understand both the creator side and the marketer side. I speak the language of briefs, KPIs, deliverables, and reporting — not just aesthetics.' },
  { icon: FileText, title: 'Brief to Content', desc: "I know exactly how to take a brand brief and transform it into a reel that feels organic — because the best branded content doesn't feel like an ad." },
  { icon: BarChart2, title: 'Performance Fluency', desc: 'Hooks. Retention curves. Engagement rates. Watch time. I create with these metrics in mind — not as an afterthought, but as a foundation.' },
  { icon: RefreshCw, title: 'Smooth Revision Process', desc: 'Clear communication, structured feedback rounds, and timely revisions. I make the agency-creator relationship effortless.' },
  { icon: CheckCircle, title: 'Deliverable Discipline', desc: 'On-time content, correct formats, proper tagging, accurate disclosures — every agency checkbox, handled professionally.' },
  { icon: Briefcase, title: 'Agency-Ready Mindset', desc: "I've worked with multiple brands simultaneously, managing different brand voices, timelines, and approval cycles without missing a beat." },
]

export default function AgencyValue() {
  const { ref, visible } = useReveal()
  return (
    <section className="relative py-28 overflow-hidden bg-charcoal dark:bg-dark-card text-cream">
      <span className="section-number text-cream/10">05</span>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(to right, #C8A97E 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">For Agencies</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              Why agencies<br /><span className="italic text-gold">love</span> working with me
            </h2>
            <p className="font-body text-cream/50 text-sm max-w-sm leading-relaxed md:mb-2">
              I bridge the gap between creators and brands by combining hands-on content creation experience with a strategic understanding of influencer marketing.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.title} className={`card-hover group border border-gold/10 hover:border-gold/40 rounded-2xl p-7 transition-all duration-700 hover:bg-gold/5 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-300">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-medium group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                </div>
                <p className="font-body text-sm text-cream/55 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-2xl md:text-3xl italic text-gold/80 leading-relaxed max-w-2xl mx-auto">
            "I'm not just a creator you hire. I'm a strategic content partner who happens to have an engaged audience."
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-8 h-px bg-gold/30" />
            <span className="font-body text-xs text-cream/40 tracking-[3px] uppercase">Shivangi Singh</span>
            <div className="w-8 h-px bg-gold/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
