import { useData } from '@/firebase/dataContext'
import Navbar from '@/pages/components/Navbar/Navbar'
import Footer from '@/pages/components/footer/Footer'
import Loader from '@/pages/components/loader/Loader'
import ProductCard from '@/pages/components/productCard/ProductCard'
import Saticfy from '@/pages/components/satisfy/Saticfy'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const index = () => {
  const router = useRouter()
  const { productCategory } = router.query

  const [getter, setter] = useState([])
  const { getdata } = useData()

  useEffect(() => {
    async function fetchData() {

      const data = await getdata()
      setter(data)
    }
    fetchData()
  }, [])

  const qureydata = getter.filter((elem) => {
    return elem.mainCategory === productCategory
  })
  console.log(qureydata);
  // const router = useRouter()
  return (
    <>
      {
        qureydata.length === 0 ? <Loader /> :
          <>
            <Navbar />
            <div className='flex justify-center items-center  mt-16 flex-wrap'>

              {qureydata.map((elem) => {
                return <ProductCard discount={elem.Discount} productName={elem.productName} productPrice={elem.price} productCoverImage={elem.coverImage} productmainCategory={elem.mainCategory} productsubCategory={elem.subCategory} id={elem.id} />
              })}
              
            </div>
            <Saticfy/>

              <Footer />
              </>
      }


    </>
  )
}

export default index

