import React from 'react'
import pic from "../../public/img1.webp";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2 justify-around'>
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Prajakt<span className='text-green-500 text-2xl'>a</span>
                            <p className='text-sm'>Sofware Developer</p></h1>
                    </div>

                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) =>
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>

                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>

                                            {text}

                                        </Link>
                                    </li>
                                )
                            }
                        </ul>

                        <div className='md:hidden' onClick={() => setMenu(!menu)}>{menu ? <IoCloseSharp size={24} /> : <TiThMenu size={24} />}

                        </div>

                    </div>
                </div>
                {/* mobile navbar */}
                {
                    menu && (
                        <div className='md:hidden flex flex-col items-center justify-center space-y-4 bg-white'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                                {
                                    navItems.map(({ id, text }) =>
                                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}> <Link onClick={() => setMenu(!menu)}
                                            to={text} smooth={true} duration={500} offset={-70} activeClass='active'>

                                            {text}

                                        </Link></li>
                                    )
                                }
                            </ul>
                        </div >
                    )
                }


            </div >
        </>
    )
}

export default Navbar
