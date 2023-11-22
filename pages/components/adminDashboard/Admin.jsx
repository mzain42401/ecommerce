import React, { useEffect, useState } from 'react'
import { useData } from '@/firebase/dataContext'

const index = ({ editProduct, coverImage, elem, subCategory, productName, price, mainCategory, id, Discount, discountPrice }) => {

    const { getImageURL ,deleteProduct} = useData()
    const [url, setUrl] = useState(null)
    const editItem = (elem) => {
        editProduct(elem)
    }
    const deleted = async (elem) => {
       await deleteProduct(elem.id)
    }

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
                                Discount > 0 ?
                                    <p className="text-sm leading-6 text-red-500 "><span> -{Discount}%</span> <span className='text-gray-400 line-through'> {price}</span>  Rs.{discountPrice}/-</p> :
                                    <p className="text-sm leading-6 text-gray-900 ">Rs.{price}/-</p>
                            }
                            <div className="mt-1 text-center  flex items-center gap-x-1.5">
                                <p onClick={() => editItem(elem)} className='text-xs leading-5 text-gray-500 hover:text-black hover:cursor-pointer hover:underline'>Edit </p>
                                <span className='text-xs leading-5 text-gray-500'> / </span>
                                <p onClick={() => deleted(elem)} className="text-xs leading-5 text-gray-500 hover:text-black hover:cursor-pointer hover:underline">Delete</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default index










