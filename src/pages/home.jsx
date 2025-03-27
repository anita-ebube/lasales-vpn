import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features from '../components/features'
import PricingPlans from '../components/pricing'
import Global from '../components/global'
import Sponsor from '../components/sponsors'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
const home = () => {
  return (
    <div className='p-7'>
      <Navbar />
      <Hero />
      <Features />
      <PricingPlans />
      <Global />
      {/* <Sponsor /> */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default home
