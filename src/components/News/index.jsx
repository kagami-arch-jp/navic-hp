import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

export default function() {
  return <Container>
  <div className='news-block'>
    <News img={*IMG('./assets/thumb-1.jpg')} placeholder={*IMG('./assets/preview/thumb-1.jpg')} title='【お知らせ】カーケアブランド「SPTA」の総代理店をオープン' date={'4月9日'} />
    <News img={*IMG('./assets/thumb-2.jpg')} placeholder={*IMG('./assets/preview/thumb-2.jpg')} title='【反響続々】次世代「OUTDO」ナトリウムイオンバッテリー、国内展開から半年。市場の期待を超える高評価をいただいております。' date={'4月2日'} />
    <News img={*IMG('./assets/thumb-3.jpg')} placeholder={*IMG('./assets/preview/thumb-3.jpg')} title='「健康経営優良法人2026 ネクストブライト1000」にも認定されました' date={'3月23日'} />
    <div className='view-all'>
      <Link>VIEW ALL</Link>
    </div>
  </div>
  </Container>
}

function News(props) {
  const {img, placeholder, title, date}=props
  return <div className='news-item'>
    <div className='thumb'>
      <Link><LazyImage src={img} alt={title} placeholder={placeholder} /></Link>
    </div>
    <div className='content'>
      <Link className='title'>{title}</Link>
      <div className='date'>{date}</div>
    </div>
  </div>
}
