import React from 'react'
import open from "../assets/open.svg"

function MyWork(props) {
    const { refVal } = props

  return (
    <div ref={ refVal } className="container mx-auto  py-10 mt-0 md:my-10 px-10 flex flex-col space-y-10">
        <h1 className="font-bold text-5xl">My Work</h1>

        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-10 items-start'>
            <div className="bg-gray-800 w-full md:w-96 h-96 rounded-2xl relative project-container overflow-hidden">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500 p-8 flex flex-col space-y-2 justify-start items-start">
                    <h1 className='font-bold text-lg'>Chat App</h1>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ex.</p>
                    <a href="" className="hover-text flex space-x-2 items-center justify-start">
                        <img src={open} alt="open" className="w-6" />
                        <span>View</span>
                    </a>
                </div>
            </div>
            
            <div className="bg-gray-800 w-full md:w-96 h-96 rounded-2xl relative project-container overflow-hidden">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500 p-8 flex flex-col space-y-2 justify-start items-start">
                    <h1 className='font-bold text-lg'>Movie Streaming App</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut.</p>
                    <a href="" className="hover-text flex space-x-2 items-center justify-start">
                        <img src={open} alt="open" className="w-6" />
                        <span>View</span>
                    </a>
                </div>
            </div>
            
            <div className="bg-gray-800 w-full md:w-96 h-96 rounded-2xl relative project-container overflow-hidden">
                <div className="project-layer absolute bottom-0 left-0 w-full h-0 rounded-2xl bg-gradient-to-b from-transparent to-sky-500 transition-all duration-500 p-8 flex flex-col space-y-2 justify-start items-start">
                    <h1 className='font-bold text-lg'>News App</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus.</p>
                    <a href="" className="hover-text flex space-x-2 items-center justify-start">
                        <img src={open} alt="open" className="w-6" />
                        <span>View</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-center items-center">
            <a href="" className='px-6 py-2 border border-sky-500 rounded-2xl hover:bg-sky-500 focus:bg-sky-500 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500'>See More</a>
        </div>
    </div>
  )
}

export default MyWork