import React, { useState } from 'react'
import { FaChartBar, FaChartLine, FaChartPie, FaDownload } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const rankingDistribution = [
  { name: '1-3', value: 10 },
  { name: '4-10', value: 25 },
  { name: '11-20', value: 35 },
  { name: '21-50', value: 20 },
  { name: '51+', value: 10 },
]

const trafficTrend = [
  { name: 'Jan', traffic: 4000 },
  { name: 'Feb', traffic: 3000 },
  { name: 'Mar', traffic: 5000 },
  { name: 'Apr', traffic: 4500 },
  { name: 'May', traffic: 6000 },
  { name: 'Jun', traffic: 7000 },
]

const keywordPerformance = [
  { name: 'SEO tips', performance: 85 },
  { name: 'Content marketing', performance: 75 },
  { name: 'Keyword research', performance: 90 },
  { name: 'Digital marketing', performance: 70 },
  { name: 'Social media strategy', performance: 80 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function Analytics() {
  const [dateRange, setDateRange] = useState('last30days')

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#6B46C1]">Analytics</h1>
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
          <button className="bg-[#6B46C1] text-white px-4 py-2 rounded-md hover:bg-[#553C9A] transition duration-300 flex items-center">
            <FaDownload className="mr-2" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Keyword Ranking Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rankingDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {rankingDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Organic Traffic Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="traffic" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Keyword Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={keywordPerformance}>
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
          <h2 className="text-xl font-semibold mb-4">Top Improving Keywords</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>SEO strategies</span>
              <span className="text-green-500">+15 positions</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Content optimization</span>
              <span className="text-green-500">+8 positions</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Link building tips</span>
              <span className="text-green-500">+5 positions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Declining Keywords</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>PPC management</span>
              <span className="text-red-500">-7 positions</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Social media analytics</span>
              <span className="text-red-500">-4 positions</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Email marketing tools</span>
              <span className="text-red-500">-3 positions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Keyword Opportunities</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Voice search optimization</span>
              <span className="text-blue-500">High potential</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Local SEO strategies</span>
              <span className="text-blue-500">Rising trend</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Mobile-first indexing</span>
              <span className="text-blue-500">Emerging topic</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}