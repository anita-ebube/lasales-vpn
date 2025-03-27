import React from 'react'
import location from '../assets/icons/location.png'
import server from '../assets/icons/Server.png'
import user from '../assets/icons/user.png'
import FeatureImg from '../assets/feature.png'
import check from '../assets/check.png'
const features = () => {
    const featuresList = [
        'Powerfull online protection.',
        'Internet without borders.',
        'Supercharged VPN',
        'No specific time limits.'
    ];

    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 sm:gap-8 border rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-col items-center space-x-0 sm:space-x-4 text-center sm:text-left justify-center">
                    <img src={location} alt="Location Icon" className="w-12 h-12" />
                    <div>
                        <h3 className="text-2xl font-bold">90+</h3>
                        <p className="text-gray-600">Users</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left justify-center">
                    <img src={server} alt="Server Icon" className="w-12 h-12" />
                    <div>
                        <h3 className="text-2xl font-bold">30+</h3>
                        <p className="text-gray-600">Locations</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left justify-center">
                    <img src={user} alt="User Icon" className="w-12 h-12" />
                    <div>
                        <h3 className="text-2xl font-bold">50+</h3>
                        <p className="text-gray-600">Servers</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                {/* Illustration */}
                <div className="relative z-10">
                    <img
                        src={FeatureImg}
                        alt="LaslesVPN Features"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        We Provide Many Features You Can Use
                    </h2>
                    <p className="text-gray-600 mb-6">
                        You can explore the features that we provide with fun and
                        have their own functions each feature.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-4">
                        {featuresList.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <img src={check} alt="" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default features
