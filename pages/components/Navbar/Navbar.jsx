import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"
import { PiSignOutBold } from "react-icons/pi"
import { GrClose } from "react-icons/gr"
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsTelephoneFill, BsWhatsapp } from "react-icons/bs"
import logo from '../../../public/logo.png'
// import mylogo from '../../../public/mylogo1.png'
import Button from "../Button";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { useAuth } from '@/firebase/authContext'
import { useRouter } from "next/router";
import { useData } from "@/firebase/dataContext";
import { auth } from "@/firebase/firebase";

const Navbar = () => {
  const route = useRouter()
  const {cartData}=useData()
  const [CartLength, setCartLength] = useState(0);

  const [open, setOpen] = useState(false);
  const { signOut, authUser } = useAuth()
  const signOutFunction = () => {
    signOut()
    route.push("/")

  }
  useEffect(() => {

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        
        const productsData= await cartData(user.uid)
        setCartLength(productsData.length)

      }
    })
  }, [])

  return (
    <>
      <div className='bg-black h-8 flex justify-between items-center'>
        <marquee className='text-white w-max overflow-hidden ml-2 '>
          WE OFFER FREE SHIPPING ON ALL ORDERS ABOVE RS.3000/-
        </marquee>
        <div className='flex justify-between items-center top-header text-white'>

        
          <div className='px-1 cursor-pointer'><a href="tel:+923122320760" target="_blank"><BsTelephoneFill /></a> </div>
         


          <div className='px-3 cursor-pointer'> <a href="https://wa.me/923122320760" target="_blank" ><BsWhatsapp /></a></div>
          <div className='px-2 border-l-2 mr-5 cursor-pointer'><Link href='/contact'> Contact us</Link></div>
        </div>

      </div>
      <nav className="bg-white">
        <div className="flex items-center  font-medium justify-between">
          <div className="z-50 px-2 md:w-auto w-full flex justify-between items-center">
          <div className="text-3xl  flex items-center md:hidden" onClick={() => setOpen(!open)}>
              <FaBars />
            </div>
            <div className="mylogo flex justify-center   items-center">
             <Link href='/'> <Image src={logo} className=" md:cursor-pointer rounded-full h-[70px] w-20" /></Link>
            
              </div>

            
<div className="md:hidden  ">
          {
            authUser ?
              <>
              <div className="flex justify-center ">
                <div className='px-2 text-3xl cursor-pointer'>
                  <Link href='/profile'>
                    <AiOutlineUser />
                  </Link>
                </div>

                <div className='px-1 text-3xl cursor-pointer relative'>
                  <Link href='/cart'>
                    <AiOutlineShoppingCart />
                    <sup className='absolute bg-slate-200 h-4 w-4 right-[-5px] top-[-12px] rounded-full flex justify-center items-center text-xs'>{CartLength}</sup>
                  </Link>
                </div>
                <p onClick={() => signOutFunction()} className='ml-[20px] text-3xl  cursor-pointer'><PiSignOutBold /></p>
                </div>
              </>
              :


              <div className=' px-3 cursor-pointer '>
                <Link href='/auth/login'>
                  <Button />
                </Link>
              </div>

          }
</div>

          </div>
          <ul className="md:flex font-sans   hidden uppercase items-center gap-8">
            <li>
              <Link href='/' className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>

            <NavLinks />
            <li>
              <Link href='/products' className="py-7 px-3 inline-block">
                Products
              </Link>
            </li>
            <li>
              <Link href='/contact' className="py-7 px-3 inline-block">
                Contact
              </Link>
            </li>

          </ul>
          <div className="navBarLinks ">
          {
            authUser ?
              <>
              <div className="flex justify-center ">
                <div className='px-2 text-3xl cursor-pointer'>
                  <Link href='/profile'>
                    <AiOutlineUser />
                  </Link>
                </div>

                <div className='px-1 text-3xl cursor-pointer relative'>
                  <Link href='/cart'>
                    <AiOutlineShoppingCart />
                    <sup className='absolute bg-slate-200 h-4 w-4 right-[-5px] top-[-12px] rounded-full flex justify-center items-center text-xs'>{CartLength}</sup>
                  </Link>
                </div>
                <p onClick={() => signOutFunction()} className='ml-[20px] text-3xl  cursor-pointer'><PiSignOutBold /></p>
                </div>
              </>
              :


              <div className=' px-3 cursor-pointer '>
                <Link href='/auth/login'>
                  <Button />
                </Link>
              </div>

          }
</div>

          {/* <div className="md:block hidden">
          <Button />
        </div>
        <div className="md:block hidden">
          <Button />
        </div> */}
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden  bg-white  w-full top-0 z-[99] overflow-y-auto fixed bottom-0 pt-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <div onClick={() => setOpen(!open)} className="absolute top-8 right-4 text-3xl"><GrClose /></div>
            <div onClick={() => setOpen(!open)} className="absolute top-4 left-4 w-24 rounded-full"> <Image src={logo} className=" md:cursor-pointer rounded-full h-[80px] " /></div>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link href='/products' className="py-7 px-3 inline-block">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="py-7 px-3 inline-block">
                contact
              </Link>
            </li>

            {
            authUser ?
              <>
              <div className="flex justify-center">
                <div className='px-2 text-2xl cursor-pointer'>
                  <Link href='/profile'>
                    <AiOutlineUser />
                  </Link>
                </div>

                <div className='px-1 text-2xl cursor-pointer relative'>
                  <Link href='/cart'>
                    <AiOutlineShoppingCart />
                    <sup className='absolute bg-slate-200 h-4 w-4 right-[-5px] top-[-12px] rounded-full flex justify-center items-center text-xs'>{CartLength}</sup>
                  </Link>
                </div>
                <p onClick={() => signOutFunction()} className='ml-[20px] text-2xl  cursor-pointer'><PiSignOutBold /></p>
                </div>
              </>
              :


              <div className=' px-3 cursor-pointer'>
                <Link href='/auth/login'>
                  <Button />
                </Link>
              </div>

          }   
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
