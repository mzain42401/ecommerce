import React from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs'
import Link from 'next/link'
import { useAuth } from '@/firebase/authContext'
import Swal from 'sweetalert2';
const ProductCard = () => {
const {authUser, isLoading,setAuthUser}=useAuth()

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
          <img style={{"transition-duration": "450ms"}} className='  hover:scale-125 hover:rotate-12 hover:rounded-lg h-40 w-full cursor-pointer rounded-lg' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' alt="" />
        </div>
        <h1 style={{"overflow-wrap": "break-word"}} className=' mt-2 text-center text-lg w-full  text-black '>Laptop 256GB SSD 2GB Graphic Card</h1>
        <div className='font-bold text-center text-lg mt-2'>Rs.99/-</div>

        <div className='absolute bottom-3   w-full px-6 flex justify-between'>
         <Link href="/products/aa"> <button  className='bg-red-900 hover:bg-transparent hover:text-red-900 hover:border hover:border-red-900 text-white rounded-lg px-4 py-1 text-base'>details</button></Link>
          <button onClick={()=>addToCart()} className='  border border-red-900 px-2 py-2 text-red-900 rounded-3xl text-xl hover:bg-red-900 hover:text-white'><BsFillCartPlusFill/></button>

        </div>
      </div>
      
    </>
  )
}

export default ProductCard
