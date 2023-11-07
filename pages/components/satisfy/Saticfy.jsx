import React from 'react'
import {FaShippingFast,FaAward,FaHandshake} from "react-icons/fa"
function Saticfy() {
  return (
    <>
      <section className='flex m-auto justify-evenly flex-wrap items-center p-4 rounded-lg bg-gray-200 py-12 w-[95%]'>

<div className=' flex flex-col justify-center  m-5 w-80 items-center'>
    <div className='rounded-full  text-5xl bg-gray-400 h-28 mb-5 w-28 flex  justify-center  items-center' ><FaAward/></div>
    <h2 className='text-2xl italic '>Warranty</h2>
</div>


<div className='  flex flex-col justify-center  m-5 w-80 items-center'>
    <div className='rounded-full text-5xl bg-gray-400 h-28 mb-5 w-28 flex  justify-center  items-center'><FaShippingFast/></div>
<h2 className='text-2xl italic '>Free Shipping</h2>
</div>

<div className=' flex flex-col justify-center   m-5 w-80 items-center'>
    <div className='rounded-full  text-5xl bg-gray-400 h-28 mb-5 w-28 flex  justify-center  items-center'><FaHandshake/></div>
<h2 className='text-2xl italic '>15 Days refund</h2>
</div>


      </section>
    </>
  )
}

export default Saticfy
