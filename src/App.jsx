import React from 'react'

import './App.scss'
import './font.scss'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Service from '@/components/Service'
import SubTitle from '@/components/SubTitle'
import News from '@/components/News'
import Social from '@/components/Social'
import Links from '@/components/Links'
import SNS from '@/components/SNS'
import Footer from '@/components/Footer'

export default function() {

  return <>
    <Header />
    <Banner />
    <Service />
    <SubTitle title='お知らせ' watermask='NEWS' />
    <News />
    <SubTitle title='ソーシャルメディア' isSocial={true} watermask='SOCIAL MEDIA' />
    <Social />
    <SubTitle title='外部リンク' isLink={true} watermask='LINK' />
    <Links />
    <SNS />
    <Footer />
  </>
}
