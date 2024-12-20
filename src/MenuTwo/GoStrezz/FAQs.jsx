import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importing down and up icons

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which question is open

  // Sample FAQs data
  const faqs = [
    {
      question: 'Will I be addicted to GoStrezz?',
      answer: 'No, Gostrezz is an Ayurvedic natural medicine, it is non-Habitual medicine.',
    },
    {
      question: 'If I consume in the morning, will it make me drowsy?',
      answer: 'No, Gostrezz is based on the concept of Sattva therapy, it won’t give any drowsiness.',
    },
    {
      question: 'Is Gostrezz safe to consume for children?',
      answer: 'Yes, people of any age can consume Gostrezz.',
    },
    {
      question: 'Can I take Gostrezz during Pregnancy or while planning for a child?',
      answer: 'Yes, it is safe to consume, it is made using all natural ingredients and does not contain any heavy metals.',
    },
  ];

  // Toggle the FAQ item by index
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // If clicked again, close the current answer
  };

  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
      <h1 className='text-3xl text-black font-bold pb-2 text-center'>FAQs</h1>

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t-2 border-b-2 border-gray-300 py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              {/* Question */}
              <h2 className="text-xl font-bold">{faq.question}</h2>

              {/* Arrow Icon */}
              <div>
                {activeIndex === index ? (
                  <FiChevronUp className="text-2xl text-gray-600" />
                ) : (
                  <FiChevronDown className="text-2xl text-gray-600" />
                )}
              </div>
            </div>

            {/* Answer (Visible if this question is active) */}
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
