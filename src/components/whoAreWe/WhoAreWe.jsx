import React from 'react'

const WhoAreWe = () => {
    return (
        <div className='grid-cols-1 ml-3 grid md:grid-cols-2 text-blue'>
            <div className='col-span-1 md:col-span-2 h-[200px] mt-10 grid justify-items-center content-center'>
                <div>
                    <h3 className='text-5xl mb-5'>Who Are We</h3>
                </div>
                <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ipsum. Libero sit dignissimos recusandae vel.</p>
                </div>
            </div>
            <div className='col-span-1 h-[300px] grid place-content-center'>
                <img src="/assets/justiceLady.jpg" alt="" />
            </div>
            <div className='col-span-1 h-[300px] w-[500px] grid place-content-center p-10'>
                <h3 className='text-xl'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-justify mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem corporis illo minus inventore perferendis? Dolore, nemo perspiciatis. Asperiores, rerum aut! Suscipit assumenda perferendis, numquam eum non tenetur illo fugiat.</p>
            </div>
        </div>
    )
}

export default WhoAreWe