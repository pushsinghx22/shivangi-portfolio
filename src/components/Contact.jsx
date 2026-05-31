import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Instagram, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const { ref, visible } = useReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Collaboration Inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`
    const body = `Hi Shivangi,\n\nMy name is ${form.name}${form.company ? ` from ${form.company}` : ''}.\n\n${form.message}\n\nReply to: ${form.email}`
    window.location.href = `mailto:Shivangiisingh2508@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden noise-bg">
      <span className="section-number text-charcoal dark:text-cream">08</span>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blush/40 dark:bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs font-medium tracking-[3px] uppercase text-gold">Get In Touch</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light text-charcoal dark:text-cream mb-4 leading-tight">
            Let's create<br /><span className="italic text-gold">something beautiful</span>
          </h2>
          <p className="font-body text-charcoal/60 dark:text-cream/50 text-sm max-w-md mx-auto leading-relaxed">
            Whether you're a brand, agency, or fellow creator — I'd love to hear what you're building and explore how we can create together.
          </p>
        </div>

        <div className={`grid lg:grid-cols-5 gap-10 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="font-display text-2xl font-light text-charcoal dark:text-cream mb-2">Ready to collaborate?</h3>
              <p className="font-body text-sm text-charcoal/60 dark:text-cream/50 leading-relaxed">I work with brands of all sizes — from indie launches to global campaigns. Every collaboration gets the same level of care and commitment.</p>
            </div>
            <div className="space-y-3">
              <a href="mailto:Shivangiisingh2508@gmail.com" className="card-hover flex items-center gap-4 glass-light dark:glass-dark rounded-xl p-4 border border-gold/0 hover:border-gold/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Mail size={15} className="text-gold" /></div>
                <div>
                  <p className="font-body text-xs text-charcoal/40 dark:text-cream/40 tracking-wider uppercase mb-0.5">Email</p>
                  <p className="font-body text-sm text-charcoal dark:text-cream break-all">Shivangiisingh2508@gmail.com</p>
                </div>
              </a>
              <a href="https://instagram.com/whatever.shivi" target="_blank" rel="noreferrer" className="card-hover flex items-center gap-4 glass-light dark:glass-dark rounded-xl p-4 border border-gold/0 hover:border-gold/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Instagram size={15} className="text-gold" /></div>
                <div>
                  <p className="font-body text-xs text-charcoal/40 dark:text-cream/40 tracking-wider uppercase mb-0.5">Instagram</p>
                  <p className="font-body text-sm text-charcoal dark:text-cream">@whatever.shivi</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-body text-xs text-charcoal/50 dark:text-cream/40">Typically responds within 24 hours</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 glass-light dark:glass-dark rounded-2xl p-10 border border-gold/10 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center"><CheckCircle size={28} className="text-gold" /></div>
                <h3 className="font-display text-2xl text-charcoal dark:text-cream">Message opened!</h3>
                <p className="font-body text-sm text-charcoal/60 dark:text-cream/50 max-w-xs leading-relaxed">Your email client should have opened. Looking forward to connecting!</p>
                <button onClick={() => setSent(false)} className="font-body text-xs text-gold hover:underline mt-2">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-light dark:glass-dark rounded-2xl p-8 border border-gold/10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-[2px] uppercase text-charcoal/50 dark:text-cream/40 mb-2 block">Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith"
                      className="form-input text-charcoal dark:text-cream placeholder:text-charcoal/25 dark:placeholder:text-cream/25" />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[2px] uppercase text-charcoal/50 dark:text-cream/40 mb-2 block">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@brand.com"
                      className="form-input text-charcoal dark:text-cream placeholder:text-charcoal/25 dark:placeholder:text-cream/25" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[2px] uppercase text-charcoal/50 dark:text-cream/40 mb-2 block">Brand / Agency</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company (optional)"
                    className="form-input text-charcoal dark:text-cream placeholder:text-charcoal/25 dark:placeholder:text-cream/25" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[2px] uppercase text-charcoal/50 dark:text-cream/40 mb-2 block">Message *</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={4} placeholder="Tell me about your campaign, goals, and timeline..."
                    className="form-input text-charcoal dark:text-cream placeholder:text-charcoal/25 dark:placeholder:text-cream/25 resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-charcoal font-body text-sm font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
