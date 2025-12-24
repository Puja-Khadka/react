import { useCallback, useMemo, useState } from "react"
import Sum from "./sum"
import Child from "./child";
import Calculation from "./calculation";



function App() {
     const [count,setCount]=useState(0)
     const [Number,setNumber]=useState(1000)
      
      const result=useMemo(()=>{
       return Calculation(5)
      },[])
   console.log('app render');
  return (
    <>
      <h2>result:{result}</h2>
    <h1>Number {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment {count}</button><br/>
     <h1>your number is:{Number}</h1>
     <button onClick={()=>setNumber(Number+1)}>increment</button>
     <Sum number={Number}/>
     <Child name="puja" age="23"/>
     <Child name="santu" age="23"/>
    </>
  )
}

export default App
