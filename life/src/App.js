import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';
import { useEffect, useState } from 'react';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    // getFrames(p5)
    
    
  }

const [xcoord, setXCoord] =useState(30)
const [ycoord, setYCoord] =useState(20)

  
  // const keyPress =({key}) => {
  //   if(key === 'RIGHT_ARROW'){
  //     return x +=5
  //   }
  //   if(key === 'LEFT_ARROW'){
  //     return x -=5
  //   }
  //   if(key === 'UP_ARROW'){
  //     return y +=5
  //   }
  //   if(key === 'DOWN_ARROW'){
  //     return y -=5
  //   }

  // }

// useEffect(() => {
  
//   const keyPress =({key}) => {
//     if(key === 'RIGHT_ARROW'){
//       setX(prev => prev +=5)
//     }
//     if(key === 'LEFT_ARROW'){
//       setX(prev => prev -=5)
//     }
//     if(key === 'UP_ARROW'){
//       setY(prev => prev +=5)
//     }
//     if(key === 'DOWN_ARROW'){
//       setY(prev => prev -=5)
//     }

//   }

//   window.addEventListener('keyup', keyPress)
//   console.log(x,y)
//   return () => window.removeEventListener('keyup', keyPress)
// }, [])


let c1;
let c2;
let c3;
let px = 250
let ey = 60;
  
  const draw = p5 => {
    p5.background(255, 130, 20) 
    c1 = p5.color('green')
    p5.fill(c1)
   p5.rect(xcoord, ycoord, 55, 55, 20)
   c2 = p5.color('yellow')

   p5.fill(c2)
    p5.ellipse(250,ey, 50,40).frameRate(40)
    
    ey += 5
    if (ey > 380) {
      ey = 0
    }
    c3 = p5.color('sky-blue')
    p5.fill(c3)
  let projectile=  p5.ellipse(px,ey, 10,5)

      px -=5


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
      <Sketch setup={setup} draw={draw}/>
    </div>
  );
}

export default App;
