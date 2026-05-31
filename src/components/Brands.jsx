import { useReveal } from '../hooks/useReveal'

const brands = [
  'Mcaffeine','Plum BodyLovin','PVR Pictures','Zyro',
  'Jio Studios','Prime Video','KitKat','Philips',
  'Episoft','Inde Wild','Paper Boat','BBlunt',
  'Dot & Key','Meya Kebabs','myHQ','Mivi',
]

function BrandCard({ name }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="group card-hover glass-light dark:glass-dark rounded-xl px-6 py-5 flex flex-col items-center gap-2 min-w-[140px] border border-gold/0 hover:border-gold/20 transition-all duration-300">
      <div className="w-10 h-10 rounded-full bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-300">
        <span className="font-display text-sm font-semibold text-gold">{initials}</span>
      </div>
      <span className="font-body text-xs font-medium text-charcoal/70 dark:text-cream/60 group-hover:text-gold text-center leading-tight transition-colors duration-300 whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function Brands() {
  const { ref, visible } = useReveal()
  const doubled = [...brands, ...brands]

  return (
    <section id="brands" className="relative py-28 overflow-hidden">
      <span className="section-number text-charcoal dark:text-cream">02</span>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div ref={ref} className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">Trusted By</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal dark:text-cream mb-4">
            Brands I've <span className="italic text-gold">partnered</span> with
          </h2>
          <p className="font-body text-charcoal/60 dark:text-cream/50 text-sm max-w-lg mx-auto leading-relaxed">
            From entertainment giants to beauty pioneers — delivering content that converts and campaigns that resonate.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream dark:from-dark-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream dark:from-dark-bg to-transparent z-10" />
        <div className="marquee-track gap-4 flex">
          {doubled.map((b, i) => <BrandCard key={`${b}-${i}`} name={b} />)}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream dark:from-dark-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream dark:from-dark-bg to-transparent z-10" />
        <div className="flex gap-4" style={{ animation: 'marquee 25s linear infinite reverse', display: 'flex', width: 'max-content' }}>
          {[...doubled].reverse().map((b, i) => <BrandCard key={`rev-${b}-${i}`} name={b} />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-14">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[{ num: '16+', text: 'Brand Collaborations' }, { num: '6+', text: 'Industries Covered' }, { num: '100%', text: 'Positive Feedback' }].map(item => (
            <div key={item.text} className="text-center">
              <div className="font-display text-3xl text-gold font-light">{item.num}</div>
              <div className="font-body text-xs text-charcoal/50 dark:text-cream/40 tracking-wider uppercase mt-1">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
