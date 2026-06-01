import React from 'react'
import './index.scss'

import Container from '@/components/Container'
import LazyImage from '@/components/LazyImage'


export default function() {
  const [isSmall, setIsSmall]=React.useState(true)
  React.useEffect(()=>{
    function fn() {
      setIsSmall(innerWidth<750)
    }
    fn()
    window.addEventListener('resize', fn)
    return ()=>window.removeListener('resize', fn)
  }, [])
  return <Container>
    <div className='banner'>
      <div className='item type1'>
        <div className='banner-text'>
          <p>人とのつながりを大切に。</p>
          <p>様々な分野で新たな価値を生み出していく。</p>
        </div>
        <LazyImage alt="navictop画像"
          src={isSmall? *IMG('./assets/p1-s.jpg'): *IMG('./assets/p1.jpg')}
          placeholder={isSmall? *IMG('./assets/preview/p1-s.jpg'): *IMG('./assets/preview/p1.jpg')}
          className='banner-img' />
      </div>
      <div className='item type2'>
        <div className='banner-text'>
          <p>常に先を見据えた</p>
          <p>事業展開で</p>
          <p>新たな未来を切り開く。</p>
        </div>
        <LazyImage alt="ナヴィックビル外観"
          src={isSmall? *IMG('./assets/p2-s.jpg'): *IMG('./assets/p2.jpg')}
          placeholder={isSmall? *IMG('./assets/preview/p2-s.jpg'): *IMG('./assets/preview/p2.jpg')}
          className='banner-img' />
      </div>
    </div>
  </Container>
}
