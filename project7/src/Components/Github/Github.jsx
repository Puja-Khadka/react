import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Puja-Khadka")
        .then(res=>res.json())
        .then(data=>setData(data))
    })
  return (
    <div className=' text-center mt-10 px-40 py-10'>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <p>Followers: {data.followers}</p>
        <img className='w-60 m-4 mx-auto' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github