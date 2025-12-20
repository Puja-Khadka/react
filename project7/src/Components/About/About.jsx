import React from 'react'

function About() {
  return (
    <>
    <section className="px-4 md:px-10 lg:px-20 py-10">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
    
    
    <div className="w-full lg:w-1/2">
      <img
        className="w-full h-auto rounded-lg object-cover"
        src="https://img.freepik.com/free-photo/business-meeting-office-with-presentation_9975-22656.jpg"
        alt="React development"
      />
    </div>

    <div className="w-full lg:w-1/2">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
        React development is carried out by passionate developers
      </h1>
      <p className="text-gray-700 mb-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
        accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
        aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
      </p>
      <p className="text-gray-700">
        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
        Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
      </p>
    </div>

  </div>
</section>
    </>
  )
}

export default About