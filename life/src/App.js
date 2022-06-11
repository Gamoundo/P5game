
import './App.css';
import Sketch from 'react-p5';
import React, { useEffect,  useState } from 'react';
import Timer from './components/Timer';
import useCharacter from './hooks/useCharacter'
import useEnemy from './hooks/useEnemy'
import Story from './components/Story';
import Ending from './components/Ending';
import Bgm from './components/Bgm';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 400).parent(canvasParentRef)
    
    
    
  }

  
  
  
  let px = 250
   
const [char, setChar] = useState(
  {
    name:'Dave',
    workHits: 0,
    stressHits: 0,
    alive: true,
  }
)
  
  
const [c1, setC1] = useState(`green`)  
const [color, setColor] = useState('teal')
const [xcoord, setXCoord] =useState(30)
const [ycoord, setYCoord] =useState(20)
const [ey, setEy] = useState(60)
const [sy, setSy] = useState(60)
const [age, setAge] = useState(20)
const [speed, setSpeed] = useState(5)
const [projectiles, setProjectiles] = useState([])
const [stressors, setStressors] = useState([])

const {aging, movement} = useCharacter(age, setC1, setSpeed, xcoord, ycoord, setXCoord, setYCoord, speed)
const {spawnWork, spawnStress, spawnDeath} = useEnemy(ey, setEy, sy, setSy, setProjectiles, projectiles, ycoord)
// useEffect(() => {
//   if(ey % 80 === 0){
//     let bullet = {
//       x: px,
//       y: ey
//     }
//     projectiles.push(bullet)
    
//   }

 
// }, [projectiles, ey, px])

useEffect(() => {
  if(sy % 60 === 0){
    let stressor = {
      x: 500,
      y: sy
    }
    stressors.push(stressor)
    
  }

 
}, [stressors, sy])

// console.log(xcoord, ycoord)


  const draw = p5 => {
    p5.background(color) 
    
    p5.fill(c1)
    
    aging() 
    movement(p5)
   p5.rect(xcoord, ycoord, 30, 30, 20)
   
spawnWork(p5)
spawnDeath(p5)
    
  //   p5.fill('sky-blue')
  // for (let bullet of projectiles) {
  //   p5.ellipse(bullet.x, bullet.y, 10, 5)
  //   bullet.x -= 5
    
  
  // }

  // for(let i = 0; i < projectiles.length; i++) {
  //   if( p5.dist(projectiles[i].x, projectiles[i].y, xcoord,ycoord) < 10){
  //     projectiles.splice(i, 1)
  //     setChar(prev => ({...prev,  workHits: prev.workHits += 1}))
      
  //   }
  //   if(projectiles[i].x <= -5) {
  //     projectiles.splice(i, 1)
  //   }
  // } 

  for(let i = 0; i < stressors.length; i++) {
    if( p5.dist(stressors[i].x, stressors[i].y, xcoord,ycoord) < 10){
      stressors.splice(i, 1)
      setChar(prev => ({...prev,  stressHits: prev.stressHits += 1}))
      
    }
    if(stressors[i].x <= -5) {
      stressors.splice(i, 1)
    }
  }


  
    spawnStress(p5)
    p5.fill('pink')
  for (let stessor of stressors) {
    p5.ellipse(stessor.x, stessor.y, 20, 10)
    stessor.x -= 4
    if( p5.dist(stessor.x, stessor.y, xcoord,ycoord) < 10){
      console.log("hit")
    }
  
  }


 
    
  }
  

  return (
    <div >
      <h1>Life</h1>
      <div>
      <Bgm />
      </div>
      <Timer  setAge={setAge} age={age} alive={char.alive}/>
      <div className='row'>
     {age && <Sketch setup={setup} draw={draw}/>} 
      <Story  char={char}/>
      </div>
      
      
      { !char.alive && <Ending  char={char} age={age}/>} 
      
    </div>
  );
}

export default App;
