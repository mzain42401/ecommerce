import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const PrivacyPolicy = () => {
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
    <div className="bg-gray-200 min-h-screen py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
        At Homely Find, accessible from (Store Link), one of our main priorities is the privacy of our visitors. This 
Privacy Policy document contains types of information that is collected and recorded by Homely Find 
and how we use it.
If you have additional questions or require more information about our Privacy Policy, do not hesitate to 
contact us.
<dl>
    <dt className='font-bold my-4' >Personal identification information</dt>
    <dd>We may collect personal identification information from Users in a variety of ways, including, but not 
limited to, when Users visit our site, fill out a form, and in connection with other activities, services, 
features or resources we make available on our Site. Users may be asked for, as appropriate, name, 
email address. Users may, however, visit our Site anonymously. We will collect personal identification 
information from Users only if they voluntarily submit such information to us. Users can always refuse to 
supply personally identification information, except that it may prevent them from engaging in certain 
Site related activities.
We may pass your name and address on to a third party in order to make delivery of the product to you 
(for example to our courier or supplier). You must only submit to us the Site information which is 
accurate and not misleading and you must keep it up to date and inform us of changes.</dd>

<dt className='font-bold my-4'>Cookies</dt>
<dd>The acceptance of cookies is not a requirement for visiting the Site. However we would like to point out 
that the use of the ‘basket’ functionality on the Site and ordering is only possible with the activation of 
cookies. Cookies are tiny text files which identify your computer to our server as a unique user when you 
visit certain pages on the Site and they are stored by your Internet browser on your computer’s hard 
drive. Cookies can be used to recognize your Internet Protocol address, saving you time while you are 
on, or want to enter, the Site. We only use cookies for your convenience in using the Site (for example to 
remember who you are when you want to amend your shopping cart without having to re-enter your 
email address). Your browser can be set to not accept cookies, but this would restrict your use of the 
Site. Please accept our assurance that our use of cookies does not contain any personal or private details 
and are free from viruses.</dd>
<dt className='font-bold my-4'>How we protect your information</dt>
<dd>We adopt appropriate data collection, storage and processing practices and security measures to 
protect against unauthorized access, alteration, disclosure or destruction of your personal information,
username, password and other data stored on our Site.</dd>
<dt className='font-bold my-4'>Sharing your personal information</dt>
<dd>We do not sell, trade, or rent Users personal identification information to others. We may share generic 
aggregated demographic information not linked to any personal identification information regarding 
visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined 
above.</dd>
<dt className='font-bold my-4'>What Rights Your Have Over Your Data</dt>
<dd>You reserve the right to your personal information with us, and will always have access to your personal 
information. You can also request the Site to correct any inaccuracies in your information free of charge. 
Moreover, you also reserve the right to ask us to stop using your personal data for direct marketing 
purposes.</dd>
</dl>







        </p>
        
        
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy
