import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempted with:', { email, password });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-[#F0F0F0] to-white min-h-screen flex items-center justify-center">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#008080] to-[#006666] p-8">
            <h2 className="text-4xl font-bold text-white text-center">Welcome Back</h2>
          </div>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#008080]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#008080]"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#008080] focus:ring-[#008080] border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#008080] hover:text-[#006666]">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#008080] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#006666] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </form>
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <motion.button
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGoogle className="text-red-500 mr-2" />
                  Google
                </motion.button>
                <motion.button
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook className="text-blue-600 mr-2" />
                  Facebook
                </motion.button>
                <motion.button
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="text-blue-400 mr-2" />
                  Twitter
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-600">
          Don't have an account?{' '}
          <NavLink to="/regiter" className="font-medium text-[#008080] hover:text-[#006666]">
            Sign up
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
