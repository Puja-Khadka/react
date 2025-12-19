import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useCustomhook(url) {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{setData(data);
            setLoading(false)
        })
    },[url])
  return [data,loading]
}

export default useCustomhook