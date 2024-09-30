import React, { useState } from 'react'
import {  FaDownload } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const channelData = [
  { name: 'Email', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Ads', value: 300 },
  { name: 'Organic', value: 200 },
]

const conversionData = [
  { name: 'Jan', conversions: 400 },
  { name: 'Feb', conversions: 300 },
  { name: 'Mar', conversions: 200 },
  { name: 'Apr', conversions: 278 },
  { name: 'May', conversions: 189 },
  { name: 'Jun', conversions: 239 },
]

const campaignData = [
  { name: 'Campaign A', performance: 4000 },
  { name: 'Campaign B', performance: 3000 },
  { name: 'Campaign C', performance: 2000 },
  { name: 'Campaign D', performance: 2780 },
  { name: 'Campaign E', performance: 1890 },
  { name: 'Campaign F', performance: 2390 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Analytics() {
  const [dateRange, setDateRange] = useState('last30days')

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#008080]">Analytics</h1>
        <div className="flex items-center">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="mr-4 p-2 border rounded-md"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="lastQuarter">Last Quarter</option>
            <option value="lastYear">Last Year</option>
          </select>
          <button className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center">
            <FaDownload className="mr-2" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Traffic by Channel</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Conversion Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="conversions" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="performance" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Performing Pages</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>/home</span>
              <span className="text-green-500">32% CTR</span>
            </li>
            <li className="flex justify-between items-center">
              <span>/products</span>
              <span className="text-green-500">28% CTR</span>
            </li>
            <li className="flex justify-between items-center">
              <span>/blog</span>
              <span className="text-green-500">25% CTR</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Keywords</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>marketing automation</span>
              <span className="text-blue-500">250 searches</span>
            </li>
            <li className="flex justify-between items-center">
              <span>email campaigns</span>
              <span className="text-blue-500">180 searches</span>
            </li>
            <li className="flex justify-between items-center">
              <span>social media strategy</span>
              <span className="text-blue-500">150 searches</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">User Demographics</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>18-24</span>
              <span>15%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>25-34</span>
              <span>35%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>35-44</span>
              <span>30%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>45+</span>
              <span>20%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}