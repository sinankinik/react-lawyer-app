import React from 'react'
import Social from '../social/Social';
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className='h-32 bg-bgwhite z-50 text-blue items-center pt-4 sticky top-0'>
            <div className='px-3 md:px-0 md:w-5/6 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-xl md:text-3xl'>LAWYER WEBSITE</div>
                    <div className='lg:ml-96'>
                        <Social />
                    </div>
                    <div>(888) 123-4567</div>
                </div>
                <div className=' md:flex justify-between my-4 '>
                    <div>
                        <ul className='flex gap-8 text-lg font-bold items-center'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Cases</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center md:ml-2'>
                        <input type="text" className='bg-gray-300 rounded-l-lg h-8' />
                        <CiSearch className="bg-dark-blue p-1 h-8 w-8 rounded-r-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header