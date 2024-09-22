import React from 'react';
import { motion } from 'framer-motion';
import teamImage from './assets/office.png';
import founderImage from './assets/office2.png';
//import officeImage from './assets/office.jpg';
import { FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-[#F0F0F0] to-white min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-bold text-[#008080] text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About MarketMaven
        </motion.h1>

        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12 overflow-hidden"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img src={teamImage} alt="MarketMaven Team" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold text-[#008080] mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At MarketMaven, our mission is to empower businesses of all sizes with cutting-edge digital marketing tools and strategies. We believe that every company deserves the opportunity to thrive in the digital landscape, regardless of their size or budget.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our all-in-one platform is designed to simplify and streamline your marketing efforts, allowing you to focus on what you do best - running your business.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="bg-gradient-to-r from-[#008080] to-[#006666] text-white rounded-lg shadow-lg p-8 mb-12"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaLightbulb, title: "Innovation", description: "We constantly push the boundaries of what's possible in digital marketing." },
              { icon: FaChartLine, title: "Simplicity", description: "We believe in making complex marketing tasks simple and accessible." },
              { icon: FaUsers, title: "Customer Success", description: "Your success is our success. We're committed to helping you achieve your goals." }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white bg-opacity-10 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
              <img src={founderImage} alt="MarketMaven Founder" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#008080] mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                MarketMaven was founded in 2018 by Jane Doe, a veteran digital marketer with over 15 years of experience. Jane recognized the need for a comprehensive, user-friendly marketing platform that could cater to businesses of all sizes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What started as a small startup has now grown into a thriving company, serving thousands of businesses worldwide. Our team of passionate marketers, developers, and customer success specialists work tirelessly to ensure that MarketMaven remains at the forefront of digital marketing innovation.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-semibold text-[#008080] mb-8 text-center">Why Choose MarketMaven?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "All-in-One Solution", description: "From SEO to social media management, we offer all the tools you need under one roof." },
              { title: "User-Friendly Interface", description: "Our intuitive platform is designed for marketers of all skill levels." },
              { title: "Data-Driven Insights", description: "Make informed decisions with our advanced analytics and reporting tools." },
              { title: "Dedicated Support", description: "Our customer success team is always ready to help you achieve your marketing goals." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-[#008080] mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12 text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-semibold text-[#008080] mb-4">Join the MarketMaven Family</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Join thousands of satisfied customers and experience the MarketMaven difference today.
          </p>
          <motion.button 
            className="px-8 py-3 bg-[#008080] text-white rounded-full text-lg font-semibold hover:bg-[#006666] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutUs;
