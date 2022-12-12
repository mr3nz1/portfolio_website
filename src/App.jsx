import './App.css';
import React from 'react';

// images
import scrollToTop from "./assets/scrollToTop.png"

// components
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhoIam from './components/WhoIam';
import MyServices from "./components/MyServices"
import MyWork from "./components/MyWork"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import FadeIn from "./components/FadeIn"


function App() {
  const navbarRef = React.useRef(null)
  const heroRef = React.useRef(null)
  const whoIamRef = React.useRef(null)
  const myServicesRef = React.useRef(null)
  const myWorkRef = React.useRef(null)
  const contactsRef = React.useRef(null)
  const footerRef = React.useRef(null)

  const refs = {
    "navbarRef": navbarRef,
    "heroRef": heroRef,
    "whoIamRef": whoIamRef,
    "myServicesRef": myServicesRef,
    "myWorkRef": myWorkRef,
    "contactsRef": contactsRef,
    "footerRef": footerRef,
  }

  const [isAtTop, setIsAtTop] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => { })
    }
  }, [isAtTop])

  function scrollIntoView(ref) {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <div className="xl:container xl:mx-auto bg-gray-900 text-white font-sans">
        <Navbar refVal={navbarRef} scrollIntoView={scrollIntoView} refs={refs} />

        <Hero refVal={heroRef} />

        <WhoIam refVal={whoIamRef} />

        <MyServices refVal={myServicesRef} />

        <MyWork refVal={myWorkRef} />

        <Contacts refVal={contactsRef} />

        <Footer refVal={footerRef} />

      <button onClick={() => { scrollIntoView(navbarRef) }} className={`${isAtTop ? "hidden" : ""} fixed bottom-0 right-0 mx-4 translate-y-1/2 hover:translate-y-0 focus:translate-y-0 cursor-pointer transition-all duration-500`}>
        <img src={scrollToTop} alt="scroll to top" className="w-10" />
      </button>
    </div>
  );
}

export default App;
