import { useCallback, useEffect, useState } from "react"


function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [character,setCharacter]=useState(false)
  const [passsword,setPassword]=useState("")
  
  const generatePassword=useCallback(()=>{
     let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(numberAllowed) str +="0123456789"
  if(character) str +="!@#$%^&*()_+~`|}{[]:;?><,./="
  for(let i=1;i<=length;i++){
    let char= Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
  },[length,numberAllowed,character,setPassword])
   
useEffect(()=>{
  generatePassword()
},[length,numberAllowed,character,setPassword , generatePassword])
  return (
    <> 
    <div className="w-full max-w-xl mx-auto  mt-40 p-6 bg-white rounded-xl shadow-md shadow-orange-500/100 text-orange-600 ">
      <h1 className="font-bold text-xl text-center ">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden my-4 bg-gray-100">
      <input type="text" value={passsword}
      placeholder="password"
      className="outline-none w-full p-2"
      readOnly
       />
       <button className="bg-blue-700 py-2 px-3 text-white ">copy</button>
      </div>
      <div className="flex gap-x-7">
        <div className="flex gap-x-1items-center"> 
          <input type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
           />
          <label >length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed(prev=>!prev)}}
           />
           <p>Number</p>
           
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={character}
          onChange={()=>{setCharacter(prev=>!prev)}}
           />
           <p>character</p>
           
        </div>
      </div>
      </div>
    </>
  )
}

export default App
