import React from 'react'

function Hero(props) {
  const { refVal } = props

  return (
    <div ref={ refVal } className='container mx-auto flex justify-between py-10 px-10 mt-0 md:my-10 items-center'>
        <div className="flex flex-col space-y-4">
            <p className="">Frontend/Backend Web Developer</p>

            <div className="font-bold text-2xl md:text-5xl">
                <p>Hi I'm</p>
                <p className="text-sky-500">Murenzi Paterne</p>
            </div>
        </div>

        <div className="w-64 h-64 bg-sky-500 rounded-full hidden md:block">

        </div>
    </div>
  )
}

export default Hero