import React, { useState } from 'react'

function Practice1() {
    const[name ,setNmae]=useState("")
   function handleChange(e){
        setNmae(e.target.value.toUpperCase())
    }
  return (
    <div>
        <input className='border mt-3' value={name} type="text" onChange={handleChange}/>
    </div>
  )
}

export default Practice1