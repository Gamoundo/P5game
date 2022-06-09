import React from 'react'
import Sound from 'react-sound'


export default function Bgm() {
  return (
    <div>
        <Sound
        url='http://localhost:3000/ordinary.mp3'
        playStatus='PLAYING'
        loop = {true}

        />

    </div>
  )
}
