import React from 'react'
import { Link } from 'react-scroll';
   
const Footer = () => {
    const navLinks = ["home","about","process","services","project","contact"];

  return (
    <footer className='w-full bg-gray-800'>
        <div class="pt-20 w-10/12 mx-auto">
            <div class="flex  max-md:flex-col gap-y-7 justify-between items-center text-neutral-200">
                {/* Logo */}
                <div className='flex items-center'>
                    <div className='w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#9929fb] text-center md:text-4xl text-slate-50 text-2xl font-bold grid place-items-center'>
                        <p>S</p>
                    </div>
                    <p className='text-xl md:text-2xl tracking-wider font-semibold opacity-80'>uraj</p>
                </div>
                {/* nav links */}
                <div class="flex items-center gap-x-6 gap-y-3 flex-wrap justify-center">
                    {
                        navLinks.map((link, index) => {
                            return(
                                <Link 
                                    to={link}
                                    smooth={true}
                                    duration={500}
                                    class="group relative w-fit text-[14px] sm:text-[17px] capitalize" 
                                >
                                    {link}
                                    <span class="absolute left-0 bottom-0 h-[3px] w-full bg-purple-700 scale-x-0 duration-300 group-hover:scale-x-100"></span>
                                </Link>
                            )
                        })
                    }
                </div>
                <p class="text-[14px] sm:text-[17px]">
                    Copyright © 2025 Suraj.
                </p>
            </div>
            <p class="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
                Developed with ❤️ by <a href="https://www.themewagon.com" class="underline font-bold" target="_blank">ThemeWagon</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer