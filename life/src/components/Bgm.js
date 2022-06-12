import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import death from '../static/death.wav'
import life from '../static/life.wav'
import hype from '../static/hype.wav'
import anxious from '../static/anxious.wav'

export default function Bgm() {


  let audio = new Audio(life) 

  return (
    <div>
      <audio controls autoPlay="yes" loop='true' > <source src={`http://localhost:3000${hype}`} type="audio/mpeg" /> </audio>
        {/* <ReactAudioPlayer
  src=song={}
  autoPlay
  controls
/> */}

    </div>
  )
}
