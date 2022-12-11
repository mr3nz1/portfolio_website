import React from 'react'
import menubar from "../assets/menubar.png"

function Navbar(props) {
  const {
    navbarRef,
    heroRef,
    whoIamRef,
    myServicesRef,
    myWorkRef,
    contactsRef,
  } = props.refs

  const {
    refVal,
    scrollIntoView
  } = props

  return (
    <div ref={refVal} className="w-full flex space between py-4 px-10 justify-between items-center">
        <a href='' onClick={() => { scrollIntoView(navbarRef)} } className="no-underline font-bold text-xl"><span className="text-sky-500">MR3</span>NZ1</a>

        <div className="space-x-4 items-center font-bold hidden md:flex">
            <button onClick={() => { scrollIntoView(heroRef) } } className="hover-text">Description</button>
            <button onClick={() => { scrollIntoView(whoIamRef) } } className="hover-text">Who I Am</button>
            <button onClick={() => { scrollIntoView(myServicesRef) } } className="hover-text">Services</button>
            <button onClick={() => { scrollIntoView(myWorkRef) } } className="hover-text">My Work</button>
            <button onClick={() => { scrollIntoView(contactsRef) } } className="hover-text">Contacts</button>
        </div>

        <button className='w-8 md:hidden'>
            <img src={menubar} alt="menu" />
        </button>
    </div>
  )
}

export default Navbar