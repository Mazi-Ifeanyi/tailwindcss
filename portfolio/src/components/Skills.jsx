import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import htmlIcon from '../assets/html-5.png';
import cssIcon from '../assets/css-3.png';
import jsIcon from '../assets/js.png';
import mongoIcon from '../assets/mongodb.png';
import nodejsIcon from '../assets/nodejs.png';
import reactIcon from '../assets/react.png';
import tailwindIcon from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-fit pb-16'>
        <div className='max-w-[1000px] mx-auto p-4 flex-flex-col justify-center w-full h-full'>
          <div className=''>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
            <p className='py-4'>These are the technologies i've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={htmlIcon} alt="" className='w-20 mx-auto' /> */}
              <AiFillHtml5 size={80} className='m-auto text-[#e34c26]' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={cssIcon} alt="" className='w-20 mx-auto' /> */}
              <IoLogoCss3 size={80} className='m-auto text-[#2965f1]' />
              <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={jsIcon} alt="" className='w-20 mx-auto' /> */}
              <IoLogoJavascript size={80} className='m-auto bg-[#f0db4f] text-[#0a192f]' />
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={reactIcon} alt="" className='w-20 mx-auto' /> */}
              <FaReact size={80} className='m-auto text-[#61dbfb]' />
              <p className='my-4'>REACTJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={htmlIcon} alt="" className='w-20 mx-auto' /> */}
              <AiFillGithub size={80} className='m-auto' />
              <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={nodejsIcon} alt="" className='w-20 mx-auto' /> */}
              <FaNodeJs size={80} className='m-auto text-[#68a063]' />
              <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={mongoIcon} alt="" className='w-20 mx-auto' /> */}
              <SiMongodb size={80} className='m-auto text-[#589636]' />
              <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
              {/* <img src={tailwindIcon} alt="" className='w-20 mx-auto' /> */}
              <SiTailwindcss size={80} className='m-auto text-[#90CDF4]' />
              <p className='my-4'>TAILWINDCSS</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills