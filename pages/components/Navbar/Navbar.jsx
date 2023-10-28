import React, { useState } from "react";
import Link from "next/link";
import {FaBars} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
import {BsTelephoneFill,BsWhatsapp} from "react-icons/bs"
// import Logo from "../../assets/Logo.png";
import logo from '../../../public/logo.png'
import mylogo from '../../../public/mylogo1.png'


import Button from "../Button";
import NavLinks from "./NavLinks";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="bg-white">
      <div className="flex items-center  font-medium justify-around">
        <div className="z-50 px-2 md:w-auto w-full flex justify-between">
          <div className="flex justify-center items-center"><Image src={logo} className=" md:cursor-pointer  h-[70px] w-24" />
          <Image src={mylogo} className=" md:cursor-pointer  h-[70px]" /></div>

          <div className="text-3xl flex items-center md:hidden" onClick={() => setOpen(!open)}>
          {open?<GrClose/>:<FaBars/>}
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
            <Link href='/' className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 z-[48] overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              contact
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
