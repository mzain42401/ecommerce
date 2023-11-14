import React from 'react'
import Header from '../components/header/Header'
import { useAuth } from '@/firebase/authContext'
import Loader from '../components/loader/Loader'
import Navbar from '../components/Navbar/Navbar'
const index = () => {
const {authUser, isLoading,setAuthUser}=useAuth()
console.log(isLoading);
// const {username,email,uid}=authUser;
// console.log(username);

  return isLoading || (!isLoading && !authUser) ? (
    <Loader />
) :   (
    <>
    {/* <Header/> */}
<Navbar/>

    <div className='w-3/4 m-auto mt-4'>
      <div className="px-4 sm:px-0">
        <div>
          <img className='h-36 w-36 rounded-full border-2 border-gray-300 ' src='https://cdn-icons-png.flaticon.com/512/2815/2815428.png' alt="" />
        </div>
      </div>
      <div className="mt-6 border-t border-gray-300">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{authUser.username}</dd>
          </div>
       
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{authUser.email}</dd>
          </div>
          
          
        </dl>
      </div>
    </div>
  

    </>
  )
}

export default index
