

export default function useCharacter(age, setC1, setSpeed, xcoord, ycoord, setXCoord, setYCoord, speed)  {
   function aging() {
    if (age > 40 && age < 60) {
      setC1(prev => "blue")
      setSpeed(prev => 4)
    }
    if (age > 60) {
      setC1(prev => "gray")
      setSpeed(prev => 2)
    }
  }
  const movement = (p5) => {
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


  return {aging, movement}
}

