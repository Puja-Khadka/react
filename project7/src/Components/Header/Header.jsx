import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
   const [isOpen, setIsOpen] = useState(false);
  return (
<>
 <header className="shadow sticky top-0 z-50">
      <nav className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex justify-between items-center">
          
         
          <div>
            <img
              className="h-12"
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
            />
          </div>

          
          <ul className="hidden md:flex justify-center gap-8 text-gray-500 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Github"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>

          
          <div className="hidden md:flex gap-4">
            <Link
              to="/login"
              className="font-bold hover:bg-gray-200 p-1 rounded"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="font-bold bg-amber-700 p-1 rounded hover:bg-amber-500"
            >
              Get Started
            </Link>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col gap-4 text-gray-700 font-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Github"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Github
                </NavLink>
              </li>
              
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/login"
                  className="font-bold hover:bg-gray-200 p-1 rounded text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="font-bold bg-amber-700 p-1 rounded hover:bg-amber-500 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
</>
  )
}

export default Header