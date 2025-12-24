import { useState } from "react"
import Sum from "./sum"



function App() {
     const [count,setCount]=useState(0)
     const [Number,setNumber]=useState(1000)
   
  
   console.log('app render');
  return (
    <>
   
    <h1>Number {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment {count}</button><br/>
     <h1>your number is:{Number}</h1>
     <button onClick={()=>setNumber(Number+1)}>increment</button>
     <Sum number={Number}/>
    </>
  )
}

export default App
