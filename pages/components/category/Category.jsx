import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import menFashion from "../../../public/menFashion.png"
import womenFashion from "../../../public/womenFashion.png"
import MobileElectronics from "../../../public/MobileElectronics.png"
import mykitchen from '../../../public/mykitchen.png'
import cleaning from '../../../public/cleaning.png'
import organser from '../../../public/organser.png'
import home from '../../../public/home.png'
import mobile from '../../../public/mobile.png'
import customize from '../../../public/customize.png'
import decor from '../../../public/decor.png'
import jewllery from '../../../public/jewllery.png'
import baby from '../../../public/baby.png'




const Category = () => {
    const arry = [
        {
            imageSrc:menFashion,
            categoryName:"Men's Fashion",
            URL:"products/Men's Fashion"
        },
        {
            imageSrc:womenFashion,
            categoryName:"Women's Fashion",
            URL:"products/Women's Fashion"
        },
        {
            imageSrc:MobileElectronics,
            categoryName:"Electronic Accessories",
            URL:'products/Electronic Accessories'
        },
        {
            imageSrc:mykitchen,
            categoryName:"Kitchen Accessories",
            URL:'products/Kitchen Accessories'
        },
        {
            imageSrc:cleaning,
            categoryName:"Cleaning Products",
            URL:'products/Cleaning Products'
        },
        {
            imageSrc:organser,
            categoryName:"Organizer's",
            URL:"products/Organizer's"
        },
        {
            imageSrc:home,
            categoryName:"Home & Living",
            URL:'products/Home & Living'
        },
        {
            imageSrc:mobile,
            categoryName:"Mobile Accessories",
            URL:'products/Mobile Accessories'
        },
        {
            imageSrc:customize,
            categoryName:"Customize Product",
            URL:'products/Customize Product'
        },
        {
            imageSrc:decor, 
            categoryName:"Décor",
            URL:'products/Décor'
        },
        {
            imageSrc:jewllery,
            categoryName:"Jewellery",
            URL:'products/Jewellery'
        },
        {
            imageSrc:baby,
            categoryName:"Baby, Kids & Toys",
            URL:'products/Baby, Kids & Toys'
        },
    ]
   
    return (
        <>
            <div className=' categoryDiv mt-10 flex justify-center flex-wrap items-center w-[95%] m-auto border rounded-2xl bg-white'>

                {
                    arry.map((elem) => {
                        return (
                            <div className='category h-[156px] w-[106px]   m-4  flex flex-col justify-center items-center '>

                                <Link className='h-[156px] w-[106px]' href={elem.URL}>
                                    <div className='flex justify-center flex-col items-center h-[156px] w-[106px]'>
                                        <div className=' hover:scale-110 transition-[900ms]'>
                                            <Image src={elem.imageSrc} className='h-[88px] w-[88px] categoryimg'   alt="" />
                                        </div>
                                        <span className='text-center  categoryName w-[7.6rem] h-[106px]'>{elem.categoryName}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Category
