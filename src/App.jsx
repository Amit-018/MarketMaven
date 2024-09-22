import React from 'react';
import Market from "./assets/MarketMaven.jpg"
import office from "./assets/office.png"
import { NavLink } from 'react-router-dom';

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
        <section className="bg-gradient-to-r from-[#008080] to-[#87CEEB] text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Revolutionize Your Digital Marketing</h1>
              <p className="text-xl mb-8">MarketMaven: Your all-in-one platform for SEO, content, social media, and more. Boost your online presence and drive results.</p>
             <NavLink to='/register'> <button className="px-8 py-3 bg-white text-[#008080] rounded-full text-lg font-semibold hover:bg-[#E6F3F5] transition duration-300">Start Free Trial</button> </NavLink>
            </div>
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              <img 
                src={Market} 
                alt="MarketMaven" 
                className="rounded-lg shadow-2xl w-full h-auto object-contain p-2 max-w-xs md:max-w-md lg:max-w-lg"
              />
            </div>
            </div>
        </section>

        <section id="Tools" className="py-20 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#008080]">Powerful Tools for Marketing Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                
                  <img src={tool.image} alt={tool.name} width={200} height={200} className="w-full" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#008080]">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#008080] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose MarketMaven?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">All-in-One Solution</h3>
                <p>Manage all your marketing efforts from a single, intuitive dashboard.</p>
              </div>
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                <p>Make informed decisions with our advanced analytics and reporting tools.</p>
              </div>
              <div className="bg-[#006666] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Time-Saving Automation</h3>
                <p>Streamline your workflows and focus on what matters most - growing your business.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="Pricing" className="py-20 bg-[#F0F0F0]">
        <NavLink to='/Plans'>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#008080]">Flexible Pricing for Every Business</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-[#008080]">{plan}</h3>
                  <p className="text-4xl font-bold mb-6 text-[#008080]">${(index + 1) * 49}<span className="text-lg font-normal">/mo</span></p>
                  <ul className="mb-8 space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Feature {i + 1}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-2 bg-[#008080] text-white rounded-full hover:bg-[#006666] transition duration-300">Choose Plan</button>
                </div>
              ))}
            </div>
          </div>
          </NavLink>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src={office} alt="About MarketMaven" width={550} height={10} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h2 className="text-3xl font-bold mb-6 text-[#008080]">About MarketMaven</h2>
              <p className="text-lg mb-6 text-gray-700">MarketMaven was born from a passion to simplify digital marketing. Our platform is designed to empower businesses of all sizes to achieve their marketing goals efficiently and effectively.</p>
              <p className="text-lg text-gray-700">With a focus on innovation and user experience, we strive to provide the best tools and resources to help you succeed in the digital world.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#008080] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">Have questions or want to learn more? We'd love to hear from you!</p>
            <a href="mailto:support@marketmaven.com" className="px-8 py-3 bg-white text-[#008080] rounded-full text-lg font-semibold hover:bg-[#E6F3F5] transition duration-300">Email Us</a>
          </div>
        </section>
      </main>

    </div>
  );
}
