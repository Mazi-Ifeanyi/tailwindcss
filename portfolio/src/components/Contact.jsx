import { BsArrowRight } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { HiChip } from 'react-icons/hi';
import { MdSupport } from 'react-icons/md';
import support from '../assets/support.jpeg';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d0d3efd3-d522-4837-a560-03d97f8a7cd7" className='flex flex-col w-full mx-auto max-w-[1000px]'>
          <div className='pb-8 max-w-[600px]'>
             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
             <p className='text-gray-300 py-4'>Submit the form below or send me an email - ifeanyiilonzejoseph@gmail.com</p>
          </div>
          <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" id="" placeholder='message' rows="10"></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact