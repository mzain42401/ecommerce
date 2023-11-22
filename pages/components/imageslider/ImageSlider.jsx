import React, { useState } from 'react';
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
        className='  bg-center bg-cover duration-500 '
      >
        <Link href={slides[currentIndex].url}>
          <Image className='imgslider w-full' src={slides[currentIndex].img} />
        </Link>
      </div>
     
    </div>
  );
}

export default ImageSlider;