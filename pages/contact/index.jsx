import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();


        const templateParams = {
            from_name: firstName + " " + lastName,
            to_name: "Homely Find",
            email: "Email: " + email,
            phoneNumber: "Phone Number: " + phone,
            message: message

        }
        emailjs.send('service_bo4cy0l', 'template_w4m08sa', templateParams, 'vzH3WDbnM4FQOJaYo')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (err) {
                console.log('FAILED...', err);
            });

        Swal.fire('Message Sent!')

        clearInput()
    }

    return (
        <>
            {/* <Header/> */}
            <Navbar />

            <div className="flex justify-center items-center  w-full bg-white ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form onSubmit={sendEmail}>

                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        required
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        required
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        required
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        required
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors &&
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                }
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">

                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Homely Find</h2>
                                    <p className="text-gray-400">Online Solution</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: +92 312 2320760</p>
                                    <p className="text-gray-400">Tel: +92 332 3231861</p>

                                    

                                    <div className='mt-5'>
                                        <h2 className="text-xl">Send an E-mail</h2>
                                        <p className="text-gray-400">Homelyfind1126@gmail.com</p>
                                    </div>

                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Contact;