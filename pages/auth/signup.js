import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { auth, db } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuth } from '@/firebase/authContext'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar/Navbar'
import { doc, setDoc } from 'firebase/firestore'


const Signup = () => {
    const route = useRouter()
    const { authUser, isLoading, setAuthUser } = useAuth()

    useEffect(() => {
        if (authUser) {
            route.push("/")
        }
    }, [authUser])
    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const onFormSubmit = async (e) => {
        e.preventDefault()
        const fullName = fullNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user.user.uid);
            await updateProfile(auth.currentUser, {
                displayName: fullName
            })
            try {
                await setDoc(doc(db, 'users', user.user.uid), {
                    uid: user.user.uid,
                    email: user.user.email,
                    username: fullName

                })
            } catch (error) {
                console.log(error);
            }

            setAuthUser({
                uid: user.uid,
                email: user.email,
                username: fullName


            })
            route.push('/')
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setemailError("User already exists.")
                setTimeout(() => {
                    setemailError('')
                }, 3000)
                return;
            }

            else if (err.code === 'auth/weak-password') {
                setpasswordError("must have 6 character")
                setTimeout(() => {
                    setpasswordError('')
                }, 3000)
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex  min-h-full flex-1 flex-col justify-center  lg:px-8">
                <div className="p-6 bg-white  border border-gray-200  border-solid rounded-xl mx-4  mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onFormSubmit} >
                        <div>
                            <div className="mt-2">
                                <input
                                    id="text"
                                    placeholder='Full Name'
                                    name="text"
                                    type="text"
                                    ref={fullNameRef}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-[#1f91d8] focus-visible:outline-[#1f91d8]  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
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
                            <div>{emailError && <p className='text-red-500 text-xs mt-1'>{emailError}</p>}</div>
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
                            <div>{passwordError && <p className='text-red-500 text-xs mt-1'>{passwordError}</p>}</div>
                        </div>
                        <div className='text-sm mt-5 text-gray-500'>
                            <Link href='/auth/login'>If you have an account, <span className='text-[#1f91d8]'> Login</span></Link>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"

                                className="flex w-full     justify-center rounded-md bg-[#1f91d8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup



