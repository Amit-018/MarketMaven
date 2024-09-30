import { useState } from 'react'
import { Search, Lightbulb, AlertCircle } from 'lucide-react'

export default function HomePage() {
  const [product, setProduct] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [budget, setBudget] = useState('')
  const [loading, setLoading] = useState(false)
  const [ideas, setIdeas] = useState([])
  const [error, setError] = useState(null)

  const generateIdeas = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIdeas([]);
  
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBTq-yegfGCMstKWcmybK6WJ1LGw0YrMSI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate creative marketing ideas for a product called "${product}" targeting ${targetAudience} with a budget of ${budget}.`
                }
              ]
            }
          ]
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate ideas');
      }
  
      const data = await response.json();
  
      // Check if data contains the 'candidates' field
      if (data.candidates && data.candidates.length > 0) {
        const ideasText = data.candidates.map(candidate => candidate.generatedText).join("\n");
        const ideasArray = ideasText.split("\n").filter(idea => idea.trim() !== "");
        setIdeas(ideasArray.map((idea, index) => ({ title: `Idea ${index + 1}`, description: idea })));
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to generate marketing ideas. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  

  

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="bg-[#008080] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Marketing Campaign Generator</h1>
          <p className="text-xl">Generate innovative marketing ideas for your product</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <form onSubmit={generateIdeas} className="mb-8 space-y-4">
          <div>
            <label htmlFor="product" className="block mb-1 font-medium">Product or Service</label>
            <input
              id="product"
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              required
            />
          </div>
          <div>
            <label htmlFor="targetAudience" className="block mb-1 font-medium">Target Audience</label>
            <input
              id="targetAudience"
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              required
            />
          </div>
          <div>
            <label htmlFor="budget" className="block mb-1 font-medium">Budget Range</label>
            <input
              id="budget"
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#008080] text-white p-2 rounded-md hover:bg-[#006666] transition-colors disabled:bg-gray-400 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? 'Generating Ideas...' : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Generate Ideas
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {ideas.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Marketing Campaign Ideas</h2>
            <div className="space-y-6">
              {ideas.map((idea, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-[#008080]" />
                    {idea.title}
                  </h3>
                  <p className="mb-2">{idea.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-4">Marketing Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Know Your Audience</h3>
              <p>Understand your target audience's needs, preferences, and behaviors to create effective campaigns.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Multi-Channel Approach</h3>
              <p>Utilize a mix of marketing channels to reach your audience where they are most active.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Measure and Optimize</h3>
              <p>Continuously track your campaign performance and make data-driven optimizations.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">Compelling Content</h3>
              <p>Create engaging, valuable content that resonates with your audience and showcases your product benefits.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#008080] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Marketing Campaign Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
