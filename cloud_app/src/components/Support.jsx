import { BsArrowRight } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { HiChip } from 'react-icons/hi';
import { MdSupport } from 'react-icons/md';
import support from '../assets/support.jpeg';


const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>{/*900 is the color 90 is the opacity level*/}
            <img src={support} alt="/" className='w-full h-full object-cover mix-blend-overlay' />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
           <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold text-white py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda eum nam ab cum magni quod atque, temporibus iusto voluptatum!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <BiPhone className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>Sales</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illum doloribus perspiciatis deserunt excepturi adipisci placeat perferendis culpa iusto dolores.</p>
                </div>
                <footer className='bg-slate-100 pl-8 py-4 cursor-pointer hover:gap-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='ml-2' /></p>
                </footer>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <MdSupport className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illum doloribus perspiciatis deserunt excepturi adipisci placeat perferendis culpa iusto dolores.</p>
                </div>
                <footer className='bg-slate-100 pl-8  py-4 cursor-pointer hover:gap-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='ml-2' /></p>
                </footer>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <HiChip className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>Media  Inquires</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illum doloribus perspiciatis deserunt excepturi adipisci placeat perferendis culpa iusto dolores.</p>
                </div>
                <footer className='bg-slate-100 pl-8  py-4 cursor-pointer hover:gap-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRight className='ml-2' /></p>
                </footer>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Support