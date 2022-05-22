import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5';
import { useEffect, useState } from 'react';

function App() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    // getFrames(p5)
    
    
  }

const [x, setX] =useState(30)
const [y, setY] =useState(20)

  
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



  
  const draw = p5 => {
    p5.background(255, 130, 20) 
    p5.rect(x, y, 55, 55, 20)

    if (p5.keyCode === 39) {
      if(x < 450){
        setX(prev => prev +=5)
      }
      
    }
    if (p5.keyCode === 37) {
      if(x > 0){
        setX(prev => prev -=5)
      }
      
    }
    if (p5.keyCode === 38) {
      if(y > 0) {
        setY(prev => prev -=5)
      }
      
    }
    if (p5.keyCode === 40) {
      if(y < 360){
        setY(prev => prev +=5)
      }
      
    }
    
  }
  

  return (
    <div className="App">
      <h1>Life</h1>
      <Sketch setup={setup} draw={draw}/>
    </div>
  );
}

export default App;
