import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-[#1f91d8] focus-visible:outline-[#1f91d8]  sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-[#1f91d8] focus-visible:outline-[#1f91d8] sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>{Error && <p className='text-red-500 text-xs mt-1'>{Error}</p>}</div>
                        </div>
                        <div className='text-sm mt-5 text-gray-500'>
                            <Link href='/auth/signup'>If you don't have an account, <span className='text-[#1f91d8]'> Signup</span></Link>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"

                                className="flex w-full     justify-center rounded-md bg-[#1f91d8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default login

