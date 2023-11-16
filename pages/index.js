import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './components/productCard/ProductCard';
import Footer from './components/footer/Footer';
import Contact from './contact';
import Swal from 'sweetalert2';

import ImageSlider from './components/imageslider/ImageSlider';
import Category from './components/category/Category';
import { useAuth } from '@/firebase/authContext';
import Navbar from './components/Navbar/Navbar';
import { useData } from '@/firebase/dataContext';
import Loader from './components/loader/Loader';
import Saticfy from './components/satisfy/Saticfy';
import Slider from './components/subCategoriesSlider/Slider';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import Link from 'next/link';

const index = () => {
  const [getter, setter] = useState([])
  const { getdata, addCartData } = useData()

  useEffect(() => {

    async function fetchData() {

      const data = await getdata()
      setter(data)
    }
    fetchData()



  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
 
  let  Customize_Product= getter.filter((elem) => {
    return elem.mainCategory == "Customize Product"
  })

  let Kitchen_Accessories = getter.filter((elem) => {
    return elem.mainCategory == "Kitchen Accessories"
  })


  let Baby_Kids_Toys = getter.filter((elem) => {
    return elem.mainCategory == "Baby, Kids & Toys"
  })

  let Mens_Fashion = getter.filter((elem) => {
    return elem.mainCategory == "Men's Fashion"
  })


  let Décor= getter.filter((elem) => {
    return elem.mainCategory == "Décor"
  })
  
  let   Home_Living= getter.filter((elem) => {
    return elem.mainCategory == "Home & Living"
  })


  let   Women_Fashion= getter.filter((elem) => {
    return elem.mainCategory == "Women's Fashion"
  })
  


  return (
    <>
      {
        getter.length === 0 ? <Loader /> : <>
          <Navbar />

          <ImageSlider />
          {/* CardSection */}
          <section className='mt-20  '>
            <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> POPULAR CATEGORIES</h1>

            <Category />
          </section>
          <section className='mt-20  '>

            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-3'> OUR BEST SELLS</h1>


            <div className=' flex justify-center items-center flex-wrap mt-2'>

              {getter.slice(0, 10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
            </div>



            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-3'>  Kitchen Accessories</h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Kitchen_Accessories.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
              <Link href='products/Kitchen Accessories'>
              
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#347af5] cursor-pointer '>Show More</div>
           </Link> </div>


            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Baby, Kids & Toys</h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Baby_Kids_Toys.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
              <Link href='products/Baby, Kids & Toys'>
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#1c66e8] cursor-pointer '>Show More</div></Link>
            </div>


            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Customize Product</h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Customize_Product.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
              <Link href='products/Customize Product'>
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#1c66e8] cursor-pointer '>Show More</div></Link>
            </div>


            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Décor</h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Décor.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
              <Link href='products/Décor'>
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#1c66e8] cursor-pointer '>Show More</div></Link>
            </div>



            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Home & Living </h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Home_Living.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
             
             <Link href='products/Home & Living'>
              
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#347af5] cursor-pointer '>Show More</div>
              </Link>
             </div>

            

            



            
            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Women's Fashion</h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Women_Fashion.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
             <Link href="products/Women's Fashion">
              
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#347af5] cursor-pointer '>Show More</div>
              </Link>
             </div>



            <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto my-4 text-2xl shadow-lg mt-8'> Men's Fashion </h1>
            <div className='relative border-b-[1px] border-gray-300 flex justify-center items-center flex-wrap mt-2'>
              {Mens_Fashion.slice(0,10).map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} elem={elem} discounPrice={elem.discountPrice} />
              })}
              <Link href="products/Men's Fashion">
              
              <div className='absolute bottom-[-15px] right-0 bg-[#1f91d8] rounded text-white px-3 py-1 hover:bg-[#347af5] cursor-pointer '>Show More</div>
              </Link>
            </div>



            <Saticfy />

          </section>
          <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#1f91d8] text-white tracking-wide m-auto  mt-3 text-2xl shadow-lg'>  CATEGORIES</h1>
          <div className='bg-[#1f91d8] w-[90%] m-auto rounded-xl px-5 '>
            <Slider />
          </div>

          {/* <Contact/> */}
          <Footer />
        </>
      }
      {/* <Header  /> */}

    </>
  );

}

export default index










