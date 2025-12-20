import React from 'react'

function Footer() {
  return (
  <>
  <footer className='bg-white border-y'>
  <div className='container mx-auto px-4 py-6'>
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0'>
      
      
      <div>
        <img className='h-16' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" />
      </div>

    
      <div className='flex flex-col sm:flex-row justify-between gap-8 md:gap-12 mt-4 md:mt-0 w-full md:w-auto'>
        
        
        <div>
          <h3 className='font-bold text-sm mb-3'>RESOURCES</h3>
          <ul className='font-medium text-gray-800'>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>Home</li>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>About</li>
          </ul>
        </div>

        
        <div>
          <h3 className='font-bold text-sm mb-3'>FOLLOW US</h3>
          <ul className='font-medium text-gray-800'>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>Github</li>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>Discord</li>
          </ul>
        </div>

       
        <div>
          <h3 className='font-bold text-sm mb-3'>LEGAL</h3>
          <ul className='font-medium text-gray-800'>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>Privacy Policy</li>
            <li className='mb-2 hover:text-gray-500 cursor-pointer'>Terms & Conditions</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</footer>
  </>
  )
}

export default Footer