import React from 'react'

export default function Character() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef)
        // getFrames(p5)
        
        
      }
      const draw = p5 => {
        p5.background(255, 130, 20) 
       let square= p5.rect(xcoord, ycoord, 55, 55, 20)
        
    square.background('yellow')
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
    <div>Character</div>
  )
}
