import React from 'react'
import img_XTwitter from '../assets/x_twitter.png'
import img_Github from '../assets/github.png'

export default function Footer() {
  return (
    <div className="flexbox">
      <a href="https://x.com/BrandnCarlisle" target="_blank">
        <img className="info--logoImg" src={img_XTwitter}/>
      </a>
      <a href="https://github.com/itsthebrandonc" target="_blank">
        <img className="info--logoImg" src={img_Github}/>
      </a>
    </div>
  )
}