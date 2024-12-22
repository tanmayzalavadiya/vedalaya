import React from 'react'
import vadalaya from '../images/vedalaya.png'

export default function Vedalaya() {
  return (
    <div className='max-w-screen-xl mx-auto mt-10 mb-10'>
    <div className='flex flex-col xl:flex-row'>
      {/* Left part */}
      <div className='w-full xl:w-1/2 flex items-center justify-center xl:justify-start'>
        <img src={vadalaya} alt="vedalaya logo" className="w-auto h-auto" />
      </div>
      {/* Right part */}
      <div className='w-full xl:w-1/2 flex flex-col items-center justify-between p-4 xl:items-start'>
        <p className='text-black text-lg mb-10 px-2'>VEDALAY products help in reducing Devata (Rajas) and Chandas (Tamas) and increases Sattva. In our products, the Sattva gunas are increased by using sattva therapy in the manufacturing process.</p>
        <p className='text-black text-lg px-2'>Vedalay products are made with proper vedic chanting while manufacturing which enhances the power of mantras. The herbal contents are rich with Alkaloids. Even the ingredients we choose are highly potent, proper, pure and hence the dosage is just one tablet daily.</p>
      </div>
    </div>
  </div>
  
  )
}
