import React from 'react'
import FadeIn from "./FadeIn"

function Hero(props) {
  const { refVal } = props

  return (
    <div ref={refVal} className='h-screen container mx-auto flex justify-between px-10 mt-0 md:my-10 items-center'>
      <FadeIn>
        <div className="flex flex-col space-y-4">
          <p className="">Frontend/Backend Web Developer</p>

          <div className="font-bold text-2xl md:text-5xl">
            <p>Hi I'm</p>
            <p className="text-sky-500">Murenzi Paterne</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="w-64 h-64 bg-sky-500 rounded-full hidden md:block">

        </div>
      </FadeIn>
    </div>
  )
}

export default Hero