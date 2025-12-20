import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
  return (
<>
<header className='shadow sticky top-0'>
   <nav className='bg-white border-gray-200 px-4  py-2'>
    <div className='flex justify-evenly items-center '>
      <div>
        <img className='h-12' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" />
      </div>
      <div >
        <ul className='flex justify-center gap-8  text-gray-500 font-bold '>
          <li ><NavLink to="/" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700'}`}>Home</NavLink></li>
          <li ><NavLink to="/About" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700'} `}>About</NavLink></li>
          <li ><NavLink to="/Contact" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700'}`}>Contact</NavLink></li>
          <li ><NavLink to="/Github" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700'}`}>Github</NavLink></li>
        </ul>
      </div>
      <div className='flex gap-4'>
       <Link to="/login"  className='font-bold hover:bg-gray-200 p-1 rounded'>Log in</Link>
       <Link to="/signup" className='font-bold bg-amber-700 p-1 rounded hover:bg-amber-500'>Get Started</Link>
      </div>
    </div>
   </nav>
     
     
</header>
</>
  )
}

export default Header