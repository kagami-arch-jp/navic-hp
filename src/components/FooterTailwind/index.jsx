import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

export default function() {
  return <footer className='footer bg-[#053769] text-white antialiased whitespace-nowrap'>
    <Container bg='#053769'>
      <Detail />
    </Container>
    <Container bg='#134c86'>
      <div className={"copyright bg-[#134c86] text-center font-normal font-['wfont_bcfe31_b9499057ac834ee796dd280bfec964c1','wf_b9499057ac834ee796dd280bf','orig_koruribold']"}>
        Copyright(C) NAVIC Co.,LTD. All Rights Reserved.
      </div>
    </Container>
  </footer>
}

function Detail() {
  return <div className='detail flex justify-center max-md:hidden'>
    <div className='links-box'>
    <div className='footer-links-top'>
      <ul className='m-0 pl-0'>
        <li className='btn list-none' onClick={()=>{
          try{
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }catch(e) {
            window.scrollTo(0, 0)
          }
        }}>TOP</li>
        <li className='list-none'><Link>お知らせ</Link></li>
        <li className='list-none'><Link>お問い合わせ</Link></li>
      </ul>
    </div>
    <div className='footer-links-group flex'>
      <div className='links flex'>
        <div className='group mt-[3px]'>
          <h4 className='m-0'>会社情報</h4>
          <ul className={"m-0 pl-0 relative before:content-['_'] before:absolute before:left-0 before:top-0 before:h-[90%] before:border-l before:border-white"}>
            <li className='list-none flex leading-none'><Link>会社概要</Link></li>
            <li className='list-none flex leading-none'><Link>経営理念</Link></li>
            <li className='list-none flex leading-none'><Link>会社沿革</Link></li>
            <li className='list-none flex leading-none'><Link>SDGs</Link></li>
            <li className='list-none flex leading-none'><Link>健康経営</Link></li>
          </ul>
        </div>
        <div className="group mt-[3px]">
          <h4 className='m-0'>事業紹介</h4>
          <ul className={"m-0 pl-0 relative before:content-['_'] before:absolute before:left-0 before:top-0 before:h-[90%] before:border-l before:border-white"}>
            <li className='list-none flex leading-none'><Link>車用品EC事業</Link></li>
            <li className='list-none flex leading-none'><Link>自社商品開発事業</Link></li>
            <li className='list-none flex leading-none'><Link>車用品 卸販売・外注取付事業</Link></li>
            <li className='list-none flex leading-none'><Link>レンタル事業</Link></li>
            <li className='list-none flex leading-none'><Link>豊橋リテール事業</Link></li>
            <li className='list-none flex leading-none'><Link>貿易事業</Link></li>
            <li className='list-none flex leading-none'><Link>健康事業</Link></li>
            <li className='list-none flex leading-none'><Link>グループ事業</Link></li>
          </ul>
        </div>
        <div className="group mt-[3px]">
          <h4 className='m-0'>採用情報</h4>
          <ul className={"m-0 pl-0 relative before:content-['_'] before:absolute before:left-0 before:top-0 before:h-[90%] before:border-l before:border-white"}>
            <li className='list-none flex leading-none'><Link>新卒採用</Link></li>
            <li className='list-none flex leading-none'><Link>高卒採用</Link></li>
            <li className='list-none flex leading-none'><Link>中途採用</Link></li>
          </ul>
        </div>
        <div className="group mt-[3px]">
          <h4 className='m-0'>ソーシャルメディア</h4>
          <ul className={"m-0 pl-0 relative before:content-['_'] before:absolute before:left-0 before:top-0 before:h-[90%] before:border-l before:border-white"}>
            <li className='list-none flex leading-none'><Link>NAVICオリジナルCM</Link></li>
            <li className='list-none flex leading-none'><Link>CLEZEED公式YouTube</Link></li>
            <li className='list-none flex leading-none'><Link>豊橋モーターズ</Link></li>
            <li className='list-none flex leading-none'><Link>レース活動</Link></li>
          </ul>
          <ul className="legal-links m-0 pl-0!">
            <li className='list-none flex leading-none'><Link>特定商取引法に基づく表記</Link></li>
            <li className='list-none flex leading-none'><Link>個人情報の保護</Link></li>
          </ul>
        </div>
      </div>
      <LazyImage src={*IMG('./assets/logo.jpg')} placeholder={*IMG('./assets/preview/logo.png')} alt='navic logo' className='logo flex-none self-end ml-[7.8%]' />
    </div>
    </div>
  </div>
}
