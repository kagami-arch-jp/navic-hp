import React from 'react'
export default function({children, className=''}) {
  return <a href="https://navic.cc" className={'link '+className} target="_blank">{children}</a>
}
