import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedIn, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import logo from '../assets/computer.png';

const NavBar = () => {
    const [ showNav, setShowNav ] = useState(false);

    const handleClick = () =>setShowNav(!showNav);
    const handleClose = ()=>setShowNav(false);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-2xl'>
        <div>
            <img src={logo} alt='logo'className='w-[50px]' />
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={300}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={300}>About</Link></li>
                <li><Link to='skills' smooth={true} offset={-100} duration={300}>Skills</Link></li>
                <li><Link to='work' smooth={true} offset={-100} duration={300}>Work</Link></li>
                <li><Link to='contact' smooth={true} offset={-100} duration={300}>Contact</Link></li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='flex z-10 md:hidden'>
            {!showNav ?<FaBars className='cursor-pointer' /> : <FaTimes className='cursor-pointer' />}
        </div>

        {/* Mobile Menu */}
        <ul className={showNav? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
            <li className='py-6 text-4xl'><Link onClick={handleClose} to='home' smooth={true} duration={300}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClose} to='about' smooth={true} duration={300}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClose} to='skills' smooth={true} offset={-100} duration={300}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClose} to='work' smooth={true} offset={-100} duration={300}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClose} to='contact' smooth={true} offset={-100} duration={300}>Contact</Link></li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full' href=''>LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full' href=''>Github <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full' href=''>Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full' href=''>Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar