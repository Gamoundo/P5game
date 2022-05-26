
import './App.css';
import Sketch from 'react-p5';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    
    
    
  }

  let c1;
  let c2;
  let c3;
  let px = 250
   

  
  
  
const [xcoord, setXCoord] =useState(30)
const [ycoord, setYCoord] =useState(20)
const [ey, setEy] = useState(60)

const [projectiles, setProjectiles] = useState([])
// let projectiles = useMemo(() => [])

// const projSpawn = (num) => {
//   if(num % 15 === 0) {
//     let bullet = {
//       x: px,
//       y: ey
//     }
//     projectiles.push(bullet)
//   }
  
// }


  
  







  
useEffect(() => {
  if(ey % 45 === 0){
    let bullet = {
      x: px,
      y: ey
    }
    projectiles.push(bullet)
    
  }

 
}, [projectiles, ey, px])




  const draw = p5 => {
    p5.background(255, 130, 20) 
    c1 = p5.color('green')
    p5.fill(c1)
   p5.rect(xcoord, ycoord, 30, 30, 20)
   c2 = p5.color('yellow')

   p5.fill(c2)
    p5.ellipse(250,ey, 50,40).frameRate(40)
    
    setEy(prev => prev += 5)
    if (ey > 380) {
      setEy(prev => prev = 0)
    }
    c3 = p5.color('sky-blue')
    p5.fill(c3)
  for (let bullet of projectiles) {
    p5.ellipse(bullet.x, bullet.y, 10, 5)
    bullet.x -= 5
  }


    if (p5.keyCode === 39) {
      if(xcoord < 100){
        setXCoord(prev => prev +=5)
      }
      
    }
    if (p5.keyCode === 37) {
      if(xcoord > 0){
        setXCoord(prev => prev -=5)
      }
      
    }
    if (p5.keyCode === 38) {
      if(ycoord > 0) {
        setYCoord(prev => prev -=5)
      }
      
    }
    if (p5.keyCode === 40) {
      if(ycoord < 360){
        setYCoord(prev => prev +=5)
      }
      
    }
    
  }
  

  return (
    <div >
      <h1>Life</h1>
      {/* {projSpawn(ey)} */}
      <Sketch setup={setup} draw={draw}/>
      
    </div>
  );
}

export default App;
