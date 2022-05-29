import React, { useEffect, useState } from 'react'

export default function Timer(props) {
  
    
  
    useEffect(() => {
      let interval = setInterval(() => {
          props.setAge(prev => prev +=1)
      }, 7000)
    
      return () => clearInterval(interval)
    }, [props.setAge])
    
  
    return (
    <div>{props.age}</div>
  )
}
