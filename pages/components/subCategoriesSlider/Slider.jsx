import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../../../public/subCategories/1.png'
import sliderImg2 from '../../../public/subCategories/2.png'
import sliderImg3 from '../../../public/subCategories/3.png'
import sliderImg5 from '../../../public/subCategories/5.png'
import sliderImg6 from '../../../public/subCategories/6.png'
import sliderImg7 from '../../../public/subCategories/7.png'
import sliderImg8 from '../../../public/subCategories/8.png'
import sliderImg9 from '../../../public/subCategories/9.png'
import sliderImg10 from '../../../public/subCategories/10.png'
import sliderImg11 from '../../../public/subCategories/11.png'



import Image from "next/image";
import Link from "next/link";


function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
            ]
    };
    return (
        <div className='w-[90%] m-auto'>
            <div className="mt-10  ">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.url } className="  h-max  text-black p-2">
                            <div className='h-56    flex justify-center items-center rounded-t-xl'>
                                <Link href={d.url}>
                                <Image src={d.img} alt="" className="h-56 rounded-lg w-full  " />
                                </Link>
                            </div>

                            
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

const data = [
    {
        
        img: sliderImg1,
        url:'/products/Décor/Home Décor',
    },
    {
        
        img: sliderImg2,
        url:'/products/Baby, Kids & Toys/Baby Products',
    },
    {
        
        img: sliderImg3,
        url:'/products/Baby, Kids & Toys/Education Toys',
    },
    
    {
        
        img: sliderImg5,
        url:'/products/Electronic Accessories/Machines',
    },
    {
        
        img: sliderImg6,
        url:'/products/Cleaning Products/Brush',
    },
    {
        
        img: sliderImg7,
        url:'/products/Electronic Accessories/Mouse Pad',
    },
    {
        
        img: sliderImg8,
        url:'/products/Décor/Lighting',
    },
    {
        
        img: sliderImg9,
        url:'/products/Electronic Accessories/Car Accessories',
    },
    {
        
        img: sliderImg10,
        url:'/products/Décor/Wall Stickers',
    },
    ,{
        
        img: sliderImg11,
        url:'/products/Décor/Lighting',
    },

];

export default App;