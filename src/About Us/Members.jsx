import React from 'react'
import one from '../images/photos/one.png'
import two from '../images/photos/two.png'
import three from '../images/photos/three.png'
import four from '../images/photos/four.png'
import five from '../images/photos/five.png'


export default function Members() {
  return (
    <div className='max-w-screen-xl mx-auto pb-10'>
      <div className='w-full flex-row md:flex-col'>
        <h2 className='text-black text-3xl font-bold text-center mb-10'>Meet Our Executive Members</h2>
            <p className='text-black text-xl text-center mb-10 px-4'>People from different field and different prospective about human health came together to make ayurveda more validated & accepted.</p>
      </div>

      <div className='w-full flex flex-col items-center md:flex-row md:space-x-4 pb-6'>
  <div className='flex flex-col items-center w-full md:w-1/5 pb-6'>
    <img src={one} alt="one" className="w-52 h-52 rounded-full" />
    <p className='text-black text-xl text-center mt-2'>
      Dr.Vinay Vora
    </p>
    <p className='text-gray-500 text-sm text-center'>
      Formulator
    </p>
  </div>
  <div className='flex flex-col items-center w-full md:w-1/5 pb-6'>
    <img src={two} alt="two" className="w-52 h-52 rounded-full" />
    <p className='text-black text-xl text-center mt-2'>
      Dr.Jinal Vora
    </p>
    <p className='text-gray-500 text-sm text-center'>
      Co-director
    </p>
  </div>
  <div className='flex flex-col items-center w-full md:w-1/5 pb-6'>
    <img src={three} alt="three" className="w-52 h-52 rounded-full" />
    <p className='text-black text-xl text-center mt-2'>
      Mr.Agam Shah        
    </p>
    <p className='text-gray-500 text-sm text-center'>
      Co-director
    </p>
  </div>
  <div className='flex flex-col items-center w-full md:w-1/5 pb-6'>
    <img src={four} alt="four" className="w-52 h-52 rounded-full" />
    <p className='text-black text-xl text-center mt-2'>
      Dr.Johan Lathan
    </p>
    <p className='text-gray-500 text-sm text-center'>
      Promoter
    </p>
  </div>
  <div className='flex flex-col items-center w-full md:w-1/5 pb-6'>
    <img src={five} alt="five" className="w-52 h-52 rounded-full" />
    <p className='text-black text-xl text-center mt-2'>
      Dr.Deep Ganatra
    </p>
    <p className='text-gray-500 text-sm text-center'>
      Investigator
    </p>
  </div>
</div>


    </div>
  )
}
