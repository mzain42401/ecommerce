import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/logoimg.png'
import Image from 'next/image'
import { useData } from '@/firebase/dataContext'
import Admin from '../components/adminDashboard/Admin'
import Edit from '../components/EditItem/Edit'

const index = () => {
  const { getdata } = useData()
  const [getter, setter] = useState([])
  const [edit,setEdit]=useState(false)
  const [editData,setEditData]=useState('')


  const editProduct=(elem)=>{
    if (elem) {
      setEdit(true)
      setEditData(elem)
    }
  }


  useEffect(() => {
    async function fetchData() {

      const data = await getdata()
      setter(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <nav className='flex justify-between items-center shadow-lg shadow-gray-300 px-4 '>
        <div><Image src={logo} className='w-24 h-24' /></div>
        <div >
          <Link className=' rounded bg-[#1f91d8] hover:bg-blue-800 text-white px-3 py-2' href='/admin/addProduct'> Add  Product</Link>
          <Link className='mx-4 rounded bg-[#1f91d8] hover:bg-blue-800 text-white px-3 py-2' href='/'>Home</Link> </div>


      </nav>


{
  edit? <Edit editData={editData} />:

  <>
  <h1 className='mt-4 ml-5'>Total Products : {getter.length}</h1>

{
  getter.map((elem) => {
    return (
      <Admin editProduct={editProduct} coverImage={elem.coverImage} elem={elem} subCategory={elem.subCategory} price={elem.price} mainCategory={elem.mainCategory} id={elem.id} productName={elem.productName} Discount={elem.Discount} discountPrice={elem.discountPrice}  />
    )
  })
}
  </>

}

      

    </>
  )
}

export default index










