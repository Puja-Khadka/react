import React from 'react'

const Child=React.memo(({name,age}) =>{
 console.log("child re render")
 return (
    <>
 <h1>{name}</h1>
 <p> age is {age}</p>
 </>
 )
})

export default Child