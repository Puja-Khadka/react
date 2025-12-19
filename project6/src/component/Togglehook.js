import React, { useState } from 'react'

export default function useTogglehook(initialValue=false) {
  const[value,setValue]=useState(initialValue)
  const toggle=()=>{
    setValue(!value)

  }
  return [value,toggle]
}
