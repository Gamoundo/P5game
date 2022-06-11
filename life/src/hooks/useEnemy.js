

export default function Enemy(ey, setEy) {
  
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
  
  
  
    return {spawnWork}
}
