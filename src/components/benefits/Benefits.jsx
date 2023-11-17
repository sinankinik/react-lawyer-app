import React from 'react'
import { FaBuildingColumns } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

const Benefits = () => {
  return (
    <div className="bg-[url('/assets/2.jpg')] text-blue bg-fixed bg-cover bg-center">
      <div className='grid grid-cols-1'>
        <h2 className='text-center text-5xl my-10'>WHY WE ARE THE BEST CHOICE?</h2>
        <p className='text-center mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus atque harum cum rem ullam.</p>
      </div>
      <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 content-center mx-40 '>
        <div className='grid col-span-1 justify-items-center rounded-lg bg-secondwhite opacity-80 gap-y-5 p-10 mb-10'><FaBuildingColumns className='h-16 w-16' />
          <h3>Benefit One</h3>
          <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero!</p>
        </div>
        <div className='grid col-span-1 justify-items-center rounded-lg bg-secondwhite opacity-80 gap-y-5 p-10 mb-10'><GoLaw className='h-16 w-16' />
          <h3>Benefit Two</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero!</p>
        </div>
        <div className='grid col-span-1 justify-items-center rounded-lg bg-secondwhite opacity-80 gap-y-5 p-10 mb-10'><FaAmbulance className='h-16 w-16' />
          <h3>Benefit Three</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero!</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits