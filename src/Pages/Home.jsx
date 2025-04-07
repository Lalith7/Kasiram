import React from 'react'
import HeroSection from '../components/HeroSection'
import TopCountries from '../components/TopCountries'
import Blogs from '../components/Blogs'
import Newsletter from '../components/NewsLetter'
import WhyKasiram from '../components/WhyKasiram'
import CountriesSection from '../components/CountriesSection'
import ContactUs from '../components/ContactUs'

export const Home = () => {
  return (
    <React.Fragment>
        <HeroSection />
        <TopCountries/>
        <Blogs/>
        <Newsletter/>
        <WhyKasiram/>
        <CountriesSection/>
        <ContactUs/>
    </React.Fragment>
  )
}
