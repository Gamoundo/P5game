import React, { useEffect } from 'react'

export default function Timer(props) {
  
    
  
  
    useEffect(() => {
     
      let interval = setInterval(() => {
         props.alive && props.setAge(prev => prev +=1)
      }, 7000)
    
      return () => clearInterval(interval)
    }, [props.setAge, props.alive])
    
  
    return (
    <div>{props.age}</div>
  )
}
