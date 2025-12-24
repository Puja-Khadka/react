import React from 'react'

const Sum=React.memo(({number})=> {
  function calculation(){
    let sum=0;
      for(let i=1;i<=number;i++){
        sum+=i
    }
    return sum
      
  }
   console.log('sum render');
 const total= calculation()

 
  
 return(
    <>
    <h1>sum of {number}</h1>
    <p>sum:{total}</p>
    </>

 )
})

export default Sum