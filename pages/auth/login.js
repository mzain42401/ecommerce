import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '../components/header/Header'
import { FcGoogle } from "react-icons/fc"
import { auth } from '@/firebase/firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useAuth } from '@/firebase/authContext'
import {  useRouter } from 'next/router'
import Loader from '../components/loader/Loader'
import Navbar from '../components/Navbar/Navbar'
const provider = new GoogleAuthProvider()
const login = () => {
    const route=useRouter()
    const [Error, setError] = useState('')
const {authUser, isLoading}=useAuth()

useEffect(()=>{
    if (!isLoading && authUser) {
        route.push("/")
    }
},[authUser,isLoading])

    const emailRef = useRef()
    const passwordRef = useRef()

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        try{
             const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
        }catch(err){
            if (err.code=== "auth/invalid-login-credentials") {
                setError('Wrong email or password')
                setTimeout(()=>{
                    setError('')
                }, 3000)
                return;
            }
        }
       
    }

    const signInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            console.log(user);
        } catch (err) {
            console.log(err);
        }

    }

    return isLoading || (!isLoading && !!authUser) ? (
        <Loader />
    ) :  (
        <>
            {/* <div className='bg-white shadow text-2xl font-bold p-2  shadow-gray-400'>
        <h1>Signup</h1>
      </div> */}
            {/* <Header /> */}
            <Navbar/>
            <div className="flex min-h-full flex-1 flex-col justify-center  mt-20  lg:px-8">


                <div className="p-6 bg-white mx-4  border border-gray-200  border-solid rounded-xl   sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" onSubmit={onFormSubmit} >
                        <div>

                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    ref={emailRef}
                                    placeholder='Email'
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-blue-900 focus-visible:outline-blue-900  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>

                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    ref={passwordRef}
                                    type="password"
                                    placeholder='Password'
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-blue-900 focus-visible:outline-blue-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>{Error && <p className='text-red-500 text-xs mt-1'>{Error}</p>}</div>

                        </div>
                        <div className='text-sm mt-5 text-gray-500'>
                            <Link href='/auth/signup'>If you don't have an account, <span className='text-blue-900'> Signup</span></Link>
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type="submit"

                                className="flex w-full     justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                {/* <div className='flex justify-center' onClick={signInWithGoogle}>
                    <button
                        type="submit"

                        className="flex  mt-5   justify-center items-center rounded-md bg-white  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:shadow-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700  sm:mx-auto sm:w-full sm:max-w-sm "
                    >
                        <span className='mx-5 text-2xl' ><FcGoogle /></span>
                        Login with Google
                    </button>
                </div> */}
            </div>

        </>
    )
}

export default login

