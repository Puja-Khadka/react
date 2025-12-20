import React from 'react'

function About() {
  return (
    <>
    <section className='  px-40 py-10'> 
     <div className='flex justify-between items-center gap-50'>
        <div>
            <img className='w-500 h-60' src="https://img.freepik.com/free-photo/business-meeting-office-with-presentation_9975-22656.jpg" alt="" />
        </div>
        <div>
            <h1 className='font-bold text-2xl'>  React development is carried out by passionate developers</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
               accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
               aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
           <p className='mt-2'> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
             Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
     </div>
    </section>
    </>
  )
}

export default About