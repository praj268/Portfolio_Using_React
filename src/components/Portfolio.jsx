import React from 'react'
import html from "../../public/html-5.png";
import java from "../../public/java.png";
import js from "../../public/js.png";
import node from "../../public/nodejs.png";
import python from "../../public/python.png";
import react from "../../public/react.png";
import css from "../../public/text.png";


function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: "html-5.png",
            name: 'html'
        },
        {
            id: 2,
            logo: "java.png",
            name: 'java'
        },
        {
            id: 3,
            logo: "js.png",
            name: 'js'
        },
        {
            id: 4,
            logo: "nodejs.png",
            name: 'node'
        },
        {
            id: 5,
            logo: "python.png",
            name: 'python'
        },
        {
            id: 6,
            logo: "react.png",
            name: 'react'
        },
        {
            id: 7,
            logo: "text.png",
            name: 'css'
        },


    ]
    return (
        <>
            <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline'>Featured Projects</span>

                <div className='grid grid-cols-1 md:grid-cols-4 space-x-88justify-center mt-3'>
                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div key={id} className='md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300 mb-4 p-4'>
                                <img className='w-[120px] h-[120px] rounded-full border-[2px]' src={logo} alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-5'>{name}</div>
                                    <p className='px-5 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae libero laborum ipsa dolore. </p>
                                </div>
                                <div className=' px-5 space-x-3 flex mt-2'>
                                    <button className='bg-green-500 hover-bg-blue-700 text-white font-white font-bold px-2 py-1 rounded'>Video</button>
                                    <button className='bg-blue-500 hover-bg-blue-700 text-white font-white font-bold px-2 py-1 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Portfolio