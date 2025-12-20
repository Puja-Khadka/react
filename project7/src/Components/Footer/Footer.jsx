import React from 'react'

function Footer() {
  return (
  <>
  <footer className='bg-white border-y'>
    <div className='flex justify-between px-40 py-6'>
      <div>
        <img className='h-16' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" />
      </div>
      <div className='flex justify-between gap-15 '>
        <div>
            <h3 className='font-bold text-sm mb-3 '>RESOURSES</h3>
            <ul className='font-medium text-gray-800'>
                <li className='mb-4'>Home</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-sm mb-3'>FOLLOW US</h3>
            <ul className='font-medium text-gray-800'>
                <li className='mb-4'>Github</li>
                <li>Discord</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-sm mb-3'>LEGAL</h3>
            <ul className='font-medium text-gray-800'>
                <li className='mb-4'>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
            </ul>
        </div>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer