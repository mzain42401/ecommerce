import { AuthUserProvider } from '@/firebase/authContext'
import '@/styles/globals.css'
import Image from 'next/image'
import whatsapp from '../public/whatsapp.png'
export default function App({ Component, pageProps }) {
  return(

    <AuthUserProvider>
      <a href="https://wa.me/923122320760" target="_blank">
        <div className='z-[999999999999] cursor-pointer fixed rounded-full bottom-4 flex justify-center items-center right-4 w-16 h-16   '><Image src={whatsapp}/></div>
      </a>
   
   <Component {...pageProps} />
   </AuthUserProvider>
  )
}
