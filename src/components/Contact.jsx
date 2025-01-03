import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { SiAxios } from 'react-icons/si';
import toast, { Toaster } from 'react-hot-toast';



function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userinfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/bkkkzmxb", userinfo)
            toast.success("Your message has been sent")

        }
        catch (error) {

            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">

                <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
                <span>Please fill out the form below to cantact me</span>
                <div className='flex flex-col items-center justify-center'>
                    {/* <form action="https://getform.io/f/bkkkzmxb" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl' onSubmit={handleSubmit((data) => console.log(data))}> */}
                    <form className='bg-slate-200 w-96 px-8 py-6 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-xl font-semibold mb-3'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="" className='block text-gray-700'>Full Name</label>

                            <input type="text" id="name" name="name" className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none ' placeholder='Enter your Full Name' {...register('name', { required: true })} />
                            {errors.name && <p>Please enter name</p>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="" className='block text-gray-700'>Email Address</label>
                            <input type="text" id="email" name="email" className='shadow appearance-none border rounded-lg py-2 text-gray-700 leading-tight focus:outline-none px-2' placeholder='Enter your Email Address'  {...register('email', { required: true })} />
                            {errors.email && <p>Please enter email</p>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="" className='block text-gray-700'>Message</label>

                            <textarea id="message" type="text" name="message" className='shadow appearance-none border rounded-lg py-2 text-gray-700 leading-tight focus:outline-none px-2' placeholder='Enter your Query'  {...register('message', { required: true })} />
                            {errors.message && <p>Please enter message.</p>}

                        </div>
                        <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-800'>Send</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact