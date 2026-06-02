import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Core module import

// Import Swiper styles
import 'swiper/css';

export default () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);
  const ref=React.useRef(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          try{
            setTimeout(()=>{
              swiperInstance.autoplay.start()
            }, 2e3)
          }catch(e) {}
          observer.disconnect()
        }
      },
      {}
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [swiperInstance])

  return <Container>
  <div className='social-block' ref={ref}>
    <Swiper
      className='social-swiper'
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSwiper={(swiper) => {
        setSwiperInstance(swiper)
      }}
      onInit={swiper=>{
        swiper.autoplay.stop()
      }}
      modules={[Autoplay]}
      speed={800}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className='social-item'>
        <Link><LazyImage src={*IMG('./assets/1.jpg')} placeholder={*IMG('./assets/preview/1.png')} className='img' alt="social images" /></Link>
      </SwiperSlide>
      <SwiperSlide className='social-item'>
        <Link><LazyImage src={*IMG('./assets/2.jpg')} placeholder={*IMG('./assets/preview/2.png')} className='img' alt="social images" /></Link>
      </SwiperSlide>
      <SwiperSlide className='social-item'>
        <Link><LazyImage src={*IMG('./assets/3.jpg')} placeholder={*IMG('./assets/preview/3.png')} className='img' alt="social images" /></Link>
      </SwiperSlide>
    </Swiper>
    <div className='btn left' onClick={()=>{
      swiperInstance.slidePrev()
    }}>
      <svg fill="rgb(20, 80, 140)" width="23" height="39" viewBox="0 0 23 39"><path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path></svg>
    </div>
    <div className='btn right' onClick={()=>{
      swiperInstance.slideNext()
    }}>
      <svg fill="rgb(20, 80, 140)" width="23" height="39" viewBox="0 0 23 39"><path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path></svg>
    </div>
  </div>
  </Container>
};
