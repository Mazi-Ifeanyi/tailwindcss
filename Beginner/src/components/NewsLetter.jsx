import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] grid mx-auto lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tips to optimize your flow</h1>
            <p>Signup to our news letter and stay up to date</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input type='email' placeholder='Enter Email' className='py-2 mr-4 h-[50px] rounded-md w-full text-black' />
              <button className="bg-[#00df91] w-[150px] rounded-md py-4 font-medium text-black text-[15px]">Notify Me</button>
          </div>
          <p>We care bout the protection of your data. Read our <br/><span className='text-[#00df91]'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter