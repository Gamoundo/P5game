
import './App.css';
import Sketch from 'react-p5';
import { useEffect, useMemo, useState } from 'react';
import Timer from './components/Timer';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 400).parent(canvasParentRef)
    
    
    
  }

  
  
  
  let px = 250
   

  
  
const [c1, setC1] = useState(`green`)  
const [xcoord, setXCoord] =useState(30)
const [ycoord, setYCoord] =useState(20)
const [ey, setEy] = useState(60)
const [age, setAge] = useState(20)
const [speed, setSpeed] = useState(5)
const [projectiles, setProjectiles] = useState([])


useEffect(() => {
  if(ey % 80 === 0){
    let bullet = {
      x: px,
      y: ey
    }
    projectiles.push(bullet)
    
  }

 
}, [projectiles, ey, px])




  const draw = p5 => {
    p5.background(255, 130, 20) 
    
    p5.fill(c1)
    if (age > 40 && age < 60) {
      setC1(prev => "blue")
      setSpeed(prev => 4)
    }
    if (age > 60) {
      setC1(prev => "gray")
      setSpeed(prev => 2)
    }
   p5.rect(xcoord, ycoord, 30, 30, 20)
   

   p5.fill('yellow')
    p5.ellipse(250,ey, 50,40).frameRate(40)
    p5.fill('green')
    p5.text('Work', 233, ey)
    setEy(prev => prev += 5)
    if (ey > 380) {
      setEy(prev => prev = 0)
    }
    
    p5.fill('sky-blue')
  for (let bullet of projectiles) {
    p5.ellipse(bullet.x, bullet.y, 10, 5)
    bullet.x -= 5

  if(bullet.x === xcoord && bullet.y === ycoord){
    console.log('hit')
  }
  }


    if (p5.keyCode === 39) {
      if(xcoord < 100){
        setXCoord(prev => prev +=speed)
      }
      
    }
    if (p5.keyCode === 37) {
      if(xcoord > 0){
        setXCoord(prev => prev -=speed)
      }
      
    }
    if (p5.keyCode === 38) {
      if(ycoord > 0) {
        setYCoord(prev => prev -=speed)
      }
      
    }
    if (p5.keyCode === 40) {
      if(ycoord < 360){
        setYCoord(prev => prev +=speed)
      }
      
    }
    
  }
  

  return (
    <div >
      <h1>Life</h1>
      <Timer  setAge={setAge} age={age}/>
      
      <Sketch setup={setup} draw={draw}/>
      
    </div>
  );
}

export default App;
