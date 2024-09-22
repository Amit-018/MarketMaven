import React from 'react';
import { NavLink } from 'react-router-dom';
import Market from "./assets/MarketMaven.jpg"
import office from "./assets/office.png"

const tools = [
  { name: "SEO Optimizer", description: "Boost your search rankings", image: "https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp" },
  { name: "Content Marketing", description: "Create engaging content", image: "https://www.the-pixel.com/wp-content/uploads/2021/03/content-marketing-strategy-cycle.png" },
  { name: "Social-Media Management", description: "Streamline your social presence", image: "https://5.imimg.com/data5/CK/HO/MY-15724487/social-media-marketing-500x500.png" },
  { name: "Email Marketing", description: "Reach your audience directly", image: "https://media.licdn.com/dms/image/D4D12AQFehjKMYuHAyA/article-cover_image-shrink_600_2000/0/1654617938941?e=2147483647&v=beta&t=LTUveXNaJZmmwQgr6oHYDuY6OT4-F9_x8rBwI4wzBho" },
  { name: "Pay-Per-Click", description: "Maximize ad spend ROI", image: "https://www.pjmconsult.com/wp-content/uploads/2007/02/images-pay-per-click-advertising.png" },
  { name: "Analytics & Reporting", description: "Data-driven insights", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHNx3_5vD24byb1n4h5tZoSqWyRa4wFpWQx4u04RhGE8reJwzvAZEF5APaiQ_3iGNVe0&usqp=CAU" },
  { name: "Marketing Automation", description: "Streamline your workflows", image: "https://www.singlegrain.com/wp-content/uploads/2019/11/pasted-image-0-33.png" },
  { name: "Keyword Research", description: "Find your niche", image: "https://giantmarketers.com/wp-content/uploads/2021/11/The-Best-Keyword-Research-Services-That-Rank-update.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#008080] to-[#87CEEB] text-white py-12 md:py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Revolutionize Your Digital Marketing</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8">MarketMaven: Your all-in-one platform for SEO, content, social media, and more. Boost your online presence and drive results.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to='/register' className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-white text-[#008080] rounded-full text-lg font-semibold hover:bg-[#E6F3F5] transition duration-300">Start Free Trial</button>
                </NavLink>
                <NavLink to='/login' className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#008080] transition duration-300">Log In</button>
                </NavLink>
                <NavLink to='/signup' className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-[#006666] text-white rounded-full text-lg font-semibold hover:bg-[#005555] transition duration-300">Sign Up</button>
                </NavLink>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img src={Market} alt="MarketMaven" className="w-full max-w-md mx-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section id="Tools" className="py-12 md:py-20 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#008080]">Powerful Tools for Marketing Success</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#008080]">{tool.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[#008080] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Why Choose MarketMaven?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">All-in-One Solution</h3>
                <p className="text-sm md:text-base">Manage all your marketing efforts from a single, intuitive dashboard.</p>
              </div>
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Data-Driven Insights</h3>
                <p className="text-sm md:text-base">Make informed decisions with our advanced analytics and reporting tools.</p>
              </div>
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Time-Saving Automation</h3>
                <p className="text-sm md:text-base">Streamline your workflows and focus on what matters most - growing your business.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="Pricing" className="py-12 md:py-20 bg-[#F0F0F0]">
          <NavLink to='/Plans'>
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#008080]">Flexible Pricing for Every Business</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#008080]">{plan}</h3>
                    <p className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#008080]">${(index + 1) * 49}<span className="text-base md:text-lg font-normal">/mo</span></p>
                    <ul className="mb-6 md:mb-8 space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <li key={i} className="flex items-center text-sm md:text-base">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          Feature {i + 1}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full px-4 py-2 bg-[#008080] text-white rounded-full hover:bg-[#006666] transition duration-300 text-sm md:text-base">Choose Plan</button>
                  </div>
                ))}
              </div>
            </div>
          </NavLink>
        </section>

        <section id="about" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={office} alt="About MarketMaven" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#008080]">About MarketMaven</h2>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">MarketMaven was born from a passion to simplify digital marketing. Our platform is designed to empower businesses of all sizes to achieve their marketing goals efficiently and effectively.</p>
              <p className="text-base md:text-lg text-gray-700">With a focus on innovation and user experience, we strive to provide the best tools and resources to help you succeed in the digital world.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 bg-[#008080] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get in Touch</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8">Have questions or want to learn more? We'd love to hear from you!</p>
            <a href="mailto:support@marketmaven.com" className="inline-block px-6 md:px-8 py-3 bg-white text-[#008080] rounded-full text-base md:text-lg font-semibold hover:bg-[#E6F3F5] transition duration-300">Email Us</a>
          </div>
        </section>
      </main>
    </div>
  );
}