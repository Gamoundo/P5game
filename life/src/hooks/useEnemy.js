import { useEffect, useState } from "react"


export default function Enemy(ey, setEy, sy, setSy, px, xcoord, ycoord, setChar,) {
  
  const [projectiles, setProjectiles] = useState([])
  const [stressors, setStressors] = useState([])
  
  useEffect(() => {
    if(ey % 80 === 0){
      let bullet = {
        x: px,
        y: ey
      }
      setProjectiles(prev => [...prev], bullet)
      
    }
  
   
  }, [setProjectiles, ey, px])

  useEffect(() => {
    if(sy % 60 === 0){
      let stressor = {
        x: 500,
        y: sy
      }
      setStressors(prev => [...prev], stressor)
      
    }
  
   
  }, [setStressors, sy])
  
  
  
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

    p5.fill('sky-blue')
  for (let bullet of projectiles) {
    p5.ellipse(bullet.x, bullet.y, 10, 5)
    bullet.x -= 5
    
  }
  for(let i = 0; i < projectiles.length; i++) {
    if( p5.dist(projectiles[i].x, projectiles[i].y, xcoord,ycoord) < 10){
      projectiles.splice(i, 1)
      setChar(prev => ({...prev,  workHits: prev.workHits += 1}))
      
    }
    if(projectiles[i].x <= -5) {
      projectiles.splice(i, 1)
    }
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
