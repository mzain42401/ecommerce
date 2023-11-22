import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useAuth } from '@/firebase/authContext'
import Swal from 'sweetalert2';
import { useData } from '@/firebase/dataContext';

const ProductCard = ({ discount, productName, productPrice, productCoverImage, productmainCategory, productsubCategory, id, elem, discounPrice }) => {

  const [url, setUrl] = useState(null)

  const { authUser } = useAuth()
  const { getImageURL, addCartData } = useData()

  useEffect(() => {
    async function mydata() {
      const imgUrl = await productCoverImage
      await getImageURL(imgUrl).then((url) => setUrl(url))
    }
    mydata()
  }, [])

  const addToCart = (elem) => {
    if (!authUser) {
      Swal.fire('Please login your account!')
      return;
    }
    else {
      addCartData(elem, authUser)
    }

  }
  return (
    <>

      <div style={{ "transition-duration": "950ms" }} className=' productCard relative mx-1 my-8 bg-white w-60 h-[350px] py-2  px-2 hover:translate-y-[-20px] rounded-lg'>
        {discount > 0 && <p className='absolute top-6 text-white rounded left-3 bg-[#FF4041]  px-2'>Discount {discount}%</p>}
        <div className='overflow-hidden ' >
          <img style={{ "transition-duration": "450ms" }} className='  hover:scale-125 hover:rotate-12 hover:rounded-lg h-40 w-full cursor-pointer rounded-lg' src={url} alt="image" />
        </div>
        <h1 style={{ "overflow-wrap": "break-word" }} className=' mt-2 text-center text-lg w-full productName text-black '>{productName}</h1>
        {
          discount > 0 ? <div className=' font-bold disPrice text-[#FF4041] flex justify-evenly items-center'>
            <div className='mt-2  '>Rs.{discounPrice}/-
            </div>
            <div className='font-bold text-gray-400 line-through	  mt-2'>Rs.{productPrice}/-
            </div>
          </div>
            : <div className='font-bold text-center    mt-2'>Rs.{productPrice}/-</div>
        }
        <div className='absolute bottom-3    w-full px-6 flex justify-center'>
          <Link href={`/products/${productmainCategory}/${productsubCategory}/${id}`}> <button className='bg-[#1f91d8] hover:bg-transparent hover:text-[#1f91d8] hover:border hover:border-[#1f91d8] text-white rounded px-4 py-1 text-base'>More</button></Link>
          {/* <button onClick={() => addToCart(elem)} className='  border border-[#1f91d8] px-2 py-2 text-[#1f91d8] rounded-3xl text-xl hover:bg-[#1f91d8] hover:text-white'><BsFillCartPlusFill /></button> */}
        </div>
      </div>

    </>
  )
}

export default ProductCard
