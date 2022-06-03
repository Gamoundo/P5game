import React from 'react'

export default function Story(props) {
  return (
    <div> 
    <h1> The Story of {props.char.name} </h1>
    <p> {props.char.workHits}</p>
    </div>
  )
}
