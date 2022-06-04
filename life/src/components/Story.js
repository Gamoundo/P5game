import React from 'react'

export default function Story(props) {
  return (
    <div> 
    <h1> The Story of {props.char.name} </h1>
    <p> {props.char.workHits}</p>
    {(props.char.workHits >= 10 && props.char.workHits < 30) && <p> work was starting to bother {props.char.name}</p>}
    {(props.char.workHits >= 50 && props.char.workHits < 80) && <p>Work had taken over {props.char.name}'s life </p>}
    <p> {props.char.stressHits}</p>
    {(props.char.stressHits >= 10 && props.char.stressHits < 30) && <p> {props.char.name} could only take so much stress</p>}
    {(props.char.stressHits >= 50 && props.char.stressHits < 80) && <p> {props.char.name}'s mind was beginning to break</p>}
    </div>
  )
}
