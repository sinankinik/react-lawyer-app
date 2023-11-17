import React from 'react'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className='h-32 text-blue items-center pt-4'>
            <div className='w-5/6 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-3xl'>LAWYER WEBSITE</div>
                    <div className='flex ml-96'><CiFacebook className='h-6 w-6' /> <CiInstagram className='h-6 w-6' /> <CiLinkedin className='h-6 w-6' /><CiTwitter className='h-6 w-6' /> </div>
                    <div>(888) 123-4567</div>
                </div>
                <div className='flex justify-between my-4 '>
                    <div>
                        <ul className='flex gap-8 text-lg font-bold items-center'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Cases</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <input type="text" className='bg-gray-300 rounded-l-lg h-8' />
                        <CiSearch className="bg-dark-blue p-1 h-8 w-8 rounded-r-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header