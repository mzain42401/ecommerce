import React from 'react'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Slider from "react-slick";
import Swal from 'sweetalert2';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useData } from '@/firebase/dataContext'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image';
import user from '../../../public/user.png'
import { useAuth } from '@/firebase/authContext';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ]
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails({ Description, Discount, Pic1, Pic2, Pic3, coverImage, id, price, mainCategory, subCategory, productName, discounPrice, elem
}) {
  const [url, setUrl] = useState(null)
  const [url1, setUrl1] = useState(null)
  const [url2, setUrl2] = useState(null)
  const [url3, setUrl3] = useState(null)

  const { getImageURL, addCartData, addComment ,getCommentdata} = useData()
  const { authUser } = useAuth()
  const [comment, setcomment] = useState('')
  const [commetsData, setcommetsData] = useState('')


  useEffect(() => {
    async function mydata() {

      const commets=await getCommentdata(elem.id)
      setcommetsData(commets)
      const imgUrl = await coverImage
      if (imgUrl) {

        await getImageURL(imgUrl).then((url) => setUrl(url))
      }

    }

    mydata()
    async function mydata1() {

      const mypic1 = await Pic1
      if (mypic1) {

        await getImageURL(mypic1).then((url) => setUrl1(url))
      }
    }
    mydata1()

    async function mydata2() {

      const mypic2 = await Pic2
      if (mypic2) {

        await getImageURL(mypic2).then((url) => setUrl2(url))
      }
    }
    mydata2()
    async function mydata3() {
      const mypic3 = await Pic3
      if (mypic3) {
        await getImageURL(mypic3).then((url) => setUrl3(url))

      }
    }
    mydata3()


    


  }, [])

  const addNewComment = (e) => {
    e.preventDefault()

    addComment(comment, elem.id, authUser.username)
    // console.log(comment,elem.id)

  }


  const addData = () => {
    if (!authUser) {
      // alert("sign in now")
      Swal.fire('Please login your account!')
      return;
    }
    else{
      addCartData(elem, authUser)
    }

  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

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

  const data = [
    {

      img: url1,
    },
    {

      img: url2,
    },
    {

      img: url3,
    },
  ]

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className='cursor-pointer'>
                <div className="flex items-center">
                  <Link href={`/products/${mainCategory}`} className="mr-2 text-sm font-medium text-gray-900">
                    {mainCategory}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className='cursor-pointer'>
                <div className="flex items-center">
                  <Link href={`/products/${mainCategory}/${subCategory}`} className="mr-2 text-sm font-medium text-gray-900">
                    {subCategory}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <p className="font-medium text-gray-500 hover:text-gray-600">
                  {productName}
                </p>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={url3}
                alt='ProductImage'

              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={url1}
                  alt='ProductImage'

                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={url2}
                  alt='ProductImage'

                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={url}
                alt='ProductImage'

              />
            </div>
          </div>
          <div className='w-[95%] px-3 m-auto SpecificImageSlider hidden  rounded-lg bg-[#1f91d8]'>
            <div className='w-[90%]     m-auto'>
              <div className="mt-10  ">
                <Slider {...settings}>
                  {data.map((d) => (
                    <div key={d.url} className="  h-max  text-black p-2">
                      <div className='h-56    flex justify-center items-center rounded-t-xl'>

                        <img src={d.img} alt="hh" className="h-56 rounded-lg w-full  " />

                      </div>


                    </div>
                  ))}
                </Slider>
              </div>

            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productName}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              {
                Discount > 0 ? <><div className='w-max mb-2 bg-[#FF4041] px-4 rounded text-white'>Discount {Discount}%</div> <p className="text-3xl tracking-tight text-gray-900">Rs.{discounPrice}/-</p><p className="text-xl tracking-tight text-gray-400 line-through">Rs.{price}/-</p></> : <p className="text-3xl tracking-tight text-gray-900">Rs.{price}/-</p>
              }

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          commetsData.length> 0 ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-[#1f91d8] hover:text-[#1f91d8]">
                    {commetsData.length} reviews
                  </a>
                </div>
              </div>




              <button
                onClick={addData}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#1f91d8] px-8 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#1f91d8] focus:ring-offset-2"
              >
                <span className='text-3xl pr-4'><AiOutlineShoppingCart /></span>Add to Cart
              </button>

            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{Description}</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
      <section class="bg-gray-100 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-[#1f91d8]">Reviews </h2>
          </div>
          {

            authUser ? <form onSubmit={addNewComment} class="mb-6">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea onChange={(e) => setcomment(e.target.value)} value={comment} id="comment" rows="6"
                  class="px-0 w-full text-sm text-black border-0 focus:ring-0 focus:outline-none  "
                  placeholder="Write a comment..." required></textarea>
              </div>
              <button type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#1f91d8]">
                Post comment
              </button>
            </form> : null
          }

{
  commetsData.length>0?
  <>
  {
    commetsData.map((elem)=>{
      return(
        <>
        <article class="p-6 mb-3 text-base  border-t shadow-lg bg-white rounded-xl">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-[#1f91d8] font-semibold"><Image
                  class="mr-2 w-6 h-6 rounded-full"
                  src={user}
                  alt="Bonnie Green" />{elem.userName}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                  title="March 12th, 2022">{elem.date}</time></p>
              </div>

              
            </footer>
            <p class="text-gray-500 dark:text-gray-400">{elem.comment}</p>

          </article>
        </>
      )
    })
  }
  
  </>
  :<> <h1 className='text-gray-500 w-full text-center text-xl'>No Reviews</h1></>
}

          

        </div>
      </section>
    </>
  )
}
