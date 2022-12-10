import React from 'react'
import web_dev from "../assets/web_dev.png"
import uidesign from "../assets/uidesign.png"
import api from "../assets/api.png"

function MyServices() {
    return (
        <div className="container mx-auto  py-10 mt-0 md:my-10 px-10 flex flex-col space-y-4">
            <h1 className="font-bold text-5xl">My Services</h1>

            <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-10 items-start'>
                <div className='h-64 w-96 bg-gray-800 rounded-2xl p-6 flex flex-col space-y-6 items-start'>
                    <img src={web_dev} alt="web_dev" className='w-10' />

                    <div className="">
                        <h2 className='font-bold text-xl'>Web Development</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <a className='hover-text cursor-pointer'>LEARN MORE</a>
                </div>

                <div className='h-64 w-96 bg-gray-800 rounded-2xl p-6 flex flex-col space-y-6 items-start'>
                    <img src={uidesign} from="../assets/uidesign.png" className='w-10' />

                    <div className="">
                        <h2 className='font-bold text-xl'>UI / UX Design</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <a className='hover-text cursor-pointer'>LEARN MORE</a>
                </div>

                <div className='h-64 w-96 bg-gray-800 rounded-2xl p-6 flex flex-col space-y-6 items-start'>
                    <img src={api} from="../assets/api" className='w-10' />

                    <div className="">
                        <h2 className='font-bold text-xl'>API Development</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <a className='hover-text cursor-pointer'>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default MyServices