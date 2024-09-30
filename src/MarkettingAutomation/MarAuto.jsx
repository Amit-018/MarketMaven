import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaChartLine, FaEnvelope,FaHashtag, FaFileAlt,FaRobot,FaAd, FaBullhorn, FaCog, FaPlus } from 'react-icons/fa'

const marketingChannels = [
  { name: 'Email', icon: <FaEnvelope />, color: 'bg-blue-500' },
  { name: 'Social Media', icon: <FaHashtag />, color: 'bg-pink-500' },
  { name: 'Content', icon: <FaFileAlt />, color: 'bg-green-500' },
  { name: 'Ads', icon: <FaAd />, color: 'bg-yellow-500' },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#008080] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MarketAutomator</h1>
          <div className="space-x-4">
            <button 
              className={`hover:text-gray-300 ${activeTab === 'dashboard' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <NavLink to='/Camp'>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'campaigns' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('campaigns')}
            >
              Campaigns
            </button>
            </NavLink>

            <NavLink to='/Report'>
            <button 
              className={`hover:text-gray-300 ${activeTab === 'analytics' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>

            </NavLink>

            <NavLink to="/auto">
            <button 
              className={`hover:text-gray-300 ${activeTab === 'automation' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('automation')}
            >
              Automation
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
                  <p className="text-sm text-blue-600">Total Campaigns</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Active Automations</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-sm text-yellow-600">Leads Generated</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-sm text-red-600">Conversion Rate</p>
                  <p className="text-2xl font-bold">3.2%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaChartLine className="text-blue-500 mr-2" />
                  <span>Campaign "Summer Sale" performance improved by 15%</span>
                </li>
                <li className="flex items-center">
                  <FaRobot className="text-green-500 mr-2" />
                  <span>New automation "Lead Nurturing" created</span>
                </li>
                <li className="flex items-center">
                  <FaBullhorn className="text-yellow-500 mr-2" />
                  <span>Social media campaign "Product Launch" started</span>
                </li>
                <li className="flex items-center">
                  <FaCog className="text-red-500 mr-2" />
                  <span>System update: New analytics features added</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">

              <NavLink to="/Camp">
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaPlus className="mr-2" /> New Campaign
                </button>
                </NavLink>
                <NavLink to='/Auto'>
                <button className="w-full bg-[#008080] text-white px-4  mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaRobot className="mr-2" /> Create Automation
                </button>
                </NavLink>
                
                <NavLink to='/Report'>
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaChartLine className="mr-2" /> View Reports
                </button>
                </NavLink>

                <NavLink to='/Setting' >
                <button className="w-full bg-[#008080] text-white px-4 mt-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaCog className="mr-2" /> Settings
                </button>
                </NavLink>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Marketing Channels</h2>
              <ul className="space-y-2">
                {marketingChannels.map((channel) => (
                  <li key={channel.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`${channel.color} p-2 rounded-full text-white mr-2`}>
                        {channel.icon}
                      </span>
                      <span>{channel.name}</span>
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