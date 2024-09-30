import { useState } from 'react'
import { Search, CheckCircle, AlertCircle } from 'lucide-react'

export default function Seo() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  // Mock API response
  const mockApiCall = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API delay
    return {
      title: 'Example Website',
      description: 'This is an example website description',
      score: 75,
      recommendations: [
        'Improve meta description',
        'Add more relevant keywords',
        'Optimize images',
        'Improve page load speed',
        'Create more backlinks',
      ],
    }
  }

  const analyzeSEO = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Simulating API Call
      const data = await mockApiCall()
      setResult(data)
    } catch (err) {
      setError('Failed to analyze the URL. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="bg-[#008080] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">SEO Optimizer</h1>
          <p className="text-xl">Boost your website's search engine rankings</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <form onSubmit={analyzeSEO} className="mb-8">
          <div className="flex">
            <input
              type="url"
              placeholder="Enter your website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              required
            />
            <button
              type="submit"
              className="bg-[#008080] text-white p-2 rounded-r-md hover:bg-[#006666] transition-colors disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : <Search className="w-6 h-6" />}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {result && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SEO Analysis Results</h2>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <h3 className="font-bold text-lg mb-2">{result.title}</h3>
              <p className="mb-2">{result.description}</p>
              <div className="flex items-center">
                <span className="font-bold mr-2">SEO Score:</span>
                <span className={`text-lg ${result.score >= 70 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {result.score}/100
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Recommendations</h3>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-2 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-4">SEO Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Quality Content</h3>
              <p>Create valuable, relevant content that answers users' questions and addresses their needs.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Mobile Optimization</h3>
              <p>Ensure your website is responsive and provides a great experience on all devices.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Page Speed</h3>
              <p>Optimize your website's loading speed to improve user experience and search rankings.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Link Building</h3>
              <p>Develop a strategy to acquire high-quality backlinks from reputable websites in your industry.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#008080] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SEO Optimizer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
