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
import pic from "../../public/img1.webp";




function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>

                <div className='flex flex-col md:flex-row '>

                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>

                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <TypeAnimation
                                className='text-red-700 font-bold'
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Programmer',
                                    1000,
                                    'Coder',
                                    1000,

                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />

                        </div>
                        <br />

                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At possimus minima accusantium impedit alias enim, unde ducimus tempora, aperiam mollitia neque. Qui reiciendis, temporibus incidunt quis assumenda libero inventore officia dicta labore earum nam illo, vero itaque tempore iste soluta?</p>
                        <br />
                        {/* social media  */}
                        <div className='flex flex-col md:flex-row space-x-8 justify-between space-y-6 md:space=y-0 items-center'>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5 '>
                                    <li>
                                        <a href="https://tailwindcss.com/docs/guides/vite" target='_black'>
                                            <FaFacebook className='text-2xl cursor-pointer' />
                                        </a>


                                    </li>
                                    <li>
                                        <a href="https://linkedin.com" target='_black'> <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>


                                    </li>
                                    <li>
                                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagramSquare className='text-2xl cursor-pointer' /></a>


                                    </li>
                                    <li>
                                        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"> <FaYoutube className='text-2xl cursor-pointer' /></a>


                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <ul className='flex space-x-5 '>
                                    <li>
                                        {""}
                                        <FaNode className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

                                    </li>
                                    <li>
                                        {""}
                                        <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

                                    </li>
                                    <li>
                                        {""}
                                        <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    </li>
                                    <li>
                                        {""}
                                        <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />

                    </div>

                </div>

            </div>
            <hr />
        </>
    )
}

export default Home