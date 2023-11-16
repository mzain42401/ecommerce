import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/productCard/ProductCard'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import Navbar from '../components/Navbar/Navbar'
import { useData } from '@/firebase/dataContext'
import Loader from '../components/loader/Loader'
import Saticfy from '../components/satisfy/Saticfy'
import Slider from "../components/subCategoriesSlider/Slider"
const index = () => {
  const [getter, setter] = useState([])
  const { getdata } = useData()

  useEffect(() => {
    async function fetchData() {

      const data = await getdata()
      setter(data)
    }
    fetchData()
  }, [])
  const [drop, setDrop] = useState(false)
  const [searchItem, setsearchItem] = useState('')


  // const dropCategory = () => {
  //   setDrop(!drop)
  // }
  return (
    <>
      {
        getter.length === 0 ? <Loader /> :
          <div>

            <Navbar />
            <div className='h-16 bg-white  flex items-center justify-between       my-4 m-auto px-4 '>
             
                <div className='w-[70%]   m-auto'>
                  <input className='w-full text-xl py-2 px-2 rounded-lg bg-gray-100' type="search"  placeholder='search products' onChange={(e) => setsearchItem(e.target.value)} />
                </div>
               
           
              {/* <div onClick={dropCategory} className='categorysearchBtn  relative mx-2 w-[200px]  rounded-lg  flex  bg-[#1f91d8] hover:bg-[#0f4095] items-center'>
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
              {getter.filter((elem) => {
                if (searchItem === '') {
                  return elem
                }
                else if (elem.productName.toLowerCase().includes(searchItem.toLowerCase())) {
                  return elem
                }

              }).map((elem) => {
                  return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
                })}

            </div>
            <Saticfy />
            <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto  mt-3 text-2xl shadow-lg'>  CATEGORIES</h1>
            <div className='bg-blue-900 w-[90%] m-auto rounded-xl px-5 '>
              <Slider />
            </div>
            <Footer />
          </div>
      }

    </>
  )
}

export default index
