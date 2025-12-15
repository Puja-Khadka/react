import { useState } from "react"



function App() {
  const [color,setColor]=useState("olive")

  return (
   
    <div className="w-full h-screen flex justify-center"style={{backgroundColor:color}} >
    <div className="fixed bottom-40  ">
      <div className="flex flex-wrap justify-center gap-3 bg-amber-50 rounded-4xl py-2 px-3  shadow-lg shadow-blue-50/50 ">
        <button onClick={()=>setColor("red")} className=" px-3 rounded-2xl bg-red-600 hover:bg-red-400" >red</button>
        <button onClick={()=>setColor("blue")} className=" px-3 rounded-2xl bg-blue-700 hover:bg-blue-300 " >blue</button>
        <button onClick={()=>setColor("black")} className=" px-3 rounded-2xl text-white" style={{backgroundColor:'black'}}>black</button>
        <button onClick={()=>setColor("orange")} className=" px-3 rounded-2xl " style={{backgroundColor:'orange'}}>orange</button>
        <button onClick={()=>setColor("green")} className=" px-3 rounded-2xl " style={{backgroundColor:'green'}}>green</button>
        <button onClick={()=>setColor("yellow")} className=" px-3 rounded-2xl " style={{backgroundColor:'yellow'}}>yellow</button>
        <button onClick={()=>setColor("grey")} className=" px-3 rounded-2xl " style={{backgroundColor:'grey'}}>grey</button>
        <button onClick={()=>setColor("purple")} className=" px-3 rounded-2xl " style={{backgroundColor:'purple'}}>purple</button>
        
      </div>
       </div>
    </div>
  )
}

export default App
