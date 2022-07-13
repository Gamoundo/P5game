import React, { useEffect,  useLayoutEffect,  useMemo,  useState } from 'react';
import Bgm from './Bgm';
import Ending from './Ending';
import Timer from './Timer';
import Story from './Story';
import useCharacter from '../hooks/useCharacter';
import useEnemy from '../hooks/useEnemy'
import Sketch from 'react-p5';


function Storyof({char, setChar}) {
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(1000, 400).parent(canvasParentRef)
      
      
      
    }
  
    
    
    
    let px = 250
     
// const [pickups, setPickups] = useState([]) 
 let pickups = useMemo(() => [], [])   
    
  const [c1, setC1] = useState(`green`)  
//   const [color, setColor] = useState('teal')
  const [xcoord, setXCoord] =useState(30)
  const [ycoord, setYCoord] =useState(20)
  const [ey, setEy] = useState(60)
  const [sy, setSy] = useState(60)
  const [age, setAge] = useState(20)
  const [speed, setSpeed] = useState(5)
  const [projectiles, setProjectiles] = useState([])
  

  let color = 'teal'
  
//  const [eliminators, setEliminators] =useState([])
// const [stressors, setStressors] = useState([])
  let stressors= useMemo(() => [], [])
  let eliminators= useMemo(() => [], [])
  
  
  const {aging, movement} = useCharacter(age, setC1, setSpeed, xcoord, ycoord, setXCoord, setYCoord, speed)
  const {spawnWork, spawnStress, spawnDeath} = useEnemy(ey, setEy, sy, setSy, setProjectiles, projectiles, ycoord)
  
  
  
  
  useEffect(() => {
    if(char.alive){
      if(ey % 80 === 0){
        let bullet = {
          x: px,
          y: ey
        }
        projectiles.push(bullet)
        
      }
    }
    
  
   
  }, [projectiles, char.alive, ey, px])
  
  useEffect(() => {
  
    if(char.alive){
      if(sy % 60 === 0){
        let stressor = {
          x: 500,
          y: sy
        }
        stressors.push(stressor)
        
      }
    }
    
  
   
  }, [stressors, char.alive, sy])
  
  

  
  
  useEffect(() => {
       if(char.alive) {
        let interval = setInterval(() => {
          let eliminator = {
            x: 580,
            y: ycoord
          }
          eliminators.push(eliminator)
        }, 500)
      
        return () => clearInterval(interval)
       }
    
  }, [eliminators, char.alive, ycoord])
  console.log(pickups)
  useLayoutEffect(() => {
    if(pickups.length >= 1) {
      
      let interval = setInterval(() => {
        pickups.splice(0, 1)
      }, 3000)
  
      return () => clearInterval(interval)
    } 
  },[pickups])

  useEffect(() => {
    
    
    if(char.alive) {
     let interval = setInterval(() => {
      let perks =
      ["fam", 'v', 'd'] 
      
      let pickup = {
         x: Math.floor(Math.random() * 100),
         y: Math.floor(Math.random() * 360),
         name: perks[Math.floor(Math.random() *perks.length)]
       }
       pickups.push(pickup)
     }, 5000)
   
     return () => clearInterval(interval)
    }
 
}, [pickups, char.alive])
  
  // console.log(xcoord, ycoord)
  
  
    const draw = p5 => {
      p5.background(color) 
      
      p5.fill(c1)
      
      aging() 
      movement(p5)
     p5.rect(xcoord, ycoord, 30, 30, 20)
     
  spawnWork(p5)
  spawnDeath(p5)
  spawnStress(p5)
      p5.fill('sky-blue')
    for (let bullet of projectiles) {
      p5.ellipse(bullet.x, bullet.y, 10, 5)
      bullet.x -= 5
      
    
    }
  
    for(let i = 0; i < projectiles.length; i++) {
      if( p5.dist(projectiles[i].x, projectiles[i].y, xcoord,ycoord) < 20){
        projectiles.splice(i, 1)
        setChar(prev => ({...prev,  workHits: prev.workHits += 1}))
        
      }
      if(projectiles[i].x <= -5) {
        projectiles.splice(i, 1)
      }
    } 
  
    for(let i = 0; i < stressors.length; i++) {
      if( p5.dist(stressors[i].x, stressors[i].y, xcoord,ycoord) < 20){
        stressors.splice(i, 1)
        setChar(prev => ({...prev,  stressHits: prev.stressHits += 1}))
        
      }
      if(stressors[i].x <= -5) {
        stressors.splice(i, 1)
      }
    }
  
  
    p5.fill('pink')
    for (let stessor of stressors) {
      p5.ellipse(stessor.x, stessor.y, 20, 10)
      stessor.x -= 4
      
    
    }
  
  
    for(let i = 0; i < eliminators.length; i++) {
      if( p5.dist(eliminators[i].x, eliminators[i].y, xcoord,ycoord) < 20){
        eliminators.splice(i, 1)
        setChar(prev => ({...prev,  alive: prev.alive = false}))
        
        
      }
      if(eliminators && eliminators[i].x <= -5) {
        eliminators.splice(i, 1)
      }
    }
  
  
    p5.fill('red')
    for (let eliminator of eliminators) {
      p5.ellipse(eliminator.x, eliminator.y, 20, 10)
      eliminator.x -= 4
      
    
    }

    for (let pickup of pickups) {
      p5.fill('purple')
      p5.ellipse(pickup.x, pickup.y, 30, 30)
      p5.fill('yellow')
      p5.text(pickup.name, pickup.x , pickup.y )
      if (pickup.name === 'fam') {
        if( p5.dist(pickup.x, pickup.y, xcoord,ycoord) < 30){
          pickups.splice(pickups.indexOf(pickup), 1)
          setChar(prev => ({...prev,  fam: prev.fam += 1}))
          
          
        }
      }
      if(pickup.name === 'd'){
        if( p5.dist(pickup.x, pickup.y, xcoord,ycoord) < 30){
          pickups.splice(pickups.indexOf(pickup), 1)
          setChar(prev => ({...prev,  stressHits: prev.stressHits - 5}))
          
          
        }
      }

      if(pickup.name === 'v'){
        if( p5.dist(pickup.x, pickup.y, xcoord,ycoord) < 30){
          pickups.splice(pickups.indexOf(pickup), 1)
          setChar(prev => ({...prev,  workHits: prev.workHits - 5}))
          
          
        }
      }
    
    }
   
      
    }
    
  
    return (
      <div >
        <h1>The Story of {char.name}</h1>
        <div>
        <Bgm  char={char}/>
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

  export default Storyof;