import React, { useRef } from 'react'
import Link  from 'next/link'

const login = () => {
    // const [emailError, setemailError] = useState('')
    // const [passwordError, setpasswordError] = useState('')


    const emailRef = useRef()
    const passwordRef = useRef()

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
    }



    return (
        <>
            {/* <div className='bg-white shadow text-2xl font-bold p-2  shadow-gray-400'>
        <h1>Signup</h1>
      </div> */}
            <div className="flex min-h-full flex-1 flex-col justify-center   lg:px-8">


                <div className="p-6 bg-white  border border-gray-200  border-solid rounded-xl   sm:mx-auto sm:w-full sm:max-w-sm">

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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-[#ff7900] focus-visible:outline-[#ff7900]  sm:text-sm sm:leading-6"
                                />
                            </div>
                            {/* <div>{emailError && <p className='text-red-500 text-xs mt-1'>{emailError}</p>}</div> */}
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-[#ff7900] focus-visible:outline-[#ff7900] sm:text-sm sm:leading-6"
                                />
                            </div>
                            {/* <div>{passwordError && <p className='text-red-500 text-xs mt-1'>{passwordError}</p>}</div> */}

                        </div>
                        <div className='text-sm mt-5 text-gray-500'>
                              <Link href='/auth/signup'>If you don't have an account, <span className='text-[#ff7900]'> Signup</span></Link>
                            </div>
                       
                        <div className='flex justify-center'>
                            <button
                                type="submit"

                                className="flex w-full     justify-center rounded-md bg-[#ff7900] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ffa658] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
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
