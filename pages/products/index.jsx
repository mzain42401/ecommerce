import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/productCard/ProductCard'
import {BiSolidUpArrow,BiSolidDownArrow} from 'react-icons/bi'
const index = () => {
  const [drop,setDrop]=useState(false)

  const dropCategory=()=>{
    setDrop(!drop)
  }
  return (
    <div>
      <Header/>
      <div onClick={dropCategory} className=' cursor-pointer absolute right-0 bg-[#013289] px-3 py-2 rounded-lg w-[200px] flex justify-between items-center  my-4 mr-4 hover:bg-[#0f4095]'>
        <button className='  text-white  '>Search By Category </button>
        <div className='text-white'>{
          drop?<BiSolidUpArrow/>:<BiSolidDownArrow/>
        } </div>
        {
          drop?<ul className='bg-white absolute left-0 top-10 mt-1 z-[99999] w-full rounded-lg py-2 px-4'>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
          <li className='py-1 m-1 hover:bg-gray-100'>Category</li>
        </ul>:null
        }
        
      </div>

      <div className='flex justify-center items-center mt-16 flex-wrap'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default index
