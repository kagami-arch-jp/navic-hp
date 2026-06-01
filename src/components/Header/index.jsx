import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import {contains} from '@/utils/base'
import Link from '@/components/Link'

const menu=[
  {text: '事業紹介', list: [
    "車用品 卸販売・外注取付事業",
    "車用品 EC事業","自社商品開発事業",
    "豊橋リテール事業","レンタル事業",
    "健康事業","貿易事業",
    "グループ事業"
  ]},
  {text: 'お知らせ'},
  {text: '会社情報', list: [
    "会社概要",
    "経営理念",
    "会社沿革",
    "SDGｓ",
    "健康経営"
  ]},
  {text: '採用情報', list: [
    "新卒採用",
    "高卒採用",
    "中途採用"
  ]},
  {text: "ソーシャルメディア", list: [
    "NAVICオリジナルCM",
    "CLEZEED公式Youtube",
    "豊橋モーターズ",
    "レース活動"
  ]},
  {text: "お問い合わせ"},
  {text: "公式ショップ"},
]

export default function(props) {
  return <Container>
    <MiniNav />
    <div className="header-inner">
      <div className="header-logo">
        <Link className="logo-link">
          <img src={*IMG('./assets/navic-logo.jpg')} alt="NAVIC" className="logo-svg" />
        </Link>
      </div>
      <div className="header-spacer">
        {menu.map(({text, list})=><Tab key={text} title={text} items={list} />)}
      </div>
    </div>
  </Container>
}

function Tab(props) {
  const {title, items}=props
  const [show, setShow]=React.useState(false)
  const ref=React.useRef(null)
  React.useEffect(()=>{
    function fn(e) {
      if(!contains(ref.current, e.target)) {
        setShow(false)
      }
    }
    window.addEventListener('mousemove', fn)
    return ()=>window.removeEventListener('mousemove', fn)
  }, [])
  return <div className="tab" ref={ref} onMouseOver={()=>{
    setShow(true)
  }}>
    <div className="text">
      {items?.length? title: <Link>{title}</Link>}
    </div>
    {
      items?.length? <div className={"dropdown "+(show? 'active': '')}>
        {items.map(text=><Link className="item">{text}</Link>)}
      </div>: null
    }
  </div>
}

function MiniNav() {
  const [showMenu, setShowMenu]=React.useState(false)
  const lockScroller=opened=>{
    document.body.className=opened? 'modal-opened': ''
  }
  React.useEffect(()=>{
    const fn=e=>{
      if(innerWidth>750) setShowMenu(false)
    }
    window.addEventListener('resize', fn)
    return ()=>window.removeEventListener('resize', fn)
  }, [])
  React.useEffect(()=>{
    lockScroller(showMenu)
  }, [showMenu])
  return <div className='header-nav'>
    <div className="header-logo">
      <Link  className="logo-link">
        <img src={*IMG('./assets/navic-logo.jpg')} alt="NAVIC" className="logo-svg" />
      </Link>
    </div>
    <div className="header-menu-btn btn" onClick={()=>{
      setShowMenu(true)
    }}>
      <div dangerouslySetInnerHTML={{ __html: `<svg preserveAspectRatio="xMidYMid meet" viewBox="19.999 22.5 160.002 155" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Open site navigation">
          <g>
              <path d="M180.001 40.325c0-9.844-8.238-17.825-18.4-17.825H38.399c-10.162 0-18.4 7.981-18.4 17.825v119.35c0 9.844 8.238 17.825 18.4 17.825h123.202c10.162 0 18.4-7.981 18.4-17.825V40.325zm-48 84.475H67.999v-3.1H132v3.1zm0-20.15H67.999v-3.1H132v3.1zm0-20.15H67.999v-3.1H132v3.1z"></path>
          </g>
      </svg>` }} />
    </div>
    <div className={'menu '+(showMenu? 'show': '')}>
      <div className='menu-content'>
        <div dangerouslySetInnerHTML={{ __html: `
          <svg preserveAspectRatio="none" viewBox="65.35 65.35 69.3 69.3" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Close Site Navigation">
              <g>
                  <path d="M134.65 128.99L105.66 100l28.99-28.99-5.66-5.66L100 94.34 71.01 65.35l-5.66 5.66L94.34 100l-28.99 28.99 5.66 5.66L100 105.66l28.99 28.99 5.66-5.66z"></path>
              </g>
          </svg>
        `}} className='close-btn' onClick={()=>{
          setShowMenu(false)
        }} />
        <div className={'list'}>
          {menu.map(x=><MiniMenu {...x} />)}
        </div>
      </div>
    </div>
  </div>
}
function MiniMenu({text, list}) {
  const [show, setShow]=React.useState(false)
  const hasList=list?.length
  return <>
    <div onClick={()=>{
      setShow(!show)
    }} className={'item-title btn'}>
      {hasList? <div className={show? 'up': 'down'} dangerouslySetInnerHTML={{ __html: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817"><path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path></svg>
      `}} />: null}
      {hasList? text: <Link>{text}</Link>}
    </div>
    {hasList && show? list.map(text=><Link className='item-subtitle btn'>{text}</Link>): null}
  </>
}
