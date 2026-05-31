import { useReveal } from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'Research', desc: 'Deep-dive into your brand, audience, competitors, and current trends to identify the perfect content angle.' },
  { num: '02', title: 'Concept', desc: 'Develop a creative brief with hooks, formats, visual direction, and platform-specific strategy.' },
  { num: '03', title: 'Script', desc: 'Craft a tight, compelling script engineered for attention retention and seamless brand integration.' },
  { num: '04', title: 'Shoot', desc: 'High-quality production with intentional framing, lighting, and aesthetic consistency for your brand.' },
  { num: '05', title: 'Edit', desc: 'Platform-native editing — pacing, captions, music, transitions — optimised for maximum engagement.' },
  { num: '06', title: 'Optimise', desc: 'Fine-tune hooks, SEO tags, hashtags, and captions to maximise organic reach and algorithm performance.' },
  { num: '07', title: 'Deliver', desc: 'On-time delivery in your preferred formats with full usage rights, reporting, and post-publish support.' },
]

export default function Process() {
  const { ref, visible } = useReveal()
  return (
    <section id="process" className="relative py-28 overflow-hidden noise-bg">
      <span className="section-number text-charcoal dark:text-cream">06</span>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">How It Works</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal dark:text-cream mb-4">
            The creation <span className="italic text-gold">process</span>
          </h2>
          <p className="font-body text-charcoal/60 dark:text-cream/50 text-sm max-w-md mx-auto leading-relaxed">
            A structured, transparent workflow that takes your campaign from idea to impact — every single time.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-stretch gap-0 relative">
          <div className="absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          {steps.map((step, i) => (
            <div key={step.num} className={`flex-1 flex flex-col items-center text-center px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative z-10 w-10 h-10 rounded-full bg-cream dark:bg-dark-bg border-2 border-gold/40 hover:border-gold hover:bg-gold/10 flex items-center justify-center mb-5 transition-all duration-300 cursor-default">
                <span className="font-display text-xs text-gold font-semibold">{i + 1}</span>
              </div>
              <span className="font-body text-[10px] text-gold tracking-[2px] uppercase mb-1">{step.num}</span>
              <h3 className="font-display text-xl font-medium text-charcoal dark:text-cream mb-2">{step.title}</h3>
              <p className="font-body text-xs text-charcoal/55 dark:text-cream/45 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className={`flex gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-sm text-gold font-semibold">{i + 1}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-gold/20 my-2 min-h-[40px]" />}
              </div>
              <div className="pb-8">
                <span className="font-body text-[10px] text-gold tracking-[2px] uppercase">{step.num}</span>
                <h3 className="font-display text-xl font-medium text-charcoal dark:text-cream mb-1">{step.title}</h3>
                <p className="font-body text-sm text-charcoal/60 dark:text-cream/50 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-2xl px-8 py-5">
            <span className="font-body text-sm text-charcoal/70 dark:text-cream/70">
              Average turnaround: <strong className="text-gold">3–5 business days</strong> · Revisions: <strong className="text-gold">2 included</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
