import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    quote: '"Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best."',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Yessica Christy',
    location: 'Shanxi, China',
    quote: '"I like it because I like to travel far and still can connect with high speed."',
    rating: 4.5
  },
//   {
//     id: 3,
//     name: 'Kim Young Jou',
//     location: 'Seoul, South Korea',
//     quote: '"This is very unusual for my business that currently requires a virtual private network that has high security."',
//     rating: 4.5
//   }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-white px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trusted by Thousands of <br /> Happy Customer
        </h2>
        <p className="text-gray-600">
          These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex space-x-4 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                w-full max-w-[400px] p-6 border rounded-lg 
                transition-all duration-300 ease-in-out
                ${index === currentSlide 
                  ? 'border-red-500 shadow-lg opacity-100' 
                  : 'border-gray-200 opacity-50 scale-95'}
              `}
              style={{
                transform: `translateX(${(index - currentSlide) * 110}%)`,
                position: index === currentSlide ? 'relative' : 'absolute'
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">{testimonial.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`
                ${index === currentSlide 
                  ? 'w-4 h-1 bg-red-500' 
                  : 'w-1 h-1 bg-gray-300'}
                rounded-full transition-all duration-300
              `}
            />
          ))}
        </div>

        <div className="absolute bottom-[-40px] right-0 flex space-x-2">
          <button 
            onClick={prevSlide} 
            className="bg-white border border-gray-300 rounded-full p-2 shadow-lg"
          >
            ←
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-red-500 text-white rounded-full p-2 shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;