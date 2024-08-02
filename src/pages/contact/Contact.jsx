import React from 'react'
import BannerImg from '../../assets/images/contactbanner.png'
import ContactContent from '../Home/ContactContent'
import ContactForm from './ContactForm'
import ClientLogo from '../../components/ClientLogo'
import Faq from '../about/Faq'
import Banners from '../../components/Banners'

const Contact = () => {
  return (
    <div>
      <Banners
      backgroundImage={BannerImg}
      title="Contact "
      subTitle="Contact Us"
      customMargin={true}
      
      
      />
      <ContactForm/>
      <ClientLogo/>
      <Faq/>
    </div>
  )
}

export default Contact