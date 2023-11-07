import React, { useEffect, useState } from 'react'
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
import { useData } from '@/firebase/dataContext';
import Loader from './components/loader/Loader';
import Saticfy from './components/satisfy/Saticfy';
import Slider from './components/subCategoriesSlider/Slider';

const index = () => {
  const [getter, setter] = useState([])
  const { authUser, isLoading, signOut, setAuthUse, products } = useAuth()
  const { getdata } = useData()

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

  return (
    <>
      {
        getter.length === 0 ? <Loader />:<>
        <Navbar />

        <ImageSlider />
        {/* CardSection */}
        <section className='mt-20  '>
          <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> POPULAR CATEGORIES</h1>

          <Category />
        </section>
        <section className='mt-20  '>
          
          <h1 className='heading  text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto my-4 text-2xl shadow-lg'> OUR BEST SELLS</h1>


          <div className='flex justify-center items-center flex-wrap mt-2'>

            { getter.slice(0, 10).map((elem) => {
              return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id}  />
            })}



          </div>
          <Saticfy/>

        </section>
        <h1 className='heading text-center font-extrabold w-max py-2 px-6 rounded-lg bg-[#013289] text-white tracking-wide m-auto  mt-3 text-2xl shadow-lg'>  CATEGORIES</h1>
<div className='bg-blue-900 w-[90%] m-auto rounded-xl px-5 '>
<Slider/>
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










