import React, { useEffect, useState } from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs'
import Link from 'next/link'
import { useAuth } from '@/firebase/authContext'
import Swal from 'sweetalert2';
import { useData } from '@/firebase/dataContext';
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { db, myStorage } from '@/firebase/firebase';

const ProductCard = ({Category,Name,productName,productPrice,productCoverImage,productmainCategory,productsubCategory,id}) => {
  // console.log(productCoverImage);
  const [url,setUrl]=useState(null)
 
  const {authUser}=useAuth()
  const {getImageURL}=useData()
  const  [imageUrl, setImageUrl] = useState('');

  

  const addToCart=()=>{
    if (!authUser) {
      // alert("sign in now")
      Swal.fire('Please login youor account!')
      return;
    }
    alert("add")
  }
  return (
    <>
    
      <div style={{"transition-duration": "950ms"}} className='productCard relative mx-1 my-8 bg-white w-60 h-[350px] py-2  px-2 hover:translate-y-[-20px] rounded-lg'>
        <div className='overflow-hidden ' >
          <img style={{"transition-duration": "450ms"}} className='  hover:scale-125 hover:rotate-12 hover:rounded-lg h-40 w-full cursor-pointer rounded-lg' src={url} alt="image" />
        </div>
        <h1 style={{"overflow-wrap": "break-word"}} className=' mt-2 text-center text-lg w-full  text-black '>{productName}</h1>
        <div className='font-bold text-center text-lg mt-2'>Rs.{productPrice}/-</div>

        <div className='absolute bottom-3   w-full px-6 flex justify-between'>
         <Link href={`/products/${productmainCategory}/${productsubCategory}/${id}`}> <button  className='bg-[#013289] hover:bg-transparent hover:text-[#013289] hover:border hover:border-[#013289] text-white rounded-lg px-4 py-1 text-base'>More</button></Link>
          <button onClick={()=>addToCart()} className='  border border-[#013289] px-2 py-2 text-[#013289] rounded-3xl text-xl hover:bg-[#013289] hover:text-white'><BsFillCartPlusFill/></button>

        </div>
      </div>
      
    </>
  )
}

export default ProductCard
