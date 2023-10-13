import React from 'react'
import Header from './components/header/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './components/productCard/ProductCard';
import Footer from './components/footer/Footer';
import Contact from './contact/Contact';
import ImageSlider from './components/imageslider/ImageSlider';
import Category from './components/category/Category';

const index = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <Header/>
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
    <h1 className='heading px-4'> <span>POPULAR CATEGORIES</span></h1>

      <Category/>
    </section>
    <section className='mt-20  '>
      <h1 className='heading px-4'> <span>POPULAR PRODUCTS </span></h1>
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
     <h1 className='heading px-4'> <span> OUR BEST SELLERS</span></h1>

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










