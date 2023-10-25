import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const shoppingPolicy = () => {
  return (
    <>
      
      <Header/>

      <div className="bg-gray-200 min-h-screen py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">shopping Policy</h1>
        <p className="text-gray-700 mb-4">
        Orders received on Sundays and on Pakistan's National Holidays will be processed 
and shipped on the next working day.
Orders are typically processed and shipped within 3 to 5 working days (No 
delivery on Sundays). Delivery times may vary depending on the destination and 
shipping method selected.
       </p>
        <p className="text-gray-700 mb-4">
        Customers are responsible for providing accurate shipping information. Please 
double-check your shipping address during checkout. In case of an incorrect 
address, the customer is responsible for any additional shipping costs incurred.
If you have any questions or concerns regarding our shipping policy, please 
contact us at [0332-3231861 OR 0312-2320760].
        </p>
        <p className="text-gray-700 mb-4">
            
We confirm each order via Call/SMS Or WhatsApp from our Customer Service 
Representative if you are a new customer.
We reserve the right to update or change our shipping policy at any time. Any 
changes will be posted on this page.
        </p>
      </div>
    </div>

      

      <Footer/>
    </>
  )
}

export default shoppingPolicy
