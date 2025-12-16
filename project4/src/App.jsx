import { useEffect } from "react"
import { useState } from "react"
import { use } from "react"



function App() {
  const [image,setImage]=useState([])
  
  useEffect(()=>{
    
    async function fetchdata(){
      let response=await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      const data=await response.json()
      console.log(data);
      
      setImage(data)
    }
    fetchdata()
  },[])
  return (
    <>
      <h1 className="text-4xl text-center font-bold">using API</h1>
    
      <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
      {image.map(e=>(
        <img className="w-60 h-60" src={e.url} alt="cat" key={e.id}/>
      ))}
      </div>
      
    </>
  )
}

export default App
