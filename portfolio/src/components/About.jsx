import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
            <section className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </section>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, client, nice to meet you. Please take a look around</p>
            </div>
            <div>
                <p>I'm a skilled Fullstack developer with <b>5 years of experience</b> in front and back end web development. Proficient in JavaScript, React, and HTML/CSS, i have successfully delivered simple and complex projects, including a high-traffic e-commerce website. My passion for clean code, problem-solving, and continuous learning makes me a valuable asset to any development team.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About;