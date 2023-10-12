import React from 'react'
import Imag from '../../../public/pic.png'
import {BsFillCartPlusFill} from 'react-icons/bs'
const ProductCard = () => {
  return (
    <>
      <div className='relative bg-red-200 w-60 h-[350px] py-2  px-2  rounded-lg'>
        <div className='overflow-hidden ' >
          <img style={{"transition-duration": "250ms"}} className='  hover:scale-125 hover:rounded-lg h-40 w-full cursor-pointer rounded-lg' src='https://www.cloudways.com/blog/wp-content/uploads/What-is-Ecommerce.jpg' alt="" />
        </div>
        <h1 style={{"overflow-wrap": "break-word"}} className=' mt-2 text-center text-xl w-full bg-neutral-950 text-white '>titlehhhhhhhhhjjjjjjjjjjjjjjjjjjlljjjjjjjjj</h1>
        <div className='font-bold text-center text-lg mt-2'>$99</div>

        <div className='absolute bottom-3  w-full px-6 flex justify-between'>
          <button className='bg-red-900 px-4 py-1 text-lg'>details</button>
          <button className=' bg-red-900 px-2 py-2 rounded-3xl text-xl'><BsFillCartPlusFill/></button>

        </div>
      </div>
    </>
  )
}

export default ProductCard
