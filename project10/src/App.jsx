import React, { useEffect, useMemo, useState } from 'react'
import { useCallback } from 'react'
import Expensivetask from './Component/expensivetask';

const Button=React.memo(({onClick,text})=>{
console.log(`Child ${text} render`);

return <button onClick={onClick}>{text}</button>
})

function App() {
  
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3,setCount3]=useState(0)
  const [input,setInput]=useState(0)
 
 const doublevalue= useMemo(()=>{
return Expensivetask(input)
  },[input])

  const handleClick1=useCallback(()=>{
 
    setCount1(count1+1)
    
  },[count1])
 
  const handleClick2=useCallback(()=>{
    
    setCount2(count2+1)
  },[count2])
   console.log("Parent rendered");
   
  return (
    <>
    <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
    {/* <Button  onClick={handleClick1} text="Button1"/>  */}
     {/* <Button  onClick={handleClick2} text="Button2"/>  */}
     <p>count3:{count3}</p>
    <button onClick={()=>setCount3(count3+1)}>increment</button>
    <input type="number" placeholder='enter a number'value={input} onChange={(e)=>setInput(e.target.value)}/>
    <p>number is:{doublevalue}</p>
  

    </>
  )
}

export default App
