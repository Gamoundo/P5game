import React, { useEffect, useState } from 'react'

export default function Timer() {
  
    const [age, setAge] = useState(20)
  
    useEffect(() => {
      let interval = setInterval(() => {
          setAge(prev => prev +=1)
      }, 7000)
    
      return () => clearInterval(interval)
    }, [setAge])
    
  
    return (
    <div>{age}</div>
  )
}
