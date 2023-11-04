import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar/Navbar'
import {HiArrowLeft,HiArrowRight,HiOutlineTrash} from 'react-icons/hi'

const index = () => {
  
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
   
   <div className='m-auto cartdiv bg-red-300 w-[50%] flex justify-center items-center flex-col mt-6'>
    
<div className=' w-full flex justify-center'>
  <img className='w-56  h-56 mx-10' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
  <div className='flex flex-col justify-between py-6'>
    <div className='text-2xl capitalize'>
      name hkjhkjhk kjhkjhjk jhkjhjkk njkj jkhjkjk njk
    </div>
    <div className='flex  items-center'>
      <span><button className='mx-3 flex justify-center text-xl  items-center rounded-full bg-gray-400 p-2 h-10 w-10 '><HiArrowLeft/></button></span>
      <span className=' text-xl'>1</span>
      <span><button className=' mx-3 flex justify-center items-center text-xl rounded-full bg-gray-400 p-2 h-10 w-10'><HiArrowRight/></button></span>

    </div>
    <div>
      <button className='flex justify-center items-center bg-blue-900 px-10 py-2 text-xl  rounded-xl'>Remove <span className='mx-4'> <HiOutlineTrash/></span></button>
    </div>
  </div>


</div>

   </div>
  

      
    </>
  )
}

export default index





