import Footer from '@/pages/components/footer/Footer'
import { useAuth } from '@/firebase/authContext'
import Navbar from '@/pages/components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { useData } from '@/firebase/dataContext'
import Loader from '@/pages/components/loader/Loader'
import ProductDetails from '@/pages/components/detailPage/ProductDetails'

const product = {
  name: 'Basic Tee 6-Pack',
  price: 'Rs.192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function index({ productDetail }) {

  const [getter, setter] = useState()
  const { getSpecificData } = useData()


  useEffect(() => {
    async function doo() {
      const data = await getSpecificData(productDetail)
      setter(data)

    }
    doo()

  }, [])
  console.log(getter);

  const { authUser } = useAuth()

  const addtoCart = (e) => {
    e.preventDefault()
    if (!authUser) {
      alert("login now")
    }
    alert('add to cart')
  }
  return (
    <>

      {
        !getter ? <Loader /> :
          <>
            <Navbar />
            <ProductDetails Description={getter.productDiscription} Discount={getter.Discount}
              Pic1={getter.Pic1} Pic2={getter.pic2} Pic3={getter.pic3} coverImage={getter.coverImage} id={getter.id} price={getter.price} mainCategory={getter.mainCategory} subCategory={getter.subCategory} productName={getter.productName} discounPrice={getter.discountPrice} elem={getter} />
            <Footer />
          </>
      }
    </>
  )
}

export function getServerSideProps({ params }) {
  const { productDetail } = params

  return { props: { productDetail } }
}

