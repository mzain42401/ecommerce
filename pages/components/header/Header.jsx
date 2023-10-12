import React, { useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import {BsWhatsapp,BsTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'
const Header = () => {
  const [initial, setInitial] = useState(true)
  const navRef = useRef()
  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }

  const showNav = () => {
    navRef.current.classList.toggle('active')
  }

  return (
    <>
    <div className='bg-black h-8 flex justify-between items-center'>
<div className='text-white mx-5 bg-red-500'>runing text</div>
<div className='flex justify-between items-center text-white'>
  
  <div className='px-1 cursor-pointer'><BsTelephoneFill/></div>
  <div className='px-3 cursor-pointer'><BsWhatsapp/></div>
  <div className='px-2 border-l-2 mr-5 cursor-pointer'>Contact us</div>
</div>

    </div>
      <nav className='navbar flex justify-between items-center px-5 h-16 z-20	 bg-orange-700'>
        <div className='navToggleBtn hidden text-xl cursor-pointer' onClick={toggleIcons}>
          {initial ? <FaBars /> : <AiOutlineClose />}
        </div>
        <div id="logo">
          logo
        </div>
        <ul ref={navRef} className='flex justify-center items-center text-lg font-bold'>
          <li className='px-5 cursor-pointer'><Link href='/'>Home</Link></li>
          <li className='px-5 cursor-pointer'><Link href='/aboutus'>About</Link></li>
          <li className='px-5 cursor-pointer'><Link href='/products'>Shop</Link></li>
          <li className='px-5 cursor-pointer'><Link href='/contact'>Contact</Link></li>
        </ul>
        <div className='flex  items-center font-bold'>
          <div className='px-2 text-2xl cursor-pointer'>
            <Link href='/profile'>
              <AiOutlineUser />
            </Link>
          </div>
          <div className='px-1 text-2xl cursor-pointer relative'>
            <Link href='/cart'>
              <AiOutlineShoppingCart />
              <sup className='absolute bg-slate-200 h-4 w-4 right-[-5px] top-[-12px] rounded-full flex justify-center items-center text-xs'>2</sup>
            </Link>
          </div>

        </div>
      </nav>

    </>
  )
}

export default Header
