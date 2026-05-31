import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current, ring = ringRef.current
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, raf

    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'
    }
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }
    const onEnter = () => ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
    const onLeave = () => ring.style.transform = 'translate(-50%,-50%) scale(1)'

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    raf = requestAnimationFrame(animate)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
