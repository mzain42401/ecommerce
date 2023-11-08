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

      
        {/* 

      Discount
: 
0
Pic1
: 
"images/1699341139818-WhatsApp Image 2023-10-27 at 7.41.46 PM.jpeg"
coverImage
: 
"images/1699341130763-WhatsApp Image 2023-10-27 at 7.41.46 PM (1).jpeg"
id
: 
1699341157046
mainCategory
: 
"Home & Living"
pic2
: 
"images/1699341142712-WhatsApp Image 2023-10-27 at 7.41.45 PM.jpeg"
pic3
: 
"images/1699341151012-WhatsApp Image 2023-10-27 at 7.41.44 PM.jpeg"
price
: 
900
productDiscription
: 
"Feature 1: Waterproof and mildew proof seam stickers\nFeature 2: PVC tape for bathroom and kitchen\nFeature 3: Easy to clean, no dirt\nFeature 4: Good self-adhesive effect\nFeature 5: 90° bending at the center line\n\nPattern: 3D\nStyle: Modern\n\nSize: 3.2mx 3.8cm"
productName
: 
"Sealing Tape Printed"
subCategory */}
<h1 className='mt-4 ml-5'>Total Products : {getter.length}</h1>

{
  getter.map((elem)=>{
    return (
<Admin coverImage={elem.coverImage} subCategory={elem.subCategory} price={elem.price} mainCategory={elem.mainCategory} id={elem.id} productName={elem.productName} Discount={elem.Discount}   />
    )
  })
}
        
    </>
  )
}

export default index










