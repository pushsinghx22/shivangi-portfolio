import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    const update = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (barRef.current) barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div ref={barRef} className="scroll-progress" />
}
