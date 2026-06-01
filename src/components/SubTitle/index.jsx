import React from 'react'
import './index.scss'

import Container from '@/components/Container'

export default function(props) {
  const {title, watermask, isSocial=false, isLink=false}=props
  return <Container bg={'#14508c'}>
    <div className={'subtitle-block '+(isSocial? ' social-b': '')+(isLink? ' link-b': '')}>
      <div className='text'>{title}</div>
      <div className='watermask'>{watermask}</div>
    </div>
  </Container>
}
