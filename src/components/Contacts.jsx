import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import at_symbol from "../assets/at_symbol.png"
import phone_call from "../assets/phone_call.png"
import FadeIn from "./FadeIn"

function Contacts(props) {
    const { refVal } = props

    return (
        <div ref={refVal} className="h-screen container mx-auto py-10 mt-0 md:my-10 px-10 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-start items-start md:justify-between md:items-center">
            <div className="md:w-1/2 md:p-10 flex flex-col space-y-6 items-start">
                <FadeIn>
                    <h1 className="text-5xl font-bold">Contact Me</h1>
                </FadeIn>

                <div className="flex flex-col space-y-2">
                    <FadeIn>
                        <div className="flex space-x-2 items-center">
                            <img src={at_symbol} alt="at_symbol" className="w-8" />
                            <span>murenzi419@gmail.com</span>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex space-x-2 items-center">
                            <img src={phone_call} alt="phone_call" className="w-8" />
                            <span>+250 782750607</span>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <div className="flex space-x-3 items-center">
                        <a href="">
                            <img src={linkedin} alt="linkedin" className="w-8 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500" />
                        </a>
                        <a href="">
                            <img src={github} alt="github" className="w-8 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500" />
                        </a>
                        <a href="">
                            <img src={twitter} alt="twitter" className="w-8 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500" />
                        </a>
                        <a href="">
                            <img src={instagram} alt="instagram" className="w-8 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500" />
                        </a>
                        <a href="">
                            <img src={facebook} alt="facebook" className="w-8 hover:-translate-y-2 focus:-translate-y-2 transition-all duration-500" />
                        </a>
                    </div>
                </FadeIn>

                <FadeIn>
                    <a href="" className="bg-sky-500 px-6 py-3 rounded-md hover:-translate-y-2 transition-all duration-500">Download Cv</a>
                </FadeIn>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <FadeIn>
                    <input type="text" placeholder="Your Name" className='w-full p-4 bg-gray-800 rounded-lg outline-none' />
                </FadeIn>
                <FadeIn>
                    <input type="email" placeholder="Your Email" className='w-full p-4 bg-gray-800 rounded-lg outline-none' />
                </FadeIn>
                <FadeIn>
                    <textarea className="w-full p-4 bg-gray-800 rounded-lg outline-none" placeholder="Your Message" col="10" />
                </FadeIn>
                <FadeIn>
                    <div className="flex w-full justify-start">
                        <button type="submit" className="bg-sky-500 px-6 py-3 rounded-md hover:-translate-y-2 transition-all duration-500">Submit</button>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Contacts