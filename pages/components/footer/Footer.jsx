import React from 'react'
import Link from 'next/link'
import {BiLogoFacebook} from "react-icons/bi"
const Footer = () => {
  return (
    <>
     <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Logo</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>Address</h5>
                                {/* <p>Address</p> */}
                                

                                <p>Karachi,</p>
                                <p>Pakistan.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">About</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Contact</Link>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Web Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Mobile App Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">Domain and Hosting</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="text-[#013289] hover:underline  transition duration-250 ease-in-out">General IT Consultations</Link>
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
                                        <Link href="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BiLogoFacebook/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link href="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BiLogoFacebook/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link href="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 p-3 ease-in-out" aria-label="Twitter">
                                        <BiLogoFacebook/>
                                        </Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link href="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 p-3 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <BiLogoFacebook/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <Link
                        href="#"
                        className=" hover:text-gray-900"
                    >
                        Molad e Konsult
                    </Link>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>

    </>
  )
}

export default Footer
