import React, { useEffect, useState } from 'react'

function Practice3() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    const[show,setShow]=useState(true)
  useEffect(()=>{
    if(!show){return}
    const intervalId= setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
        
        
       
      
        
    },1000)
     return()=>clearInterval(intervalId)
  },[show])
   
  return (
    <div>
        <button className='border' onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {
            show && <h1>Current time:{time}</h1>
        }
    </div>
  )
}

export default Practice3