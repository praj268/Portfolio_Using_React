import React from 'react'
import html from "../../public/html-5.png";
import java from "../../public/java.png";
import js from "../../public/js.png";
import node from "../../public/nodejs.png";
import python from "../../public/python.png";
import react from "../../public/react.png";
import css from "../../public/text.png";


function Experiance() {
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
            <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
                <p className='font-semibold mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus iusto inventore.</p>

                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div key={id} className='flex flex-col items-center justify-center rounded-full cursor-pointer hover:scale-110 duration-300 mb-4 p-4 shadow-lg border-[1px] my-3'>

                                <img className='w-[130px] h-[150px] p-3' src={logo} alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-5'>{name}</div>

                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Experiance