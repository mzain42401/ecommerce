import React from 'react'
import Header from './components/header/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './components/productCard/ProductCard';
import Footer from './components/footer/Footer';
import Contact from './contact';
import ImageSlider from './components/imageslider/ImageSlider';
import Category from './components/category/Category';
import { useAuth } from '@/firebase/authContext';
import Navbar from './components/Navbar/Navbar';

const index = () => {
  
  const {authUser,isLoading,signOut,setAuthUse}=useAuth()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    {/* <Header  /> */}
    <Navbar/>
    {/* <div>
      <h2>Custom Slides</h2>
      <Slider {...settings}>
        <CustomSlide index={1} />
        <CustomSlide index={2} />
        <CustomSlide index={3} />
        <CustomSlide index={4} />
        <CustomSlide index={5} />
        <CustomSlide index={6} />
      </Slider>
    </div> */}
    <ImageSlider/>
    {/* CardSection */}
    <section className='mt-20  '>
    <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> POPULAR CATEGORIES</h1>

      <Category/>
    </section>
    <section className='mt-20  '>
    <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> POPULAR PRODUCTS</h1>

    <div className='flex justify-center items-center flex-wrap mt-2'>
      
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     </div>
     <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> OUR BEST SELLS</h1>


     <div className='flex justify-center items-center flex-wrap mt-2'>
      
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     
     </div>
    </section>

    {/* <Contact/> */}
    <Footer/> 
    </>
  );

}

export default index










