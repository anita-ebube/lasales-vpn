import React from 'react';
import map from '../assets/map.png';

const Global = () => {
    return (
        <div className='text-center max-w-6xl mx-auto px-6 py-16'>
            {/* Heading */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
                Huge Global Network <br /> of Fast VPN
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-24">
                See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>

            {/* Map Image */}
            <img src={map} alt="Global Map" className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto" />
        </div>
    );
};

export default Global;
