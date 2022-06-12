import { useEffect, useState } from "react"


export default function Enemy(ey, setEy, sy, setSy, px, xcoord, ycoord, setChar,) {
  
 
  
  

  
  
  
  
  let workSpeed = 5
  function spawnWork(p5) {
    p5.fill('yellow')
    p5.ellipse(250,ey, 50,40).frameRate(40)
    p5.fill('green')
    p5.text('Work', 233, ey)
    setEy(prev => prev += workSpeed)
    if (ey > 380) {
        
        setEy(prev => prev = 0)
    }

    
  



  }

  function spawnStress(p5) {
    p5.fill('green')
    p5.ellipse(500,sy, 60,60).frameRate(40)
    p5.fill('yellow')
    p5.text('stress', 480, sy)
    setSy(prev => prev += 4)
    if (sy > 380) {
      setSy(prev => prev = 0)
    }
  }

  function spawnDeath(p5) {
    p5.fill('black')
    p5.ellipse(580,ycoord, 60,60).frameRate(40)
    p5.fill('red')
    p5.text('Death', 560, ycoord)
    
    
  }
  
  
  
    return {spawnWork, spawnStress, spawnDeath}
}
