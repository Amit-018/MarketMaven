import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaChartLine, FaLightbulb, FaCog, FaPlus,FaMapMarkerAlt } from 'react-icons/fa'

const keywordCategories = [
  { name: 'SEO', icon: <FaSearch />, color: 'bg-blue-500' },
  { name: 'PPC', icon: <FaChartLine />, color: 'bg-green-500' },
  { name: 'Content', icon: <FaLightbulb />, color: 'bg-yellow-500' },
  { name: 'Local', icon: <FaMapMarkerAlt />, color: 'bg-red-500' },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#008080] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">KeywordMaster</h1>
          <div className="space-x-4">
          <NavLink to='/Dash'>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'dashboard' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>

            </NavLink>
            <NavLink to='/Res'>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'keywords' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('keywords')}
            >
              Keywords
            </button>
            </NavLink>

            <NavLink to='/Analy'>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'analysis' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('analysis')}
            >
              Analysis
            </button>
            </NavLink>

            <NavLink>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'optimization' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('optimization')}
            >
              Optimization
            </button>
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">Total Keywords</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Avg. Search Volume</p>
                  <p className="text-2xl font-bold">5,678</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-sm text-yellow-600">Ranking Keywords</p>
                  <p className="text-2xl font-bold">456</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-sm text-red-600">Opportunity Keywords</p>
                  <p className="text-2xl font-bold">789</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaSearch className="text-blue-500 mr-2" />
                  <span>New keyword group "Product Features" added</span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="text-green-500 mr-2" />
                  <span>Keyword "SEO tools" ranking improved by 5 positions</span>
                </li>
                <li className="flex items-center">
                  <FaLightbulb className="text-yellow-500 mr-2" />
                  <span>Content gap analysis completed for "Digital Marketing"</span>
                </li>
                <li className="flex items-center">
                  <FaCog className="text-red-500 mr-2" />
                  <span>On-page optimization suggestions generated for 10 pages</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
              <NavLink to='/Dash'>
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaPlus className="mr-2" /> Add Keywords
                </button>
                </NavLink>

                <NavLink to='/Res'>
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaSearch className="mr-2" /> Keyword Research
                </button>
                </NavLink>

                <NavLink to='/Analy'>
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaChartLine className="mr-2" /> View Reports
                </button>
                </NavLink>

                <NavLink>
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaCog className="mr-2" /> Settings
                </button>
                </NavLink>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Keyword Categories</h2>
              <ul className="space-y-2">
                {keywordCategories.map((category) => (
                  <li key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`${category.color} p-2 rounded-full text-white mr-2`}>
                        {category.icon}
                      </span>
                      <span>{category.name}</span>
                    </div>
                    <button className="text-[#008080] text-sm hover:underline">
                      Manage
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}