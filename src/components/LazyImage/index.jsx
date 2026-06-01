import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
import loadingImg from './assets/loading.png'

export default function LazyImage({ src, alt, placeholder=loadingImg, className = '', ...props }) {
  const ref = useRef(null)
  const [realSrc, setRealSrc] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image()
          img.onload = () => setRealSrc(src)
          img.src = src
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  return (
    <div ref={ref} className={`lazy-image ${className} ${realSrc ? 'loaded' : ''}`} {...props}>
      <img src={realSrc || placeholder} alt={alt} />
    </div>
  )
}
