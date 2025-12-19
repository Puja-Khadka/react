import React from 'react'
import useTogglehook from './Togglehook'

function Index() {
    //const [isVisible,toggleVisibility]=useTogglehook(false)
    const [value,toggle]=useTogglehook(false)
  return (
    <div>
      <button className='border mb-12 mt-5' onClick={toggle}>{value?"hide text":"show text"}</button>
      {value && <p className='mb-10'> this is paragraph</p>}
    </div>
  )
}

export default Index