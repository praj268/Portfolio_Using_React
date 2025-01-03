import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

function Footer() {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>

                    <div className='items-center justify-center flex-col flex'>
                        <div className='flex space-x-4'>
                            <FaFacebook size={25} />
                            <FaYoutube size={25} />
                            <FaInstagramSquare size={25} />
                            <FaLinkedin size={25} />
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm
                            '>Developed by Prajakta Patil</p>
                            <p className='text-sm
                            '>&copy; 2025 your company. All rights reserved</p>
                        </div>
                    </div>


                </div>

            </footer>
        </>
    )
}

export default Footer