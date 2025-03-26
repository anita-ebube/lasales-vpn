import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features from '../components/features'
import PricingPlans from '../components/pricing'
import Global from '../components/global'
import Sponsor from '../components/sponsors'
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PricingPlans />
      <Global />
      <Sponsor />
    </div>
  )
}

export default home
