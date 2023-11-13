import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import sliderImg1 from '../../../public/banner/img (1).png'
import sliderImg2 from '../../../public/banner/img (2).png'
import sliderImg3 from '../../../public/banner/img (3).png'
import sliderImg5 from '../../../public/banner/img (5).png'
import Link from 'next/link';



import Image from 'next/image';
function ImageSlider() {
  const slides = [
    {
      img: sliderImg3,
      url: "products/Home & Living"

    },


    
    {
      img: sliderImg5,
      url: "products/Electronic Accessories"

    },
    {
      img: sliderImg1,
      url: "products/Kitchen Accessories"

    },
    {
      img: sliderImg2,
      url: "products/Décor"

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;




  const sliderTomeout = setTimeout(sliderFunc, 4000);
  function sliderFunc() {
    setCurrentIndex(newIndex)
  }

  return (
    <div className=' h-max '>
      <div
        className='  bg-center bg-cover duration-500'

      >
        <Link href={slides[currentIndex].url}>
          <Image className='imgslider' src={slides[currentIndex].img} />
        </Link>
      </div>
      {/* Left Arrow */}
      {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div> */}
      {/* Right Arrow */}
      {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ImageSlider;