import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore voluptates quae excepturi nulla qui veritatis eius ratione consequatur consequuntur!</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2'>
                <div className='border py-8 rounded-xl shadow-xl text-center'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl text-center'>
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded- shadow-xl text-center'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Transaction</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;