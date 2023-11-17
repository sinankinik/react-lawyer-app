import React from 'react'
import { TiTick } from "react-icons/ti";


const Slider = () => {
    return (
        <div>
            <div className='-z-50'>
                <img src="/assets/1.jpg" alt="logo" />
            </div>
            <div className='bg-blue h-[480px] w-80 absolute top-40 right-40 text-white pt-6 text-justify px-6'>
                <h2 className='mb-4 font-bold text-xl text-center'>Get a Free Quote!</h2>
                <h3 className='text-xs'>As soon as you contact our expert team, this will be the only form have you fill in!</h3>
                <input type="text" placeholder='Enter Your Name' className='my-6 rounded-sm p-1 w-full text-black' />
                <input type="text" placeholder='Enter Your Email' className='mb-6 rounded-sm p-1 w-full text-black' />
                <input type="text" placeholder='Enter Your Phone Number' className='mb-6 rounded-sm p-1 w-full text-black' />
                <input type="text" placeholder='Add Your Message' className='mb-6 rounded-sm p-1 w-full h-20 text-black align-top' />
                <div className='flex justify-center'>
                    <button className='bg-orange px-2 py-4 rounded-lg'>REQUEST A CALL BACK</button>
                </div>
            </div>
            <div className='w-120 absolute top-40 left-40 text-white pt-6 text-justify px-6'>
                <h2 className='text-4xl'>When the Stakes are High,</h2>
                <h2 className='text-4xl'>We can help you</h2>
                <div className='flex mr-2 mt-6 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>Patent Review an Analysis</h3>
                </div>
                <div className='flex mr-2 mt-2 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>Legal Case Reviews</h3>
                </div>
                <div className='flex mr-2 mt-2 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>USPTO Hearings</h3>
                </div>
                <div className='flex mr-2 mt-2 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>Software Valuations</h3>
                </div>
                <div className='flex mr-2 mt-2 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>Survey and Polls</h3>
                </div>
                <div className='flex mr-2 mt-2 items-center'>
                    <TiTick className='h-8 w-8' />
                    <h3 className='ml-1 text-lg'>Custom Research Reports</h3>
                </div>
            </div>
        </div>
    )
}

export default Slider