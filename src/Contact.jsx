import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const faqItems = [
    {
      question: "What services does MarketMaven offer?",
      answer: "MarketMaven offers a comprehensive suite of digital marketing tools including SEO optimization, social media management, email marketing, and analytics reporting."
    },
    {
      question: "How can I get started with MarketMaven?",
      answer: "You can get started by signing up for our free trial on our website. This will give you full access to our platform for 14 days, allowing you to explore our features and see how they can benefit your business."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email and live chat. Our dedicated support team is always ready to assist you with any questions or issues you may have."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Absolutely. You can cancel your subscription at any time without any cancellation fees. Your access will continue until the end of your current billing period."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#F0F0F0] to-white min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-bold text-[#008080] text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-wrap -mx-4">
          <motion.div 
            className="w-full md:w-1/2 px-4 mb-8"
            {...fadeIn}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-[#008080] mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#008080]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#008080]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#008080]"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#008080] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#006666] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 px-4 mb-8"
            {...fadeIn}
          >
            <div className="bg-gradient-to-r from-[#008080] to-[#006666] text-white rounded-lg shadow-lg p-8 h-full">
              <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@marketmaven.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>123 Marketing Street, Digital City, 12345</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="w-full mt-8"
          {...fadeIn}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-[#008080] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-700">{item.question}</span>
                    <FaChevronDown
                      className={`text-[#008080] transition-transform duration-300 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-600"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactUs;
