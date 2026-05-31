import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <span className="section-number text-charcoal dark:text-cream">01</span>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Left — Real photo (golden hour outdoor shot) */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl shadow-gold/10">
              <img
                src="/images/shivangi-about.png"
                alt="Shivangi Singh — @whatever.shivi"
                className="w-full h-full object-cover object-top"
              />
              {/* Warm gradient overlay to match brand palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 max-w-[260px] glass-light dark:glass-dark rounded-2xl p-5 shadow-xl shadow-gold/10">
              <p className="font-display text-sm italic text-charcoal dark:text-cream leading-snug">
                "Content is not just about aesthetics — it's about strategy, emotion, and connection."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-px bg-gold" />
                <span className="font-body text-xs text-gold tracking-wider uppercase">Shivangi Singh</span>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-gold/20 hidden md:block" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border border-gold/10 hidden md:block" />
          </div>

          {/* Right — Story */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">The Story</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8 text-charcoal dark:text-cream">
              Born from a passion for{' '}
              <span className="italic text-gold">authentic</span>{' '}
              storytelling
            </h2>

            <div className="space-y-5 font-body text-charcoal/70 dark:text-cream/60 text-sm leading-relaxed">
              <p>
                In October 2025, I picked up my camera and decided to stop consuming content — and start creating it. What began as a way to document everyday moments quickly evolved into a community of <strong className="text-gold font-medium">22,000+ engaged followers</strong> who connected with the authenticity of my fashion and lifestyle content.
              </p>
              <p>
                But I didn't just grow a following — I built a deep understanding of <strong className="text-charcoal dark:text-cream font-medium">what makes content perform</strong>. I studied hooks, retention mechanics, audience psychology, and trending formats. I learned how to translate a brand brief into content that feels organic, not forced.
              </p>
              <p>
                Having worked with brands like <strong className="text-charcoal dark:text-cream font-medium">Prime Video, Mcaffeine, KitKat, Philips, and Dot & Key</strong>, I've refined my ability to create content that serves both the creator's voice and the brand's objectives — simultaneously.
              </p>
              <p>
                As a creator, I understand what captures attention, what builds trust, and what makes audiences take action. This perspective allows me to bridge the gap between brands and real people.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {['Fashion', 'Lifestyle', 'UGC', 'Brand Collab', 'Reels', 'Storytelling'].map(tag => (
                <span key={tag} className="bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 font-body text-xs tracking-wider uppercase text-gold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
