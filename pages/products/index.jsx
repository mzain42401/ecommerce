import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/productCard/ProductCard'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import Navbar from '../components/Navbar/Navbar'
import { useData } from '@/firebase/dataContext'
import Loader from '../components/loader/Loader'
import Saticfy from '../components/satisfy/Saticfy'
const index = () => {
  const [getter,setter]=useState([])
  const {getdata}=useData()

  useEffect(()=>{
    async function fetchData() {
      
      const data=await getdata()
setter(data)
    }
    fetchData()
  },[])
  const [drop, setDrop] = useState(false)

  const dropCategory = () => {
    setDrop(!drop)
  }
  return (
    <>
    {
      getter.length===0?<Loader/>:
      <div>
      {/* <Header /> */}
      <Navbar />
      <div className='h-16 bg-white  flex items-center justify-between       my-4 mr-4 '>
        <div className='w-[90%] seacrhdiv mx-2'>
          <input className='w-[100%] text-xl py-2 px-2 rounded-lg bg-gray-100' type="search" placeholder='search products' />
        </div>
        <button className=' searchBtn w-[130px] mx-2 px-3 py-2 text-white rounded-lg  hover:bg-[#0f4095] cursor-pointer bg-[#013289]'>Search</button>
        {/* <div onClick={dropCategory} className='categorysearchBtn  relative mx-2 w-[200px]  rounded-lg  flex  bg-[#013289] hover:bg-[#0f4095] items-center'>
          <button className=' px-3 py-2 cursor-pointer   text-white  '>Search By Category </button>
          <div className='text-white'>{
            drop ? <BiSolidUpArrow /> : <BiSolidDownArrow />
          } </div>

          {
            drop ? <ul className=' bg-white h-96 overflow-y-scroll absolute left-0 top-10 mt-1 z-[99999] w-full rounded-lg py-2 px-4 categoryList'>
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
            </ul> : null
          }
        </div> */}
      </div>

      <div className='flex justify-center items-center  mt-16 flex-wrap'>
      {getter.map((elem)=>{
        return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id}  />
      })}
        
      </div>
      <Saticfy/>

      <Footer />
    </div>
    }
    
    </>
  )
}

export default index
