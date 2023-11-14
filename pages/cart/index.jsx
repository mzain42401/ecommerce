// import React from 'react'
// import Header from '../components/header/Header'
// import Navbar from '../components/Navbar/Navbar'
// import { HiArrowLeft, HiArrowRight, HiOutlineTrash } from 'react-icons/hi'

// const index = () => {

//   return (
//     <>
//       {/* <Header/> */}
//       <Navbar />

//       {/* <div className='m-auto cartdiv bg-red-300 w-[50%] flex justify-center items-center flex-col mt-6'>

// <div className=' w-full flex justify-center'>
//   <img className='w-56  h-56 mx-10' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//   <div className='flex flex-col justify-between py-6'>
//     <div className='text-2xl capitalize'>
//       name hkjhkjhk kjhkjhjk jhkjhjkk njkj jkhjkjk njk
//     </div>
//     <div className='flex  items-center'>
//       <span><button className='mx-3 flex justify-center text-xl  items-center rounded bg-gray-100 p-2 h-10 w-10 '><HiArrowLeft/></button></span>
//       <span className=' text-xl'>1</span>
//       <span><button className=' mx-3 flex justify-center items-center text-xl rounded bg-gray-400 p-2 h-10 w-10'><HiArrowRight/></button></span>

//     </div>
//     <div>
//       <button className='flex justify-center items-center bg-blue-900 px-10 py-2 text-xl text-white  rounded'>Remove <span className='mx-4'> <HiOutlineTrash/></span></button>
//     </div>
//   </div>


// </div>

//    </div>

//  */}

//       <div className="bg-gray-100">
//         <div className="container mx-auto mt-10">
//           <div className="flex shadow-md my-10">
//             <div className="w-3/4 bg-white px-10 py-10">
//               <div className="flex justify-between border-b pb-8">
//                 <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//                 <h2 className="font-semibold text-2xl">3 Items</h2>
//               </div>

//               {/* Example product items */}
//               {/* You can map through actual products here */}
//               zai ali
//               {/* Sample product 1 */}
//               <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//                 {/* Product details */}
//                 999
//               </div>

//               {/* Sample product 2 */}
//               <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//                 {/* Product details */}
//                 hjdajgdahdgj
//               </div>

//               {/* Sample product 3 */}
//               <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//                 {/* Product details */}
//                 kjhjksshdjkahdkj
//               </div>

//               {/* Continue Shopping link */}
//               <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
//                 {/* Continue Shopping icon */}
//                 Continue Shopping
//               </a>
//             </div>

//             <div id="summary" className="w-1/4 px-8 py-10 bg-gray-200">
//               <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//               <div className="flex justify-between mt-10 mb-5">
//                 <span className="font-semibold text-sm uppercase">Items 3</span>
//                 <span className="font-semibold text-sm">$590</span>
//               </div>
//               <div>
//                 <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//                 <select className="block p-2 text-gray-600 w-full text-sm">
//                   <option>Standard shipping - $10.00</option>
//                 </select>
//               </div>

//               <div className="border-t mt-8">
//                 <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                   <span>Total cost</span>
//                   <span>$600</span>
//                 </div>
//                 <button className="bg-blue-900 font-semibold hover:bg-blue-800 rounded  py-3 text-sm text-white uppercase w-full">Checkout</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </>
//   )
// }

// export default index








// import React, { useState } from 'react';
// import Navbar from '../components/Navbar/Navbar';

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Iphone 6S',
//       brand: 'Apple',
//       price: 400.00,
//       quantity: 1,
//       image: 'https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'
//     },
//     {
//       id: 2,
//       name: 'Xiaomi Mi 20000mAh',
//       brand: 'Xiaomi',
//       price: 40.00,
//       quantity: 1,
//       image: 'https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw'
//     },
//     {
//       id: 3,
//       name: 'Airpods',
//       brand: 'Apple',
//       price: 150.00,
//       quantity: 1,
//       image: 'https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v'
//     }
//   ]);

//   const incrementQuantity = (id) => {
//     const updatedCart = cartItems.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   };

//   const decrementQuantity = (id) => {
//     const updatedCart = cartItems.map(item => {
//       if (item.id === id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='flex w-full flex-wrap justify-between items-center  '>





