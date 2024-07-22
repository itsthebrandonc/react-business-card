import React from 'react'
import img_Profile from '../assets/bc-profilePic.png'
import img_Email from '../assets/email.png'
import img_LinkedIn from '../assets/linkedin.png'
import './Info.css'

export default function Info() {
  return (
    <>
      <img id="info--profilePic" src={img_Profile}/>
      <h1 id="info--name">Brandon Carlisle</h1>
      <h3 id="info--job">Mid Developer</h3>
      <div className="flexbox">
        <a href="mailto:brandonrcarlisle@gmail.com" target="_blank">
          <button id="info--btnEmail" >
            <img className="info--logoImg" src={img_Email}/>
            <p>Email</p>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/brandon-carlisle-ab786b14a/" target="_blank">
          <button id="info--btnLinkedIn">
            <img className="info--logoImg" src={img_LinkedIn}/>
            <p>LinkedIn</p>
          </button>
        </a>
      </div>
    </>
  )
}