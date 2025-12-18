import React, { useState } from 'react'

export default function Practice() {
     const [name, setName] = useState("");
  return (
    <div>
          <input type="text"
          className='border '
  placeholder='type your name '
  onChange={(e)=>setName(e.target.value)}
/>
<p>your name:{name}</p>
    </div>
   
  )
}

