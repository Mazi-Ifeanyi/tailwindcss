import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const NavBar = () =>{
    const [ nav, setNav ] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }


  return(
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df91]">REACT</h1>
        <ul className="hidden md:flex">
            <li className="p-4 cursor-pointer hover:underline origin-center duration-500">Home</li>
            <li className="p-4 cursor-pointer">Company</li>
            <li className="p-4 cursor-pointer">Resources</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
           {nav? <AiOutlineClose size={20} style={{ cursor: 'pointer' }} /> : <AiOutlineMenu size={20} style={{ cursor: 'pointer' }} />}
        </div>
        <div className={nav? 'fixed left-0 top-0 w-[40%] bg-[#000300] border-r border-r-gray-900 h-full pr-5 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <ul className='pt-24 uppercase pl-2'>
            <li className="p-4 border-b border-b-gray-500 cursor-pointer">Home</li>
            <li className="p-4 border-b border-b-gray-500 cursor-pointer">Company</li>
            <li className="p-4 border-b border-b-gray-500 cursor-pointer">Resources</li>
            <li className="p-4 border-b border-b-gray-500 cursor-pointer">About</li>
            <li className="p-4 border-b border-b-gray-500 cursor-pointer">Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar;