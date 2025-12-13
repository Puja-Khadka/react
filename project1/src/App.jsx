import { useState } from "react";





function App() {
  let [count ,setCount]=useState(0)
   const addvalue=()=>{
    count=count+1
    setCount(count)
  }
  const removevalue=()=>{
   if(count>0){
     count=count-1
    setCount(count)
   }
  }
 return (
    <>
    <div style={{ display:"block",textAlign:"center",marginTop:"200px",boxShadow:"5px 5px 30px grey ",width:300,height:200,marginLeft:"500px",borderRadius:"10px",paddingTop:"30px",backgroundColor:"lightblue"}}>
   <h1 style={{color:"black" }}>Number:{count}</h1>
   <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
   <button  onClick={addvalue}>click me{count}</button>
   <button onClick={removevalue}>click me</button>
   </div>
   </div>
    </>
  )
}

export default App
