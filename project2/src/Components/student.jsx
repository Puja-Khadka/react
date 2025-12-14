import React from 'react'

function Student(props) {
  return (
    <>
    <div className='border-2 solid black '>
    <h1 className='font-bold'>{props.name}</h1>
    <p>{props.age}</p>
    </div>
    </>
  )
}

export default Student