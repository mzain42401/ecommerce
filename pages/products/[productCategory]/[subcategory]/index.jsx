import { useData } from '@/firebase/dataContext'
import Navbar from '@/pages/components/Navbar/Navbar'
import Loader from '@/pages/components/loader/Loader'
import ProductCard from '@/pages/components/productCard/ProductCard'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const index = () => {
  const router=useRouter()
  const {subcategory}=router.query
const [isload,setisload]=useState(true)
  
  const [getter,setter]=useState([])
  const {getdata}=useData()

  useEffect(()=>{
    setTimeout(()=>{
      setisload(false)
          },3000)
    async function fetchData() {
      
      const data=await getdata()
setter(data)
    }
    fetchData()
  },[])

  const qureydata=getter.filter((elem)=>{
    return elem.subCategory ===subcategory
  })
  return (
    <>
    {
      isload?<Loader/>:
      <div>
      <Navbar/>
      {
        qureydata.length===0?<div className='m-auto mt-[100px] text-center  text-gray-400 capitalize text-2xl'>no data found</div>:<>
        <div className='flex justify-center items-center  mt-16 flex-wrap'>

{qureydata.map((elem)=>{
  return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id}  />
})}
</div>
        </>
      }
      
    </div>
    }
    </>
  )
}

export default index
