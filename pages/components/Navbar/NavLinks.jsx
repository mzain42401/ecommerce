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
          { name: "Locket", link: "/products/Customize Product/Locket" },
          { name: "Bracelets", link: "/products/Customize Product/Bracelets" },
          { name: "Rings", link: "/products/Customize Product/Rings" },
          { name: "Watches", link: "/products/Customize Product/Watches" },
          { name: "Purse", link: "/products/Customize Product/Purse" },
          { name: "Bottle", link: "/products/Customize Product/Bottle" },
          { name: "Pen", link: "/products/Customize Product/Pen" },
          { name: "Table Clock", link: "/products/Customize Product/Table Clock" },
          { name: "Others", link: "/products/Customize Product/Others" },


        ],
      },
      {
        Head: "Home & Living",
        sublink: [
          { name: "Bathroom", link: "/products/Home & Living/Bathroom" },
          { name: "Dispensers", link: "/products/Home & Living/Dispensers" },
          { name: "Hangers", link: "/products/Home & Living/Hangers" },
          { name: "Basket", link: "/products/Home & Living/Basket" },
          { name: "Hooks", link: "/products/Home & Living/Hooks" },
          { name: "Dustbins", link: "/products/Home & Living/Dustbins" },
          { name: "Covers", link: "/products/Home & Living/Covers" },
          { name: "Storage & Organizers", link: "/products/Home & Living/Storage & Organizers" },
          { name: "Bags", link: "/products/Home & Living/Bags" },
          { name: "Others", link: "/products/Home & Living/Others" },


        ],
      },
      {
        Head: "Kitchen Accessories",
        sublink: [


          { name: "Glass & Mug Stand", link: "/products/Kitchen Accessories/Glass & Mug Stand" },
          { name: "Food Storage & Dispensers", link: "/products/Kitchen Accessories/Food Storage & Dispensers" },
          { name: "Cooking Tools", link: "/products/Kitchen Accessories/Cooking Tools" },
          { name: "Chopper & Graters", link: "/products/Kitchen Accessories/Chopper & Graters" },
          { name: "Mugs & Cups", link: "/products/Kitchen Accessories/Mugs & Cups" },
          { name: "Spice Containers", link: "/products/Kitchen Accessories/Spice Containers" },
          { name: "Cutlery Holders", link: "/products/Kitchen Accessories/Cutlery Holders" },
          { name: "Others", link: "/products/Kitchen Accessories/Others" },

          
        ],
      },

      {
        Head: "Cleaning Products",
        sublink: [
          { name: "Washing Machine", link: "/products/Cleaning Products/Washing Machine" },
          { name: "Mop", link: "/products/Cleaning Products/Mop" },
          { name: "Brush", link: "/products/Cleaning Products/Brush" },
          { name: "Scrubber", link: "/products/Cleaning Products/Scrubber" },
          { name: "Towel", link: "/products/Cleaning Products/Towel" },
          { name: "Duster", link: "/products/Cleaning Products/Duster" },
          { name: "Others", link: "/products/Cleaning Products/Others" },


        ],
      },
      {
        Head: "Organizer's",
        sublink: [
          { name: "Cosmetic", link: "/products/Organizer's/Cosmetic" },
          { name: "Racks", link: "/products/Organizer's/Racks" },
          { name: "Tissue", link: "/products/Organizer's/Tissue" },
          { name: "Jewelry", link: "/products/Organizer's/Jewelry" },
          { name: "Socks", link: "/products/Organizer's/Socks" },
          { name: "Drawer", link: "/products/Organizer's/Drawer" },
          { name: "Cloths", link: "/products/Organizer's/Cloths" },
          { name: "Shoe", link: "/products/Organizer's/Shoe" },
          { name: "Others", link: "/products/Organizer's/Others" },



        ],
      },
     
      {
        Head: "Mobile Accessories",
        sublink: [
          { name: "Mobile Holder & Stand", link: "/products/Mobile Accessories/Mobile Holder & Stand" },
          { name: "Cable Clip", link: "/products/Mobile Accessories/Cable Clip" },
          { name: "Earbuds", link: "/products/Mobile Accessories/Earbuds" },
          { name: "Cleaning Brush", link: "/products/Mobile Accessories/Cleaning Brush" },
          { name: "Hand Free", link: "/products/Mobile Accessories/Hand Free" },
          { name: "Bluetooth", link: "/products/Mobile Accessories/Bluetooth" },
          { name: "Others", link: "/products/Mobile Accessories/Others" },


        ],
      },
      {
        Head: "Women's Fashion",
        sublink: [
          { name: "Cosmetic Accessories", link: "/products/Women's Fashion/Cosmetic Accessories" },
          { name: "Perfumes", link: "/products/Women's Fashion/Perfumes" },
          { name: "Purse", link: "/products/Women's Fashion/Purse" },
          { name: "Watches", link: "/products/Women's Fashion/Watches" },
          { name: "Makeup Organizers", link: "/products/Women's Fashion/Makeup Organizers" },
          { name: "Health & Fitness", link: "/products/Women's Fashion/Health & Fitness" },
          { name: "Others", link: "/products/Women's Fashion/Others" },


          

        ],
      },
      {
        Head: "Men's Fashion",
        sublink: [
          { name: "Watches", link: "/products/Men's Fashion/Watches" },
          { name: "Wallet", link: "/products/Men's Fashion/Wallet" },
          { name: "Others", link: "/products/Men's Fashion/Others" },

        ],
      },
      
      {
        Head: "Jewellery",
        sublink: [
          { name: "Earrings", link: "/products/Jewellery/Earrings" },
          { name: "Necklaces", link: "/products/Jewellery/Necklaces" },
          { name: "Rings", link: "/products/Jewellery/Rings" },
          { name: "Bracelets", link: "/products/Jewellery/Bracelets" },
          { name: "Hair Accessories", link: "/products/Jewellery/Hair Accessories" },
          { name: "Anklets", link: "/products/Jewellery/Anklets" },
          { name: "Sets", link: "/products/Jewellery/Sets" },
          { name: "Others", link: "/products/Jewellery/Others" },


        ],
      },
      {
        Head: "Décor",
        sublink: [
          { name: "Wall Stickers", link: "/products/Décor/Wall Stickers" },
          { name: "Lighting", link: "/products/Décor/Lighting" },
          { name: "Home Décor", link: "/products/Décor/Home Décor" },
          { name: "Others", link: "/products/Décor/Others" },

        ],
      },
      {
        Head: "Electronic Accessories",
        sublink: [
          { name: "Machines", link: "/products/Electronic Accessories/Machines" },
          { name: "Cleaning Brush", link: "/products/Electronic Accessories/Cleaning Brush" },
          { name: "Mouse Pad", link: "/products/Electronic Accessories/Mouse Pad" },
          { name: "Lights & Bulbs", link: "/products/Electronic Accessories/Lights & Bulbs" },
          { name: "Car Accessories", link: "/products/Electronic Accessories/Car Accessories" },
          { name: "Others", link: "/products/Electronic Accessories/Others" },

        ],
      },
      {
        Head: "Baby, Kids & Toys",
        sublink: [
  
          { name: "Baby Products", link: "/products/Baby, Kids & Toys/Baby Products" },
          { name: "Education Toys", link: "/products/Baby, Kids & Toys/Education Toys" },
          { name: "Books", link: "/products/Baby, Kids & Toys/Books" },
          { name: "Others", link: "/products/Baby, Kids & Toys/Others" },
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
          { name: "Shiping Policy", link: "/privacy/shoppingPolicy" },
          { name: "Privacy Policy", link: "/privacy/PrivacyPolicy" },
          

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
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
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
                    className=" py-4  rounded-lg mt-2 shadow pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
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
