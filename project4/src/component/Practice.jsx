import React, { useState } from 'react'

function Practice() {
    const [text, setText] = useState("");
    const [length,setLength]=useState()
  return (
    <div>
        <h1>text:{text}</h1>
        <p>Length:{length}</p>
        <input className='border p-5' type="text"  value={text} onChange={(e)=>{setLength(e.target.value.length); setText(e.target.value);}}/>
    </div>
  )
}

export default Practice