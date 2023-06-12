
import laptop from '../assets/laptop.png';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
            {/* <div className='flex justify-center items-center'> */}
                <img src={laptop} alt='' className='w-[400px] h-[400px] mx-auto my-4' />
            {/* </div> */}
           <div className='flex flex-col justify-center'>
               <p className='text-[#00df91] font-bold'>DATA ANALYTICS DASHBOARD</p>
               <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque enim dignissimos distinctio quasi nobis, amet culpa minus quae natus, dicta praesentium explicabo rerum iusto non alias. Voluptas voluptatem vero repellendus.</p>
               <button className='bg-black text-[#00df91] w-[200px] rounded-md mx-auto mt-7 font-medium text-[20px] md:mx-0 py-3'>Get Started</button>
           </div>
        </div>
    </div>
  )
}

export default Analytics