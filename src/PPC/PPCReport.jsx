import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa'

const reportData = [
  { id: 1, name: 'Campaign Performance', type: 'Performance', lastGenerated: '2023-06-01' },
  { id: 2, name: 'Audience Insights', type: 'Analytics', lastGenerated: '2023-05-28' },
  { id: 3, name: 'Conversion Tracking', type: 'Conversion', lastGenerated: '2023-06-03' },
  { id: 4, name: 'Budget Allocation', type: 'Financial', lastGenerated: '2023-05-31' },
]

export default function Reports() {
    
  const [selectedReport, setSelectedReport] = useState(null)

  const handleGenerateReport = (report) => {
    setSelectedReport(report)
    // In a real application, this would trigger the report generation process
    alert(`Generating ${report.name} report...`)
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-8 text-[#008080]">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Available Reports</h2>
          <ul className="space-y-4">
            {reportData.map((report) => (
              <li key={report.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{report.name}</h3>
                  <p className="text-sm text-gray-500">Type: {report.type}</p>
                  <p className="text-sm text-gray-500">Last Generated: {report.lastGenerated}</p>
                </div>
                <button
                  onClick={() => handleGenerateReport(report)}
                  className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center"
                >
                  <FaDownload className="mr-2" /> Generate
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Report</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Report Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <div className="mt-1 flex space-x-4">
                <input type="date" className="block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="date" className="block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Metrics</label>
              <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option>Clicks</option>
                <option>Impressions</option>
                <option>CTR</option>
                <option>Conversions</option>
                <option>Cost</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300"
            >
              Generate Custom Report
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}