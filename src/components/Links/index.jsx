import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'
import LazyImage from '@/components/LazyImage'

const list=[
    {
        "img": *IMG("./assets/250402-navic-create.jpg"),
        "placeholder": *IMG("./assets/preview/250402-navic-create.jpg"),
        "text": "レンタル事業\n "
    },
    {
        "img": *IMG("./assets/250402-jandA.jpg"),
        "placeholder": *IMG("./assets/preview/250402-jandA.jpg"),
        "text": "J&Aオイル\n "
    },
    {
        "img": *IMG("./assets/250402-clezeed.jpg"),
        "placeholder": *IMG("./assets/preview/250402-clezeed.jpg"),
        "text": "CLEZEED(旧CLESEED)\nショップサイト"
    },
    {
        "img": *IMG("./assets/250402-creer.jpg"),
        "placeholder": *IMG("./assets/preview/250402-creer.jpg"),
        "text": "クレール\nオンラインショップ"
    },
    {
        "img": *IMG("./assets/250402-clevers-toyohashi.jpg"),
        "placeholder": *IMG("./assets/preview/250402-clevers-toyohashi.jpg"),
        "text": "クレヴァーズ\n豊橋店"
    },
    {
        "img": *IMG("./assets/250402-glanzeal.jpg"),
        "placeholder": *IMG("./assets/preview/250402-glanzeal.jpg"),
        "text": "グランジール\n豊橋店"
    },
    {
        "img": *IMG("./assets/250402-feel-toyohashi.jpg"),
        "placeholder": *IMG("./assets/preview/250402-feel-toyohashi.jpg"),
        "text": "FEEL\n豊橋店"
    },
    {
        "img": *IMG("./assets/HP用ロゴ.png"),
        "placeholder": *IMG("./assets/preview/HP用ロゴ.png"),
        "text": "健康クレール"
    },
    {
        "img": *IMG("./assets/250402-mcrent.jpg"),
        "placeholder": *IMG("./assets/preview/250402-mcrent.jpg"),
        "text": "キャンピングカー"
    },
    {
        "img": *IMG("./assets/250402-mimitakara.jpg"),
        "placeholder": *IMG("./assets/preview/250402-mimitakara.jpg"),
        "text": "Mimitakara"
    },
    {
        "img": *IMG("./assets/250402-clevers-nagoya.jpg"),
        "placeholder": *IMG("./assets/preview/250402-clevers-nagoya.jpg"),
        "text": "クレヴァーズ\n名古屋"
    },
    {
        "img": *IMG("./assets/navicplaze.png"),
        "placeholder": *IMG("./assets/preview/navicplaze.png"),
        "text": "NAVIC公式ショップ"
    },
    {
        "img": *IMG("./assets/ホームページ-01.jpg"),
        "placeholder": *IMG("./assets/preview/ホームページ-01.jpg"),
        "text": "バイクバッテリー\nナトリウムイオン"
    },
    {
        "img": *IMG("./assets/260307-02.jpg"),
        "placeholder": *IMG("./assets/preview/260307-02.jpg"),
        "text": "SPTA\n​日本総代理店"
    }
]

export default ()=>{
  return <Container>
    <div className='links-block'>
      {list.map(x=><OuterLink {...x} />)}
    </div>
  </Container>
}

function OuterLink({img, text, placeholder}) {
  return <div className='link-item'>
      <Link><LazyImage src={img} placeholder={placeholder} className='img' alt={text} /></Link>
      <div className='text'>
        {text.split('\n').map(t=><p>{t}</p>)}
      </div>
    </div>
}
