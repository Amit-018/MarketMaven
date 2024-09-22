import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About MarketMaven</h3>
        <p className="text-gray-400">
          MarketMaven is a comprehensive digital marketing platform designed to help businesses grow their online presence. From SEO to content marketing, we provide the tools you need to succeed.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li className="mb-2">
            <a href="#tools" className="text-gray-400 hover:text-white transition duration-300">Tools</a>
          </li>
          <li className="mb-2">
            <a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a>
          </li>
          <li className="mb-2">
            <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
          </li>
          <li className="mb-2">
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.483v-9.294H9.66V11.41h3.148V8.725c0-3.108 1.896-4.802 4.663-4.802 1.325 0 2.463.098 2.796.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.308h3.587l-.467 3.295h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.838 9.838 0 0 1-2.828.775 4.92 4.92 0 0 0 2.165-2.724 9.844 9.844 0 0 1-3.127 1.195 4.914 4.914 0 0 0-8.384 4.482 13.946 13.946 0 0 1-10.124-5.134 4.821 4.821 0 0 0-.666 2.473 4.902 4.902 0 0 0 2.188 4.084 4.908 4.908 0 0 1-2.224-.615v.061c0 2.281 1.623 4.18 3.773 4.612a4.937 4.937 0 0 1-2.212.083c.622 1.94 2.422 3.354 4.558 3.391a9.869 9.869 0 0 1-6.1 2.104c-.396 0-.787-.023-1.175-.068A13.944 13.944 0 0 0 7.548 21.07c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637a9.935 9.935 0 0 0 2.457-2.526z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.137 1.45-2.137 2.945v5.661H9.343V9.5h3.409v1.494h.048c.474-.897 1.632-1.847 3.36-1.847 3.594 0 4.256 2.363 4.256 5.435v6.87h-.001zM5.337 7.433a1.983 1.983 0 1 1 .001-3.967 1.983 1.983 0 0 1-.001 3.967zm-1.705 13.02h3.409V9.5H3.632v10.953zM22.225 0H1.771C.791 0 0 .784 0 1.75v20.499C0 23.216.791 24 1.771 24h20.451c.98 0 1.775-.784 1.775-1.75V1.75C24 .784 23.206 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} MarketMaven. All rights reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
