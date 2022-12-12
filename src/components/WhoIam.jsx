import React from 'react'
import FadeIn from "./FadeIn"

function WhoIam(props) {
    const { refVal } = props
    const [currentTab, setCurrentTab] = React.useState(1);

    return (
        <div ref={refVal} className="h-screen fade-in from-bottom container mx-auto flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-20 py-10 mt-0 md:my-10 items-start px-10">
            <FadeIn>
                <div className='rounded-2xl w-72 md:w-96 h-96 bg-sky-500'></div>
            </FadeIn>

            <div className='w-full md:w-1/2 flex flex-col space-y-4'>
                <FadeIn>
                    <div className='flex flex-col space-y-2'>
                        <h1 className="font-bold text-5xl">Who I am</h1>
                        <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae maxime hic consequuntur at tempora mollitia non impedit magni adipisci iste quasi, esse commodi labore provident, perferendis doloribus aspernatur veniam.</p>
                    </div>
                </FadeIn>


                <div className="flex flex-col space-y-2">
                    {/* <FadeIn>
                        <div className="font-bold text-lg flex space-x-4">
                            <button className={`hover-text ${currentTab === 1 ? "text-sky-400" : ""}`}>Skills</button>
                            <button className={`hover-text ${currentTab === 2 ? "text-sky-400" : ""}`}>Experience</button>
                            <button className={`hover-text ${currentTab === 3 ? "text-sky-400" : ""}`}>Education</button>
                        </div>
                    </FadeIn> */}

                    <FadeIn>
                        <div>
                            <p className="font-bold text-sky-500">UI / UX Design</p>
                            <p>Web app design, figma, AdobeXD</p>
                        </div>
                    </FadeIn>

                    <FadeIn>

                        <div>
                            <p className='font-bold text-sky-500'>Frontend Web Development</p>
                            <p>HTML, CSS, Javascript, ReactJS, TailwindCSS, Bootstrap</p>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div>
                            <p className='font-bold text-sky-500'>Backend Web Development</p>
                            <p>NodeJS, ExpressJS, PHP, MYSQL, MongoDB</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}

export default WhoIam