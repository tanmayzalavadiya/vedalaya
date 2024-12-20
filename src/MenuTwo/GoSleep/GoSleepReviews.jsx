import React, { useState } from 'react';

export default function GoSleepReviews() {
  const [isReviewing, setIsReviewing] = useState(false); // State to track if review form is open

  const toggleReview = () => {
    setIsReviewing(!isReviewing); // Toggle review state
  };

  return (
    <div className='max-w-[600px] mx-auto mb-10 px-4'> {/* Set max width to 600px and center */}
      <h1 className='text-3xl text-black font-bold pb-2 text-center'>Customer Reviews</h1>

      {/* Customer Reviews Section */}
      <div className='flex items-center justify-between py-4'>
        {/* Left Side: Rating and "Be the first to write a review" */}
        <div className='flex flex-col items-center'>
          <div className='text-2xl font-bold'>🌟 4.5 / 5</div>
          <p className='text-gray-600'>Be the first to write a review</p>
        </div>

        {/* Vertical Divider */}
        <div className='h-16 border-l-2 border-gray-300 mx-4'></div>

        {/* Right Side: Write/Cancel Review Button */}
        <div>
          <button 
            onClick={toggleReview} 
            className='bg-[#399] text-white py-2 px-8 rounded'>
            {isReviewing ? 'Cancel Review' : 'Write a Review'}
          </button>
        </div>
      </div>

      {/* Review Form */}
      <div className={`transition-all duration-700 ease-in-out transform ${isReviewing ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {isReviewing && <hr className='my-4' />}
        {isReviewing && (
          <div className='py-4'>
            <h2 className='text-xl font-bold'>Write a Review</h2>
            <div className='mt-4'>
              <label className='block'>Rating:</label>
              <div className='flex justify-center my-2'>
                {/* Stars (You can customize the stars representation) */}
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className='text-yellow-400 text-2xl'>★</span>
                ))}
              </div>
              <label className='block'>Review Title (100):</label>
              <input 
                type='text' 
                placeholder='Enter title' 
                className='border border-gray-300 rounded w-full py-2 px-3 mb-4' 
              />
              <label className='block'>Review:</label>
              <textarea 
                rows='4' 
                placeholder='Write your review here...' 
                className='border border-gray-300 rounded w-full py-2 px-3 mb-4' 
              ></textarea>
              <label className='block'>Picture/Video (optional):</label>
              <div className='border border-gray-300 rounded h-20 flex justify-center items-center mb-4'>
                <span className='text-gray-500'>📤 Upload</span>
              </div>
              <label className='block'>
                Name (displayed publicly like 
                <select className='border border-gray-300 rounded w-auto py-2 px-2 ml-2'>
                  <option>Select Name</option>
                  <option>Name 1</option>
                  <option>Name 2</option>
                  <option>Name 3</option>
                  <option>Name 4</option>
                </select>)
              </label>
              <input 
                type='text' 
                placeholder='Enter your name' 
                className='border border-gray-300 rounded w-full py-2 px-3 mb-4' 
              />
              <label className='block'>Email:</label>
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='border border-gray-300 rounded w-full py-2 px-3 mb-4' 
              />
              <p className='text-gray-600 text-sm mb-4'>
                How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies.
              </p>
              <div className='flex justify-center space-x-4'>
                <button 
                  onClick={toggleReview} 
                  className='bg-white text-[#4a80ad] border-2 border-[#4a80ad] py-2 px-4 rounded'>
                  Cancel Review
                </button>
                <button 
                  className='bg-[#4a80ad] text-white py-2 px-4 rounded'>
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
