import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Hero = () =>{
    const ref = useRef();

    useEffect(()=>{
        const typed = new Typed(ref.current, {
            strings: ['BTB','BTC', 'SASS'], // Strings to display
            // Speed settings, try diffrent values until you get good results
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 150,
            loop: true,
            showCursor: false,
            // cursorChar: '|',
            smartBackspace: true
          });

          // Destroying
          return () => {
            typed.destroy();
          };
    },[]);


    return(
        <div className="text-white">
            <div className='max-w-[800px] mt-[-98px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                <p className="text-[#00df91] font-bold p-2 text-0.2xl m-0 text-center">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-6">Grow with data</h1>
                <div className="flex justify-center text-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, Flexible financing for</p>
                    <p ref={ref} className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 pl-2 py-4"></p>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 text-center">Monitor your data analytics to increase revenue for BTB, BTC & SASS platform.</p>
                <button className="bg-[#00df91] w-[200px] rounded-md py-4 mx-auto mt-7 font-medium text-black text-[20px]">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;