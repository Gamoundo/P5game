import React from 'react'

export default function Story(props) {
  return (
    <div> 
    <h1> The Story of {props.char.name} </h1>
    <p> {props.char.workHits}</p>
    {(props.char.workHits >= 10 && props.char.workHits < 30) && <p> work was starting to bother {props.char.name}</p>}
    <p> {props.char.stressHits}</p>
    </div>
  )
}
