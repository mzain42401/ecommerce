import React, { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import Link from "next/link";
const links = [
  {
    name: "Shop by Category",
    submenu: true,
    sublinks: [
      {
        Head: "Customize Product",
        sublink: [
          { name: "Locket", link: "/" },
          { name: "Bracelet", link: "/" },
          { name: "Ring", link: "/" },
          { name: "Watch", link: "/" },
          { name: "Wallet", link: "/" },
          { name: "Bottle", link: "/" },
          { name: "Pen", link: "/" },
          { name: "Table Clock", link: "/" },
          { name: "Others", link: "/" },


        ],
      },
      {
        Head: "Home & Living",
        sublink: [
          { name: "Bathroom", link: "/" },
          { name: "Dispensers", link: "/" },
          { name: "Hangers", link: "/" },
          { name: "Basket", link: "/" },
          { name: "Hooks", link: "/" },
          { name: "Dustbins", link: "/" },
          { name: "Covers", link: "/" },
          { name: "Storage & Organizers", link: "/" },
          { name: "Bags", link: "/" },
          { name: "Others", link: "/" },


        ],
      },
      {
        Head: "Kitchen Accessories",
        sublink: [


          { name: "Glass & Mug Stand", link: "/" },
          { name: "Food Storage & Dispensers", link: "/" },
          { name: "Cooking Tools", link: "/" },
          { name: "Chopper & Graters", link: "/" },
          { name: "Mugs & Cups", link: "/" },
          { name: "Spice Containers", link: "/" },
          { name: "Cutlery Holders", link: "/" },
          { name: "Others", link: "/" },

          
        ],
      },

      {
        Head: "Cleaning Products",
        sublink: [
          { name: "Washing Machine", link: "/" },
          { name: "Mop", link: "/" },
          { name: "Brush", link: "/" },
          { name: "Scrubber", link: "/" },
          { name: "Towel", link: "/" },
          { name: "Duster", link: "/" },
          { name: "Others", link: "/" },


        ],
      },
      {
        Head: "Organizer's",
        sublink: [
          { name: "Cosmetic", link: "/" },
          { name: "Racks", link: "/" },
          { name: "Tissue", link: "/" },
          { name: "Jewelry", link: "/" },
          { name: "Socks", link: "/" },
          { name: "Drawer", link: "/" },
          { name: "Cloths", link: "/" },
          { name: "Shoe", link: "/" },
          { name: "Others", link: "/" },



        ],
      },
     
      {
        Head: "Mobile Accessories",
        sublink: [
          { name: "Mobile Holder & Stand", link: "/" },
          { name: "Cable Clip", link: "/" },
          { name: "Earbuds", link: "/" },
          { name: "Cleaning Brush", link: "/" },
          { name: "Hand Free", link: "/" },
          { name: "Bluetooth", link: "/" },
          { name: "Others", link: "/" },


        ],
      },
      {
        Head: "Women's Fashion",
        sublink: [
          { name: "Cosmetic Accessories", link: "/" },
          { name: "Perfumes", link: "/" },
          { name: "Purse", link: "/" },
          { name: "Watches", link: "/" },
          { name: "Makeup Organizers", link: "/" },
          { name: "Health & Fitness", link: "/" },
          { name: "Others", link: "/" },


          

        ],
      },
      {
        Head: "Men's Fashion",
        sublink: [
          { name: "Watches", link: "/" },
          { name: "Wallet", link: "/" },
          { name: "Others", link: "/" },

        ],
      },
      
      {
        Head: "Jewellery",
        sublink: [
          { name: "Earrings", link: "/" },
          { name: "Necklaces", link: "/" },
          { name: "Rings", link: "/" },
          { name: "Bracelets", link: "/" },
          { name: "Hair Accessories", link: "/" },
          { name: "Anklets", link: "/" },
          { name: "Sets", link: "/" },
          { name: "Others", link: "/" },


        ],
      },
      {
        Head: "Décor",
        sublink: [
          { name: "Wall Stickers", link: "/" },
          { name: "Lighting", link: "/" },
          { name: "Home Décor", link: "/" },
          { name: "Others", link: "/" },

        ],
      },
      {
        Head: "Electronic Accessories",
        sublink: [
          { name: "Machines", link: "/" },
          { name: "Cleaning Brush", link: "/" },
          { name: "Mouse Pad", link: "/" },
          { name: "Lights & Bulbs", link: "/" },
          { name: "Car Accessories", link: "/" },
          { name: "Others", link: "/" },

        ],
      },
      {
        Head: "Baby, Kids & Toys",
        sublink: [
  
          { name: "Baby Products", link: "/" },
          { name: "Education Toys", link: "/" },
          { name: "Books", link: "/" },
          { name: "Others", link: "/" },
        ],
      },
    ],
  },
  {
    name: "About",
    submenu: true,
    sublinks: [
      {
        Head: "Policies ",
        sublink: [
          { name: "Shiping Policy", link: "/" },
          { name: "Privacy Policy", link: "/" },
          

        ],
      }]
    }


];


const NavLinks = () => {

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3   text-left md:cursor-pointer group">
            <h1
              className="py-7  flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name)  : setHeading("");
                
               
              }}
            >
              {link.name} <span className=" text-2xl cursor-pointer"><MdKeyboardArrowDown/></span>
              
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-[100px]   hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4  left-4 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white relative z-[99999] font-sans  p-5 grid grid-cols-4 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className=" cursor-pointer text-xs font-bold">
                          {mysublinks.Head} 
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className=" text-gray-600 text-xs font-serif my-2.5">
                            <Link
                              href={slink.link}
                              className=" cursor-pointer hover:text-gray-900 hover:underline font-sans "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>{
                        subHeading !== slinks.Head? setSubHeading(slinks.Head): setSubHeading("");
                    }
                    

                    }
                    className=" py-4  rounded-lg mt-2 shadow-lg pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head} <div className="cursor-pointer text-2xl">
                      <MdKeyboardArrowDown/>
                      </div>

                    
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 w-[80%]  shadow-lg  m-auto text-center rounded-lg my-2">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
