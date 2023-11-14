import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useData } from '@/firebase/dataContext'
const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]
const index = ({ coverImage, subCategory, productName, price, mainCategory, id, Discount,discountPrice }) => {

    const [getter, setter] = useState([])
    const { getImageURL } = useData()
    const [url, setUrl] = useState(null)



    useEffect(() => {
        async function mydata() {
            const imgUrl = await coverImage
            await getImageURL(imgUrl).then((url) => setUrl(url))
        }
        mydata()
    }, [])
    return (
        <>
            <div>
                <ul role="list" className=" divide-y adminData w-[65%] m-auto divide-gray-100">

                    <li key={id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={url} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{productName}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{mainCategory} / {subCategory}</p>
                            </div>
                        </div>
                        <div className=" shrink-0 flex  flex-col  items-end">
                            {
                                Discount>0 ?
                                    <p className="text-sm leading-6 text-red-500 "><span> -{Discount}%</span> <span className='text-gray-400 line-through'> {price}</span>  Rs.{discountPrice}/-</p> :
                                    <p className="text-sm leading-6 text-gray-900 ">Rs.{price}/-</p>
                            }
{/* 
                            <div className="mt-1 text-center  flex items-center gap-x-1.5">
                                   <p className='text-xs leading-5 text-gray-500 hover:text-black hover:cursor-pointer hover:underline'>Edit </p>
                                <span className='text-xs leading-5 text-gray-500'> / </span>
                                <p className="text-xs leading-5 text-gray-500 hover:text-black hover:cursor-pointer hover:underline">Delete</p>
                            </div> */}



                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default index










