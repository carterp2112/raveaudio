import React from 'react'
import { Link } from 'react-router-dom'
import email from '/home/carter/noncoursework/audiorecorder/recorder/src/assets/email.png'

function Contact() {
  return (
    <div>
        <a href="mailto:raveaudio@mail.com" className='contact'><section className='contact-card'>
            <h1>Contact Me:</h1>
            <img src={email}/>
            <h2>raveaudio@mail.com</h2>
        </section></a>
    </div>
  )
}

export default Contact
