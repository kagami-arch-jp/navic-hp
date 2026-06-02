import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

export default function() {
  return <footer className='footer'>
    <Container bg='#053769'>
      <Detail />
    </Container>
    <Container bg='#134c86'>
      <div className='copyright'>Copyright(C) NAVIC Co.,LTD. All Rights Reserved.</div>
    </Container>
  </footer>
}

function Detail() {
  return <div className='detail'>
    <div className='links-box'>
    <div className='footer-links-top'>
      <ul>
        <li className='btn' onClick={()=>{
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
        <li><Link>お知らせ</Link></li>
        <li><Link>お問い合わせ</Link></li>
      </ul>
    </div>
    <div className='footer-links-group'>
      <div className='links'>
        <div className='group'>
          <h4>会社情報</h4>
          <ul>
            <li><Link>会社概要</Link></li>
            <li><Link>経営理念</Link></li>
            <li><Link>会社沿革</Link></li>
            <li><Link>SDGs</Link></li>
            <li><Link>健康経営</Link></li>
          </ul>
        </div>
        <div className="group">
          <h4>事業紹介</h4>
          <ul>
            <li><Link>車用品EC事業</Link></li>
            <li><Link>自社商品開発事業</Link></li>
            <li><Link>車用品 卸販売・外注取付事業</Link></li>
            <li><Link>レンタル事業</Link></li>
            <li><Link>豊橋リテール事業</Link></li>
            <li><Link>貿易事業</Link></li>
            <li><Link>健康事業</Link></li>
            <li><Link>グループ事業</Link></li>
          </ul>
        </div>
        <div className="group">
          <h4>採用情報</h4>
          <ul>
            <li>
              <Link>新卒採用</Link></li>
            <li>
              <Link>高卒採用</Link></li>
            <li>
              <Link>中途採用</Link></li>
          </ul>
        </div>
        <div className="group">
          <h4>ソーシャルメディア</h4>
          <ul>
            <li>
              <Link>NAVICオリジナルCM</Link></li>
            <li>
              <Link>CLEZEED公式YouTube</Link></li>
            <li>
              <Link>豊橋モーターズ</Link>
            </li>
            <li>
              <Link>レース活動</Link>
            </li>
          </ul>
          <ul className="legal-links">
            <li>
              <Link>特定商取引法に基づく表記</Link></li>
            <li>
              <Link>個人情報の保護</Link></li>
          </ul>
        </div>
      </div>
      <LazyImage src={*IMG('./assets/logo.jpg')} placeholder={*IMG('./assets/preview/logo.png')} alt='navic logo' className='logo' />
    </div>
    </div>
  </div>
}
