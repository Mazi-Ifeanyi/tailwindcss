import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'


const NavBar = () => {
    const [ showNav, setShowNav ] = useState(false);

    const handleClick = () =>setShowNav(!showNav);
    const handleClose = ()=>setShowNav(false);

  return (
    <div className='w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-[100]'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl '>BRAND.</h1>
                <ul className="hidden md:flex">
                    <li className='cursor-pointer'><Link onClick={handleClose} to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li className='cursor-pointer'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='cursor-pointer'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li className='cursor-pointer'><Link onClick={handleClose} to="platforms" smooth={true} offset={-150} duration={500}>Platforms</Link></li>
                    <li className='cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Out</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
            {!showNav? <AiOutlineMenu className='cursor-pointer' /> : <AiOutlineClose className='cursor-pointer' />}
            </div>
        </div>

        <ul className={!showNav? 'hidden': 'absolute bg-zinc-200 w-full px-8'}>
            <li className='cursor-pointer'><Link onClick={handleClose} to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='cursor-pointer'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='cursor-pointer'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='cursor-pointer'><Link onClick={handleClose} to="platforms" smooth={true} offset={-150} duration={500}>Platforms</Link></li>
            <li className='cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Out</button>
            </div>
        </ul>
    </div>
  )
}

export default NavBar