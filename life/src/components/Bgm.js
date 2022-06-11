import React from 'react'
import ReactAudioPlayer from 'react-audio-player';


export default function Bgm() {

  
  return (
    <div>
        <ReactAudioPlayer
  src={process.env.PUBLIC_URL + "/death.wav"}
  autoPlay
  controls
/>

    </div>
  )
}
