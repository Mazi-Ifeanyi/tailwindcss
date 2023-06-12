import account from '../assets/account.png';

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={account} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>I guaranteed user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className="bg-[#00df91] w-[200px] rounded-md py-2 mx-auto mt-7 font-medium text-black text-[20px]">Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={account} alt='' className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>I guaranteed user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className="text-[#00df91] w-[200px] rounded-md py-2 mx-auto mt-7 font-medium bg-black text-[20px]">Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={account} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>I guaranteed user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className="bg-[#00df91] w-[200px] rounded-md py-2 mx-auto mt-7 font-medium text-black text-[20px]">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card