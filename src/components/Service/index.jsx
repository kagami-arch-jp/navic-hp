import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

export default function() {
  return <div className='service'>
    <Container bg={'#f5faff'}>
      <div className='title'>
        <svg className='bg' fill='#fff' preserveAspectRatio='xMidYMax slice' data-bbox='0 235.771 1920 64.229' viewBox='0 235.771 1920 64.229' xmlns='http://www.w3.org/2000/svg' data-type='shape'><defs><style>%23comp-lr64qsd4-top %7B fill: %23FFFFFF; %7D</style></defs><g><path d='M970.29 244.628 960 235.771l-10.289 8.857a167.374 167.374 0 0 1-109.19 40.521H0V300h1920v-14.852h-840.521a167.373 167.373 0 0 1-109.189-40.52z'/></g></svg>
        <div className='big-text'>NAVICの取り組み</div>
        <div className='subtitle'>OUR SERVICE</div>
      </div>
    </Container>
    <Container bg={'#d1e2f0'}>
      <div className='content'>
        <div className='circle'>
          <svg className='svg' preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path fill="transparent"
                stroke="#14508c"
                stroke-width="1"  d="M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"></path>
              </g>
          </svg>
          <Link className='icon icon1'>
            <div>車用品</div>
            <div>EC事業</div>
            <LazyImage src={*IMG('./assets/logo1-1.jpg')} placeholder={*IMG('./assets/preview/logo1-1.png')} className='img' />
          </Link>
          <Link className='icon icon2'>
            <div>自社商品</div>
            <div>開発</div>
            <LazyImage src={*IMG('./assets/logo2-1.jpg')} placeholder={*IMG('./assets/preview/logo2-1.png')} className='img' />
          </Link>
          <Link className='icon icon3'>
            <div>豊橋</div>
            <div>リテール</div>
            <LazyImage src={*IMG('./assets/logo3-1.jpg')} placeholder={*IMG('./assets/preview/logo3-1.png')} className='img' />
            <LazyImage src={*IMG('./assets/logo3-2.jpg')} placeholder={*IMG('./assets/preview/logo3-2.png')} className='img' />
            <LazyImage src={*IMG('./assets/logo3-3.jpg')} placeholder={*IMG('./assets/preview/logo3-3.png')} className='img' />
          </Link>
          <Link className='icon icon4'>
            <div>健康</div>
            <LazyImage src={*IMG('./assets/logo4-1.jpg')} placeholder={*IMG('./assets/preview/logo4-1.png')} className='img' />
          </Link>
          <Link className='icon icon5'>
            <div>グループ</div>
            <div>事業</div>
            <LazyImage src={*IMG('./assets/logo5-1.jpg')} placeholder={*IMG('./assets/preview/logo5-1.png')} className='img' />
          </Link>
          <Link className='icon icon6'>
            <div>貿易</div>
            <LazyImage src={*IMG('./assets/logo6-1.jpg')} placeholder={*IMG('./assets/preview/logo6-1.png')} className='img' />
            <LazyImage src={*IMG('./assets/logo6-2.jpg')} placeholder={*IMG('./assets/preview/logo6-2.png')} className='img' />
          </Link>
          <Link className='icon icon7'>
            <div>レンタル</div>
            <LazyImage src={*IMG('./assets/logo7-1.jpg')} placeholder={*IMG('./assets/preview/logo7-1.png')} className='img' />
          </Link>
          <Link className='icon icon8'>
            <div>車用品</div>
            <div>卸販売</div>
            <div>外注取付</div>
            <LazyImage src={*IMG('./assets/logo8-1.jpg')} placeholder={*IMG('./assets/preview/logo8-1.png')} className='img' />
          </Link>
          <LazyImage src={*IMG('./assets/logo.jpg')} placeholder={*IMG('./assets/preview/logo.png')} className='logo' />
        </div>
      </div>
    </Container>
  </div>
}
