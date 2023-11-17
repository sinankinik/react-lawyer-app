import React from 'react'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiSearch } from "react-icons/ci";

const Social = () => {
    return (
        <div className='flex'><CiFacebook className='h-6 w-6' /> <CiInstagram className='h-6 w-6' /> <CiLinkedin className='h-6 w-6' /><CiTwitter className='h-6 w-6' /> </div>
    )
}

export default Social