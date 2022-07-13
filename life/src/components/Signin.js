import React from 'react'

export default function Signin({setChar}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        let called = e.target.name.value
        setChar( {
            name: called,
            workHits: 0,
            stressHits: 0,
            alive: true,
            fam: 0
        })
    }
  return (
    <form onSubmit={handleSubmit} className='sign'>
        <div> Whose Story is This?
        <input type="text" name="name" placeholder="Name" />
        </div>
        <input type="submit" value="Embark"  />
    </form>
  )
}
