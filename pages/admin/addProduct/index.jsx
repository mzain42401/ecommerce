import React, { useState } from 'react'
import Link from 'next/link'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import { useData } from '@/firebase/dataContext'

export default function Example() {
const {publishDoc}=  useData()
  const [productName, setProductName] = useState('')
  const [price,setPrice]=useState()
  const [Discount,setDiscount]=useState(0)

  const [productDiscription, setProductDiscription] = useState('')
  const [mainCategory, setMainCategory] = useState()

  const [subCategory, setSubCategory] = useState()
  const [CoverPic,setCoverPic]=useState()
  const [Pic1,setPic1]=useState()
  const [Pic2,setPic2]=useState()
  const [Pic3,setPic3]=useState()



  const addProduct = async(e) => {
    e.preventDefault()
    if (!mainCategory || !subCategory) {
      alert("Select Categgories")
      return
    }
    await publishDoc(productName,+price,productDiscription,mainCategory,subCategory,CoverPic,Pic1,Pic2,Pic3,+Discount)
    


  }
  return (

    <>

      <nav className='flex justify-between items-center shadow-lg shadow-gray-300 px-4 '>
        <div><Image className='w-24 h-24' src={logo} /></div>
        <div className='bg-red-900 text-white px-6 py-2 rounded-full'><Link href='/admin'>Back To Dashboard</Link> </div>
      </nav>


      <form onSubmit={addProduct} className=' w-[90%] sm:w-[70%] border p-4 border-gray-300 rounded-lg mb-20 m-auto mt-10'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Add Product</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="product name"
                      required

                    />

                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Maximum 30 character .</p>

                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Discription
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    value={productDiscription}
                    onChange={(e) => setProductDiscription(e.target.value)}
                    placeholder='Product Discription...'
                    required
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Price
                </label>
                <div className="mt-2">
                  <input
                  type='number'
                    className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='Product Price'
                    required
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write product price.</p>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Discount %
                </label>
                <div className="mt-2">
                  <input
                  type='number'
                    className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    value={Discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder='Discount %'
                    
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Optional.</p>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Main Category
                </label>
                <div className="mt-2">
                  <select


                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={mainCategory}
                    onChange={(e) => setMainCategory(e.target.value)}

                    required
                  >
                    <option>Customize Product</option>
                    <option>Home & Living</option>
                    <option>Kitchen Accessories</option>
                    <option>Cleaning Products</option>
                    <option>Organizer's</option>
                    <option>Mobile Accessories</option>
                    <option>Women's Fashion</option>
                    <option>Men's Fashion</option>
                    <option>Jewellery</option>
                    <option>Décor</option>
                    <option>Electronic Accessories</option>
                    <option>Baby, Kids & Toys</option>



                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Product SubCategory
                </label>
                <div className="mt-2">
                  <select

                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                  >
                    <option>Baby Products</option>
                    <option>Education Toys</option>
                    <option>Books</option>
                    <option>Machines</option>
                    <option>Cleaning Brush</option>
                    <option>Mouse Pad</option>
                    <option>Lights & Bulbs</option>
                    <option>Car Accessories</option>
                    <option>Wall Stickers</option>
                    <option>Lighting</option>
                    <option>Home Décor</option>
                    <option>Earrings</option>
                    <option>Necklaces</option>
                    <option>Rings</option>
                    <option>Bracelets</option>
                    <option>Hair Accessories</option>
                    <option>Anklets</option>
                    <option>Sets</option>
                    <option>Cosmetic Accessories</option>
                    <option>Perfumes</option>
                    <option>Purse</option>
                    <option>Makeup Organizers</option>
                    <option>Health & Fitness</option>
                    <option>Mobile Holder & Stand</option>
                    <option>Cable Clip</option>
                    <option>Earbuds</option>
                    <option>Cleaning Brush</option>
                    <option>Hand Free</option>
                    <option>Bluetooth</option>
                    <option>Cosmetic</option>
                    <option>Racks</option>
                    <option>Tissue</option>
                    <option>Jewelry</option>
                    <option>Socks</option>
                    <option>Drawer</option>
                    <option>Cloths</option>
                    <option>Shoe</option>
                    <option>Washing Machine</option>
                    <option>Mop</option>
                    <option>Brush</option>
                    <option>Scrubber</option>
                    <option>Towel</option>
                    <option>Duster</option>
                    <option>Glass & Mug Stand</option>
                    <option>Food Storage & Dispensers</option>
                    <option>Cooking Tools</option>
                    <option>Chopper & Graters</option>
                    <option>Mugs & Cups</option>
                    <option>Spice Containers</option>
                    <option>Cutlery Holders</option>
                    <option>Bathroom</option>
                    <option>Dispensers</option>
                    <option>Hangers</option>
                    <option>Basket</option>
                    <option>Hooks</option>
                    <option>Dustbins</option>
                    <option>Covers</option>
                    <option>Storage & Organizers</option>
                    <option>Bags</option>
                    <option>Locket</option>
                    <option>Watches</option>
                    <option>Bottle</option>
                    <option>Pen</option>
                    <option>Table Clock</option>
                    <option>Others</option>





                  </select>
                </div>
              </div>


              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Product cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4  flex text-sm leading-6 text-gray-600">


                      <input onChange={(e)=>setCoverPic(e.target.files[0])} id="file-upload" name="file-upload" type="file" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-0 text-sm font-medium  text-gray-900">
            Product  photo
          </div>
          <div className='flex  flex-wrap items-center justify-center '>

            <div className="mt-2   mx-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">

                  <input onChange={(e)=>setPic1(e.target.files[0])} id="file-upload" name="file-upload" type="file" />

                </div>

              </div>
            </div>
            <div className="mt-2   mx-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">

                  <input onChange={(e)=>setPic2(e.target.files[0])} id="file-upload" name="file-upload" type="file" />

                </div>

              </div>
            </div>



            <div className="mt-2   mx-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">

                  <input onChange={(e)=>setPic3(e.target.files[0])} id="file-upload" name="file-upload" type="file" />

                </div>

              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
