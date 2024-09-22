import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Plans = [
  {
    name: 'Starter',
    price: 49,
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Management',
      'Basic Analytics',
      'Email Support',
    ],
    notIncluded: [
      'Advanced Analytics',
      'Marketing Automation',
      'Dedicated Account Manager',
      'Custom Integrations',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      'Everything in Starter',
      'Advanced Analytics',
      'Marketing Automation',
      'Priority Email Support',
      'Monthly Strategy Call',
    ],
    notIncluded: [
      'Dedicated Account Manager',
      'Custom Integrations',
      'White-label Reports',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Custom Integrations',
      'White-label Reports',
      '24/7 Phone Support',
    ],
    notIncluded: [],
  },
];

export default function ChoosePlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F0F0] to-white">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#008080]">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {Plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 ${
                selectedPlan === index ? 'ring-4 ring-[#008080]' : ''
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#008080]">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6 text-[#008080]">
                ${plan.price}<span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <FaTimes className="w-5 h-5 text-red-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(index)}
                className={`w-full px-4 py-2 rounded-full transition duration-300 ${
                  selectedPlan === index
                    ? 'bg-[#006666] text-white'
                    : 'bg-[#008080] text-white hover:bg-[#006666]'
                }`}
              >
                {selectedPlan === index ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
        {selectedPlan !== null && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#008080]">
              You've selected the {Plans[selectedPlan].name} plan
            </h2>
            <button className="px-8 py-3 bg-[#008080] text-white rounded-full text-lg font-semibold hover:bg-[#006666] transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
        <div className="mt-16 bg-[#E6F3F5] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#008080]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No, all our plans are billed monthly and you can cancel at any time without penalty.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes, we offer a 14-day free trial for all our plans. No credit card required.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards and PayPal.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-[#008080]">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
