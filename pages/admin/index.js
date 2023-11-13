import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { useData } from '@/firebase/dataContext'
import Admin from '../components/adminDashboard/Admin'

const index = () => {
  const { getdata } = useData()
  const [getter, setter] = useState([])

  useEffect(() => {
    async function fetchData() {

      const data = await getdata()
      setter(data)
    }
    fetchData()
  }, [])
  console.log(getter);
  return (
    <>
      <nav className='flex justify-between items-center shadow-lg shadow-gray-300 px-4 '>
        <div><Image src={logo} className='w-24 h-24' /></div>
        <div >
          <Link className=' rounded bg-blue-900 hover:bg-blue-800 text-white px-3 py-2' href='/admin/addProduct'> Add  Product</Link>
          <Link className='mx-4 rounded bg-blue-900 hover:bg-blue-800 text-white px-3 py-2' href='/'>Home</Link> </div>


      </nav>

      
        
<h1 className='mt-4 ml-5'>Total Products : {getter.length}</h1>

{
  getter.map((elem)=>{
    return (
<Admin coverImage={elem.coverImage} subCategory={elem.subCategory} price={elem.price} mainCategory={elem.mainCategory} id={elem.id} productName={elem.productName} Discount={elem.Discount} discountPrice={elem.discountPrice}   />
    )
  })
}
        
    </>
  )
}

export default index










