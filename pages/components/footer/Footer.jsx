import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from '../../../public/logo.png'
import {BiLogoFacebook} from "react-icons/bi"
import {BsWhatsapp} from "react-icons/bs"
import {BiLogoTiktok,BiLogoInstagram} from "react-icons/bi"
const Footer = () => {
  return (
    <>
     <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30 mt-10">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl flex justify-center mb-4"><Image className='h-24 w-24 rounded-full' src={logo}/></h3>
                            <div className=' text-gray-600'>
                                <h2 className='text-3xl font-bold'>HomelyFind</h2>
                                

                                <p>Online Solution</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">Links</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link href="/" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Products</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Contact</Link>
                        </li>    
                        <li className="mb-2">
                            <Link href="/privacy/shoppingPolicy" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Shipping policy</Link>
                        </li> 
                        <li className="mb-2">
                            <Link href="/privacy/PrivacyPolicy" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Privacy policy</Link>
                        </li>                         
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">Main Categories</h6>
                        <ul className="text-md">
                       
                        <li className="mb-2">
                            <Link href="/products/Décor" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Home Décor</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Men's Fashion" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Men's Fashion</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Home & Living" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Home & Living</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Baby, Kids & Toys" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Baby, Kids & Toys</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Customize Product" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Customize Product</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Kitchen Accessories" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Kitchen Accessories</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/products/Electronic Accessories" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Electronic Accessories</Link>
                        </li>
                       
                        
                        
                        
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li className="mx-1">
                                        <Link href="https://www.facebook.com/profile.php?id=61552682378217" target='_blank' className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BiLogoFacebook/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link href="https://wa.me/923122320760" target='_blank' className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BsWhatsapp/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link target='_blank'  href="https://www.tiktok.com/@homelyfind?is_from_webapp=1&sender_device=pc" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BiLogoTiktok/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link href="https://www.instagram.com/homelyfind/" target='_blank' className="flex justify-center items-center text-blue-900 hover:text-gray-500 p-3 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <BiLogoInstagram/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-400 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                   . All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>

    </>
  )
}

export default Footer
