import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    {
        id: 1,
        name: "home",
        path: "/home"
    },
    {
        id: 2,
        name: "about",
        path: "/about"
    },
    {
        id: 3,
        name: "process",
        path: "/process"
    },
    {
        id: 4,
        name: "services",
        path: "/services"
    },
    {
        id: 5,
        name: "project",
        path: "/project"
    },
    {
        id: 6,
        name: "contact",
        path: "/contact"
    },
    
]

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full h-14 flex items-center border-b border-slate-300 bg-white'>
        <div className='relative flex flex-row items-center justify-between w-10/12 mx-auto'>
            {/* Logo */}
            <div className='flex items-center'>
                <div className='w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#9929fb] text-center md:text-4xl text-slate-50 text-2xl font-bold grid place-items-center'>
                    <p>S</p>
                </div>
                <p className='text-xl md:text-2xl tracking-wider font-semibold opacity-80'>uraj</p>
            </div>

            {/* nav links */}
            <nav className='hidden lg:block'>
                <ul className='flex gap-x-3 items-center text-black'>
                    {
                        navLinks.map((link) => {
                            return(
                                <li
                                    key={link.id}
                                > 
                                    <Link 
                                        to={link.name}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-70} //adjust if navbar overlap..
                                        activeClass="bg-purple-700 text-white"
                                        className='uppercase tracking-wider font-semibold  cursor-pointer py-2 px-4 rounded-md text-sm text-gray-600'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {/* Hamburger */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden'
            >
                {
                    !isOpen? <GiHamburgerMenu fontSize={20}/> : <ImCross fontSize={20}/>
                }
            </button>
            {/* mobile menu */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                            className='md:hidden flex flex-col items-center gap-6 px-2 py-4 bg-gray-800 absolute -right-7 top-[2.7rem] z-100'
                        >
                            {
                                navLinks.map((link) => {
                                    return(
                                        <Link
                                            onClick={() => setIsOpen(false)} //close menu
                                            key={link.id}
                                            to={link.name}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={-70} //adjust if navbar overlap..
                                            activeClass='border-b-2 border-purple-400 text-white '
                                            className='text-gray-300 uppercase font-semibold text-sm'
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                })
                            }
                        </motion.div>
                    )
                }
                </AnimatePresence>
        </div>
    </div>
  )
}

export default Navbar