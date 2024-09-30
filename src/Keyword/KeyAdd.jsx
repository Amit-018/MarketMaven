import React from 'react'
import { FaSearch, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

const rankingData = [
  { date: 'Jan', ranking: 10 },
  { date: 'Feb', ranking: 8 },
  { date: 'Mar', ranking: 9 },
  { date: 'Apr', ranking: 7 },
  { date: 'May', ranking: 5 },
  { date: 'Jun', ranking: 4 },
  { date: 'Jul', ranking: 3 },
]

const keywordData = [
  { keyword: 'SEO Tools', volume: 4000, difficulty: 65 },
  { keyword: 'Keyword Research', volume: 3000, difficulty: 55 },
  { keyword: 'Content Marketing', volume: 2000, difficulty: 45 },
  { keyword: 'Link Building', volume: 2780, difficulty: 70 },
  { keyword: 'On-page SEO', volume: 1890, difficulty: 40 },
  { keyword: 'Technical SEO', volume: 2390, difficulty: 75 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-8 text-[#008080]">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Keywords</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <FaSearch className="text-4xl text-[#008080]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Avg. Search Volume</p>
              <p className="text-2xl font-bold">5,678</p>
            </div>
            <FaChartLine className="text-4xl text-[#008080]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Ranking Keywords</p>
              <p className="text-2xl font-bold">456</p>
            </div>
            <FaLightbulb className="text-4xl text-[#008080]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Opportunity Keywords</p>
              <p className="text-2xl font-bold">789</p>
            </div>
            <FaRocket className="text-4xl text-[#008080]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Ranking Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={rankingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis reversed />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ranking" stroke="#008080" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Keywords</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={keywordData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="keyword" />
              <YAxis yAxisId="left" orientation="left" stroke="#008080" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="volume" fill="#008080" />
              <Bar yAxisId="right" dataKey="difficulty" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Keyword Changes</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>SEO Tools</span>
              <span className="text-green-500">+5 positions</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Content Marketing</span>
              <span className="text-red-500">-2 positions</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Link Building</span>
              <span className="text-green-500">+3 positions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Optimization Opportunities</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>On-page SEO for "Keyword Research"</span>
              <span className="text-blue-500">High Impact</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Content gap for "Technical SEO"</span>
              <span className="text-blue-500">Medium Impact</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Backlink opportunity for "SEO Tools"</span>
              <span className="text-blue-500">High Impact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}