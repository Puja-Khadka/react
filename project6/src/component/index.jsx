import React from 'react'
import useTogglehook from './Togglehook'

function Index() {
    const [isVisible,toggleVisibility]=useTogglehook(false)
  return (
    <div>
      <button className='border mb-12 mt-5' onClick={toggleVisibility}>{isVisible?"hide text":"show text"}</button>
      {isVisible && <p className='mb-10'> this is paragraph</p>}
    </div>
  )
}

export default Index