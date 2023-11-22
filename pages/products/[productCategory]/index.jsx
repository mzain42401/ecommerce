import { useData } from '@/firebase/dataContext'
import Navbar from '@/pages/components/Navbar/Navbar'
import Footer from '@/pages/components/footer/Footer'
import Loader from '@/pages/components/loader/Loader'
import ProductCard from '@/pages/components/productCard/ProductCard'
import Saticfy from '@/pages/components/satisfy/Saticfy'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const index = () => {
  const router = useRouter()
  const { productCategory } = router.query
  const [isload, setisload] = useState(true)
  const [getter, setter] = useState([])
  const { getdata } = useData()

  useEffect(() => {
    setTimeout(() => {
      setisload(false)
    }, 3000)
    async function fetchData() {
      const data = await getdata()
      setter(data)
    }
    fetchData()
  }, [])

  const qureydata = getter.filter((elem) => {
    return elem.mainCategory === productCategory
  })

  return (
    <>
      {
        isload ? <Loader /> :
          <>
            <Navbar />
            {
              qureydata.length === 0 ? <div className='m-auto mt-[100px] text-center  text-gray-400 capitalize text-2xl'>no data found</div> :
                <>
                  <div className='flex justify-center items-center  mt-16 flex-wrap'>
                    {qureydata.map((elem) => {
                      return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} discounPrice={elem.discountPrice} elem={elem} />
                    })}
                  </div>
                  <Saticfy />

                  <Footer />
                </>
            }

          </>
      }


    </>
  )
}

export default index

