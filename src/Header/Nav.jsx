import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu open/close

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="MarketMaven Logo" width={80} height={60} className="rounded-full" />
            <span className="text-2xl font-bold text-[#008080]">MarketMaven</span>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            <Link smooth to="/#Tools" className="text-gray-600 hover:text-[#008080] transition duration-300">Tools</Link>
            <Link smooth to="/#Pricing" className="text-gray-600 hover:text-[#008080] transition duration-300">Pricing</Link>
            <NavLink to="/About" className="text-gray-600 hover:text-[#008080] transition duration-300">About</NavLink>
            <NavLink to='/Contact' className="text-gray-600 hover:text-[#008080] transition duration-300">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
            <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to='/Login'>
              <button className="px-4 py-2 text-[#008080] border border-[#008080] rounded-full hover:bg-[#E6F3F5] transition duration-300">Log in</button>
            </NavLink>
            <NavLink to='/register'>
              <button className="px-4 py-2 text-white bg-[#008080] rounded-full hover:bg-[#006666] transition duration-300">Sign up</button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <Link smooth to="/#Tools" className="block text-gray-600 hover:text-[#008080] transition duration-300" onClick={() => setIsOpen(false)}>Tools</Link>
              <Link smooth to="/#Pricing" className="block text-gray-600 hover:text-[#008080] transition duration-300" onClick={() => setIsOpen(false)}>Pricing</Link>
              <NavLink to="/About" className="block text-gray-600 hover:text-[#008080] transition duration-300" onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink to='/Contact' className="block text-gray-600 hover:text-[#008080] transition duration-300" onClick={() => setIsOpen(false)}>Contact</NavLink>

              {/* Mobile Login and Sign Up Buttons */}
              <div className="mt-4 space-y-4">
                <NavLink to='/Login' onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-2 text-[#008080] border border-[#008080] rounded-full hover:bg-[#E6F3F5] transition duration-300">Log in</button>
                </NavLink>
                <NavLink to='/register' onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-2 text-white bg-[#008080] rounded-full hover:bg-[#006666] transition duration-300">Sign up</button>
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
