import React from 'react'
import Hero from '../assets/hero.png'
const hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 pr-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Want anything to be easy with LaslesVPN.
          </h1>
          <p className="text-gray-600 mb-8">
            Provide a network for all your needs with ease and fun using LaslesVPN 
            discover interesting features from us.
          </p>
          <button className="bg-red-500 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src={Hero}
            alt="Hero Image" 
            className="w-full h-auto"
          />
        </div>
      </div>
  )
}

export default hero
