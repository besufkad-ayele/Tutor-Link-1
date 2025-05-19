"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does the tutoring process work?",
    answer: "Our platform connects students with qualified tutors based on subject needs and availability. Parents or students can browse tutor profiles, check reviews, and book sessions. After each session, payment is automatically processed and progress is tracked through our system."
  },
  {
    question: "How are tutors verified?",
    answer: "All tutors undergo a comprehensive verification process including education credentials check, background verification, and subject knowledge assessment. Only tutors who meet our quality standards are approved to teach on the platform."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, PayPal, and bank transfers. All payments are securely processed and held in escrow until sessions are completed successfully."
  },
  {
    question: "Can I try the platform before committing?",
    answer: "Yes! We offer a free trial period where you can explore the features of our platform and even book a discounted introductory session with a tutor to experience our service firsthand."
  },
  {
    question: "What if I need to cancel a session?",
    answer: "Sessions can be canceled up to 24 hours in advance without any penalty. Cancellations made less than 24 hours before a scheduled session may incur a partial fee depending on the tutor's policy."
  },
  {
    question: "How does the AI assistant help users?",
    answer: "Our Gemini AI chat assistant provides immediate help with platform navigation, answers frequently asked questions, offers personalized learning suggestions for students, and assists tutors with teaching resources based on their specific needs."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-[#a39800] mr-3 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div 
                className={`px-6 pb-4 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;