import React from 'react'
import './index.scss'

export default function({bg='', children}) {
  return <div className='navic-container' style={{backgroundColor: bg}}>
    <div className='box'>{children}</div>
  </div>
}
