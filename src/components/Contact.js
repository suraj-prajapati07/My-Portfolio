import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import ContactForm from './ContactForm';

const contactData = [
    {
        id: 1,
        icon: <FaLocationDot/>,
        heading: "Address:",
        subHeading: "Hazaribagh, JH02", 
    },
    {
        id: 2,
        icon: <CgMail/>,
        heading: "My Email:",
        subHeading: "sp407522@gmail.com", 
        subHeading: "sp407522@gmail.com", 
    },
    {
        id: 3,
        icon: <FaPhone/>,
        heading: "Call Me Now:",
        subHeading: "00-123 00000", 
    }
]

const Contact = () => {
  return (
    <div id='contact' className='relative w-full'>
        <div className='relative w-10/12 mx-auto py-20'>
            <h2 className='text-5xl font-bold text-gray-800 mx-auto text-center'>
                Let&apos;s discuss your Project
            </h2>
            <p className='text-[20px] text-gray-600 text-center mx-auto my-7 font-medium'>
                I'm always open to discussing product design work or partnership opportunities.
            </p>
            {/* Contact form */}
            <div className='mt-12 relative w-full flex flex-col items-center  gap-6'>
                <ContactForm/>
                <p className='text-[18px] text-gray-600 text-center mx-auto'>
                    I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.
                </p>
                <div className='flex flex-col md:flex-row gap-6 justify-between'>
                    {
                        contactData.map((contact) => {
                            return(
                                <div className='w-64 p-3.5 flex rounded-[10px] bg-white  hover:scale-[1] duration-450  cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200'>
                                    <div className='h-10 md:h-12 aspect-square bg-[#EDD8FF80] rounded-[4px] text-lg md:text-xl grid place-items-center text-purple-700'>
                                        {contact.icon}
                                    </div>
                                    <div className='ms-3.5'>
                                        <p className='text-[12px] md:text-[14px] text-[#424E60] font-normal'>
                                            {contact.heading}
                                        </p>
                                        <p className='text-[14px] md:text-[16px] text-[#132238] font-medium'>
                                            {contact.subHeading}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex items-center text-purple-700 px-4 py-2 md:px-6 md:py-3 max-w-72 z-50 text-center rounded-[4px]'>
                    <a href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaFacebook
                            fontSize={24}
                        />
                    </a>
                    <a href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaInstagram
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaLinkedin
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a href='https://github.com/suraj-prajapati07' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaGithub
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaBehance
                            fontSize={24}
                            className=''
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
