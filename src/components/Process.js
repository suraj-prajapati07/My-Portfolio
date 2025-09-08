import React from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FaPenToSquare } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const processData = [
    {
        id: 1,
        icon: <GiArchiveResearch fontSize={32} className=''/>,
        heading: "Research",
        description: "Understand client needs, gather requirements, and explore the best possible solutions.",
    },
    {
        id: 2,
        icon: <GoGraph fontSize={32} className=''/>,
        heading: "Analyze",
        description: "Plan the workflow, set priorities, and design the project structure for clarity.",
    },
    {
        id: 3,
        icon: <FaPenToSquare fontSize={32} className=''/>,
        heading: "Design",
        description: "Create user-friendly designs and build the solution with clean, scalable code.",
    },
    {
        id: 4,
        icon: <HiOutlineRocketLaunch fontSize={32} className=''/>,
        heading: "Launch",
        description: "Test thoroughly, deploy the project, and deliver a smooth user experience.",
    },
]

const Process = () => {
  return (
    <div id='process' className='w-full bg-gradient-to-br from-[#91ddcf] via-[#f7f9f2] to-[#e8c5e5]'>
        <div className='w-10/12 mx-auto py-16 flex flex-col items-center md:flex-row gap-8'>
            {/* Left part */}
            <div className='w-full md:w-1/2 flex flex-col gap-8 '>
                <h2 className='font-bold text-4xl text-gray-800'>
                    Work Process
                </h2>
                <p className='md:w-[80%] text-xl text-gray-700'>
                    I follow a structured software development process to create reliable and user-friendly solutions. It starts with understanding client requirements, followed by planning and designing the system. Once the roadmap is clear, I focus on writing clean, optimized, and scalable code that brings the design to life.
                </p>
                <p className='md:w-[80%] text-xl text-gray-700'>
                    After development, I test thoroughly to ensure quality and smooth performance. Finally, I handle deployment and provide regular updates to keep the software efficient and up to date.
                </p>
            </div>
            {/* Right part */}
            <div className='md:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 justify-end'> 
                {
                    processData.map((process) => {
                        return(
                            <div
                                key={process.id}
                                className={`rounded-xl hover:drop-shadow-2xl shadow-gray-400 ease-out duration-1000  max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 xs:mb-6 flex flex-col gap-6 cursor-pointer`}
                            >
                                <div class="w-20 h-20 sm:w-18 sm:h-18 bg-purple-300 grid place-items-center rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300">
                                    {process.icon}
                                </div>
                                
                                <h3 className='text-xl font-bold text-gray-800'>
                                    {process.id}. {process.heading}
                                </h3>
                                <p className='text-gray-700'>
                                    {process.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Process

{/* 
                    rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 xs:mb-6
                */}