import React from 'react'
import computer from '../assets/computer.png';
import { BsFillCloudUploadFill, BsFillDatabaseFill } from 'react-icons/bs';
import { HiServer, HiPaperAirplane, HiArrowCircleRight, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* contaimer */}
        <div className='max-w-[1240px] mx-auto px-5 md:px-20 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ilonze Ifeanyichukwu</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Fullstack Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]]'>I'm a skilled Fullstack developer with <b>5 years of experience</b> in front and back end web development. Proficient in JavaScript, React, and HTML/CSS, i have successfully delivered simple and complex projects, including a high-traffic e-commerce website. My passion for clean code, problem-solving, and continuous learning makes me a valuable asset to any development team.</p>
          <div>
            <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>View Work
            <span className='group-hover:rotate-45 duration-300'>
            <HiArrowRight className='ml-4' />
            </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home;