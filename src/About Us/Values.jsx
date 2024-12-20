import React from 'react'
import values from '../images/photos/values.png'

export default function Values() {
  return (
    <div className='max-w-screen-xl pt-10 pb-10 mx-auto flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 text-black text-justify flex flex-col pt-28'> {/* Added padding for better spacing */}
        
      <p className='pb-14'>Dr. Vinay Vora has travelled 28 different Countries spreading Ayurveda and Treating patients. During his 3 Decades of practice, he focused mainly on Psychosomatic Disorders like Migraine, Stress, Anxiety and Depression. After getting wonderful results in his Clinical Practice, our Mission is to provide this clinical knowledge to the mass population of India. </p>
      
      <p className=''>We believe that Happy Mind = Happy Person = Happy Society</p>
        
      </div>

      <div className='w-full md:w-1/2 p-4 flex justify-center items-center'> {/* Center the image */}
        <img src={values} alt="values logo" className="max-w-full h-auto rounded-3xl" /> {/* Responsive image */}
      </div>
    </div>
  )
}
