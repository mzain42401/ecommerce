import React, { useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineCaretDown, AiOutlineUser, AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { GoSignOut } from 'react-icons/go'
import { BsWhatsapp, BsTelephoneFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/firebase/authContext'

const Header = () => {
  const route = useRouter()
  const [initial, setInitial] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const { authUser, isLoading, signOut, setAuthUse } = useAuth()

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const navRef = useRef()
  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }

  const showNav = () => {
    navRef.current.classList.toggle('active')
  }

  const signOutFunction = () => {
    signOut()
    route.push("/")

  }
  return (
    <>
      <div className='bg-black h-8 flex justify-between items-center'>
        <marquee className='text-white w-max overflow-hidden ml-2 '>
          WE OFFER FREE SHIPPING ON ALL ORDERS ABOVE RS.3000/-
        </marquee>
        <div className='flex justify-between items-center top-header text-white'>

          <div className='px-1 cursor-pointer'><BsTelephoneFill /></div>
          <div className='px-3 cursor-pointer'><BsWhatsapp /></div>
          <div className='px-2 border-l-2 mr-5 cursor-pointer'><Link href='/contact'> Contact us</Link></div>
        </div>

      </div>
      <nav className='navbar flex justify-between items-center px-5 h-16 z-20	 shadow-lg'>
        <div className='navToggleBtn hidden text-xl cursor-pointer' onClick={toggleIcons}>
          {initial ? <FaBars /> : <AiOutlineClose />}
        </div>
        <div id="logo">
          logo
        </div>
        <ul ref={navRef} className='flex justify-center items-center font-semibold'>
          <li className='px-5 cursor-pointer'><Link href='/'>Home</Link></li>
          <li className='px-5 cursor-pointer'><Link href='/products'>Shop now</Link></li>

          <li className='px-5 cursor-pointer'>
            <div className="relative z-[99999] inline-block text-left">
              <div className=''>
                <span onClick={toggleDropdown} className="rounded-md px-2 flex  justify-center items-center ">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md   bg-transparent py-2  text-sm font-medium text-primary hover:bg-primary"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="listbox"
                    
                  >
                    About us
                  </button>
                    <AiOutlineCaretDown />
                </span>
              </div>

              {isOpen && (
                <div  className="dropDown origin-top-right  absolute  mt-2 w-max rounded-md shadow-lg bg-white px-2 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href='/privacy/PrivacyPolicy'
                        
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        
                      >
                        Privacy Policy
                      </Link>
                      <Link href='/privacy/shoppingPolicy'
                        
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        
                      >
                        shopping Policy
                        
                      </Link>
                  </div>
                </div>
              )}
            </div>

          </li>
          <li className='px-5 cursor-pointer'><Link href='/contact'>Contact</Link></li>

        </ul>
        <div className='flex  items-center font-bold'>
          {
            authUser ?
              <>
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
                <p onClick={() => signOutFunction()} className='ml-[20px] text-2xl cursor-pointer'><GoSignOut /></p>
              </>
              :


              <div className='px-3 cursor-pointer'>
                <Link href='/auth/login'>
                  login
                </Link>
              </div>

          }


        </div>

      </nav>

    </>
  )
}

export default Header
