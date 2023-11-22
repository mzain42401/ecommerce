import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Swal from 'sweetalert2';
import { updateDoc, deleteDoc } from 'firebase/firestore'
import { useAuth } from '@/firebase/authContext'
import { auth, db } from '@/firebase/firebase'
import { useData } from '@/firebase/dataContext'
import UserCart from '../components/usercart/UserCart'
import emailjs from '@emailjs/browser';

const index = () => {
  const { cartData, getShipingdata } = useData()
  const { authUser } = useAuth()
  const [cartdata, setcartdata] = useState([])
  const [wase, setwase] = useState(true)
  const [phone, setPhone] = useState('')
  const [address, setaddress] = useState('')
  const [freeshipping, setfreeshipping] = useState('')

  useEffect(() => {
    const shipping = async () => {
      getShipingdata().then((data) => setfreeshipping(data)).catch((err) => console.log(err))
    }
    shipping()
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const productsData = await cartData(user.uid)
        setcartdata(productsData)
      }
    })
  }, [])

  const increaseQty = (elem) => {
    let IncrementProduct;
    IncrementProduct = elem
    IncrementProduct.qty = elem.qty + 1
    IncrementProduct.totalPrice = elem.Discount > 0 ? IncrementProduct.qty * elem.discountPrice : IncrementProduct.qty * elem.price
    auth.onAuthStateChanged(async (user) => {
      const updateRef = doc(db, "cart " + user.uid, "id " + IncrementProduct.id);
      await updateDoc(updateRef, IncrementProduct);
    })
    setwase(!wase)
  }

  const deleteItem = (elem) => {
    auth.onAuthStateChanged(async (user) => {

      const delRef = doc(db, "cart " + user.uid, "id " + elem.id)
      await deleteDoc(delRef)
      window.location.reload()
    })
    setwase(!wase)

  }

  const dereaseQty = (elem) => {
    let decrementProduct;
    if (elem.qty > 1) {
      decrementProduct = elem
      decrementProduct.qty = elem.qty - 1
      decrementProduct.totalPrice = elem.Discount > 0 ? decrementProduct.qty * elem.discountPrice : decrementProduct.qty * elem.price
      auth.onAuthStateChanged(async (user) => {
        const updateRef = doc(db, "cart " + user.uid, "id " + decrementProduct.id);
        await updateDoc(updateRef, decrementProduct);
      })
    }
    setwase(!wase)
  }

  let totalprice = 0;

  // Iterate through the array and add the prices
  for (const obj of cartdata) {
    if (obj.price) {
      totalprice += obj.discountPrice ? obj.discountPrice * obj.qty : obj.price * obj.qty;
    }
  }



  const sendEmail = (e) => {
    e.preventDefault();

    const arrayString = cartdata.map(obj => `

    Product Name = ${obj.productName} ::

    Product Main Category = ${obj.mainCategory} ::

    Product Sub Category = ${obj.subCategory} ::

    product Quantity = ${obj.qty} ::

    product original Price = Rs.${obj.price}/- ::

    product Discount % = ${obj.Discount}% ::
    
    product Discount Price = Rs.${obj.discountPrice}/- ::

    
    
    product Total  Price = Rs.${obj.totalPrice}/- ::

    `).join('<------------Next Product------------>')

    const templateParams = {
      from_name: authUser.username,
      to_name: "Homely Find",
      email: "Email: " + authUser.email,
      phoneNumber: "Phone Number: " + phone,
      address: "Address: " + address,
      message: arrayString,
      shipping:    ` Shipping =Rs.${totalprice>freeshipping.freeamount?"Free":freeshipping.feeamount}/-`,
      total: `Grand Total = Rs.${totalprice > freeshipping.freeamount?totalprice:totalprice+freeshipping.feeamount}/-  `
    }
    emailjs.send('service_429ubk1', 'template_8k2u4bd', templateParams, 'vzH3WDbnM4FQOJaYo')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });

    setPhone('')
    setaddress('')
    Swal.fire('Successfully Order Placed!')

  }


  return (
    <div>

      <Navbar />
      <section class="py-10 bg-gray-100 font-poppins ">
        <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div>
            <h2 class="mb-8 text-4xl font-bold text-gray-800">Your Cart</h2>
            <div class="p-6 mb-8 border bg-gray-50 ">
              <div class="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                </div>
                <div class="hidden px-4 lg:block lg:w-2/12">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                </div>
                <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
                </div>
                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400"> Subtotal</h2>
                </div>
              </div>
              <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                {
                  cartdata.length > 0 ?
                    cartdata.map((elem) => {
                      return (
                        <>
                          <UserCart coverImg={elem.coverImage}
                            productName={elem.productName}
                            mainCategory={elem.mainCategory}
                            discountPrice={elem.discountPrice}
                            price={elem.price}
                            elem={elem}
                            qty={elem.qty}
                            totalPrice={elem.totalPrice}
                            deleteItem={deleteItem}
                            increaseQty={increaseQty}
                            dereaseQty={dereaseQty}

                          />
                        </>
                      )
                    }) : <h1 className='text-center'>Your cart is empty </h1>
                }
              </div>

              {/* ============================================ */}
            </div>

            {
              cartdata.length > 0 ?
                <>
                  <div class="flex flex-wrap justify-center">

                    <div class="w-full px-4 mb-4 lg:w-1/2 ">
                      <div class="p-6 border border-blue-100 bg-gray-300 rounded  md:p-8">
                        <h2 class="mb-8 text-3xl font-bold  text-gray-900">Order Summary</h2>
                        <div
                          class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                          <span class=" text-gray-900">Subtotal</span>
                          <span class="text-xl font-bold text-gray-900 ">Rs.{totalprice}/- </span>
                        </div>
                        <div class="flex items-center justify-between pb-4 mb-4 ">
                          <span class=" text-gray-900 ">Shipping</span>
                          <span class="text-xl font-bold  text-gray-900 ">{totalprice > freeshipping.freeamount ? "Free" : freeshipping.feeamount}</span>
                        </div>
                        <div class="flex items-center justify-between pb-4 mb-4 ">
                          <span class=" text-gray-900">Order Total</span>
                          <span class="text-xl font-bold text-gray-900">Rs.{totalprice > freeshipping.freeamount ? totalprice : totalprice+freeshipping.feeamount}/-</span>
                        </div>

                        <div className='text-center text-gray-500 text-xs'>WE OFFER FREE SHIPPING ON ALL ORDERS ABOVE RS.{freeshipping.amount}/-</div>
                        <div class="flex items-center justify-between ">
                          <form onSubmit={(e) => sendEmail(e)} className='w-full'>

                            <div ><input value={phone} onChange={(e) => setPhone(e.target.value)} className='bg-gray-200 outline-none p-2 shadow-lg border w-full my-4 rounded-lg' placeholder='Enter your phone number' required type="number" /></div>
                            <div ><textarea value={address} onChange={(e) => setaddress(e.target.value)} className='bg-gray-200 outline-none p-4 shadow-lg border w-full my-4 rounded-lg' placeholder='Enter your address on which you will receive your products.' required cols="30" rows="10"></textarea></div>

                            {
                              cartdata.length == 0 ?
                                <button
                                  disabled={true}
                                  class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#1f91d8] rounded hover:bg-blue-800">Order Now</button> :
                                <button
                                  type='submit'
                                  class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#1f91d8] rounded hover:bg-blue-800">Order Now</button>
                            }
                          </form>


                        </div>
                      </div>
                    </div>
                  </div>
                </> : null
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
