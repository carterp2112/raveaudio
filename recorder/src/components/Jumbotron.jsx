import React from 'react'
import Mic from '/home/carter/noncoursework/audiorecorder/recorder/src/assets/microphone.png'
import Download from '/home/carter/noncoursework/audiorecorder/recorder/src/assets/download.png'
import Voices from '/home/carter/noncoursework/audiorecorder/recorder/src/assets/voices.png'

function Jumbotron() {
  return (
    <div className='icons'>
      <section className='jtron'>
            <h2>Record Audio</h2>
            <img src={Mic}/>
            <p>With RaveAudio, you can record audio directly from your browser.</p>
        </section>
        <section className='jtron'>
            <h2>Download It</h2>
            <img src={Download}/>
            <p>With RaveAudio, you can download audio directly from your browser.</p>
        </section>    
        <section className='jtron'>
            <h2>Change It</h2>
            <img src={Voices}/>
            <p>With RaveAudio, you can add effects that make your audio pop.</p>
        </section>
    </div>
  )
}

export default Jumbotron
