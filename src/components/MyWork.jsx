import React from 'react'

function MyWork() {
  return (
    <div className="container mx-auto  py-10 mt-0 md:my-10 px-10 flex flex-col space-y-4">
        <h1 className="font-bold text-5xl">My Services</h1>

        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-10 items-start'>
            <div className="bg-gray-800 w-96 h-96 rounded-2xl relative project-container">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500"></div>
            </div>
            
            <div className="bg-gray-800 w-96 h-96 rounded-2xl relative project-container">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500"></div>
            </div>
            
            <div className="bg-gray-800 w-96 h-96 rounded-2xl relative project-container">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500"></div>
            </div>
            
        </div>

    </div>
  )
}

export default MyWork