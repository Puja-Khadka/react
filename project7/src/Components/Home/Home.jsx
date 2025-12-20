import React from 'react'

function Home() {
  return (
   <>
   <section className=' px-40 py-10'>
    <div className='flex justify-between  items-center'>
      <div className=''>
        <img  className='h-60 w-80 '  src="https://img.freepik.com/premium-photo/3d-cartoon-character-using-computer-her-desk_497750-443.jpg" alt="" />
      </div>
      <div>
        <h1 className='text-4xl font-bold'>Download Now</h1>
        <p className='text-end text-2xl font-bold'>Lorem ipsum.</p>
        <div className='flex justify-end'>
        <button className='bg-amber-600 px-5 py-2 rounded mt-4 hover:opacity-45 '>Download</button>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
        <img className='h-70 w-80 mt-20' src="https://img.freepik.com/premium-photo/cartoon-character-kid-use-computer-study-internet-white-background_41969-14912.jpg" alt="" />
    </div>
   </section>
   </>
  )
}

export default Home