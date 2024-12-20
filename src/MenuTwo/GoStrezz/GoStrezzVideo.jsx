import React from 'react';

export default function GoStrezzVideo() {
  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
      <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>Doctor's advice</h1>
        <p className='text-black text-xl pb-4'>
          Dr. Vinay Vora explains how we can reduce stress problems. Tap to play video.
        </p>
      </div>

      <div className='flex space-x-4'> {/* Add space between the videos */}
        {/* Left Video */}
        <div className='flex-1'>
          <iframe 
            className='w-full h-96 rounded-3xl'  // Adjust the height as needed
            src='https://www.youtube.com/embed/video_id1' // Replace with your video URL
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Video 1'
          ></iframe>
        </div>

        {/* Right Video */}
        <div className='flex-1'>
          <iframe 
            className='w-full h-96 rounded-3xl'  // Adjust the height as needed
            src='https://www.youtube.com/embed/video_id2' // Replace with your video URL
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Video 2'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
