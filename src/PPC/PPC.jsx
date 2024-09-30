import React, { useState, useEffect } from 'react'
import { FaGoogle, FaAmazon, FaFacebookF, FaPlus, FaChartBar, FaCog, FaDollarSign } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// PPC platforms array
const ppcPlatforms = [
  { name: 'Google Ads', icon: <FaGoogle />, color: 'bg-red-500' },
  { name: 'Bing Ads', icon: <FaAmazon />, color: 'bg-blue-500' },
  { name: 'Facebook Ads', icon: <FaFacebookF />, color: 'bg-blue-600' },
]

// Initial campaigns data
const initialCampaigns = [
  { id: 1, name: 'Summer Sale', platform: 'Google Ads', budget: 1000, spent: 750, clicks: 1500, conversions: 50 },
  { id: 2, name: 'Brand Awareness', platform: 'Facebook Ads', budget: 500, spent: 300, clicks: 800, conversions: 20 },
  { id: 3, name: 'Product Launch', platform: 'Bing Ads', budget: 750, spent: 600, clicks: 1200, conversions: 35 },
]

export default function HomePage() {
  const [campaigns, setCampaigns] = useState(initialCampaigns)
  const [newCampaign, setNewCampaign] = useState({ name: '', platform: '', budget: '' })
  const [connectedAccounts, setConnectedAccounts] = useState([])
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectingPlatform, setConnectingPlatform] = useState('')

  useEffect(() => {
    // Load connected accounts from localStorage
    const savedAccounts = localStorage.getItem('connectedPPCAccounts')
    if (savedAccounts) {
      setConnectedAccounts(JSON.parse(savedAccounts))
    }
  }, [])

  const handleCreateCampaign = (e) => {
    e.preventDefault()
    if (newCampaign.name && newCampaign.platform && newCampaign.budget) {
      const campaign = {
        id: campaigns.length + 1,
        name: newCampaign.name,
        platform: newCampaign.platform,
        budget: parseFloat(newCampaign.budget),
        spent: 0,
        clicks: 0,
        conversions: 0,
      }
      setCampaigns([...campaigns, campaign])
      setNewCampaign({ name: '', platform: '', budget: '' })
      alert('New campaign created successfully!')
    }
  }

  const handleConnect = (platform) => {
    setIsConnecting(true)
    setConnectingPlatform(platform)

    // Simulate API call to connect to the platform
    setTimeout(() => {
      setConnectedAccounts(prevAccounts => [...prevAccounts, platform])
      setIsConnecting(false)
      setConnectingPlatform('')

      // Save connected accounts to localStorage
      localStorage.setItem('connectedPPCAccounts', JSON.stringify([...connectedAccounts, platform]))

      alert(`Connected to ${platform} successfully!`)
    }, 2000)
  }

  const handleDisconnect = (platform) => {
    const updatedAccounts = connectedAccounts.filter(account => account !== platform)
    setConnectedAccounts(updatedAccounts)

    // Save updated connected accounts to localStorage
    localStorage.setItem('connectedPPCAccounts', JSON.stringify(updatedAccounts))

    alert(`Disconnected from ${platform}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#008080] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">PPCManager</h1>
          <div className="space-x-4">
            <button className="hover:text-gray-300">Dashboard</button>
            <button className="hover:text-gray-300">Campaigns</button>
            <button className="hover:text-gray-300">Reports</button>
            <button className="hover:text-gray-300">Settings</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>
              <form onSubmit={handleCreateCampaign}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Campaign Name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newCampaign.name}
                    onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                    required
                  />
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newCampaign.platform}
                    onChange={(e) => setNewCampaign({ ...newCampaign, platform: e.target.value })}
                    required
                  >
                    <option value="">Select Platform</option>
                    {ppcPlatforms.map((platform) => (
                      <option key={platform.name} value={platform.name}>
                        {platform.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-md border border-r-0 border-gray-300">
                      <FaDollarSign />
                    </span>
                    <input
                      type="number"
                      placeholder="Budget"
                      className="w-full p-2 border border-gray-300 rounded-r-md"
                      value={newCampaign.budget}
                      onChange={(e) => setNewCampaign({ ...newCampaign, budget: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300"
                >
                  Create Campaign
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Platform</th>
                      <th className="p-2 text-left">Budget</th>
                      <th className="p-2 text-left">Spent</th>
                      <th className="p-2 text-left">Clicks</th>
                      <th className="p-2 text-left">Conversions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-b">
                        <td className="p-2">{campaign.name}</td>
                        <td className="p-2">{campaign.platform}</td>
                        <td className="p-2">${campaign.budget.toFixed(2)}</td>
                        <td className="p-2">${campaign.spent.toFixed(2)}</td>
                        <td className="p-2">{campaign.clicks}</td>
                        <td className="p-2">{campaign.conversions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              
              <div className="space-y-4">
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaPlus className="mr-2" /> New Campaign
                </button>
                
                <NavLink to='/Report'>
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                 <FaChartBar className="mr-2" /> View Reports
                </button>
                </NavLink>
                
                
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaCog className="mr-2" /> Settings
                </button>
              </div>
              
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Connected PPC Accounts</h2>
              <div className="space-y-4">
                {ppcPlatforms.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-md text-white ${platform.color}`}>
                        {platform.icon}
                      </div>
                      <span>{platform.name}</span>
                    </div>
                    {connectedAccounts.includes(platform.name) ? (
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleDisconnect(platform.name)}
                      >
                        Disconnect
                      </button>
                    ) : (
                      <button
                        className="text-green-500 hover:underline"
                        onClick={() => handleConnect(platform.name)}
                      >
                        {isConnecting && connectingPlatform === platform.name ? 'Connecting...' : 'Connect'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
