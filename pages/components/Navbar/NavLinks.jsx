import React, { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import Link from "next/link";
const links = [
  {
    name: "Shop by Category",
    submenu: true,
    sublinks: [
      {
        Head: "Customize Product ",
        sublink: [
          { name: "Locket", link: "/" },
          { name: "Bracelet", link: "/" },
          { name: "Ring", link: "/" },
          { name: "Watch", link: "/" },
          { name: "Wallet", link: "/" },
          { name: "Bottle", link: "/" },
          { name: "Pen", link: "/" },
          { name: "Table Clock", link: "/" },

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

        ],
      },
      {
        Head: "Kitchen Accessories",
        sublink: [
          { name: "Egg Box", link: "/" },
          { name: "Glass & Mug Stand", link: "/" },
          { name: "Food Storage & Dispensers", link: "/" },
          { name: "Cooking Tools", link: "/" },
          { name: "Chopper, Peelers & Graters", link: "/" },
          { name: "Mugs & Cups", link: "/" },
          { name: "Oil Bottles", link: "/" },
          { name: "Kitchen Utensils", link: "/" },
          { name: "Spice Containers", link: "/" },
          { name: "Knives & Accessories ", link: "/" },
          { name: "Cutlery Holders", link: "/" },
          
        ],
      },

      {
        Head: "Cleaning Products",
        sublink: [
          { name: "Washing Machine ", link: "/" },
          { name: "Mop", link: "/" },
          { name: "Brush", link: "/" },
          { name: "Scrubber", link: "/" },
          { name: "Towel", link: "/" },
          { name: "Duster", link: "/" },

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


        ],
      },
     
      {
        Head: " Mobile Accessories",
        sublink: [
          { name: "Mobile Holder & Stand", link: "/" },
          { name: "Cable Clip", link: "/" },
          { name: "Earbuds", link: "/" },
          { name: "Cleaning Brush", link: "/" },
          { name: "Hand Free", link: "/" },
          { name: "Bluetooth", link: "/" },

        ],
      },
      {
        Head: " Women's Fashion",
        sublink: [
          { name: "Cosmetic Accessories", link: "/" },
          { name: "Perfumes", link: "/" },
          { name: "Purse", link: "/" },
          { name: "Watches", link: "/" },
          { name: "Makeup Organizers", link: "/" },
          { name: "Health & Fitness", link: "/" },

          

        ],
      },
      {
        Head: " Men's Fashion",
        sublink: [
          { name: "Watches", link: "/" },
          { name: "Wallet", link: "/" },
        ],
      },
      
      {
        Head: " Jewellery",
        sublink: [
          { name: "Earrings", link: "/" },
          { name: "Necklaces", link: "/" },
          { name: "Rings", link: "/" },
          { name: "Bracelets", link: "/" },
          { name: "Hair Accessories", link: "/" },
          { name: "Anklets", link: "/" },
          { name: "Sets", link: "/" },

        ],
      },
      {
        Head: "Décor",
        sublink: [
          { name: "Wall Stickers", link: "/" },
          { name: "Lighting", link: "/" },
          { name: "Home Décor", link: "/" },
        ],
      },
      {
        Head: "Electronic Accessories        ",
        sublink: [
          { name: "Machines", link: "/" },
          { name: "Cleaning Brush", link: "/" },
          { name: "Mouse Pad", link: "/" },
          { name: "Lights & Bulbs", link: "/" },
          { name: "Car Accessories", link: "/" },
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
          <div className="px-3  text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name} <MdKeyboardArrowDown/>
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
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
                  <div className="bg-white font-sans  p-5 grid grid-cols-5 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="  text-xs font-bold">
                          {mysublinks.Head} 
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className=" text-gray-600 text-xs font-serif my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-red-900 font-sans "
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
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}<MdKeyboardArrowDown/>

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
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
