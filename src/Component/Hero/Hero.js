import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'

const sliderItems = [
  {
    type: 'image',
    src: 'https://image.uniqlo.com/UQ/ST3/jp/imagesother/000_PLP/CasualBottoms/25SS/MEN/KV-m-Image-pc.jpg',
    title: 'Casual Bottoms',
    subtitle: 'Discover the new collection of casual bottoms for men.',
    cta: 'Shop Now'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=90',
    title: 'Classic Shirts',
    subtitle: 'Timeless shirts for every occasion.',
    cta: 'Explore Shirts'
  },
  {
    type: 'image',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCcDaa9Nqqhppi7p_cVhl0aYB2tsBLn-SoQ&s',
    title: 'Trendy cloths',
    subtitle: 'Step into comfort and style.',
    cta: 'Shop Shoes'
  }
]

export const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [animation, setAnimation] = useState('fade')
  const timeoutRef = useRef(null)

  const nextSlide = () => {
    setAnimation('slide-left')
    setCurrent((prev) => (prev + 1) % sliderItems.length)
  }
  const prevSlide = () => {
    setAnimation('slide-right')
    setCurrent((prev) => (prev - 1 + sliderItems.length) % sliderItems.length)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimation('slide-left')
      setCurrent((prev) => (prev + 1) % sliderItems.length)
    }, 4000)
    return () => clearTimeout(timeoutRef.current)
  }, [current])

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
        <div className={`slider-image-wrapper slider-anim-${animation}`}>
          <img
            src={sliderItems[current].src}
            alt={`slide-${current + 1}`}
            className="slider-image"
            loading="eager"
          />
          <div className="slider-overlay-content">
            <div className="slider-text-content">
              <h1 className="slider-title">{sliderItems[current].title}</h1>
              <p className="slider-subtitle">{sliderItems[current].subtitle}</p>
              <button className="slider-cta">{sliderItems[current].cta}</button>
            </div>
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="slider-thumbnails">
        {sliderItems.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={`thumb-${idx + 1}`}
            className={`slider-thumb${current === idx ? ' active slider-thumb-animate' : ''}`}
            onClick={() => {
              setAnimation(idx > current ? 'slide-left' : 'slide-right')
              setCurrent(idx)
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero