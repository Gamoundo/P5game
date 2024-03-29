import React from 'react'

import death from '../static/death.wav'

import hype from '../static/hype.wav'
import anxious from '../static/anxious.wav'
import overwork from '../static/Overworked.wav'
export default function Bgm({char}) {


  // let audio = new Audio(life) 

  // function audioChange() {
  //   if(!char.alive) {
  //   return  <audio controls autoPlay="yes" loop='true' > <source src={`http://localhost:3000${death}`} type="audio/mpeg" /> </audio>
  //   }
  //   if(char.stressHits > 40){
  //   return  <audio controls autoPlay="yes" loop='true' > <source src={`http://localhost:3000${anxious}`} type="audio/mpeg" /> </audio>
  //   }
  //   return <audio  controls autoPlay="yes" loop='true' > <source src={`http://localhost:3000${hype}`} type="audio/mpeg" /> </audio>
  // }

  return (
    <div>
      {char.alive && char.stressHits >= 50 && char.workHits >= 40 && <audio  controls autoPlay="yes" loop={true} > <source src={`http://localhost:3000${overwork}`} type="audio/mpeg" /> </audio>}
      {char.alive && char.stressHits < 30 && char.workHits < 40 && <audio  controls autoPlay="yes" loop={true} > <source src={`http://localhost:3000${hype}`} type="audio/mpeg" /> </audio> }
      {char.alive && char.stressHits >= 30 && <audio  controls autoPlay="yes" loop={true} > <source src={`http://localhost:3000${anxious}`} type="audio/mpeg" /> </audio> }
      
      {!char.alive &&  <audio controls autoPlay="yes" loop={true} > <source src={`http://localhost:3000${death}`} type="audio/mpeg" /> </audio>}
        

    </div>
  )
}
