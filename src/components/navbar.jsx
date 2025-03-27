import {useState} from 'react';
import Logo from '../assets/Logo.png';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="flex items-center justify-between py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
        </div>
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-red-500">About</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Features</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Testimonials</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Help</a>
        </div>
  
        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-red-500 font-semibold hover:text-red-600">Sign In</a>
          <a 
            href="#" 
            className="px-6 py-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
          >
            Sign Up
          </a>
        </div>
  
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-600 hover:text-red-500">About</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Features</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Testimonials</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Help</a>
              <div className="border-t pt-4 space-y-4">
                <a href="#" className="block text-red-500 font-semibold">Sign In</a>
                <a 
                  href="#" 
                  className="block px-6 py-2 text-red-500 border-2 border-red-500 rounded-full text-center hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar;