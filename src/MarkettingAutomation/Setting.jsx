import React, { useState } from 'react'
import { FaSave } from 'react-icons/fa'

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    dailyBudgetAlert: 100,
    defaultCurrency: 'USD',
    timeZone: 'UTC',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would save the settings to a backend
    alert('Settings saved successfully!')
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-8 text-[#008080]">Settings</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="rounded text-[#008080] focus:ring-[#008080]"
              />
              <span className="ml-2">Enable Email Notifications</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Daily Budget Alert Threshold</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="dailyBudgetAlert"
                value={settings.dailyBudgetAlert}
                onChange={handleChange}
                className="focus:ring-[#008080] focus:border-[#008080] block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Default Currency</label>
            <select
              name="defaultCurrency"
              value={settings.defaultCurrency}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#008080] focus:border-[#008080] sm:text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time Zone</label>
            <select
              name="timeZone"
              value={settings.timeZone}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#008080] focus:border-[#008080] sm:text-sm"
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
              <option value="CST">CST</option>
              <option value="PST">PST</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center"
            >
              <FaSave className="mr-2" /> Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}