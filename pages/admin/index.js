import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/logoimg.png'
import Image from 'next/image'
import { useData } from '@/firebase/dataContext'
import Admin from '../components/adminDashboard/Admin'
import Edit from '../components/EditItem/Edit'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

const index = () => {
  const { getdata, getShipingdata } = useData()
  const [getter, setter] = useState([])
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState('')

  const [shippingfee, setshippingfee] = useState('')
  const [freeshipping, setfreeshipping] = useState('')
  const [myshippingData, setmyshippingData] = useState()
  const [showShipping, setshowShipping] = useState(false)

  const editProduct = (elem) => {
    if (elem) {
      setEditData(elem)
      setEdit(true)
    }
  }

  const updateShipping = async (e) => {
    e.preventDefault()
    const updateRef = doc(db, "shipping", "free-fee-shipping");

    await updateDoc(updateRef, {
      feeamount: shippingfee,
      freeamount: freeshipping
    });
    window.location.reload()
  }


  useEffect(() => {
    async function fetchData() {
      getShipingdata().then((shipdata) => setmyshippingData(shipdata)).catch((err) => console.log(err))

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
        edit ? <Edit editData={editData} /> :

          <>

            {
              showShipping ? <>
                <form onSubmit={(e) => updateShipping(e)} className='px-3'>
                  <div className=' flex flex-col justify-center flex-wrap bg-[#1f91d8] w-96  m-auto py-5 px-5 rounded mt-4 '>
                    <div className='flex flex-wrap'>
                      <div className='mt-3 mx-3 flex flex-col w-full md:w-max'>
                        <label htmlFor='shippingfee'>Shipping Fee</label>
                        <input value={shippingfee} onChange={(e) => setshippingfee(Number(e.target.value))} required id='shippingfee' className='rounded px-3 mt-2' type="number" placeholder='shipping fee' />
                      </div>
                      <div className='mt-3 mx-3 flex flex-col w-full md:w-max'>
                        <label htmlFor='freeshipping'>Free Shipping</label>

                        <input value={freeshipping} onChange={(e) => setfreeshipping(Number(e.target.value))} required id='freeshipping' className='rounded px-3 mt-2' type="number" placeholder='free shipping' />
                      </div>
                    </div>
                    <div className='mt-4 text-right'><button onClick={() => setshowShipping(false)} className=' bg-white py-1 px-2 rounded'>Cancle</button> <button type='submit' className=' bg-white py-1 px-2 rounded'>Update</button></div>
                  </div>
                </form>
              </> :
                <>
                  <div className='flex justify-center md:justify-end'>
                    <div className=' bg-[#1f91d8] w-72 text-white py-3 mr-2 rounded mt-3 flex flex-col px-2'>
                      <div>Shipping fee = {myshippingData ? myshippingData.feeamount : "loading..."}</div>
                      <div>Free shipping above to = {myshippingData ? myshippingData.freeamount : "loading..."}</div>
                      <div className='text-right mt-2 '>
                        <button className='bg-white text-black px-3 rounded ' onClick={() => setshowShipping(true)}>Edit</button>
                      </div>

                    </div>
                  </div>
                </>
            }
            <h1 className='bg-[#1f91d8] px-4 py-1 mt-4 m-auto w-max text-white rounded'>Total Products : {getter.length}</h1>
            {
              getter.map((elem) => {
                return (
                  <Admin editProduct={editProduct} coverImage={elem.coverImage} elem={elem} subCategory={elem.subCategory} price={elem.price} mainCategory={elem.mainCategory} id={elem.id} productName={elem.productName} Discount={elem.Discount} discountPrice={elem.discountPrice} />
                )
              })
            }
          </>
      }
    </>
  )
}

export default index










