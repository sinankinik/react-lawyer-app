import React from 'react'
import { FaBuildingColumns, FaChartBar } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

const PracticeArea = () => {
    return (
        <div className='grid-cols-2 grid md:grid-cols-2 bg-secondwhite text-blue pb-5'>
            <div className='col-span-2 grid justify-items-center content-center'>
                <div className='py-10'>
                    <h3 className='text-5xl text-center mb-4'>Practice Area</h3>
                    <div>
                        <p className='ml-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, libero quod porro ex perferendis iusto.</p>
                    </div>
                </div>
                <div className='grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 mx-28 gap-x-5'>
                    <div className='border col-span-1 px-1 pt-10 pb-4 grid gap-y-4 justify-items-center content-center'>
                        <div className='bg-blue rounded-full h-36 w-36 grid justify-items-center content-center text-white'><FaBuildingColumns className='h-16 w-16' /></div>
                        <div className='w-full grid justify-items-center content-center'>
                            <h4 className='text-lg font-bold mb-3'>Finance Law</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
                        </div>
                    </div>
                    <div className='border col-span-1 px-1 pt-10 pb-4 grid gap-y-4 justify-items-center content-center'>
                        <div className='bg-blue rounded-full h-36 w-36 grid justify-items-center content-center text-white'><GoLaw className='h-16 w-16' /></div>
                        <div className='w-full grid justify-items-center content-center'>
                            <h4 className='text-lg font-bold mb-3'>Libigation</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
                        </div>
                    </div>
                    <div className='border col-span-1 px-1 pt-10 pb-4 grid gap-y-4 justify-items-center content-center'>
                        <div className='bg-blue rounded-full h-36 w-36 grid justify-items-center content-center text-white'><FaAmbulance className='h-16 w-16' /></div>
                        <div className='w-full grid justify-items-center content-center'>
                            <h4 className='text-lg font-bold mb-3'>Car Accidents</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
                        </div>
                    </div>
                    <div className='border col-span-1 px-1 pt-10 pb-4 grid gap-y-4 justify-items-center content-center'>
                        <div className='bg-blue rounded-full h-36 w-36 grid justify-items-center content-center text-white'><FaChartBar className='h-16 w-16' /></div>
                        <div className='w-full grid justify-items-center content-center'>
                            <h4 className='text-lg font-bold mb-3'>Tax Disputes</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeArea