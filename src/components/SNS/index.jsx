import React from 'react'
import './index.scss'
import Container from '@/components/Container'
import Link from '@/components/Link'

const icons={
  dy: <div dangerouslySetInnerHTML={{ __html: `<svg preserveAspectRatio="xMidYMid meet" data-bbox="9.334 5.834 51.225 58.334" xmlns="http://www.w3.org/2000/svg" viewBox="9.334 5.834 51.225 58.334" height="70" width="70" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
      <g>
          <g clip-path="url(#2c19f545-dde1-4428-bd61-3b281762dffe_comp-mn71kknl4)">
              <path d="M60.533 20.427v9.526s-8.234.449-14.752-4.988V46.79c0 .845-.079 1.663-.237 2.507-.792 3.88-4.09 13.696-17.074 14.831q-.99.08-1.98 0c-3.694-.316-14.75-2.375-16.941-15.675a14.3 14.3 0 0 1-.053-4.618c.66-4.54 5.357-17.021 20.795-15.517v9.474s-6.624-1.584-9.843 3.536c-1.69 2.692-1.874 6.07-.449 8.893 1.082 2.164 3.272 4.38 7.547 4.539 1.795 0 7.495-.633 8.761-7.68V5.834h9.474s0 13.67 14.778 14.594z"></path>
          </g>
          <defs fill="none">
              <clipPath id="2c19f545-dde1-4428-bd61-3b281762dffe_comp-mn71kknl4">
                  <path fill="#ffffff" d="M70 0v70H0V0z"></path>
              </clipPath>
          </defs>
      </g>
  </svg>` }} />,
  youtube: <div dangerouslySetInnerHTML={{ __html: `
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="3.042 12.395 66.904 45.197" xmlns="http://www.w3.org/2000/svg" viewBox="3.042 12.395 66.904 45.197" height="70" width="73" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
        <g>
            <path d="M36.506 12.396s20.916 0 26.145 1.358c2.88.736 5.147 2.92 5.914 5.705C69.958 24.496 69.946 35 69.946 35c0 .074-.004 10.52-1.392 15.54-.767 2.773-3.034 4.958-5.914 5.705-5.214 1.346-26.111 1.347-26.146 1.347 0 0-20.928 0-26.145-1.347-2.88-.736-5.147-2.92-5.914-5.705C3.047 45.52 3.042 35.074 3.042 35c0 0 0-10.504 1.404-15.553.768-2.773 3.034-4.957 5.914-5.704 5.214-1.346 26.111-1.348 26.146-1.348m-6.847 32.146L47.153 35 29.66 25.458z"></path>
        </g>
    </svg>` }} />,
  instagram: <div dangerouslySetInnerHTML={{ __html: `
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="7.708 7.29 58.584 55.418" xmlns="http://www.w3.org/2000/svg" viewBox="7.708 7.29 58.584 55.418" height="70" width="74" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
      <g>
        <path d="M37 25.764c-5.278 0-9.764 4.244-9.764 9.237 0 4.992 4.486 9.236 9.764 9.236s9.764-4.244 9.764-9.236-4.486-9.237-9.764-9.237"></path>
        <path d="M49.515 7.292H24.751c-9.587 0-17.043 7.053-17.043 15.869v23.426c0 9.068 7.456 16.121 17.043 16.121h24.764c9.32 0 16.777-7.053 16.777-16.12V23.16c0-8.816-7.456-15.87-16.777-15.87M37 49.61c-8.521 0-15.178-6.55-15.178-14.358S28.479 20.642 37 20.642 52.178 27.192 52.178 35 45.521 49.61 37 49.61m15.71-25.945c-1.863 0-3.46-1.512-3.46-3.275s1.597-3.274 3.46-3.274c1.865 0 3.463 1.51 3.463 3.274 0 1.763-1.598 3.275-3.462 3.275"></path>
      </g>
    </svg>` }} />,
  fb: <div dangerouslySetInnerHTML={{ __html: `
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="24.667 11.667 24.666 46.666" xmlns="http://www.w3.org/2000/svg" viewBox="24.667 11.667 24.666 46.666" height="70" width="74" data-type="color" role="presentation" aria-hidden="true" aria-label="">
      <g>
        <path fill="#040404" d="M30.148 37.333v21h10.354V37.625h7.004l1.827-8.75h-8.83v-6.417c0-.875.304-2.041 1.826-2.041h4.873v-8.75h-9.44c-3.046 0-7.614 3.791-7.614 8.166v9.042h-5.481v8.75z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
      </g>
    </svg>` }} />,
  x: <div dangerouslySetInnerHTML={{ __html: `
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="8.75 8.75 52.5 52.5" xmlns="http://www.w3.org/2000/svg" viewBox="8.75 8.75 52.5 52.5" height="70" width="70" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
    <g>
        <g clip-path="url(#efa9e8d7-1e51-4211-a654-44aca15cb818_comp-mn71kko11)">
            <path d="M50.097 8.75h8.05L40.56 30.989 61.25 61.25h-16.2L32.36 42.897 17.843 61.25H9.787l18.811-23.786L8.75 8.75h16.612l11.47 16.776zM47.27 55.92h4.461L22.938 13.8H18.15z"></path>
        </g>
        <defs fill="none">
            <clipPath id="efa9e8d7-1e51-4211-a654-44aca15cb818_comp-mn71kko11">
                <path fill="#ffffff" d="M70 0v70H0V0z"></path>
            </clipPath>
        </defs>
    </g>
  </svg>` }} />,
}

const list=[
  {
    title: 'NAVIC',
    icons: [{icon: icons.dy}],
  },
  {
    title: 'NAVICプラザ',
    icons: [{icon: icons.youtube}, {icon: icons.x}, {icon: icons.instagram}, {icon: icons.fb}, {icon: icons.dy}],
  },
  {
    title: '豊橋リテール',
    icons: [
      {icon: icons.youtube},
      {icon: icons.instagram, text: 'GLANZEAL'},
      {icon: icons.instagram, text: 'CLEVERS豊橋'},
      {icon: icons.instagram, text: 'FEEL豊橋'},
    ],
  },
  {
    title: 'CLEVERS名古屋',
    icons: [
      {icon: icons.youtube},
      {icon: icons.x},
      {icon: icons.instagram},
    ],
  },
  {
    title: 'OUTDO',
    icons: [{icon: icons.youtube}, {icon: icons.x}, {icon: icons.instagram}, {icon: icons.fb}, {icon: icons.dy}],
  },
  {
    title: 'CLEZEED',
    icons: [{icon: icons.youtube}, {icon: icons.x}, {icon: icons.instagram}, {icon: icons.fb}, {icon: icons.dy}],
  },
  {
    title: 'Mimitakara',
    icons: [{icon: icons.youtube}, {icon: icons.instagram}, {icon: icons.fb}, {icon: icons.dy}],
  },
]

export default ()=>{
  return <Container bg='#daedff'>
    <div className='sns-block'>
      <div className='sns-title'>SNS一覧</div>
      <div className='sns-list'>
        {list.map((x, i)=><SNSItem key={i} index={i} {...x} />)}
      </div>
    </div>
  </Container>
}

function SNSItem({title, icons, index}) {
  return <>
  <div className={'sns-item item-'+(index+1)}>
    <div className='title'>{title}</div>
    <div className='icons'>{icons.map(({icon, text})=><div className='btn'>
      <div className='icon'><Link>{icon}</Link></div>
      {text? <div className='text'>{text}</div>: null}
    </div>)}</div>
  </div>
  <div className={'line line-'+(index+1)} />
  </>
}
