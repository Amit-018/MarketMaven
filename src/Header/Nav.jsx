import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="MarketMaven Logo" width={40} height={80} className="rounded-full" />
            <span className="text-2xl font-bold text-[#008080]">MarketMaven</span>
          </NavLink>
          <nav className="hidden md:flex space-x-8">
            <Link smooth to="/#Tools" className="text-gray-600 hover:text-[#008080] transition duration-300">Tools</Link>
            <Link smooth to="/#Pricing" className="text-gray-600 hover:text-[#008080] transition duration-300">Pricing</Link>
            <NavLink to="/About" className="text-gray-600 hover:text-[#008080] transition duration-300">About</NavLink>
            <NavLink to='/Contact' href="#contact" className="text-gray-600 hover:text-[#008080] transition duration-300">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
          <NavLink to='/Login'>
            <button className="px-4 py-2 text-[#008080] border border-[#008080] rounded-full hover:bg-[#E6F3F5] transition duration-300">Log in</button>
            </NavLink>
            <NavLink to='/register'>
            <button className="px-4 py-2 text-white bg-[#008080] rounded-full hover:bg-[#006666] transition duration-300">Sign up</button>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
