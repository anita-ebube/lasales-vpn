import React from 'react';
import Free from '../assets/Free.png'
import Premium from '../assets/Premium.png'
import Tick from '../assets/Tick.png'

const PricingPlans = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: 'Free',
      packageImg: Free,
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices'
      ],
      highlight: true
    },
    {
      name: 'Standard Plan',
      price: '$9 / mo',
      packageImg: Premium,
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware'
      ],
      highlight: true
    },
    {
      name: 'Premium Plan',
      price: '$12 / mo',
      packageImg: Free,
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
        'Get New Features'
      ],
      highlight: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600">
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              border rounded-lg p-6 text-center transition-all duration-300
              ${plan.highlight
                ? 'hover:border-red-500 shadow-xl scale-105 border-2'
                : 'border-gray-200 hover:shadow-lg'}
            `}
          >
            {/* Decorative Box */}
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto flex items-center justify-center">
                <div className="">
                  <img src={plan.packageImg} alt="" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center justify-center space-x-2"
                >
                  <img src={Tick} alt="" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-800">{plan.price}</p>
            </div>

            {/* Select Button */}
            <button
              className={`
                w-full py-3 rounded-full transition-all duration-300
                ${plan.highlight
                  ? 'border border-red-500 text-red-600 hover:bg-red-600 hover:text-white'
                  : 'border border-red-500 text-white hover:bg-red-500 hover:text-white'}
              `}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;