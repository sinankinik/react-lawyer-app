import React from 'react'
import Social from '../social/Social'

const Footer = () => {
  return (
    <div className='grid-cols-1 grid md:grid-cols-3 w-full bg-dark-blue px-6 text-blue'>
      <div className='grid col-span-1 justify-items-center content-center'>
        <img src="/assets/map.png" alt="Map" className='h-32 w-60' />
      </div>
      <div className='grid col-span-1 justify-items-center py-3 md:justify-items-start content-center text-lg'>
        <h2 className='text-xl mb-8 font-extrabold'>CATEGORIES</h2>
        <ul className='grid justify-items-center md:justify-items-start gap-y-2'>
          <li>FAQ</li>
          <li>Team</li>
          <li>Testimonial</li>
          <li>Uncategorized</li>
        </ul>
      </div>
      <div className='grid col-span-1 justify-items-center py-3 md:justify-items-start gap-y-4'>
        <h2 className='text-xl font-extrabold'>VISIT US</h2>
        <button className='bg-orange px-2 rounded-lg'>GET DIRECTIONS</button>
        <h2 className='text-xl font-extrabold'>FOLLOW US</h2>
        <div><Social /></div>

      </div>
    </div>
  )
}

export default Footer