import React from 'react'
import computer from '../assets/computer.png';
import { BsFillCloudUploadFill, BsFillDatabaseFill } from 'react-icons/bs';
import { HiServer, HiPaperAirplane } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud management</h1>
                <p className='text-2xl'>This is our Tech brand</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div className='flex justify-center items-center'>
               <img src={computer} alt="/" className='w-[60%]' />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-[50%] transform md:-translate-x-[50%] bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-w
                 px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><BsFillCloudUploadFill className='h-6 text-indigo-600' /> Icon. App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><BsFillDatabaseFill className='h-6 text-indigo-600' /> Icon. Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><HiServer className='h-6 text-indigo-600' /> Icon. Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><HiPaperAirplane className='h-6 text-indigo-600' /> Icon. API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero