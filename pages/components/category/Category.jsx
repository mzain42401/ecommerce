import Link from 'next/link'
import React from 'react'

const Category = () => {
    const arry = [
       
        {
            imageSrc:'https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png',
            categoryName:"Fashion & Beauty"
        },
        {
            imageSrc:'https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png',
            categoryName:" Industrial & Agriculture"
        },{
            imageSrc:'https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png',
            categoryName:"Property For Sale"
        },{
            imageSrc:'https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png',
            categoryName:"Mobiles"
        },{
            imageSrc:'https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png',
            categoryName:"vehicles"
        },{
            imageSrc:'https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png',
            categoryName:"property"
        },{
            imageSrc:'https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png',
            categoryName:"electronics"
        },{
            imageSrc:'https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png',
            categoryName:"bikes"
        },{
            imageSrc:'https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png',
            categoryName:"jobs"
        },{
            imageSrc:'https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png',
            categoryName:"books"
        },
    ]
    return (
        <>
            <div className=' categoryDiv mt-10 flex justify-center flex-wrap items-center w-[95%] m-auto border rounded-2xl bg-white'>

                {
                    arry.map((elem) => {
                        return (
                            <div className='category h-[156px] w-[106px]   m-4  flex flex-col justify-center items-center '>

                                <Link className='h-[156px] w-[106px]' href='/'>
                                    <div className='flex justify-center flex-col items-center h-[156px] w-[106px]'>
                                        <div className=' hover:scale-110 transition-[900ms]'>
                                            <img className='h-[88px] w-[88px] categoryimg' src={elem.imageSrc} alt="" />
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
