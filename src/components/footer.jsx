import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Logo and Description Column */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <img src={Logo} alt="LaslesVPN Logo" className="w-28" />
          </div>
          <p className="text-gray-600 mb-4">
            <b>LaslesVPN</b> is a private virtual network with unique features and high security.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>

          <p className="text-gray-500 mt-4">©2020 LaslesVPN</p>
        </div>

        {/* Product Column */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Engage Column */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4">Engage</h4>
          <ul className="space-y-2 text-gray-600">
            <li>LaslesVPN?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Earn Money Column */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4">Earn Money</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Affiliate</li>
            <li>Become a Partner</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