//         <div className=" w-[90%] m-auto ">
//           <div className="container mx-auto mt-10">
//             <div className=" my-10 sm:flex flex-col">
//             <p className='w-full bg-red-900 flex   justify-evenly'>  <p>name </p> <p>mmmm</p> <p> jjjj</p> <p>kjhkjkj</p></p>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex flex-col sm:flex-row items-center hover:bg-gray-100 sm:-mx-8 px-6 py-5">

//                   <div className="w-full sm:w-2/5 sm:flex p-3">
//                     <div className="w-32 ">
//                       <img className="h-24 w-32" src={item.image} alt={item.name} />
//                     </div>
//                     <div className="flex flex-col justify-between ml-4 sm:flex-grow">
//                       <span className="font-bold text-sm">{item.name}</span>
//                       <span className="text-red-500 text-xs">{item.brand}</span>
//                       <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">
//                         Remove
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex justify-center sm:w-1/5">
//                     <button onClick={() => decrementQuantity(item.id)} className="bg-gray-200 px-2 py-1 mr-2">-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => incrementQuantity(item.id)} className="bg-gray-200 px-2 py-1 ml-2">+</button>
//                   </div>


//                   <span className="text-center sm:w-1/5 font-semibold text-sm">Rs.{item.price.toFixed(2)}/-</span>

//                   <span className="text-center sm:w-1/5 font-semibold text-sm">Rs.{(item.price * item.quantity).toFixed(2)}/-</span>
//                 </div>
//               ))}
//               {/* ... */}
//             </div>
//           </div>
//         </div>
//         <div id="summary" className=" px-8 py-10 bg-gray-200 m-auto">
//           <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Items 3</span>
//             <span className="font-semibold text-sm">Rs.590/-</span>
//           </div>
//           <div>
//             <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//             <select className="block p-2 text-gray-600 w-full text-sm">
//               <option>Standard shipping - $10.00</option>
//             </select>
//           </div>

//           <div className="border-t mt-8">
//             <div className="flex font-semibold justify-between py-6 text-sm ">
//               <span>Total cost</span>
//               <span>Rs.600/-</span>
//             </div>
//             <button className="bg-blue-900 font-semibold hover:bg-blue-800 rounded   py-3 text-sm text-white uppercase w-full">Order Now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShoppingCart;




import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Swal from 'sweetalert2';
import { collection, doc, getDocs, query, updateDoc, deleteDoc } from 'firebase/firestore'
import { useAuth } from '@/firebase/authContext'
import { auth, db } from '@/firebase/firebase'
import { useData } from '@/firebase/dataContext'
import UserCart from '../components/usercart/UserCart'
import emailjs from '@emailjs/browser';





const index = () => {
  const { cartData, increment, getImageURL } = useData()
  const { authUser } = useAuth()

  const [cartdata, setcartdata] = useState([])
  const [wase, setwase] = useState(true)
  const [phone, setPhone] = useState('')
  const [address, setaddress] = useState('')






  useEffect(() => {

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

    // let {,discountPrice,mainCategory,subCategory,totalPrice,price,productName,qty}=cartdata[0]
    const templateParams = {
      from_name: authUser.username,
      to_name: "Homely Find",
      email: "Email: " + authUser.email,
      phoneNumber: "Phone Number: " + phone,
      address: "Address: " + address,
      message: arrayString,
      total: `Grand Total = Rs.${totalprice}/-  `
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
                          <span class="text-xl font-bold  text-gray-900 ">Free</span>
                        </div>
                        <div class="flex items-center justify-between pb-4 mb-4 ">
                          <span class=" text-gray-900">Order Total</span>
                          <span class="text-xl font-bold text-gray-900">Rs.{totalprice}/-</span>
                        </div>

                        <div class="flex items-center justify-between ">
                          <form onSubmit={(e) => sendEmail(e)} className='w-full'>

                            <div ><input value={phone} onChange={(e) => setPhone(e.target.value)} className='bg-gray-200 outline-none p-2 shadow-lg border w-full my-4 rounded-lg' placeholder='Enter your phone number' required type="number" /></div>
                            <div ><textarea value={address} onChange={(e) => setaddress(e.target.value)} className='bg-gray-200 outline-none p-4 shadow-lg border w-full my-4 rounded-lg' placeholder='Enter your address on which you will receive your products.' required cols="30" rows="10"></textarea></div>

                            {
                              cartdata.length == 0 ?
                                <button
                                  disabled={true}
                                  class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-900 rounded hover:bg-blue-800">Order Now</button> :
                                <button
                                  type='submit'
                                  class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-900 rounded hover:bg-blue-800">Order Now</button>
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
