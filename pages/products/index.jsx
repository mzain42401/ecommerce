import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/productCard/ProductCard'

const index = () => {
  return (
    <div>
      <Header/>
      <div className='flex justify-center items-center  flex-wrap'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default index
