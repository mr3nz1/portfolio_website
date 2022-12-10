import React from 'react'
import menubar from "../assets/menubar.png"

function Navbar() {
  return (
    <div className="w-full flex space between py-4 px-10 justify-between items-center">
        <a href='' className="no-underline font-bold text-xl"><span className="text-sky-500">MR3</span>NZ1</a>

        <div className="space-x-4 items-center font-bold hidden md:flex">
            <button className="hover-text">Who I Am</button>
            <button className="hover-text">Services</button>
            <button className="hover-text">Projects</button>
            <button className="hover-text">Testimonials</button>
            <button className="hover-text">Contacts</button>
        </div>

        <button className='w-8 md:hidden'>
            <img src={menubar} alt="menu" />
        </button>
    </div>
  )
}

export default Navbar