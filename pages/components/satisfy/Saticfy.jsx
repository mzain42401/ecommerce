import React from 'react'
import {FaShippingFast,FaAward,FaHandshake} from "react-icons/fa"
import img1 from '../../../public/satify (1).png'
import img2 from '../../../public/satify (2).png'
import img3 from '../../../public/satify (3).png'
import Image from 'next/image'

function Saticfy() {
  return (
    <>
      <section className='flex mt-6 m-auto justify-evenly flex-wrap items-center p-4 rounded-lg bg-gray-200 py-12 w-[95%]'>

<div className=' flex flex-col justify-center  m-5 w-80 items-center'>
    <div className='rounded-full  text-5xl  h-28 mb-5 w-28 flex  justify-center  items-center' ><Image src={img2}/></div>
    <h2 className='text-2xl italic '>Safe Delivery</h2>
</div>


<div className='  flex flex-col justify-center  m-5 w-80 items-center'>
    <div className='rounded-full text-5xl  h-28 mb-5 w-28 flex  justify-center  items-center'><Image src={img3}/></div>
<h2 className='text-2xl italic '>Genuine Products</h2>
</div>

<div className=' flex flex-col justify-center   m-5 w-80 items-center'>
    <div className='rounded-full  text-5xl  h-28 mb-5 w-28 flex  justify-center  items-center'><Image src={img1}/></div>
<h2 className='text-2xl italic '> Refund Policy</h2>
</div>


      </section>
    </>
  )
}

export default Saticfy
