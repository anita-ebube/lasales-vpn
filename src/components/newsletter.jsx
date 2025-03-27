import React from 'react';

const SpecialFeaturesSection = () => {
    return (
        <div className="relative bg-white rounded-lg shadow-2xl px-6 py-7 text-center w-[90%] sm:w-[80%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4">
                <div className='text-left w-full sm:w-auto'>
                    <h2 className="lg:text-3xl text-2xl font-bold text-gray-800">
                        Subscribe Now for <br /> Get Special Features!
                    </h2>
                    <p className="text-gray-600 mb-6 lg:pt-3 pt-1 lg:text-lg text-sm">
                        Let's subscribe with us and find the fun.
                    </p>
                </div>

                <div>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialFeaturesSection;