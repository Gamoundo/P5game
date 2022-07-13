import React from 'react'

export default function Ending({char, age}) {
  
  
  const youth = (num) => {
      if(num > 60) {
        return  <p> {char.name} died at the age of {num}</p>
      }
     return <p> At the age of {num} they died, leaving way too early</p>
  }

  const work = () => {
      if(char.workHits > 40) {
        return  <p> I hoped they enjoyed their work, because that was all they did.</p>
      }
     return <p> {char.name} knew what proper work/life balance was.</p>
  }

  const stress = () => {
      if(char.stressHits > 60) {
         return <p> To {char.name}, reality was more like guidelines </p>
      }
      if(char.stressHits > 30) {
       return <p> {char.name} was good under pressure </p>
    }
  return  <p> {char.name} didn't know what stress was. They lived a happy life</p>

  }
  
  
    return (
    <div className='modal'>
        <h1> The Story of {char.name}</h1>
        {youth(age)}
        {work()}
        {stress()}
       <p>Survived by {char.fam} family members</p>
    </div>
  )
}
